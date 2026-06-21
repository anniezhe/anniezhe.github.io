"use client";

import React, { useEffect } from "react";
import Script from "next/script";

interface CalendlyEmbedProps {
  url: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url }) => {
  useEffect(() => {
    // Force Calendly to re-scan and initialize the widget when the component mounts
    // @ts-ignore
    if (window.Calendly && typeof window.Calendly.initInlineWidget === "function") {
      // @ts-ignore
      window.Calendly.initInlineWidget({
        url: url,
        parentElement: document.querySelector(".calendly-inline-widget"),
      });
    }
  }, [url]);

  return (
    <div className="w-full">
      {/* Next.js built-in asynchronous Script loader */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      
      <div
        className="calendly-inline-widget rounded-lg border border-divider overflow-hidden"
        data-url={url}
        style={{ height: "450px", width: "100%" }}
      />
    </div>
  );
};

export default CalendlyEmbed;
