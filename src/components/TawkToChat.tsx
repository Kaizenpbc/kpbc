"use client";

import Script from "next/script";

export default function TawkToChat() {
  const tawkPropertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
  const tawkWidgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || "default";

  if (!tawkPropertyId) return null;

  return (
    <Script
      id="tawk-to"
      strategy="lazyOnload"
      src={`https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`}
      crossOrigin="anonymous"
    />
  );
}
