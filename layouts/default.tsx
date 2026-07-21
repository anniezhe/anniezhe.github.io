"use client"; 
import { Link } from "@nextui-org/link";
import { Navbar } from "@/components/navbar";
import * as CookieConsent from "vanilla-cookieconsent";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // Forces the main cookie banner back onto the viewport screen
  const handleShowBanner = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents the "#" link from jumping the mobile scroll position back to top
    if (typeof window !== "undefined" && CookieConsent) {
      // Passing true explicitly forces vanilla-cookieconsent to open 
      // the initial consent modal instead of the preference modal.
      CookieConsent.show(true);
    }
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Fixed: Custom Head removed to avoid duplicate metadata conflicts */}
      <Navbar />
      
      {/* 
        Fixed: Main layout now uses safe-x to prevent the notch 
        from cutting into text content if a user views in landscape mode
      */}
      <main className="container mx-auto max-w-[90%] max-w-7xl px-8 md:px-6 safe-x flex-grow pt-16">
        {children}
      </main>
      
      <footer className="w-full border-t border-divider bg-content1">
        {/* 
          Fixed: Added safe-bottom, safe-x, padding, and centered text 
          so it looks balanced and remains fully tappable on mobile screens
        */}
        <div className="safe-bottom safe-x mx-auto max-w-[90%] max-w-7xl px-8 md:px-6 py-4 text-center md:text-left text-medium text-default-600 leading-relaxed">
           &copy; {currentYear}. Made in NYC by <Link href="https://github.com">yours truly</Link>! Powered by {" "}
          <Link href="https://nextjs.org/">Next.js</Link>. {" "}
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
