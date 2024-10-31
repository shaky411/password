// utils/useCookieConsent.js
"use client";

import { useState, useEffect } from "react";
import { getCookie, setCookie, deleteCookie } from "cookies-next";

export function useCookieConsent() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consentCookie = getCookie("cookieConsent");
    if (!consentCookie) {
      setShowPopup(true); // Show on first visit
      console.log("No cookie found, showing popup on initial load.");
    } else {
      setHasConsent(consentCookie === "true");
      console.log("Consent cookie found:", consentCookie);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookieConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    setHasConsent(true);
    setShowPopup(false);
  };

  const handleDecline = () => {
    setCookie("cookieConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
    setHasConsent(false);
    setShowPopup(false);
  };

  const triggerPopup = () => {
    console.log("triggerPopup called");
    setShowPopup(true);
  };

  return { showPopup, handleAccept, handleDecline, triggerPopup };
}
