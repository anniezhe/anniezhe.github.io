"use client";

import React from "react";
import Cal from "@calcom/embed-react";

interface CalComEmbedProps {
  /** 
   * The question mark makes this optional, fixing your page.tsx build error!
   */
  calLink?: string; 
}

const CalComEmbed: React.FC<CalComEmbedProps> = ({ calLink = "anniezhe0/discovery" }) => {
  return (
    <div className="w-full rounded-lg border border-divider overflow-hidden">
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "450px", overflow: "scroll" }}
        config={{ 
          layout: "month_view",
        }}
      />
    </div>
  );
};

export default CalComEmbed;
