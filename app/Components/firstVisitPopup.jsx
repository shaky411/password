"use client";

import { bangers, raleway } from "../utils/fonts";

export default function FirstVisitPopup({
  showPopup,
  handleAccept,
  handleDecline,
}) {
  if (!showPopup) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-slate-200 opacity-80 p-10 rounded-lg border shadow-xl w-full sm:w-1/3 lg:w-1/4">
        <h2 className={`${bangers.className} text-2xl text-slate-600 mb-4`}>Cookies Consent</h2>
      <p className={`${raleway.className} text-gray-800 font-semibold`}>
        This website uses cookies to help you have a superior and more admissible browsing experience on the website.
      </p>

      <div className="my-4 flex flex-col">
        <div className="ml-auto">
          <button
            onClick={handleAccept}
            className="relative inline-block font-medium group py-1.5 px-2.5 w-[100px]"
          >
            <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-green-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border border-green-600 group-hover:bg-indigo-50"></span>
            <span className="relative text-green-600">Accept</span>
          </button>
        </div>

        <div className="my-4 ml-auto">
          <button
            onClick={handleDecline}
            className="relative inline-block font-medium group py-1.5 px-2.5 w-[100px]"
          >
            <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-rose-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border border-rose-600 group-hover:bg-rose-50"></span>
            <span className="relative text-rose-600">Decline</span>
          </button>
        </div>
      </div>
    </div>
  );
}
