"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { pageview, initConsent, updateConsent, GA_TRACKING_ID } from '@/lib/gtag';

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Helper function to insert Google Analytics scripts dynamically
  const loadGoogleAnalyticsScripts = () => {
    if (typeof window === 'undefined' || document.getElementById('gtag-base-script')) return;
    
    const win = window as any;
    
    // 1. Safely initialize the dataLayer array
    win.dataLayer = win.dataLayer || [];

    // Use regular standard function declarations to preserve native 'arguments' objects
    const gtagProxy = function (...args: any[]) {
      // FIX: Pushing 'arguments' fixes the data structure type mapping discrepancy
      win.dataLayer.push(arguments); 
    };

    // Bind to the window context so global library functions can see it
    win.gtag = gtagProxy;

    gtagProxy('js', new Date());
    gtagProxy('config', GA_TRACKING_ID, { send_page_view: false });

    // 2. Fetch and append the external library file
    const script = document.createElement('script');
    script.id = 'gtag-base-script';
    // FIX: Corrected missing routing directory paths structure string template formatting
    script.src = `https://googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);
  };

  // 1. Initial Consent Check on Mount
  useEffect(() => {
    try {
      const cookieData = CookieConsent.getCookie();
      const acceptedCategories = cookieData?.categories || [];

      if (acceptedCategories.includes('analytics')) {
        // User already accepted previously; load GA immediately
        initConsent(true);
        loadGoogleAnalyticsScripts();
      } else {
        // User has not accepted; initialize standard safe denials
        initConsent(false);
      }
    } catch (e) {
      initConsent(false);
    }
  }, []);

  // 2. Initialize Cookie Consent Modal Config
  useEffect(() => {
    if (!document.documentElement.classList.contains('cc--is-ready')) {
      CookieConsent.run({
        guiOptions: {
          consentModal: {
            layout: 'box',
            position: 'top center',
            equalWeightButtons: true
          }
        },
        onFirstConsent: ({ cookie }) => {
          const hasAnalytics = cookie.categories.includes('analytics');
          updateConsent(hasAnalytics);

          if (hasAnalytics) {
            loadGoogleAnalyticsScripts();
            // Tiny timeout allows scripts to parse before firing the landing page view
            setTimeout(() => {
              pageview(pathname || "/");
            }, 100);
          }
        },
        onChange: ({ cookie }) => {
          const hasAnalytics = cookie.categories.includes('analytics');
          updateConsent(hasAnalytics);

          if (hasAnalytics) {
            window.location.reload(); // Reload handles immediate initialization safely
          }
        },
        categories: {
          necessary: { readOnly: true },
          analytics: {
            readOnly: false,
            enabled: false, // Default checkbox value to off
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
                description: 'This website uses cookies to only see how many people visit and how they interact with the site using Google Analytics. You can choose to accept or reject analytics cookies. For more details, read my <a href="/privacy" class="cc-link">Privacy Policy</a>.',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
              }
            } as any
          }
        }
      });
    }
  }, [pathname]);

  // 3. Track subpage route transitions
  useEffect(() => {
    if (pathname && typeof window !== 'undefined') {
      const cookieData = CookieConsent.getCookie();
      const acceptedCategories = cookieData?.categories || [];

      // Pageviews will ONLY fire if scripts exist and category is approved
      if (acceptedCategories.includes('analytics') && (window as any).gtag) {
        pageview(pathname);
      }
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
