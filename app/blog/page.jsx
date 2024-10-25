"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { bangers, oxygen, raleway } from "../utils/fonts";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="flex flex-col items-center justify-center max-w-6xl mx-auto p-10 sm:p-10">
      <div className="flex flex-col items-center justify-between gap-4 max-w-3xl text-center min-h-screen">
        <div>
          <h2
            className={`${bangers.className} text-5xl font-light text-slate-600`}
          >
            Blog
          </h2>
          <p className={`${raleway.className} font-light mt-4 mb-10`}>
            Follow along as I share insights on what I'm learning, the waves I'm
            catching, and the paths I'm navigating.
          </p>

          <span className={`${raleway.className} text-5xl text-gray-600`}>Page coming November 2024!</span>
        </div>
      </div>

      {/* I want to have an image, blog title, blog subtitle, the body text, date time and posted by. I also want to have a like counter. On the individual id page I want a share story option */}
      {/* Next iteration will have a comments field */}

      {/* <Link
        className={`${oxygen.className} my-10 mr-auto bg-blue-500 hover:opacity-50 duration-400 px-4 py-2 text-white rounded`}
        href="/"
      >
        &larr; Back
      </Link> */}
    </main>
  );
}
