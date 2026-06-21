"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from 'next/navigation'; // Updated hook for the App Router
import { useEffect, useState } from 'react';
import { pageview } from '@/lib/gtag';

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Trigger page tracking whenever the App Router changes paths
  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname]);

  // Prevent server-side context hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
