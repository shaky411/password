// components/ClientAnalytics.js
"use client";

import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { getCookie } from "cookies-next";

export default function ClientAnalytics() {
  useEffect(() => {
    // Sync the 'va-disable' flag in localStorage with cookie consent on page load
    const consentStatus = getCookie("cookieConsent");
    if (consentStatus === "false") {
      localStorage.setItem("va-disable", "true");
    } else if (consentStatus === "true") {
      localStorage.removeItem("va-disable");
    }
  }, []);

  return (
    <Analytics
      beforeSend={(event) => {
        // Check localStorage for the 'va-disable' flag
        if (localStorage.getItem("va-disable")) {
          return null; // Block analytics event if opt-out is active
        }
        return event;
      }}
    />
  );
}
