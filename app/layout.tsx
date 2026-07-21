import type { Metadata, Viewport } from "next";
import Providers from "./providers";
import { GoogleAnalytics } from '@next/third-parties/google';
import '@/styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { siteConfig } from "@/config/site";

config.autoAddCss = false;

// 1. Handles titles, descriptions, and OpenGraph for mobile sharing
export const metadata: Metadata = {
  metadataBase: new URL('https://www.anniezhe.com'),
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // Standard browser tab icon
      { url: "/AH_192x192.png", type: "image/png", sizes: "192x192" }, // For Android Chrome home screen shortcuts
      { url: "/AH_512x512.png", type: "image/png", sizes: "512x512" } // Android splash screen
    ],
    apple: "/AH_180x180.png", // Recommended for iOS home screen
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  other: {
    "mobile-web-app-capable": "yes", // Instructs Android Chrome to run in app-like fullscreen mode
    "application-name": siteConfig.name, // The home screen name for installed Android apps
  }
};

// 2. Handles mobile device scaling and notches
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover", // Essential for full-screen notch devices
  // Dynamically colors the browser chrome border based on dark/light settings
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }, // Matches dark mode themes
  ], // Colors the mobile browser address bar
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
