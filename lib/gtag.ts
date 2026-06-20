// lib/gtag.ts
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
export const GA_ID = publicRuntimeConfig.GA_ID;

// Send a pageview event to Google Analytics
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_ID, {
      page_path: url,
    });
  }
};

/**
 * Send a custom GA event
 */
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag && GA_ID) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
