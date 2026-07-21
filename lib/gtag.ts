// @/lib/gtag.ts

// Initialize Google Analytics dataLayer securely
export const initConsent = () => {
  if (typeof window === 'undefined') return;
  
  const win = window as any;
  win.dataLayer = win.dataLayer || [];
  
  function gtag(...args: any[]) {
    win.dataLayer.push(args);
  }
  
  // Set default state to denied until user chooses
  gtag('consent', 'default', {
    'analytics_storage': 'denied'
  });
};

// Update consent state dynamically when accepted
export const updateConsent = (granted: boolean) => {
  if (typeof window === 'undefined') return;
  
  const win = window as any;
  win.dataLayer = win.dataLayer || [];
  
  function gtag(...args: any[]) {
    win.dataLayer.push(args);
  }

  gtag('consent', 'update', {
    'analytics_storage': granted ? 'granted' : 'denied'
  });
};

// Your existing pageview function
export const pageview = (url: string) => {
  if (typeof window === 'undefined') return;
  
  const win = window as any;
  if (!win.gtag) return;
  
  win.gtag('config', 'G-LLWQ3HNLG9', {
    page_path: url,
  });
};
