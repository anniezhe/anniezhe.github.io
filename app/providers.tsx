"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from 'next/navigation'; // Updated hook for the App Router
import { useEffect, useState } from 'react';
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { pageview, initConsent, updateConsent } from '@/lib/gtag';

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  // Initialize cookie consent once on mount
  // 1. Set Google Analytics default state immediately on the client side
  useEffect(() => {
    initConsent();
  }, []);

  // 2. Initialize Cookie Consent Modal
  useEffect(() => {
    if (!document.documentElement.classList.contains('cc--is-ready')) {
      CookieConsent.run({
        // Hide the preferences toggle button from the layout
        guiOptions: {
          consentModal: {
            layout: 'box',
            position: 'bottom right',
            equalWeightButtons: true
          }
        },
        // Fire when the user makes their selection for the first time
        onFirstConsent: ({ cookie }) => {
          const hasAnalytics = cookie.categories.includes('analytics');
          updateConsent(hasAnalytics);

          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('consent', 'update', {
              'analytics_storage': hasAnalytics ? 'granted' : 'denied'
            });
          }
        },

        // Fire whenever the user modifies their selections later
        onChange: ({ cookie }) => {
          const hasAnalytics = cookie.categories.includes('analytics');
          updateConsent(hasAnalytics);

          if (typeof window !== 'undefined') {
            // 1. Send the updated token to Google's data layer
            if ((window as any).gtag) {
              (window as any).gtag('consent', 'update', {
                'analytics_storage': hasAnalytics ? 'granted' : 'denied'
              });
            }

            // 2. FORCE COCKPIT RE-LOAD ON RE-ACCEPTANCE
            // If they turned cookies BACK on, a hard reload fires the NextJS third-party 
            // engine fresh, prompting Google to generate the _ga strings immediately!
            if (hasAnalytics) {
              window.location.reload();
            }
          }
        },



        categories: {
          necessary: { readOnly: true },
          analytics: {
            readOnly: false,
            autoClear: {
              cookies: [
                { name: /^(_ga)/, domain: window.location.hostname },
                { name: /^(_ga)/, domain: `.${window.location.hostname}` },
                { name: '_gid', domain: window.location.hostname },
                { name: '_gid', domain: `.${window.location.hostname}` }
              ]
            }
          }
        },
        language: {
          default: 'en',
          translations: {
            en: {
              consentModal: {
                title: 'This website wants to tell you something very important!',
                description: 'This website uses cookies to only see how many people visit and how they interact with the site using Google Analytics. You can choose to accept or reject analytics cookies. For more details, read my [Privacy Policy](/privacy).',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
              }
            } as any
          }
        }
      });
    }
  }, []);
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
