import * as React from "react";
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
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

