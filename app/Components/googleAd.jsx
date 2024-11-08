"use client"

// components/GoogleAd.js
import { useEffect } from 'react';

const GoogleAd = ({ adSlot, className = '', style = {} }) => {
  useEffect(() => {
    // Ensure Google Ads script is only loaded once on the page
    if (typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsense error:", e);
      }
    }
  }, []);

  return (
    <>
      {/* Google AdSense script */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6386565516888254"
              crossOrigin="anonymous"></script>
      {/* Ad unit */}
      <ins
        className={`adsbygoogle ${className} flex gap-5`}
        style={{
          display: 'block',
          minWidth: '250px',    // Set a minimum width for the ad container
          minHeight: '250px',   // Set a minimum height for the ad container
          ...style
        }}
        data-ad-client="ca-pub-6386565516888254"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

export default GoogleAd;
