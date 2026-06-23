import FunnelScripts from "./FunnelScripts";
import RegisterModal from "./RegisterModal";
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
  "For parents of Class 11 & 12 aspirants",
  "Live on Zoom · Anywhere in India",
  "Your child's projected CLAT rank",
  "100% free · No obligation to buy",
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
          <span className="eyebrow hero-eyebrow reveal">For Parents of Class 11 &amp; 12 Students Aiming for a Top NLU &middot; CLAT 2027 &amp; 2028</span>

          <h1 className="hero-h1 reveal">Is Your Child <span className="uline uline--green"><span className="em em--green">NLU-Ready?</span><svg className="uline-svg" viewBox="0 0 300 16" preserveAspectRatio="none" aria-hidden="true"><path d="M2,11 Q75,2 150,9 Q225,16 298,6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg></span> Find Out in 3 Days.</h1>

          <p className="hero-sub reveal">A free 3-day live masterclass with Dr. Surabhi Modi Sahai. Your child walks away with <span className="hl">their projected CLAT rank and a personalized plan</span> to a top National Law University. You finally see, on paper, exactly where they stand, before you commit years and lakhs to a plan you cannot measure.</p>

          <div className="hero-cred reveal">Hosted live by <b>Dr. Surabhi Modi Sahai</b>, MD &amp; CEO, CLAT Possible <span className="hero-cred-sep">&middot;</span> she still teaches the class herself <span className="hero-cred-sep">&middot;</span> with real CLAT rankers live in the room</div>

          <div className="hcount reveal" aria-label="Registration deadline countdown">
            <span className="hcount-label">Free registration closes when Day 1 begins</span>
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
                <span className="hcard-v">Parents of Class 11, 12 &amp; droppers</span>
              </div>
            </div>
          </div>

          <div className="hcta reveal">
            <div className="hprice">
              <span className="hprice-was">&#8377;499</span>
              <span className="hprice-badge">Free pass</span>
              <span className="hprice-now">FREE</span>
            </div>
            <a className="cta hero-cta" href="#register"><span>Reserve Your Child&rsquo;s Free Seat</span>
              <span className="cta-arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5.5L15.5 10 11 14.5"/></svg></span></a>
            <div className="hcta-guar"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.6l8 3v5.4c0 4.4-3 7.6-8 8.8-5-1.2-8-4.4-8-8.8V5.6z"/><path d="M9 12l2 2 4-4.2"/></svg> 100% free &middot; No card needed</div>
            <p className="cta-note"><span className="pin">&#9679;</span> Instant Zoom link on registration &middot; No obligation to buy anything</p>
          </div>
        </div>
      </header>


      <section className="section section--soft">
        <div className="inner">
          <div className="sec-head"><span className="eyebrow">The quiet fear</span>
            <h2 className="sec-h2">You can see how hard your child works. You just cannot see if&nbsp;it&nbsp;is&nbsp;<span className="em">working</span>.</h2></div>
          <div className="prose reveal">
            <p>Every evening the door closes and the studying begins. The mocks, the notes, the late nights. You watch the effort, and you tell them you are proud. But somewhere underneath, there is a question you do not say out loud: <i>is any of this actually moving them closer to an NLU, or are we just hoping?</i></p>
            <p>Here is the hard truth about CLAT. The exam is brutally competitive. Around 60,000 students compete every year for roughly 3,000 seats at the top National Law Universities [confirm figures against the latest cycle]. Fewer than the top 5 percent get in. And almost no family finds out where their child truly stands until results day, when nothing can be changed.</p>
            <p>So the effort continues, blind. Nobody can tell you which section is quietly bleeding 30 or 40 ranks. Nobody shows you whether a top NLU is genuinely within reach or slipping away. You are asked to believe, to spend, and to wait.</p>
            <p className="lede">There is a smarter way, and it starts with a number.</p>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="inner">
          <div className="sec-head"><span className="eyebrow">The real cost</span>
            <h2 className="sec-h2">The most expensive mistake in CLAT is not money. <br className="bk"/>It is <span className="em">time you cannot buy back</span>.</h2></div>
          <div className="prose reveal">
            <p className="lede">Your child has one real window. In Class 11 and 12, the right preparation compounds and the wrong preparation quietly costs the seat. By the time a weak score reveals the truth, the two years are already gone, and they cannot be repeated.</p>
            <p>Three risks every CLAT parent is carrying, whether they name them or not:</p>
            <p><b>The blind-spend risk.</b> Quality CLAT coaching runs Rs 1 lakh to Rs 1.5 lakh, often paid long before anyone shows you if your child is even on the right track.</p>
            <p><b>The wrong-plan risk.</b> Hours of honest effort poured into the wrong section, the wrong strategy, the wrong priorities, with no early signal that anything is off.</p>
            <p><b>The too-late risk.</b> Discovering on results day that a top NLU was always one fixable gap away, when there is no time left to fix it.</p>
            <p className="lede">In 3 free days, you remove all three. Your child sees their projected rank now, understands exactly what is costing them, and leaves with a plan. You decide what comes next with your eyes open, not on results day.</p>
          </div>
        </div>
      </section>


      <section className="section section--soft">
        <div className="inner">
          <div className="sec-head"><span className="eyebrow">Not another demo class</span>
            <h2 className="sec-h2">Every institute sells your child the finish line. We show them their <span className="em">starting&nbsp;line</span>&nbsp;first.</h2></div>
          <div className="prose reveal">
            <p className="lede">The big brands advertise their toppers and their All India Ranks. Impressive banners, but they tell you nothing about <i>your</i> child.</p>
            <p>The free demo classes most institutes run are usually a short pitch built to sell a Rs 1 lakh course before anyone has taught your child a thing. You are expected to commit that kind of money before you know the two things that actually matter: whether a top NLU is realistic for your child, and what their plan should even be.</p>
            <p className="lede">This is the opposite. Three full days of real teaching, and on Day 3 your child takes our Diagnostic Rank Predictor and walks away with their own projected CLAT rank and a written, personalized plan. The proof is your child&rsquo;s number, not someone else&rsquo;s photo on a hoarding.</p>
          </div>
          <div className="compare reveal">
            <div className="cmp cmp--them"><div className="cmp-tag">Everyone else</div><p>A free demo class. One sample lecture, built to sell you a course that costs one to two lakh rupees, before you know if a top NLU is even realistic for your child.</p></div>
            <div className="cmp cmp--us"><div className="cmp-tag">CLAT Possible</div><p>3 days of real teaching and ranker strategies, your child&rsquo;s own projected CLAT rank, and a plan built for them, before we ask you for anything.</p></div>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="inner">
          <div className="sec-head"><span className="eyebrow">Instead, imagine this</span>
            <h2 className="sec-h2">In 3 days, your child starts their <br className="bk"/>journey with a <span className="em">map</span>, <br className="bk"/>not a guess</h2></div>
          <div className="imagine reveal">
            <div className="snapshot">
              <div className="snap-top">
                <span className="snap-kicker">After the 3 days</span>
                <span className="snap-status"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4 4 10-10.5"/></svg>On track</span>
              </div>
              <h3 className="snap-title">Your child&rsquo;s whole plan, on <span className="em">a single page</span>.</h3>
              <div className="snap-grid">
                <div className="snap-field"><span className="snap-k"><span className="node"></span>Roadmap</span><span className="snap-v">Their real rank today, mapped straight to their target NLU.</span></div>
                <div className="snap-field"><span className="snap-k"><span className="node"></span>Strategy</span><span className="snap-v">The exact approach toppers actually use, not guesswork.</span></div>
                <div className="snap-field"><span className="snap-k"><span className="node"></span>Confidence</span><span className="snap-v">You know their number, and exactly what moves it.</span></div>
                <div className="snap-field"><span className="snap-k"><span className="node"></span>Mocks</span><span className="snap-v">Time management cracked, scores finally climbing.</span></div>
                <div className="snap-field snap-field--full"><span className="snap-k"><span className="node"></span>Family</span><span className="snap-v">The whole family on the same page, because you saw the plan before paying a single rupee.</span></div>
              </div>
              <div className="snap-foot"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.6l8 3v5.4c0 4.4-3 7.6-8 8.8-5-1.2-8-4.4-8-8.8V5.6z"/><path d="M9 12l2 2 4-4.2"/></svg>Built with your child, live, across the 3 days. Yours before you commit a rupee.</div>
            </div>
          </div>
          <div style={{textAlign:"center",marginTop:"clamp(28px,3.4vw,40px)"}}>
            <a className="cta" href="#register"><span>Reserve Your Child&rsquo;s Free Seat</span>
              <span className="cta-arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5.5L15.5 10 11 14.5"/></svg></span></a>
          </div>
        </div>
      </section>


      <section className="section stage" id="roadmap">
        <span className="stage-grain" aria-hidden="true"></span>
        <div className="inner" style={{position:"relative"}}>
          <div className="sec-head"><span className="eyebrow">{`Live on Zoom · ${WEBINAR.time} · ${WEBINAR.durationLong}`}</span>
            <h2 className="sec-h2">What your child learns, live, across <span className="em">3 days</span></h2></div>
          <div className="journey" id="journey">
            <div className="jrail" aria-hidden="true"></div>
            <div className="jfill" aria-hidden="true"></div>

            <div className="jstep"><span className="jnode" aria-hidden="true"></span>
              <div className="jday">{`Day 1 · ${WEBINAR.day1}`}</div>
              <h3 className="jtitle">How CLAT is really cracked</h3>
              <p className="jbody">The real scoring map most aspirants miss, and how a topper reads a passage differently from everyone else. By the end of Day 1, your child finally understands <span className="hl">what cracking CLAT really takes</span>.</p>
            </div>

            <div className="jstep"><span className="jnode" aria-hidden="true"></span>
              <div className="jday">{`Day 2 · ${WEBINAR.day2}`}</div>
              <h3 className="jtitle">Where the ranks are hiding</h3>
              <p className="jbody">Section by section (English, legal reasoning, logical reasoning, GK and current affairs, quantitative), exactly where your child is losing marks, and how each gap closes, plus real CLAT rankers live, sharing what they did differently.</p>
            </div>

            <div className="jstep jstep--final"><span className="jnode" aria-hidden="true"></span>
              <div className="jday">{`Day 3 · ${WEBINAR.day3}`}</div>
              <h3 className="jtitle">Your child&rsquo;s number, in their hands</h3>
              <p className="jbody">Your child takes the <span className="hl">Diagnostic Rank Predictor</span>, sees their projected CLAT rank, accurate even if they started from zero this week, and leaves with a written, personalized path to their target NLU.</p>
              <span className="jsub"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M16 11a3 3 0 1 0-3-3M3 20c0-3 2.7-4.5 6-4.5M14 20c0-2.4 1.8-3.8 4-4 2.2.2 4 1.6 4 4"/></svg> Parents are warmly encouraged to sit in, especially on Day 3. The plan holds best when the whole family understands it</span>
            </div>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="inner">
          <div className="sec-head"><span className="eyebrow">What your child walks away with</span>
            <h2 className="sec-h2">They leave with a <span className="em">number</span>, and a plan to move it</h2></div>
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
              <span className="kt-v">Your child&rsquo;s projected CLAT rank, in writing, accurate even if they start from scratch this week.</span>
            </div>
            <div className="kit-tile kit-tile--road">
              <span className="kt-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 21V4"/><path d="M6 4.5h11l-2.2 3.2L17 11H6"/></svg></span>
              <span className="kt-k"><span className="node"></span>Their Roadmap</span>
              <span className="kt-v">A personalized path showing exactly what to fix, and in what order, straight to their target NLU.</span>
            </div>
            <div className="kit-tile kit-tile--teach">
              <span className="kt-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5 2.5 9 12 13l9.5-4z"/><path d="M6 11v4c0 1.4 2.7 2.4 6 2.4s6-1 6-2.4v-4"/><path d="M21.5 9v4.5"/></svg></span>
              <span className="kt-k"><span className="node"></span>Real Teaching</span>
              <span className="kt-v">3 full days from the team behind some of India&rsquo;s top rankers, not one sample lecture.</span>
            </div>
            <div className="kit-tile kit-tile--ranker">
              <span className="kt-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.2l2.5 5.1 5.6.8-4.05 4 .95 5.6L12 16.1l-5 2.6.95-5.6L3.9 9.1l5.6-.8z"/></svg></span>
              <span className="kt-k"><span className="node"></span>Live Rankers</span>
              <span className="kt-v">Live answers to the one question every aspirant has: what do toppers actually do differently?</span>
            </div>
            <div className="kit-tile kit-tile--mistake">
              <span className="kt-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4.5l8.5 14.5h-17z"/><path d="M12 10v4.2M12 17h.01"/></svg></span>
              <span className="kt-k"><span className="node"></span>An Honest Reach Check</span>
              <span className="kt-v">A clear picture of whether a top NLU is realistically in reach, no false hope, no false fear.</span>
            </div>
            <div className="kit-tile kit-tile--balance">
              <span className="kt-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4.2v15.6M7.5 19.8h9M12 5.3 8.3 6.2M12 5.3l3.7.9M5 7.4 2.7 12.3a2.6 2.6 0 0 0 4.6 0z"/><path d="M19 7.4l-2.3 4.9a2.6 2.6 0 0 0 4.6 0z"/></svg></span>
              <span className="kt-k"><span className="node"></span>No Burnout</span>
              <span className="kt-v">A clear plan to balance boards and CLAT prep without breaking.</span>
            </div>
          </div>
          <p className="kit-foot"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.6l8 3v5.4c0 4.4-3 7.6-8 8.8-5-1.2-8-4.4-8-8.8V5.6z"/><path d="M9 12l2 2 4-4.2"/></svg>And the clarity to decide your next step on your own terms, with zero pressure to buy anything.</p>
        </div>
      </section>


      <section className="section section--soft" id="champions">
        <div className="inner-wide">
          <div className="sec-head"><span className="eyebrow">Proof</span>
            <h2 className="sec-h2">The track record <br className="bk"/>behind the <span className="em">room</span></h2></div>
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
            <div className="stat"><div className="stat-num" data-count="15" data-suffix="+">0</div><div className="stat-lab">years teaching<br/>CLAT</div></div>
            <div className="stat"><div className="stat-num">AIR&nbsp;1&ndash;14</div><div className="stat-lab">rankers produced over<br/>15 years [confirm]</div></div>
            <div className="stat"><div className="stat-num" data-count="8">0</div><div className="stat-lab">offline centres<br/>across India [confirm]</div></div>
          </div>
          <p className="honesty">15+ years teaching CLAT, with a base in Lucknow and offline centres across India [confirm cities and count]. Top rankers in the AIR 1 to 14 range produced over 15 years, a cumulative record, not a single year. Every rank and figure locks to the latest verified CLAT result before publish. We do not publish numbers we cannot stand behind.</p>

          <div className="sec-head" style={{marginTop:"clamp(48px,5vw,72px)"}}><span className="eyebrow">Parents who stopped guessing</span></div>
          <div className="quotes reveal">
            <div className="qcard">
              <span className="qmark">&ldquo;</span>
              <p className="qtext">For the first time, someone showed us the plan before asking for a single rupee. We finally knew our daughter was on the right track.</p>
              <div className="qmeta"><span className="qavatar">P</span><div><div className="qname">[Parent name]</div><div className="qrank">Parent of [student] · [City]</div></div></div>
              <span className="qslot">Placeholder · supply a real consented quote</span>
            </div>
            <div className="qcard">
              <span className="qmark">&ldquo;</span>
              <p className="qtext">I thought a top NLU was out of my league. The day I saw my actual rank and what was missing, everything changed.</p>
              <div className="qmeta"><span className="qavatar">S</span><div><div className="qname">[Student name]</div><div className="qrank">AIR [confirm] · [City]</div></div></div>
              <span className="qslot">Placeholder · supply a real consented quote</span>
            </div>
            <div className="qcard">
              <span className="qmark">&ldquo;</span>
              <p className="qtext">The Day 3 rank predictor was the wake-up call we needed. We stopped guessing and started fixing the exact gaps it found.</p>
              <div className="qmeta"><span className="qavatar">T</span><div><div className="qname">[Topper name]</div><div className="qrank">AIR [confirm] · [City]</div></div></div>
              <span className="qslot">Placeholder · supply a real consented quote</span>
            </div>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="inner-wide">
          <div className="sec-head"><span className="eyebrow">Your child&rsquo;s teacher</span>
            <h2 className="sec-h2">Taught by the founder herself, <br className="bk"/><span className="em">not a name on a banner</span></h2></div>
          <div className="host reveal">
            <div className="host-photo"><img src="/herocoachimg.webp" alt="Dr. Surabhi Modi Sahai, MD &amp; CEO, CLAT Possible" /></div>
            <div>
              <p className="host-name">Dr. Surabhi Modi Sahai</p>
              <p className="host-role">MD &amp; CEO, CLAT Possible</p>
              <div className="pills">
                <span className="pill">English &amp; Critical Reasoning Mentor</span>
                <span className="pill">Ph.D., University of Lucknow</span>
                <span className="pill">Fulbright (FLTA) Nominee [confirm]</span>
              </div>
              <p className="host-bio">Dr. Surabhi Modi Sahai personally teaches the CLAT English and Critical Reasoning sections, and built the academic backbone of CLAT Possible. <span className="lede">The founder who still teaches the class herself, not a name rented to a banner.</span></p>
              <p className="host-bio"><b>For parents:</b> this is a teacher-led house, not a funded ad-factory that buys its toppers. You will see exactly how your child is taught, live, before anyone discusses a single rupee of fees. Real CLAT rankers join live across Days 1 and 2, answering the one question every aspirant has: what did you do differently?</p>
            </div>
          </div>
        </div>
      </section>


      <section className="section section--soft">
        <div className="inner-wide">
          <div className="sec-head"><span className="eyebrow">This masterclass is built for your child if</span>
            <h2 className="sec-h2">Wherever your child is starting from, they leave&nbsp;with <span className="em">their&nbsp;number</span></h2></div>
          <div className="personas reveal">
            <div className="persona"><span className="persona-tag">Class 11 &amp; 12 &middot; just starting</span>
              <h3>The early starter</h3>
              <p>Your child wants prep that actually gets them there, and you want an honest answer on whether a top NLU is realistic.</p>
              <span className="evenif">Even if they have never opened a CLAT book, they walk out with an accurate projected rank and a plan, because they learn the foundations first, then take the test.</span></div>
            <div className="persona"><span className="persona-tag">Stuck &middot; school or dropper</span>
              <h3>The grinder</h3>
              <p>They have put in the hours and the score will not move, and nobody can see why.</p>
              <span className="evenif">Even if they have fallen behind, they leave knowing exactly how far the gap is, and precisely what closes it.</span></div>
            <div className="persona"><span className="persona-tag">First-year &middot; reattempting</span>
              <h3>The reattempter</h3>
              <p>A sharper, smarter strategy this time, built on their real current rank, not last year&rsquo;s regret.</p></div>
            <div className="persona"><span className="persona-tag">Parent</span>
              <h3>The parent who wants clarity</h3>
              <p>You want to know how to support your child, what good prep actually looks like, and what the investment buys, before you commit.</p></div>
          </div>
          <div style={{textAlign:"center",marginTop:"clamp(30px,3.6vw,44px)"}}>
            <p style={{maxWidth:"48ch",margin:"0 auto clamp(18px,2vw,24px)",fontSize:"16px",color:"var(--ink)"}}>Do not let confusion or fear hold your child back. See their number, get their roadmap, and take the first real step toward their NLU dream.</p>
            <a className="cta" href="#register"><span>Reserve Your Child&rsquo;s Free Seat</span>
              <span className="cta-arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5.5L15.5 10 11 14.5"/></svg></span></a>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="inner">
          <div className="sec-head"><span className="eyebrow">What&rsquo;s the catch</span>
            <h2 className="sec-h2">Why is it <span className="em">free</span>?</h2></div>
          <div className="prose reveal">
            <p className="lede">Because we would rather show you how we teach than tell you.</p>
            <p>Most institutes ask for a lakh upfront and let you find out later whether it was worth it. We do it the other way around: we give your child three days of real teaching and their actual projected rank, free, and let the results speak.</p>
            <p className="lede">If you choose to continue with us afterward, wonderful. If not, your child still keeps their rank and their plan. No pressure, no obligation.</p>
          </div>
        </div>
      </section>


      <section className="midband stage">
        <span className="stage-grain" aria-hidden="true"></span>
        <div className="inner" style={{position:"relative"}}>
          <h2>Stop wondering where your child stands. <span className="em">Come find out.</span></h2>
          <a className="cta" href="#register"><span>Reserve Your Child&rsquo;s Free Seat</span>
            <span className="cta-arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5.5L15.5 10 11 14.5"/></svg></span></a>
          <p className="cta-note"><span className="pin">&#9679;</span> Free to join &middot; No card needed &middot; Instant Zoom link</p>
        </div>
      </section>


      <section className="section">
        <div className="inner">
          <div className="sec-head"><span className="eyebrow">Before you book</span>
            <h2 className="sec-h2">The honest <span className="em">answers</span></h2></div>
          <div className="faq reveal">
            <details><summary><span className="faq-q">Is it really free?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">Yes, completely. Registration costs nothing and there is no obligation to buy anything afterward. No card, no payment.</p></details>
            <details><summary><span className="faq-q">Is it live or recorded?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">Fully live, all 3 days, with a dedicated Q&amp;A. [confirm replay policy: the live site currently states sessions are not recorded.]</p></details>
            <details><summary><span className="faq-q">How do I join?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">After you register, we send your private Zoom link by email and WhatsApp, with reminders before each day. Your child can join from a phone or laptop.</p></details>
            <details><summary><span className="faq-q">My child is only in Class 11. Is it too early?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">It is the best time. The earlier you see the number, the cheaper and easier the gap is to close, and the more of the two-year window you still have.</p></details>
            <details open><summary><span className="faq-q">How is this different from the free demo classes other brands run?<span className="faq-most"><span className="dot"></span>Most asked</span></span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">Those are usually a short pitch designed to sell a Rs 1 lakh to Rs 1.5 lakh course. This is 3 full days of actual teaching, plus your child&rsquo;s real projected rank and a written plan, with no obligation to buy.</p></details>
            <details><summary><span className="faq-q">We have already enrolled in a course. Is this still useful?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">Yes. Stuck students are almost always losing ranks in one section they cannot see. Day 2 is built to find it.</p></details>
            <details><summary><span className="faq-q">Is the rank guaranteed?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">It is a projected, diagnostic rank based on your child&rsquo;s current level, meant to show where they stand and what to improve. It is a clear starting picture, not a promise of the final exam result.</p></details>
            <details><summary><span className="faq-q">Do we have to buy anything after?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">No. Your child leaves with their rank and roadmap regardless. What you do next is entirely your call.</p></details>
            <details><summary><span className="faq-q">Do I need to attend as a parent?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">You are welcome and encouraged to, especially on Day 3, so the whole family understands the plan.</p></details>
            <details><summary><span className="faq-q">Will it be in English or Hindi?</span><span className="faq-ico"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5"/></svg></span></summary><p className="faq-a">Majorly English.</p></details>
          </div>
        </div>
      </section>


      <section className="section stage finale">
        <span className="stage-grain" aria-hidden="true"></span>
        <div className="inner" style={{position:"relative"}}>
          <p className="finale-quote">Find out where your child stands, before results day <span className="em">decides for you</span>.</p>
          <p className="finale-sub">In 3 free days you can know whether your child is NLU-ready, and exactly what it takes to get them there. Or keep spending, hoping, and waiting until the score arrives. One of these costs nothing and changes everything.</p>
          <a className="cta hero-cta" href="#register"><span>Reserve Your Child&rsquo;s Free Seat</span>
            <span className="cta-arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5.5L15.5 10 11 14.5"/></svg></span></a>
          <p className="cta-note"><span className="pin">&#9679;</span> 100% free &middot; Live on Zoom &middot; 28 to 30 June 2026 &middot; Instant Zoom link</p>
          <div className="colophon">
            <p className="disclaimer"><b>Disclaimer:</b> CLAT Possible is an education and coaching webinar programme. The information shared in this webinar is for educational and informational purposes only and does not constitute a guarantee of admission, rank, or any specific outcome. Individual results may vary and depend on each student&rsquo;s own effort, consistency, and preparation.</p>
            <p className="disclaimer">This website is operated and maintained by CLAT Possible. Use of this website is governed by our <a href="/terms">Terms &amp; Conditions</a> and <a href="/privacy">Privacy Policy</a>. We do not guarantee specific results or admission to any National Law University. Results vary and depend on individual effort, consistency of preparation, and other factors outside our control.</p>
            <p className="disclaimer">All content is the intellectual property of CLAT Possible. Any duplication, reproduction, or distribution without written permission is strictly prohibited.</p>
            <p className="disclaimer">This website is owned and operated by CLAT Possible.</p>
            <p className="colophon-legal"><a href="/privacy">Privacy</a> &middot; <a href="/terms">Terms</a> &middot; <a href="/refund">Refund</a> &middot; &copy; 2026 CLAT Possible</p>
          </div>
        </div>
      </section>
      <a className="mcta" id="mcta" href="#register">
        <span className="mcta-price"><span className="mcta-was">&#8377;499</span>FREE<span className="mcta-sub">Free pass</span></span>
        <span className="mcta-btn">Reserve Free Seat <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5.5L15.5 10 11 14.5"/></svg></span>
      </a>
      <RegisterModal />
      <FunnelScripts />
    </>
  );
}
