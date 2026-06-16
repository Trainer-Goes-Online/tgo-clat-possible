/* Post-payment confirmation (R12). Static server component; the success seal
   is pure CSS. The calendar tool / email-WhatsApp delivery is wired server-side
   in /api/razorpay/verify. */
export default function ConfirmationPage() {
  return (
    <div className="page-stage page-light">
      <div className="wrap">
        <span className="eyebrow">Payment confirmed</span>
        <div className="seal" aria-hidden="true">
          <span className="seal-ring" /><span className="seal-ring b" />
          <span className="seal-disc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5l5 5 11-12" /></svg></span>
        </div>

        <h1>You&rsquo;re In. Your Seat Is <span className="em">Reserved.</span></h1>
        <p className="bridge">Your spot in the 3-Day CLAT Rank Roadmap is locked. Here is exactly what happens next.</p>

        <div className="dates">
          <div className="dcell"><div className="d">Day 1</div><div className="n">28 Jun</div><div className="t">11 AM IST</div></div>
          <div className="dcell"><div className="d">Day 2</div><div className="n">29 Jun</div><div className="t">11 AM IST</div></div>
          <div className="dcell"><div className="d">Day 3</div><div className="n">30 Jun</div><div className="t">11 AM IST</div></div>
        </div>
        <p className="dnote">Live on Zoom &middot; 2 hours each day &middot; miss a day, get the 24-hour replay</p>

        <div className="next">
          <div className="next-h">What happens next</div>
          <div className="nrow"><span className="nnum">01</span><p><b>Check your inbox and WhatsApp.</b> Your private Zoom link is on its way now, with reminders before each day.</p></div>
          <div className="nrow"><span className="nnum">02</span><p><b>Add the 3 sessions to your calendar</b> so Day 1 doesn&rsquo;t slip past. Foundations start on 28 June.</p></div>
          <div className="nrow"><span className="nnum">03</span><p><b>Show up ready on 28 June, 11 AM IST.</b> Bring your current level, nothing else. You leave Day 3 with your number and your plan.</p></div>
        </div>

        <div className="wa">
          <div><p className="wa-t">Join the cohort on WhatsApp</p><p className="wa-d">Reminders, your Zoom links, and the prep notes, all in one place.</p></div>
          <a className="wa-btn" href="#" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 2a8 8 0 0 1 6.6 12.5l.3.5-.7 2.5-2.6-.7-.5.3A8 8 0 1 1 12 4z" /></svg> Join now</a>
        </div>

        <div className="colophon">
          Results vary by student effort and starting level. CLAT Possible.<br />
          <a href="#">Privacy</a> &middot; <a href="#">Terms</a> &middot; <a href="/">Back to the masterclass</a>
        </div>
      </div>
    </div>
  );
}
