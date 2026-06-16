import type { Metadata } from "next";
import LegalShell, { Sec } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms & Conditions · CLAT Possible",
  description:
    "The terms governing your use of this website and enrolment in The 3-Day CLAT Rank Roadmap.",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      intro="Please read these terms carefully before using this website or enrolling in The 3-Day CLAT Rank Roadmap."
      updated="16 June 2026"
    >
      <Sec n="01" title="Acceptance of terms">
        <p>
          These Terms &amp; Conditions govern your use of this website and your
          enrolment in The 3-Day CLAT Rank Roadmap (the &ldquo;Program&rdquo;)
          offered by CLAT Possible. By accessing this site or purchasing the
          Program, you agree to be bound by these terms. If you do not agree,
          please do not use the site or enrol.
        </p>
      </Sec>

      <Sec n="02" title="The Program">
        <p>
          The Program is a three-day, live educational masterclass delivered
          online via Zoom, supported by a private WhatsApp community for links,
          reminders, and instructions. It includes live teaching, ranker
          strategy sessions, and a Diagnostic Rank Predictor exercise. The
          current dates, timings, and content are shown on the registration page
          and may be adjusted at our discretion to improve the experience.
        </p>
      </Sec>

      <Sec n="03" title="Eligibility">
        <p>
          The Program is intended for CLAT aspirants, including students in Class
          11 and 12, droppers, and reattempters. If you are under 18, you may
          enrol only with the involvement and consent of a parent or legal
          guardian, who accepts these terms on your behalf. By enrolling, you
          confirm that the information you provide is accurate and that you are
          permitted to enter into this agreement.
        </p>
      </Sec>

      <Sec n="04" title="Not legal or admissions advice">
        <p>
          All content, teaching, and tools are provided for educational and
          informational purposes only. Nothing in the Program constitutes legal
          advice, an admission guarantee, or a promise of any specific CLAT rank,
          score, or seat at any National Law University.
        </p>
      </Sec>

      <Sec n="05" title="Results disclaimer">
        <p>
          The Diagnostic Rank Predictor provides an <strong>indicative</strong>{" "}
          projection based on your performance during the Program. Actual CLAT
          results depend on many factors outside our control, including your own
          effort, consistency, and preparation. We make no guarantee of any
          particular outcome, and individual results vary.
        </p>
      </Sec>

      <Sec n="06" title="Payment and pricing">
        <p>
          The Program fee is displayed at checkout and processed securely through
          our payment partner, Razorpay. Prices may change from time to time; the
          amount payable is the amount shown at the time of your purchase, and the
          final amount charged is determined by our server. We do not store your
          full card or banking details.
        </p>
      </Sec>

      <Sec n="07" title="Refunds">
        <p>
          Refunds are governed by our <a href="/refund">Refund Policy</a>. Please
          review it before purchasing.
        </p>
      </Sec>

      <Sec n="08" title="Participant conduct">
        <p>
          Your access to the sessions, materials, and the Diagnostic Rank
          Predictor is personal to you. You agree not to record, reproduce,
          redistribute, or share access — including Zoom links and replays —
          without our prior written permission.
        </p>
      </Sec>

      <Sec n="09" title="Intellectual property">
        <p>
          All content, teaching material, branding, and the Diagnostic Rank
          Predictor are the intellectual property of CLAT Possible. Any
          duplication, reproduction, or distribution without written permission
          is strictly prohibited.
        </p>
      </Sec>

      <Sec n="10" title="Third-party services">
        <p>
          The Program relies on third-party services, including Zoom (delivery),
          Razorpay (payments), WhatsApp (communication), and Meta (advertising and
          analytics). Your use of those services is also subject to their
          respective terms and policies, and we are not responsible for their
          availability or conduct.
        </p>
      </Sec>

      <Sec n="11" title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, CLAT Possible shall not be
          liable for any indirect, incidental, or consequential loss arising from
          your use of this website or the Program. Our total liability to you is
          limited to the fee you actually paid for the Program.
        </p>
      </Sec>

      <Sec n="12" title="Governing law">
        <p>
          These terms are governed by the laws of India. Any disputes arising out
          of or in connection with them are subject to the exclusive jurisdiction
          of the courts of Lucknow, Uttar Pradesh.
        </p>
      </Sec>

      <Sec n="13" title="Changes to these terms">
        <p>
          We may update these terms from time to time. The latest version will
          always be posted on this page, and your continued use of the website or
          the Program constitutes acceptance of the updated terms.
        </p>
      </Sec>

      <Sec n="14" title="Contact us">
        <p>
          Questions about these terms? Email us at{" "}
          <a href="mailto:praveen.dwivedi@clatpossible.com">praveen.dwivedi@clatpossible.com</a>.
        </p>
      </Sec>
    </LegalShell>
  );
}
