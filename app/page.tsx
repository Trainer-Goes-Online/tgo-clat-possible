import FunnelScripts from "./FunnelScripts";
import { WEBINAR } from "@/lib/webinar";

const CHAMPS = [
  "Air-1", "Air-2", "Air-3", "Air-4", "Air-5", "Air-5-B", "Air-6", "Air-7",
  "Air-8", "Air-9", "Air-10", "Air-11", "Air-12", "Air-13", "Air",
];
const CHAMP_ROWS = [
  CHAMPS.slice(0, 5),
  CHAMPS.slice(5, 10),
  CHAMPS.slice(10, 15),
];
const TICKER = [
  "3-Day Live CLAT Masterclass",
  WEBINAR.datesLong,
  `${WEBINAR.time} · ${WEBINAR.duration}`,
  "₹49 until the deadline",
  "Live on Zoom · Replay if you miss a day",
  "Find the rank you can actually score",
  "100% money-back guarantee",
];

export default function Page() {
  return (
    <>
      <div className="topbar" aria-hidden="true">
        <div className="topbar-track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span className="topbar-item" key={i}><span className="topbar-dot"></span>{t}</span>
          ))}
        </div>
      </div>

      <header className="hero">
        <span className="stage-grain" aria-hidden="true"></span>
        <div className="inner hero-inner" style={{position:"relative"}}>
          <span className="eyebrow hero-eyebrow reveal">A 3-Day Live CLAT Masterclass for Class 11 &amp; 12 Students and Droppers &middot; CLAT 2027 &amp; 2028</span>

          <h1 className="hero-h1 reveal">In Just 3 Days, Discover the Exact <span className="uline uline--green"><span className="em em--green">CLAT Rank</span><svg className="uline-svg" viewBox="0 0 300 16" preserveAspectRatio="none" aria-hidden="true"><path d="M2,11 Q75,2 150,9 Q225,16 298,6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg></span> You Can Score, and the Clear Plan to Reach Your Dream NLU</h1>

          <p className="hero-sub reveal">Even if you have never opened a CLAT book, 3 days of real strategy from the team behind some of India&rsquo;s top rankers will show you <span className="hl">the rank you are actually capable of</span>, and the exact plan to get there.</p>

          <div className="hero-cred reveal">Hosted live by <b>Dr. Surabhi Modi Sahai</b>, MD &amp; CEO, CLAT Possible <span className="hero-cred-sep">&middot;</span> she still mentors the class herself <span className="hero-cred-sep">&middot;</span> with real CLAT rankers live in the room</div>

          <div className="hcount reveal" aria-label="Price deadline countdown">
            <span className="hcount-label">Price goes back up when the countdown hits zero</span>
            <div className="hcount-units" id="countdown">
              <div className="hcount-unit"><span className="hcount-num" data-d>00</span><span className="hcount-lab">Days</span></div>
              <span className="hcount-sep">:</span>
              <div className="hcount-unit"><span className="hcount-num" data-h>00</span><span className="hcount-lab">Hrs</span></div>
              <span className="hcount-sep">:</span>
              <div className="hcount-unit"><span className="hcount-num" data-m>00</span><span className="hcount-lab">Min</span></div>
              <span className="hcount-sep">:</span>
              <div className="hcount-unit"><span className="hcount-num" data-s>00</span><span className="hcount-lab">Sec</span></div>
            </div>
          </div>

          <div className="hero-layout">
            <div className="hfig reveal">
              <img src="/hero-thumb.png" alt="CLAT Possible: NLU is Possible. 3-Day Live Workshop with Dr. Surabhi Modi Sahai" />
            </div>
            <div className="hmeta">
              <div className="hcard reveal reveal-d1">
                <span className="hcard-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/></svg></span>
                <span className="hcard-k">Dates</span>
                <span className="hcard-v">{WEBINAR.datesLong}</span>
              </div>
              <div className="hcard reveal reveal-d2">
                <span className="hcard-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5l3 2"/></svg></span>
                <span className="hcard-k">Time</span>
                <span className="hcard-v">{`${WEBINAR.time} · ${WEBINAR.duration}`}</span>
              </div>
              <div className="hcard reveal reveal-d3">
                <span className="hcard-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21c5-4.6 7-8 7-11a7 7 0 1 0-14 0c0 3 2 6.4 7 11z"/></svg></span>
                <span className="hcard-k">Where</span>
                <span className="hcard-v">Live on Zoom, anywhere in India</span>
              </div>
              <div className="hcard reveal reveal-d4">
                <span className="hcard-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c0-3.6 2.9-5.6 6.5-5.6s6.5 2 6.5 5.6"/></svg></span>
                <span className="hcard-k">For</span>
                <span className="hcard-v">Class 11, 12 &amp; droppers</span>
              </div>
            </div>
          </div>

          <div className="hcta reveal">
            <div className="hprice">
              <span className="hprice-was">&#8377;499</span>
              <span className="hprice-badge">Until the deadline</span>
              <span className="hprice-now">&#8377;49</span>
            </div>
            <a className="cta hero-cta" href="/checkout"><span>Book My Seat, &#8377;49</span>
              <span className="cta-arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5.5L15.5 10 11 14.5"/></svg></span></a>
            <div className="hcta-guar"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.6l8 3v5.4c0 4.4-3 7.6-8 8.8-5-1.2-8-4.4-8-8.8V5.6z"/><path d="M9 12l2 2 4-4.2"/></svg> 100% money-back guarantee</div>
            <p className="cta-note"><span className="pin">&#9679;</span> Instant Zoom link &middot; No prep needed &middot; Replay if you miss a day</p>
          </div>
        </div>
      </header>


      <section className="section" id="champions">
        <div className="inner-wide">
          <div className="sec-head"><span className="eyebrow">Our Champions&rsquo; Wall</span>
            <h2 className="sec-h2">Celebrating Remarkable <br className="bk"/><span className="em">CLAT Achievements</span></h2></div>
          <div className="champwall reveal">
            {CHAMP_ROWS.map((row, r) => (
              <div className="champrail" key={r}>
                <div className="champtrack" style={{ "--n": row.length } as React.CSSProperties}>
                  {[...row, ...row].map((f, i) => (
                    <div className="champ" key={i} aria-hidden={i >= row.length ? true : undefined}>
                      <img src={`/champions/${f}.webp`} alt="CLAT Possible topper" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="stats reveal">
            <div className="stat"><div className="stat-num" data-count="20000" data-suffix="+">0</div><div className="stat-lab">students trained</div></div>
            <div className="stat"><div className="stat-num" data-count="15" data-suffix="+">0</div><div className="stat-lab">years of proven<br/>CLAT results</div></div>
            <div className="stat"><div className="stat-num">AIR&nbsp;1<span style={{fontSize:".6em"}}>+</span></div><div className="stat-lab">toppers across the<br/>rank list [confirm]</div></div>
            <div className="stat"><div className="stat-num" data-count="8">0</div><div className="stat-lab">centres across India</div></div>
          </div>
          <p className="honesty">Centres in Lucknow, New Delhi, Chandigarh, Kanpur, Noida, Mumbai, Patna and Raipur. Every rank and stat locks to the latest verified CLAT result before publish. We do not publish numbers we cannot stand behind.</p>
        </div>
      </section>


      <section className="section section--soft">
        <div className="inner">
          <div className="sec-head"><span className="eyebrow">The honest starting point</span>
            <h2 className="sec-h2">Do You Dream of a Seat <br className="bk"/>in a Top NLU, <span className="em">But&hellip;</span></h2></div>
          <div className="pains reveal">
            <div className="pain"><span className="pain-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.3 9.3a2.7 2.7 0 0 1 4.7 1.7c0 1.8-2.6 2.1-2.6 3.5"/><path d="M12 17.4h.01"/></svg></span><p>Confused by the syllabus and exam pattern, and not sure where to even begin?</p></div>
            <div className="pain"><span className="pain-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.6C10.3 5.4 7.6 4.9 4 5.1v12.6c3.6-.2 6.3.3 8 1.5 1.7-1.2 4.4-1.7 8-1.5V5.1c-3.6-.2-6.3.3-8 1.5z"/><path d="M12 6.6V19.2"/></svg></span><p>Worried about balancing school or board studies with serious CLAT prep?</p></div>
            <div className="pain"><span className="pain-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8.4" r="3"/><circle cx="16.6" cy="9.5" r="2.3"/><path d="M3.5 19c0-3 2.6-4.7 5.5-4.7 1.8 0 3.3.6 4.3 1.7M14.7 19c.1-2.3 1.5-3.6 3.3-3.6 1.5 0 2.8.9 3.3 2.2"/></svg></span><p>Overwhelmed by the competition, and secretly unsure if an NLU is realistic for you?</p></div>
            <div className="pain"><span className="pain-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a8 8 0 0 1 13.4-5.6L20 8"/><path d="M20 3.6V8h-4.4"/><path d="M20 13a8 8 0 0 1-13.4 5.6L4 16"/><path d="M4 20.4V16h4.4"/></svg></span><p>Grinding mock after mock while the score refuses to move, and you cannot see why?</p></div>
            <div className="pain"><span className="pain-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17l-8.5-8.5-5 5L2 7"/><path d="M16 17h6v-6"/></svg></span><p>Demotivated by low mock scores, with results day still months away?</p></div>
            <div className="pain"><span className="pain-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.7 8.3l-2.2 5.2-5.2 2.2 2.2-5.2z"/><circle cx="12" cy="12" r=".5" fill="currentColor" stroke="none"/></svg></span><p>Lost in the noise of which coaching, materials, and test series to actually trust?</p></div>
          </div>
          <p className="pain-kicker">If even one of these is you, read the next line carefully.</p>
        </div>
      </section>


      <section className="section">
        <div className="inner">
          <div className="sec-head"><span className="eyebrow">The real problem</span>
            <h2 className="sec-h2">You are asked to gamble lakhs <br className="bk"/><span className="em">before</span> you know <br className="bk"/>where you stand</h2></div>
          <div className="prose reveal">
            <p className="lede">You have decided you want a top NLU. The trouble is, the moment you start looking, you are flooded.</p>
            <p>A huge syllabus, dozens of coaching options, endless books and test series, and everyone insisting they are the right choice. And almost all of them offer you the same thing: a free demo class. One sample lecture, designed to get you to sign up for a course that costs one to two lakh rupees.</p>
            <p>So you are expected to commit that kind of money before you know the two things that actually matter: whether a top NLU is realistic for you, and what your plan should even be. That is the wrong order. You should not have to gamble lakhs just to find out where you stand.</p>
            <p className="lede">These 3 days flip it. First you learn how CLAT is actually cracked. Then, once you have that foundation, you take our Diagnostic Rank Predictor test on Day 3, so it can fairly project the rank you are capable of, and hand you a plan built around your result.</p>
          </div>
          <div className="compare reveal">
            <div className="cmp cmp--them"><div className="cmp-tag">Everyone else</div><p>A free demo class. One sample lecture, built to sell you a course that costs one to two lakh rupees, before you know if a top NLU is even realistic.</p></div>
            <div className="cmp cmp--us"><div className="cmp-tag">CLAT Possible</div><p>3 days of real teaching and ranker strategies, your own projected CLAT rank, and a plan built for you, before we ask you for anything.</p></div>
          </div>
        </div>
      </section>


      <section className="section section--soft">
        <div className="inner">
          <div className="sec-head"><span className="eyebrow">Instead, imagine this</span>
            <h2 className="sec-h2">In 3 days, you start your <br className="bk"/>journey with a <span className="em">map</span>, <br className="bk"/>not a guess</h2></div>
          <div className="imagine reveal">
            <div className="snapshot">
              <div className="snap-top">
                <span className="snap-kicker">After the 3 days</span>
                <span className="snap-status"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4 4 10-10.5"/></svg>On track</span>
              </div>
              <h3 className="snap-title">Your whole plan, on <span className="em">a single page</span>.</h3>
              <div className="snap-grid">
                <div className="snap-field"><span className="snap-k"><span className="node"></span>Roadmap</span><span className="snap-v">Your real rank today, mapped straight to your target NLU.</span></div>
                <div className="snap-field"><span className="snap-k"><span className="node"></span>Strategy</span><span className="snap-v">The exact approach toppers actually use, not guesswork.</span></div>
                <div className="snap-field"><span className="snap-k"><span className="node"></span>Confidence</span><span className="snap-v">You know your number, and exactly what moves it.</span></div>
                <div className="snap-field"><span className="snap-k"><span className="node"></span>Mocks</span><span className="snap-v">Time management cracked, scores finally climbing.</span></div>
                <div className="snap-field snap-field--full"><span className="snap-k"><span className="node"></span>Family</span><span className="snap-v">Your parents proud and fully on board, because they saw the plan before paying a single rupee.</span></div>
              </div>
              <div className="snap-foot"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.6l8 3v5.4c0 4.4-3 7.6-8 8.8-5-1.2-8-4.4-8-8.8V5.6z"/><path d="M9 12l2 2 4-4.2"/></svg>Built with you, live, across the 3 days. Yours before you commit a rupee.</div>
            </div>
          </div>
          <div style={{textAlign:"center",marginTop:"clamp(28px,3.4vw,40px)"}}>
            <a className="cta" href="/checkout"><span>Book My Seat, &#8377;49</span>
              <span className="cta-arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5.5L15.5 10 11 14.5"/></svg></span></a>
          </div>
        </div>
      </section>


      <section className="section stage" id="roadmap">
        <span className="stage-grain" aria-hidden="true"></span>
        <div className="inner" style={{position:"relative"}}>
          <div className="sec-head"><span className="eyebrow">{`Live on Zoom · ${WEBINAR.time} · ${WEBINAR.durationLong}`}</span>
            <h2 className="sec-h2">Exactly What Happens Across the <span className="em">3 Days</span></h2></div>
          <div className="journey" id="journey">
            <div className="jrail" aria-hidden="true"></div>
            <div className="jfill" aria-hidden="true"></div>

            <div className="jstep"><span className="jnode" aria-hidden="true"></span>
              <div className="jday">{`Day 1 · ${WEBINAR.day1}`}</div>
              <h3 className="jtitle">The foundations</h3>
              <p className="jbody">How CLAT actually works, the real scoring map, and how top rankers approach the paper, taught live by the CLAT Possible team. By the end of Day 1 you finally understand <span className="hl">what cracking CLAT really takes</span>.</p>
            </div>

            <div className="jstep"><span className="jnode" aria-hidden="true"></span>
              <div className="jday">{`Day 2 · ${WEBINAR.day2}`}</div>
              <h3 className="jtitle">The winning strategies</h3>
              <p className="jbody">Section by section (legal reasoning, English, GK and current affairs, logical reasoning, quant), the exact strategies that produce ranks, plus real CLAT rankers live, sharing what they did differently.</p>
              <span className="jsub"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M16 11a3 3 0 1 0-3-3M3 20c0-3 2.7-4.5 6-4.5M14 20c0-2.4 1.8-3.8 4-4 2.2.2 4 1.6 4 4"/></svg> Parents join on Day 2, because the plan only holds when the whole family is behind it</span>
            </div>

            <div className="jstep jstep--final"><span className="jnode" aria-hidden="true"></span>
              <div className="jday">{`Day 3 · ${WEBINAR.day3}`}</div>
              <h3 className="jtitle">Your rank, and your plan</h3>
              <p className="jbody">Now that you have the foundations and the strategies, you take the <span className="hl">Diagnostic Rank Predictor</span> test. You walk out with your projected CLAT rank, accurate even if you started from zero this week, and a customised roadmap to your target NLU. You came in unsure. You leave with a number and a plan.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="inner">
          <div className="sec-head"><span className="eyebrow">What you walk away with</span>
            <h2 className="sec-h2">You leave with a <span className="em">number</span>, and a plan to move it</h2></div>
          <div className="kit reveal">
            <div className="kit-tile kit-tile--lit kit-tile--rank">
              <span className="kt-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.6"/><circle cx="12" cy="12" r=".6" fill="currentColor" stroke="none"/></svg></span>
              <span className="kt-k"><span className="node"></span>Diagnostic Rank Predictor</span>
              <div className="kit-rank-num"><span className="air">AIR</span><span className="kit-rank-bars">
                <span className="reel"><span className="reel-strip">{Array.from({length:30}).map((_,i)=>(<span key={i}>{i%10}</span>))}<span>0</span></span></span>
                <span className="reel"><span className="reel-strip">{Array.from({length:30}).map((_,i)=>(<span key={i}>{i%10}</span>))}<span>0</span></span></span>
                <span className="reel"><span className="reel-strip">{Array.from({length:30}).map((_,i)=>(<span key={i}>{i%10}</span>))}<span>0</span></span></span>
                <span className="reel"><span className="reel-strip">{Array.from({length:30}).map((_,i)=>(<span key={i}>{i%10}</span>))}<span>1</span></span></span>
              </span></div>
              <span className="kit-rank-foot"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>Revealed live on Day 3</span>
              <span className="kt-v">Your projected CLAT rank, accurate even if you start from scratch this week.</span>
            </div>
            <div className="kit-tile kit-tile--road">
              <span className="kt-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 21V4"/><path d="M6 4.5h11l-2.2 3.2L17 11H6"/></svg></span>
              <span className="kt-k"><span className="node"></span>Your Roadmap</span>
              <span className="kt-v">A personalised path from that rank straight to your target NLU.</span>
            </div>
            <div className="kit-tile kit-tile--teach">
              <span className="kt-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5 2.5 9 12 13l9.5-4z"/><path d="M6 11v4c0 1.4 2.7 2.4 6 2.4s6-1 6-2.4v-4"/><path d="M21.5 9v4.5"/></svg></span>
              <span className="kt-k"><span className="node"></span>Real Teaching</span>
              <span className="kt-v">3 full days from the team behind some of India&rsquo;s top rankers, not one sample lecture.</span>
            </div>
            <div className="kit-tile kit-tile--ranker">
              <span className="kt-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.2l2.5 5.1 5.6.8-4.05 4 .95 5.6L12 16.1l-5 2.6.95-5.6L3.9 9.1l5.6-.8z"/></svg></span>
              <span className="kt-k"><span className="node"></span>Live Rankers</span>
              <span className="kt-v">Strategy sessions with actual CLAT rankers, on exactly what they did differently.</span>
            </div>
            <div className="kit-tile kit-tile--mistake">
              <span className="kt-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4.5l8.5 14.5h-17z"/><path d="M12 10v4.2M12 17h.01"/></svg></span>
              <span className="kt-k"><span className="node"></span>Rank-Costing Mistakes</span>
              <span className="kt-v">The quiet errors that cost aspirants their rank, and how to dodge them.</span>
            </div>
            <div className="kit-tile kit-tile--balance">
              <span className="kt-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4.2v15.6M7.5 19.8h9M12 5.3 8.3 6.2M12 5.3l3.7.9M5 7.4 2.7 12.3a2.6 2.6 0 0 0 4.6 0z"/><path d="M19 7.4l-2.3 4.9a2.6 2.6 0 0 0 4.6 0z"/></svg></span>
              <span className="kt-k"><span className="node"></span>No Burnout</span>
              <span className="kt-v">A clear plan to balance academics and CLAT prep without breaking.</span>
            </div>
          </div>
          <p className="kit-foot"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.6l8 3v5.4c0 4.4-3 7.6-8 8.8-5-1.2-8-4.4-8-8.8V5.6z"/><path d="M9 12l2 2 4-4.2"/></svg>And the clarity to decide your next step on your own terms, with zero pressure to buy anything.</p>
        </div>
      </section>


      <section className="section">
        <div className="inner-wide">
          <div className="sec-head"><span className="eyebrow">Meet your host</span>
            <h2 className="sec-h2">Taught by the people <br className="bk"/>who will <span className="em">actually <br className="bk"/>teach your child</span></h2></div>
          <div className="host reveal">
            <div className="host-photo"><img src="/herocoachimg.webp" alt="Dr. Surabhi Modi Sahai, MD &amp; CEO, CLAT Possible" /></div>
            <div>
              <p className="host-name">Dr. Surabhi Modi Sahai</p>
              <p className="host-role">MD &amp; CEO, CLAT Possible</p>
              <div className="pills">
                <span className="pill">English &amp; CR Mentor</span>
                <span className="pill">Hindu College alumna</span>
                <span className="pill">Fulbright (FLTA) nominee, UC Davis</span>
                <span className="pill">Ph.D., University of Lucknow</span>
              </div>
              <p className="host-bio">She built the academic backbone of CLAT Possible and is a trusted mentor and advisor to thousands of students. <span className="lede">The founder who still mentors the class herself, not a name rented to a banner.</span></p>
              <p className="host-bio">Real CLAT rankers join live across Days 1 and 2, sharing the strategies that actually got them their ranks, and answering the one question every aspirant has: what did you do differently?</p>
            </div>
          </div>
        </div>
      </section>


      <section className="section section--soft">
        <div className="inner-wide">
          <div className="sec-head"><span className="eyebrow">This masterclass is built for you if</span>
            <h2 className="sec-h2">Wherever you&rsquo;re starting from, <br className="bk"/>you leave with <br className="bk"/><span className="em">your number</span></h2></div>
          <div className="personas reveal">
            <div className="persona"><span className="persona-tag">Class 11 &amp; 12 &middot; just starting</span>
              <h3>The early starter</h3>
              <p>You want prep that actually gets you there, and an honest answer on whether a top NLU is realistic for you.</p>
              <span className="evenif">Even if you have never opened a CLAT book, you walk out with an accurate projected rank and a plan, because you learn the foundations first, then take the test.</span></div>
            <div className="persona"><span className="persona-tag">Stuck &middot; school or dropper</span>
              <h3>The grinder</h3>
              <p>You have put in the hours and the score will not move, and you cannot see why.</p>
              <span className="evenif">Even if you have fallen behind, you leave knowing exactly how far the gap is, and precisely what closes it.</span></div>
            <div className="persona"><span className="persona-tag">First-year &middot; reattempting</span>
              <h3>The reattempter</h3>
              <p>You want a sharper, smarter strategy this time, built on your real current rank, not last year&rsquo;s regret.</p></div>
            <div className="persona"><span className="persona-tag">Parent</span>
              <h3>The parent who wants clarity</h3>
              <p>You want to know how to support your child, what good prep actually looks like, and what the investment buys, before you commit.</p></div>
          </div>
          <div style={{textAlign:"center",marginTop:"clamp(30px,3.6vw,44px)"}}>
            <p style={{maxWidth:"48ch",margin:"0 auto clamp(18px,2vw,24px)",fontSize:"16px",color:"var(--ink)"}}>Do not let confusion or fear hold you back. See your number, get your roadmap, and take the first real step toward your NLU dream.</p>
            <a className="cta" href="/checkout"><span>Book My Seat, &#8377;49</span>
              <span className="cta-arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5.5L15.5 10 11 14.5"/></svg></span></a>
          </div>
        </div>
      </section>


      <section className="midband stage">
        <span className="stage-grain" aria-hidden="true"></span>
        <div className="inner" style={{position:"relative"}}>
          <h2>Stop wondering where you stand. <span className="em">Come find out.</span></h2>
          <a className="cta" href="/checkout"><span>Book My Seat, &#8377;49</span>
            <span className="cta-arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5.5L15.5 10 11 14.5"/></svg></span></a>
          <p className="cta-note"><span className="pin">&#9679;</span> Money-back &middot; &#8377;49 until the deadline &middot; Instant Zoom link</p>
        </div>
      </section>


      <section className="section">
        <div className="inner">
          <div className="sec-head"><span className="eyebrow">Before you book</span>
            <h2 className="sec-h2">The honest <span className="em">answers</span></h2></div>
          <div className="faq reveal">
            <details><summary><span className="faq-q">Is it live or recorded?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">Fully live, all 3 days, with a dedicated Q&amp;A. Miss a day and you get a 24-hour replay.</p></details>
            <details><summary><span className="faq-q">How do I join?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">After you register, we send your private Zoom link by email and WhatsApp, with reminders before each day. You can join from your phone or laptop.</p></details>
            <details><summary><span className="faq-q">I have never prepared for CLAT. How can it predict my rank?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">Because you do not take the test cold. Across Days 1 and 2 you learn the foundations and the exact strategies that produce ranks. The Day 3 test measures what you can do once you understand how CLAT actually works, which is why it can fairly project your potential even as a complete beginner, and build a plan around it.</p></details>
            <details open><summary><span className="faq-q">How is this different from the free demo classes everyone offers?<span className="faq-most"><span className="dot"></span>Most asked</span></span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">A demo class is one lecture built to sell you a one to two lakh course. This is 3 full days of real teaching and live ranker strategies, and you leave with your own projected rank and a customised plan, before anyone asks you to buy anything.</p></details>
            <details><summary><span className="faq-q">I am only in Class 11. Too early?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">It is the best time. Learn how CLAT works now, see what you are capable of, and start with a plan instead of guesswork.</p></details>
            <details><summary><span className="faq-q">I have already prepared a lot. Is there anything new for me?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">Yes. Stuck students are almost always losing ranks in one or two areas they cannot see. The strategy sessions and your Day 3 result pinpoint exactly where.</p></details>
            <details><summary><span className="faq-q">Why is it only &#8377;49?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">Because it is the start of a relationship, not the whole product. We would rather you see how we teach, and get a real result in your hands, than take our word for it.</p></details>
            <details><summary><span className="faq-q">Do I have to buy a course after?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">No. You leave with your rank and your roadmap regardless. What you do next is entirely your call.</p></details>
            <details><summary><span className="faq-q">Will real CLAT rankers really be there?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">Yes, live across Days 1 and 2, sharing their actual strategies. Not recorded clips.</p></details>
            <details><summary><span className="faq-q">Will it be in English or Hindi?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">Majorly English.</p></details>
          </div>
        </div>
      </section>


      <section className="section stage finale">
        <span className="stage-grain" aria-hidden="true"></span>
        <div className="inner" style={{position:"relative"}}>
          <p className="finale-quote">Somewhere a student with your exact marks is about to take the NLU seat you wanted, for no reason except they knew their <span className="em">number</span>, and you didn&rsquo;t.</p>
          <p className="finale-sub">You can know yours in 3 days. Or keep guessing until results day.</p>
          <a className="cta hero-cta" href="/checkout"><span>Book My Seat, &#8377;49</span>
            <span className="cta-arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5.5L15.5 10 11 14.5"/></svg></span></a>
          <p className="cta-note"><span className="pin">&#9679;</span> 100% money-back &middot; &#8377;49 until the deadline &middot; Live on Zoom</p>
          <div className="colophon">
            <p className="disclaimer"><b>Disclaimer:</b> CLAT Possible is an education and coaching webinar programme. The information shared in this webinar is for educational and informational purposes only and does not constitute a guarantee of admission, rank, or any specific outcome. Individual results may vary and depend on each student&rsquo;s own effort, consistency, and preparation.</p>
            <p className="disclaimer">This website is operated and maintained by CLAT Possible. Use of this website is governed by our <a href="/terms">Terms &amp; Conditions</a> and <a href="/privacy">Privacy Policy</a>. We do not guarantee specific results or admission to any National Law University. Results vary and depend on individual effort, consistency of preparation, and other factors outside our control.</p>
            <p className="disclaimer">All content is the intellectual property of CLAT Possible. Any duplication, reproduction, or distribution without written permission is strictly prohibited.</p>
            <p className="disclaimer">This website is owned and operated by CLAT Possible.</p>
            <p className="colophon-legal"><a href="/privacy">Privacy</a> &middot; <a href="/terms">Terms</a> &middot; <a href="/refund">Refund</a> &middot; &copy; 2026 CLAT Possible</p>
          </div>
        </div>
      </section>
      <a className="mcta" id="mcta" href="/checkout">
        <span className="mcta-price"><span className="mcta-was">&#8377;499</span>&#8377;49<span className="mcta-sub">Until the deadline</span></span>
        <span className="mcta-btn">Book My Seat <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5.5L15.5 10 11 14.5"/></svg></span>
      </a>
      <FunnelScripts />
    </>
  );
}
