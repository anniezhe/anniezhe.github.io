import type { Metadata } from "next";
import Providers from "./providers";
import { GoogleAnalytics } from '@next/third-parties/google';
import '@/styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Annie He's Website",
  description: "Public health researcher and advocate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Grab the measurement ID string from your environment variables
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      {/* 
        Removed the hardcoded head script because your lib/gtag.ts 
        initConsent() function handles default denial states on mount!
      */}
      <body>
        {/* Pass the dynamic variable name directly without quotes */}
        {gaId && <GoogleAnalytics gaId={gaId} />}
        
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
