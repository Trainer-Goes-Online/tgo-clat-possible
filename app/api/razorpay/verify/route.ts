import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

export const runtime = "nodejs";

type Body = {
  razorpay_order_id?: string;
  razorpay_payment_id?: string;
  razorpay_signature?: string;
};

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

    // Authentic payment. Hook CRM / WhatsApp / Zoom-invite delivery in here.
    return NextResponse.json({ ok: true, paymentId: razorpay_payment_id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Verification error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
