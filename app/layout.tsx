import type { Metadata } from "next";
import Script from "next/script";
import './globals.css'
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import { CSPostHogProvider } from './providers';
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easepix",
  description: "AI-powered image editor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#1A3EC2' } }}>
      <html lang="en" className="relative">
        <CSPostHogProvider>
          <GoogleOneTap />
            <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
              {children}
              <SpeedInsights />
              <Analytics />

              {/* Meta Pixel Script */}
              <Script
                id="fb-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '859931969013118');
                    fbq('track', 'PageView');
                  `,
                }}
              />
              <noscript>
                <img
                  height="1"
                  width="1"
                  style={{ display: "none" }}
                  src="https://www.facebook.com/tr?id=859931969013118&ev=PageView&noscript=1"
                  alt="facebook"
                />
              </noscript>
            </body>
        </CSPostHogProvider>
      </html>
    </ClerkProvider>
  );
}
