import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import Razorpay from "razorpay";
import { sendMetaPurchaseEvents } from "@/lib/meta-capi";
import { postToPabbly } from "@/lib/pabbly";
import { CHECKOUT_CONFIG } from "@/lib/checkout-config";

export const runtime = "nodejs";

type Customer = {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  dial_code?: string;
  country_code?: string; // 2-letter ISO
  city?: string;
  grade?: string;
};

type Body = {
  razorpay_order_id?: string;
  razorpay_payment_id?: string;
  razorpay_signature?: string;
  customer?: Customer;
  params?: Record<string, string>;
  event_source_url?: string;
};

function sha256(value: string): string {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Body;
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { ok: false, error: "Missing Razorpay payment fields" },
        { status: 400 }
      );
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return NextResponse.json(
        { ok: false, error: "Razorpay secret not configured." },
        { status: 500 }
      );
    }

    // Razorpay signs `${order_id}|${payment_id}` with HMAC-SHA256 using the secret.
    const expected = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const valid =
      expected.length === razorpay_signature.length &&
      crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(razorpay_signature));

    if (!valid) {
      return NextResponse.json(
        { ok: false, error: "Signature verification failed" },
        { status: 400 }
      );
    }

    // ---- Authentic payment. Enrich + fan out to Meta CAPI + Pabbly. ----
    const c = body.customer || {};
    const params = body.params || {};

    const dial = (c.dial_code || "+91").trim();
    const formPhoneDigits = (c.phone || "").replace(/\D/g, "");
    const formPhone = formPhoneDigits ? `${dial}${formPhoneDigits}` : "";
    const formEmail = (c.email || "").trim();
    const firstName = (c.first_name || "").trim();
    const lastName = (c.last_name || "").trim();
    const city = (c.city || "").trim();
    const countryIso = (c.country_code || "IN").trim();

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
    const isTest = keyId.startsWith("rzp_test") ? "true" : "false";

    // Authoritative amount / currency / contact, fetched LIVE from Razorpay. We
    // trust the payment's own email + contact (what actually transacted) over the
    // client-posted form values, falling back to the form if Razorpay omits them.
    let amountRupees = 0;
    let currency = process.env.RAZORPAY_CURRENCY || CHECKOUT_CONFIG.currency;
    let paymentEmail = "";
    let paymentContact = "";
    try {
      const rzp = new Razorpay({ key_id: keyId, key_secret: keySecret });
      const payment = await rzp.payments.fetch(razorpay_payment_id);
      if (payment) {
        if (payment.amount != null) amountRupees = Number(payment.amount) / 100;
        if (payment.currency) currency = String(payment.currency);
        if (payment.email) paymentEmail = String(payment.email).trim();
        if (payment.contact) paymentContact = String(payment.contact).trim();
      }
    } catch (err) {
      console.error("[verify] Razorpay payment fetch failed; falling back to env/form:", err);
    }
    if (!amountRupees) amountRupees = parseInt(process.env.RAZORPAY_AMOUNT_PAISE || "4900", 10) / 100;

    // Razorpay-authoritative identity, with form fallback.
    const email = (paymentEmail || formEmail).trim();
    const fullPhone = paymentContact || formPhone;

    let fbc = req.cookies.get("_fbc")?.value || "";
    const fbp = req.cookies.get("_fbp")?.value || "";
    // Reconstruct fbc from fbclid when the _fbc cookie is absent. Meta spec:
    // fb.<subdomainIndex>.<creationTimeMs>.<fbclid>. Lifts CAPI match quality.
    const fbclidParam = (params.fbclid || "").trim();
    if (!fbc && fbclidParam) fbc = `fb.1.${Date.now()}.${fbclidParam}`;
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "";
    const clientUserAgent = req.headers.get("user-agent") || "";

    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
    const eventSourceUrl =
      body.event_source_url || (siteUrl ? `${siteUrl}/checkout` : "");
    const externalId = email ? sha256(email.toLowerCase()) : "";

    const leadId = razorpay_payment_id; // canonical unique key + event_id base

    // ---- Meta CAPI: Purchase + sales (shared event_id = leadId) ----
    const capiTask = email
      ? sendMetaPurchaseEvents({
          paymentId: leadId,
          email,
          phone: fullPhone,
          firstName,
          lastName,
          city,
          countryCode: countryIso,
          eventSourceUrl,
          fbc: fbc || undefined,
          fbp: fbp || undefined,
          clientIp: clientIp || undefined,
          clientUserAgent: clientUserAgent || undefined,
          valueRupees: amountRupees,
          currency,
        })
      : Promise.resolve({ skipped: true } as const);

    // ---- Pabbly: one enriched row per lead (23 fields A–W + 2 extras) ----
    const pabblyPayload = {
      lead_id: leadId,
      created_at: new Date().toISOString(),
      first_name: firstName,
      last_name: lastName,
      email,
      phone: fullPhone,
      city,
      country_code: countryIso,
      fbc,
      fbp,
      client_ip_address: clientIp,
      client_user_agent: clientUserAgent,
      external_id: externalId,
      event_source_url: eventSourceUrl,
      amount: amountRupees,
      is_test: isTest,
      purchase_event_id: leadId,
      utm_source: params.utm_source || "",
      utm_medium: params.utm_medium || "",
      utm_campaign: params.utm_campaign || "",
      utm_content: params.utm_content || "",
      utm_term: params.utm_term || "",
      fbclid: params.fbclid || "",
      // ---- extras: map to columns AFTER AJ in the Sheet ----
      grade: (c.grade || "").trim(),
      all_params: JSON.stringify(params),
    };
    const pabblyTask = postToPabbly(pabblyPayload);

    const [capiRes, pabblyRes] = await Promise.allSettled([capiTask, pabblyTask]);
    if (capiRes.status === "rejected")
      console.error("[verify] Meta CAPI error:", capiRes.reason);
    if (pabblyRes.status === "rejected")
      console.error("[verify] Pabbly error:", pabblyRes.reason);

    // Always confirm to the buyer — downstream failures are logged, not fatal.
    return NextResponse.json({ ok: true, paymentId: razorpay_payment_id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Verification error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
