"use client";

import Link from "next/link";
import dayjs from "dayjs";
import { oxygen } from "../utils/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faCookie } from "@fortawesome/free-solid-svg-icons";
import { useCookieConsent } from "../utils/useCookieConsent";
import FirstVisitPopup from "./firstVisitPopup";

export default function Footer() {
  const currentYear = dayjs().format("YYYY");
  const { showPopup, handleAccept, handleDecline, triggerPopup } =
    useCookieConsent();

  return (
    <footer className={`${oxygen.className} relative`}>
      <main className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto mb-10 p-6">
        <div className="sm:mr-auto">
          <span className="mr-2 text-tiny text-slate-400">
            Site powered by{" "}
            <Link
              className="font-semibold"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://nextjs.org/"
            >
              NextJS
            </Link>{" "}
            &copy; {currentYear}
          </span>
        </div>

        <span className="text-tiny text-slate-400">
          Main hero image created by{" "}
          <Link
            href="https://www.freepik.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <strong>Freepik</strong>
          </Link>
        </span>

        <div className="text-slate-400 hover:text-gray-700 duration-300 text-sm mt-4 sm:mt-0 sm:ml-2 border p-2">
          <span className="mr-2">Update Cookies</span>
          <button onClick={triggerPopup}>
            <FontAwesomeIcon size="lg" icon={faCookie} />
          </button>
        </div>
      </main>

      <FirstVisitPopup
        showPopup={showPopup}
        handleAccept={handleAccept}
        handleDecline={handleDecline}
      />
    </footer>
  );
}
