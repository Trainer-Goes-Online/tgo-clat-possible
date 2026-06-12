import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

// Razorpay SDK uses Node crypto, so run this on the Node runtime, not Edge.
export const runtime = "nodejs";

type Body = {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  country_code?: string;
  grade?: string; // class / status
  town?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Body;

    const required = ["first_name", "last_name", "email", "phone", "town"] as const;
    for (const field of required) {
      if (!body[field] || typeof body[field] !== "string") {
        return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
      }
    }

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    const amount = parseInt(process.env.RAZORPAY_AMOUNT_PAISE || "4900", 10);
    const currency = process.env.RAZORPAY_CURRENCY || "INR";

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: "Razorpay keys not configured on the server." },
        { status: 500 }
      );
    }

    const rzp = new Razorpay({ key_id: keyId, key_secret: keySecret });

    const order = await rzp.orders.create({
      amount,
      currency,
      receipt: `clat_${Date.now()}`,
      notes: {
        first_name: body.first_name!,
        last_name: body.last_name!,
        email: body.email!,
        phone: `${body.country_code || "+91"} ${body.phone}`,
        grade: body.grade || "",
        town: body.town!,
        product: "The 3-Day CLAT Rank Roadmap (webinar seat)",
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Order creation failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
