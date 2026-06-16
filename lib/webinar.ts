// Webinar schedule + community link — the single source of truth for every date,
// time, and the WhatsApp invite shown anywhere on the funnel (landing, checkout,
// thank-you, countdown timer).
//
// NEXT_PUBLIC_ so the SAME values render in server components AND client
// components (the countdown runs in the browser). Values are inlined at build —
// to change them, update the env in Vercel and redeploy. Defaults below preserve
// the current copy if an env var is unset.

export const WEBINAR = {
  // Composite display strings (each maps to a visible label on the funnel).
  datesLong: process.env.NEXT_PUBLIC_WEBINAR_DATES_LONG || "28, 29 & 30 June 2026",
  datesShort: process.env.NEXT_PUBLIC_WEBINAR_DATES_SHORT || "28, 29 & 30 June",
  time: process.env.NEXT_PUBLIC_WEBINAR_TIME || "11:00 AM IST",
  timeShort: process.env.NEXT_PUBLIC_WEBINAR_TIME_SHORT || "11 AM IST",
  duration: process.env.NEXT_PUBLIC_WEBINAR_DURATION || "2 hrs/day",
  durationLong: process.env.NEXT_PUBLIC_WEBINAR_DURATION_LONG || "2 hours each day",

  // Per-day labels — long form (landing roadmap) + short form (thank-you cells).
  day1: process.env.NEXT_PUBLIC_WEBINAR_DAY1 || "28 June",
  day2: process.env.NEXT_PUBLIC_WEBINAR_DAY2 || "29 June",
  day3: process.env.NEXT_PUBLIC_WEBINAR_DAY3 || "30 June",
  day1Short: process.env.NEXT_PUBLIC_WEBINAR_DAY1_SHORT || "28 Jun",
  day2Short: process.env.NEXT_PUBLIC_WEBINAR_DAY2_SHORT || "29 Jun",
  day3Short: process.env.NEXT_PUBLIC_WEBINAR_DAY3_SHORT || "30 Jun",

  // Countdown target — ISO 8601 WITH timezone offset. Timer hits 00:00:00:00
  // exactly at this instant (Day 1, 11:00 AM IST = +05:30).
  deadlineIso: process.env.NEXT_PUBLIC_WEBINAR_DEADLINE_ISO || "2026-06-28T11:00:00+05:30",

  // WhatsApp community invite shown on the thank-you page.
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL || "#",
} as const;
