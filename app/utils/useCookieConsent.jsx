import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useState, useEffect } from "react";

export function useCookieConsent() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consentCookie = getCookie("cookieConsent");
    if (!consentCookie) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookieConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    setShowPopup(false);
  };

  const handleDecline = () => {
    setCookie("cookieConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
    setShowPopup(false);
  };

  const handleClearConsent = () => {
    deleteCookie("cookieConsent");
    setShowPopup(false);
  };

  const triggerPopup = () => {
    setShowPopup(true);
  };

  return {
    showPopup,
    handleAccept,
    handleDecline,
    handleClearConsent,
    triggerPopup,
  };
}
