import Link from "next/link";
import dayjs from "dayjs";
import { oxygen } from "../utils/fonts";

export default function Footer() {

  const currentYear = dayjs().format('YYYY');

  return (
    <main className={`${oxygen.className} flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto mb-10 p-6`}>
      <div className="sm:mr-auto">
        <span className="mr-2 text-tiny text-slate-400">
          Site created by <strong>GrayGecko</strong> &copy; {currentYear}
        </span>
        {/* <Link
          className="bg-slate-100 hover:opacity-40 duration-300 px-4 py-2 mr-auto mt-4 rounded-full border text-sm font-semibold text-blue-500"
          href="https://www.graygecko.co.uk"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          GrayGecko Web Design
        </Link> */}
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
    </main>
  );
}
