"use client";

import { useEffect } from "react";

export default function TawkToChat() {
  const tawkPropertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
  const tawkWidgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || "default";

  useEffect(() => {
    if (!tawkPropertyId) return;

    try {
      // @ts-expect-error - Tawk_API is a global
      window.Tawk_API = window.Tawk_API || {};
      // @ts-expect-error - Tawk_API is a global
      window.Tawk_API.onLoad = function () {
        // @ts-expect-error - Tawk_API is a global
        window.Tawk_API.minimize();
      };

      const script = document.createElement("script");
      script.src = `https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`;
      script.async = true;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "anonymous");
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } catch {
      // Silently fail - chat widget is non-critical
    }
  }, [tawkPropertyId, tawkWidgetId]);

  return null;
}
