"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { bangers, oxygen, raleway } from "../utils/fonts";

import Link from "next/link";
import { useState } from "react";

export default function Cookies() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <main className="flex flex-col items-center justify-start max-w-6xl mx-auto p-10 sm:p-10 min-h-screen">
      <div className="flex flex-col items-center justify-center gap-4 max-w-3xl">
        <h2
          className={`${bangers.className} text-5xl font-light text-slate-600`}
        >
          Cookie Policy
        </h2>

        <div className={`${raleway.className}`}>
          <p>
            We use cookies on this website to enhance your browsing experience,
            analyze site traffic, and serve personalized advertisements through
            Google Ads. Cookies help us understand user interactions and improve
            site performance by collecting data for analytics and marketing
            purposes. By continuing to use this website, you consent to our use
            of cookies for these purposes. You can manage your cookie
            preferences at any time.
          </p>

          <br />

          <p>
            Cookies are small files that websites place on your computer as you
            browse the web. Like many commercial websites, we use cookies.
            Cookies — and similar technologies — do lots of different jobs, like
            letting you navigate between pages efficiently, remembering your
            preferences, and generally improving the user experience. Cookies
            and other technologies may also be used to measure the effectiveness
            of marketing and otherwise assist us in making your use of the
            Platform and its features more relevant and useful to you.
          </p>
        </div>

        <br />

        <h2 className={`${raleway.className} font-semibold text-lg`}>
          How and Why do We Use Cookies?
        </h2>

        <div className={`${raleway.className}`}>
          <p>
            <strong>Performance and Analytics Cookies:</strong> These cookies
            allow us to count visits and traffic sources so we can measure and
            improve the performance of our Site. They help us to know which
            pages are the most and least popular and see how visitors navigate
            the Site. Performance cookies are used to help us with our
            analytics, including to compile statistics and analytics about your
            use of and interaction with the Site, including details about how
            and where our Site are accessed, how often you visit or use the
            Site, the date and time of your visits, your actions on the Site,
            and other similar traffic, usage, and trend data.
          </p>
        </div>

        <br />

        <h2 className={`${raleway.className} font-semibold text-lg`}>
          Your Choices
        </h2>

        <div className={`${raleway.className}`}>
          <p>
            You can learn more about cookies by visiting{" "}
            <Link
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.allaboutcookies.org/"
            >
              https://www.allaboutcookies.org/
            </Link>
            , which includes additional useful information on cookies and how to
            block cookies using different types of browsers. If you'd like to
            remove or disable cookies via your browser, please refer to your
            browser's configuration documentation. Please note, however, that by
            blocking or deleting all cookies used on the Site, you may not be
            able to take full advantage of the Site and you may not be able to
            properly log on to the Site. For analytics, we use Google Analytics.
            To opt out from Google Analytics, you can download a plug-in by
            visiting{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-blue-500"
              href="https://tools.google.com/dlpage/gaoptout"
            >
              https://tools.google.com/dlpage/gaoptout
            </Link>{" "}
            .
          </p>
        </div>
      </div>
    </main>
  );
}
