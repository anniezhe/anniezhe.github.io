// @/lib/gtag.ts

// Read the GA ID from environment variables, fallback if needed
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-LLWQ3HNLG9';

// Safe helper to grab global gtag command queue
const getGtag = () => {
  if (typeof window === 'undefined') return null;
  const win = window as any;
  win.dataLayer = win.dataLayer || [];
  
  // Return the native window.gtag function if it exists, otherwise create a proper proxy
  if (win.gtag) return win.gtag;
  
  return function(...args: any[]) {
    // Google's dataLayer loader reads values natively from the standard arguments format
    win.dataLayer.push(arguments); 
  };
};

// Initialize Google Analytics dataLayer securely
export const initConsent = (granted = false) => {
  const gtag = getGtag();
  if (!gtag) return;
  
  // Force default state to denied unless explicitly passed true
  gtag('consent', 'default', {
    'analytics_storage': granted ? 'granted' : 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied'
  });
};

// Update consent state dynamically when accepted
export const updateConsent = (granted: boolean) => {
  const gtag = getGtag();
  if (!gtag) return;

  gtag('consent', 'update', {
    'analytics_storage': granted ? 'granted' : 'denied',
    'ad_storage': granted ? 'granted' : 'denied',
    'ad_user_data': granted ? 'granted' : 'denied',
    'ad_personalization': granted ? 'granted' : 'denied'
  });
};

// Track manual page views only when explicitly invoked
export const pageview = (url: string) => {
  if (typeof window === 'undefined') return;
  
  const win = window as any;
  if (!win.gtag) return;
  
  // Fire explicit page config updates using the matching unified tracking ID variable
  win.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
