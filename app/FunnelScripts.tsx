"use client";

import { useEffect } from "react";

/* Client island for the landing page: the price-deadline countdown, the
   scroll-linked 3-day journey spine, the stat count-up, and reveal-on-scroll.
   All query the server-rendered markup by class/id, so they just work after
   hydration. Everything fails open (content visible if JS / motion is off). */
export default function FunnelScripts() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- countdown (placeholder: 72h from load; wire to the real deadline) ----
    const cd = document.getElementById("countdown");
    let cdTimer: number | undefined;
    if (cd) {
      const end = Date.now() + 72 * 3600 * 1000;
      const d = cd.querySelector("[data-d]")!,
        h = cd.querySelector("[data-h]")!,
        m = cd.querySelector("[data-m]")!,
        s = cd.querySelector("[data-s]")!;
      const pad = (n: number) => String(n).padStart(2, "0");
      const tick = () => {
        const t = Math.max(0, end - Date.now()),
          sec = Math.floor(t / 1000);
        d.textContent = pad(Math.floor(sec / 86400));
        h.textContent = pad(Math.floor((sec % 86400) / 3600));
        m.textContent = pad(Math.floor((sec % 3600) / 60));
        s.textContent = pad(sec % 60);
      };
      tick();
      cdTimer = window.setInterval(tick, 1000);
    }

    // ---- journey spine: fill + node ignite by scroll ----
    const j = document.getElementById("journey");
    let onScroll: (() => void) | undefined;
    if (j) {
      const steps = Array.from(j.querySelectorAll<HTMLElement>(".jstep"));
      if (reduce) {
        j.style.setProperty("--fill", "1");
        steps.forEach((st) => st.classList.add("lit"));
      } else {
        const upd = () => {
          const r = j.getBoundingClientRect(),
            ref = innerHeight * 0.62;
          const p = Math.min(1, Math.max(0, (ref - r.top) / r.height));
          j.style.setProperty("--fill", p.toFixed(3));
          steps.forEach((st) => {
            const n = st.querySelector(".jnode")!.getBoundingClientRect();
            st.classList.toggle("lit", n.top + n.height / 2 < ref);
          });
        };
        let ticking = false;
        onScroll = () => {
          if (ticking) return;
          ticking = true;
          requestAnimationFrame(() => {
            upd();
            ticking = false;
          });
        };
        addEventListener("scroll", onScroll, { passive: true });
        addEventListener("resize", upd);
        upd();
      }
    }

    // ---- stat count-up ----
    const fmt = (n: number) => n.toLocaleString("en-IN");
    const runCount = (el: HTMLElement) => {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      const target = +(el.getAttribute("data-count") || 0),
        suf = el.getAttribute("data-suffix") || "";
      if (reduce) {
        el.textContent = fmt(target) + suf;
        return;
      }
      const dur = 1400;
      let t0 = 0;
      const tick = (now: number) => {
        if (!t0) t0 = now;
        const p = Math.min(1, (now - t0) / dur),
          e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(Math.round(target * e)) + suf;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = fmt(target) + suf;
      };
      requestAnimationFrame(tick);
    };

    // ---- reveal-on-scroll + count-up triggers (shared IO) ----
    const nums = Array.from(document.querySelectorAll<HTMLElement>(".stat-num[data-count]"));
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let io: IntersectionObserver | undefined;
    let io2: IntersectionObserver | undefined;
    if (!("IntersectionObserver" in window) || reduce) {
      reveals.forEach((e) => e.classList.add("in"));
      nums.forEach(runCount);
    } else {
      io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io!.unobserve(e.target);
            }
          }),
        { threshold: 0.12 }
      );
      reveals.forEach((e) => {
        if (e.getBoundingClientRect().top > innerHeight * 0.9) io!.observe(e);
        else e.classList.add("in");
      });
      io2 = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              runCount(e.target as HTMLElement);
              io2!.unobserve(e.target);
            }
          }),
        { threshold: 0.4 }
      );
      nums.forEach((n) => io2!.observe(n));
    }

    // ---- sticky mobile CTA: reveal after the hero, hide over the CTA sections ----
    const mcta = document.getElementById("mcta");
    let mio: IntersectionObserver | undefined;
    if (mcta) {
      const hero = document.querySelector(".hero");
      const ctaEls = Array.from(document.querySelectorAll(".midband, .finale"));
      const inView = new Set<Element>();
      let heroOut = false;
      mio = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.target === hero) {
              heroOut = !e.isIntersecting;
              return;
            }
            if (e.isIntersecting) inView.add(e.target);
            else inView.delete(e.target);
          });
          mcta.classList.toggle("show", heroOut && inView.size === 0);
        },
        { threshold: 0 }
      );
      if (hero) mio.observe(hero);
      ctaEls.forEach((el) => mio!.observe(el));
    }

    return () => {
      if (cdTimer) clearInterval(cdTimer);
      if (onScroll) removeEventListener("scroll", onScroll);
      io?.disconnect();
      io2?.disconnect();
      mio?.disconnect();
    };
  }, []);

  return null;
}
