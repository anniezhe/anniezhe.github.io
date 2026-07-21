"use client"; // CRITICAL: Enables client-side click events

import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import * as CookieConsent from "vanilla-cookieconsent";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // Forces the main cookie banner back onto the viewport screen
  const handleShowBanner = () => {
    if (typeof window !== "undefined" && CookieConsent) {
      // Passing true explicitly forces vanilla-cookieconsent to open 
      // the initial consent modal instead of the preference modal.
      CookieConsent.show(true);
    }
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <div className="text-default-600">
           &copy; {currentYear}. Made in NYC by <Link href="https://github.com">yours truly</Link>! Powered by {" "}
          <Link href="https://nextui.org"> NextUI</Link>. {" "}
          <Link href="/privacy">
            Click me to see privacy policy
          </Link>. {" "}
          <Link href="#" onClick={handleShowBanner}>
            Click me to view cookie settings
          </Link>.
        </div>
      </footer>
    </div>
  );
}
