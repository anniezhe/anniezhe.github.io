import * as React from "react";
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { pageview } from '@/lib/gtag';
export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname]);
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class" // adds class="light" or "dark" to <html>
        defaultTheme="system" // use system preference by default
        enableSystem={true}   // allow automatic switching
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>

  )
}

