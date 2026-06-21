import type { Metadata } from "next";
import Providers from "./providers"; // Your client-side context file
import { GoogleAnalytics } from '@next/third-parties/google';
import '@/styles/globals.css'; // Global CSS must be imported here

// Bypasses the old custom <Head> elements inside _document.tsx
export const metadata: Metadata = {
  title: "Annie He's Website",
  description: "Public health and healthcare regulation insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Google Analytics mounts seamlessly here */}
        <GoogleAnalytics gaId="G-LLWQ3HNLG9" />
        
        {/* All global providers wrap the inner child layout tree */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
