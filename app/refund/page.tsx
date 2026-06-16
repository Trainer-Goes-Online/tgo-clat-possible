import type { Metadata } from "next";
import LegalShell, { Sec } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Refund Policy · CLAT Possible",
  description:
    "A simple, fair money-back guarantee for The 3-Day CLAT Rank Roadmap.",
};

export default function RefundPage() {
  return (
    <LegalShell
      title="Refund Policy"
      intro="A simple, fair guarantee for students who show up and complete the masterclass as intended."
      updated="16 June 2026"
    >
      <Sec n="01" title="Our money-back guarantee">
        <p>
          We stand behind The 3-Day CLAT Rank Roadmap. If you attend all three
          live days, take the Day 3 Diagnostic Rank Predictor, and still do not
          walk away with your projected CLAT rank and a clear plan, you are
          eligible for a <strong>full refund</strong> of your fee — no questions
          asked.
        </p>
      </Sec>

      <Sec n="02" title="Eligibility for a refund">
        <p>To qualify for a refund under our guarantee, you must:</p>
        <ul>
          <li>Attend the live sessions and complete the full 3-day Program as instructed.</li>
          <li>Submit your refund request within 7 days of Day 3 (the final session).</li>
          <li>Use the same name, email, and payment details provided at the time of purchase.</li>
        </ul>
        <p>
          The guarantee is designed to protect students who genuinely show up and
          do the work.
        </p>
      </Sec>

      <Sec n="03" title="What is not eligible">
        <p>
          Because this is a live, structured experience, the following are not
          eligible for a refund:
        </p>
        <ul>
          <li>Missed live sessions where the Program was not completed as instructed.</li>
          <li>Requests made after the 7-day window following Day 3.</li>
          <li>Requests based solely on a change of mind after the Program has been delivered.</li>
        </ul>
      </Sec>

      <Sec n="04" title="How to request a refund">
        <p>
          Email{" "}
          <a href="mailto:praveen.dwivedi@clatpossible.com">praveen.dwivedi@clatpossible.com</a>{" "}
          from your registered email address with your name and Razorpay payment
          ID, and a short note. We may ask a couple of quick questions to confirm
          your eligibility under the guarantee.
        </p>
      </Sec>

      <Sec n="05" title="How refunds are processed">
        <p>
          Approved refunds are returned to your original payment method through
          Razorpay, typically within 5&ndash;7 business days of approval. The
          exact timeline may vary depending on your bank or card issuer.
        </p>
      </Sec>

      <Sec n="06" title="Changes to this policy">
        <p>
          We may update this policy from time to time. The latest version will
          always be posted on this page.
        </p>
      </Sec>

      <Sec n="07" title="Contact us">
        <p>
          Questions about a refund? Email us at{" "}
          <a href="mailto:praveen.dwivedi@clatpossible.com">praveen.dwivedi@clatpossible.com</a>.
        </p>
      </Sec>
    </LegalShell>
  );
}
