import type { Metadata } from "next";
import Script from "next/script";

// Inlined into the client bundle (NEXT_PUBLIC_). Pixel IDs are not secrets.
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export const metadata: Metadata = {
  title: "CLAT Possible — The 3-Day CLAT Rank Roadmap · Free",
  description:
    "A 3-day live CLAT masterclass for Class 11 & 12 students and droppers. See the exact rank you can score, and the clear plan to your dream NLU.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/funnel.css" />
      </head>
      <body>
        {META_PIXEL_ID && (
          <>
            <Script id="meta-pixel-init" strategy="afterInteractive">{`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              try {
                var m = document.cookie.match(/(?:^|;\\s*)cp_mam=([^;]+)/);
                if (m) {
                  var mam = JSON.parse(decodeURIComponent(m[1]));
                  if (mam && typeof mam === 'object' && Object.keys(mam).length) {
                    fbq('init', '${META_PIXEL_ID}', mam);
                  }
                }
              } catch (e) {}
              fbq('track', 'PageView');
            `}</Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                alt=""
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
