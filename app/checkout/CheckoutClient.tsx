"use client";

import { useState } from "react";

/* CLAT Possible checkout (R11). Real Razorpay flow, mirroring the proven
   sreshtha pattern: POST /api/razorpay/create-order -> open Razorpay checkout.js
   -> POST /api/razorpay/verify (HMAC) -> redirect to /confirmation. The server
   owns the ₹49 amount; this never trusts a client-set price. */

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

type Form = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  grade: string;
  town: string;
};

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

export default function CheckoutClient() {
  const [form, setForm] = useState<Form>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    grade: "",
    town: "",
  });
  const [loading, setLoading] = useState(false);
  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    setLoading(true);
    try {
      const orderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, country_code: "+91" }),
      });
      const order = await orderRes.json();
      if (!orderRes.ok) throw new Error(order.error || "Could not start payment.");

      const ok = await loadRazorpay();
      if (!ok || !window.Razorpay) throw new Error("Could not load Razorpay. Please retry.");

      const rzp = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "CLAT Possible",
        description: "The 3-Day CLAT Rank Roadmap",
        order_id: order.orderId,
        prefill: {
          name: `${form.first_name} ${form.last_name}`.trim(),
          email: form.email,
          contact: `+91${form.phone}`,
        },
        notes: { grade: form.grade, town: form.town },
        theme: { color: "#087EFF" },
        handler: async (resp: Record<string, string>) => {
          try {
            const v = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(resp),
            });
            const data = await v.json();
            if (data.ok) window.location.href = "/confirmation";
            else throw new Error(data.error || "Payment could not be verified.");
          } catch (err) {
            alert(err instanceof Error ? err.message : "Verification failed.");
            setLoading(false);
          }
        },
        modal: { ondismiss: () => setLoading(false) },
      });
      rzp.open();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Something went wrong. Please retry.");
      setLoading(false);
    }
  }

  return (
    <div className="page-stage page-light">
      <div className="shell">
        <div className="co-head">
          <span className="eyebrow"><svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13z" /></svg> You&rsquo;re one step from your seat</span>
          <h1>Reserve Your Spot in the <span className="em">3-Day Roadmap</span></h1>
          <p>Add your details and lock your seat. Your private Zoom link hits your inbox the moment your <span className="price">&#8377;49</span> is confirmed.</p>
        </div>

        <form className="grid" onSubmit={handleSubmit} noValidate>
          <section className="card">
            <div className="card-head"><span className="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.6 3.1-5.5 7-5.5s7 1.9 7 5.5" /></svg></span>
              <div><h2 className="card-title">Your Details</h2><p className="card-note">We&rsquo;ll send your Zoom link to these.</p></div></div>
            <div className="row2">
              <div className="field"><label htmlFor="fn">First Name</label><input id="fn" required placeholder="Aarav" autoComplete="given-name" value={form.first_name} onChange={set("first_name")} /></div>
              <div className="field"><label htmlFor="ln">Last Name</label><input id="ln" required placeholder="Sharma" autoComplete="family-name" value={form.last_name} onChange={set("last_name")} /></div>
            </div>
            <div className="field"><label htmlFor="em">Email <span className="hint">Zoom link comes here</span></label><input id="em" type="email" required placeholder="aarav@example.com" autoComplete="email" value={form.email} onChange={set("email")} /></div>
            <div className="field"><label htmlFor="ph">Phone <span className="hint">For WhatsApp reminders</span></label>
              <div className="phone"><span className="dial">+91</span><input id="ph" type="tel" required placeholder="98765 43210" autoComplete="tel-national" value={form.phone} onChange={set("phone")} /></div></div>
            <div className="field"><label htmlFor="gr">Class / Status</label><input id="gr" required placeholder="Class 11 / 12 / Dropper / First-year" value={form.grade} onChange={set("grade")} /></div>
            <div className="field"><label htmlFor="ct">Town / City</label><input id="ct" required placeholder="Lucknow" value={form.town} onChange={set("town")} /></div>
            <div className="badges">
              <span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="4.5" y="10.5" width="15" height="10" rx="2" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" strokeLinecap="round" /></svg> SSL Secure</span>
              <span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.6l8 3v5.4c0 4.4-3 7.6-8 8.8-5-1.2-8-4.4-8-8.8V5.6z" /><path d="M9 12l2 2 4-4.2" /></svg> Verified</span>
              <span className="badge"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13z" /></svg> Instant Link</span>
            </div>
          </section>

          <aside className="card">
            <div className="card-head"><span className="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h11l2.5 12.5H7.5z" /><path d="M5 4L4 2H2" /><circle cx="9" cy="20" r="1.3" fill="currentColor" /><circle cx="16" cy="20" r="1.3" fill="currentColor" /></svg></span>
              <div><h2 className="card-title">Order Summary</h2></div></div>
            <div className="item"><span className="item-logo">CP</span><div><p className="item-t">The 3-Day CLAT Rank Roadmap</p><p className="item-d">3 live days on Zoom (28, 29 &amp; 30 June, 11 AM IST), ranker strategies, and your Diagnostic Rank Predictor result.</p></div></div>
            <div className="line"><span>Webinar seat</span><span><span className="was">&#8377;499</span><span className="now">&#8377;49</span></span></div>
            <div className="methods"><div className="methods-l">Accepted Payment Methods</div>
              <div className="chips">
                <span className="chip chip--logo"><img src="/assets/payment/upi.svg" alt="UPI" /></span>
                <span className="chip chip--logo"><img src="/assets/payment/visa.svg" alt="Visa" /></span>
                <span className="chip chip--logo"><img src="/assets/payment/mastercard.svg" alt="Mastercard" /></span>
                <span className="chip chip--logo"><img src="/assets/payment/rupay.svg" alt="RuPay" /></span>
                <span className="chip chip--nb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 4l9 5.5" /><path d="M5 9.5v9M19 9.5v9M9 9.5v9M15 9.5v9M3 20.5h18" /></svg> Net Banking</span>
              </div>
            </div>
            <div className="total"><span className="total-l">Total Today</span><span><span className="total-was">&#8377;499</span><span className="total-now">&#8377;49</span></span></div>
            <button className="cta pay" type="submit" disabled={loading}><span>{loading ? "Processing…" : "Pay ₹49 and Reserve My Seat"}</span>
              <span className="cta-arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5.5L15.5 10 11 14.5" /></svg></span></button>
            <p className="refund"><span className="seal-i"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10.5l4 4 8-9" /></svg></span>
              100% money-back if you do not walk away with your rank and your plan. No questions asked.</p>
          </aside>
        </form>
      </div>
    </div>
  );
}
