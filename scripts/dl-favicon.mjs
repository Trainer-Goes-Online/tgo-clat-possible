// Downloads the RealFaviconGenerator asset set into /public.
// Run: node scripts/dl-favicon.mjs
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");
const base = "https://realfavicongenerator.net/files/1dfcaad9-2e04-48c4-bc62-6f6067158ad6/";
const files = [
  "favicon.svg",
  "favicon-96x96.png",
  "favicon.ico",
  "apple-touch-icon.png",
  "web-app-manifest-192x192.png",
  "web-app-manifest-512x512.png",
  "site.webmanifest",
];

for (const f of files) {
  try {
    const res = await fetch(base + f);
    if (!res.ok) {
      console.log("FAIL", f, res.status);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(join(PUBLIC, f), buf);
    console.log("OK  ", f, buf.length + "b");
  } catch (e) {
    console.log("ERR ", f, e.message);
  }
}
