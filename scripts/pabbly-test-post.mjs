// One-shot: POST a sample lead row to the Pabbly webhook so you can map the
// columns in the Google Sheet, then delete the test row. Sends the exact field
// shape the live /api/razorpay/verify route sends on a real purchase.
//
// Reads PABBLY_WEBHOOK_URL from .env.local. Run:  node scripts/pabbly-test-post.mjs

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createHash } from "node:crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "..", ".env.local");

function readEnv(key) {
  try {
    const txt = readFileSync(envPath, "utf8");
    for (const line of txt.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/);
      if (m && m[1] === key) return m[2].trim().replace(/^["']|["']$/g, "");
    }
  } catch (e) {
    console.error("Could not read .env.local:", e.message);
  }
  return "";
}

const url = readEnv("PABBLY_WEBHOOK_URL");
if (!url) {
  console.error("PABBLY_WEBHOOK_URL not found in .env.local");
  process.exit(1);
}

const sha256 = (v) => createHash("sha256").update(v).digest("hex");
const testEmail = "test.lead@example.com";
const now = new Date().toISOString();

// 23 universal fields (A–W) + 2 extras (grade, all_params -> AK, AL).
const payload = {
  lead_id: "pay_TEST0000000001",
  created_at: now,
  first_name: "Test",
  last_name: "Lead",
  email: testEmail,
  phone: "+919876543210",
  city: "Lucknow",
  country_code: "IN",
  fbc: "fb.1.1700000000000.IwAR0testfbcvalue",
  fbp: "fb.1.1700000000000.1234567890",
  client_ip_address: "203.0.113.10",
  client_user_agent: "Mozilla/5.0 (TEST) pabbly-mapping-row",
  external_id: sha256(testEmail),
  event_source_url: "https://REPLACE_WITH_PRODUCTION_DOMAIN/checkout",
  amount: 49,
  is_test: "true",
  purchase_event_id: "pay_TEST0000000001",
  utm_source: "facebook",
  utm_medium: "paid",
  utm_campaign: "clat_webinar_jun2026",
  utm_content: "ad_variant_a",
  utm_term: "clat_coaching",
  fbclid: "IwAR0testclickid",
  // --- extras: map to columns AFTER AJ ---
  grade: "Class 12",
  all_params: JSON.stringify({
    utm_source: "facebook",
    utm_medium: "paid",
    utm_campaign: "clat_webinar_jun2026",
    utm_content: "ad_variant_a",
    utm_term: "clat_coaching",
    fbclid: "IwAR0testclickid",
    gclid: "",
  }),
};

const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

console.log("POST", url.slice(0, 60) + "...");
console.log("HTTP", res.status, res.statusText);
console.log("Response:", await res.text());
console.log("\nFields sent (" + Object.keys(payload).length + "):");
console.log(Object.keys(payload).join(", "));
