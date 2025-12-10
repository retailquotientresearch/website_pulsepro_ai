"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import Calendly widget to avoid SSR/window issues
const InlineWidget = dynamic(
  () => import("react-calendly").then((m) => m.InlineWidget),
  { ssr: false }
);

type CalendlyWidgetProps = {
  url?: string;
  height?: number | string;
  className?: string;
};

export default function CalendlyWidget({
  url,
  height = 600,
  className,
}: CalendlyWidgetProps) {
  const calendlyUrl =
    url || process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/pulsepro/web-30-minutes";

  // Only set inline height when explicitly provided; otherwise allow CSS classes (Tailwind) to control height
  const containerStyle: React.CSSProperties | undefined =
    height !== undefined
      ? { height: typeof height === "number" ? `${height}px` : height }
      : undefined;

  return (
  <div className={className} style={containerStyle}>
      <InlineWidget
        url={calendlyUrl}
        styles={{ height: "100%", minWidth: "900px", width: "100%" }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "1A7D3D",
          textColor: "4d5055",
        }}
        prefill={{
          name: "",
          email: "",
          customAnswers: { a1: "PulsePro Website Demo Request" },
        }}
        utm={{
          utmCampaign: "demo-booking",
          utmSource: "website",
          utmMedium: "book-demo-page",
        }}
      />
    </div>
  );
}
