import Password from "./Components/password";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Managers from "./Components/managers";
import Hardware from "./Components/hardware";
import Hero from "./Components/hero";
import Open from "./Components/open";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-4xl mx-auto p-6 mb-10">
      <Hero />
      <Password />

      <span className="text-sm text-rose-400 mr-auto mt-2">
        <FontAwesomeIcon className="mr-1" icon={faTriangleExclamation} />
        Once copied, please save the password in a secure location such as a
        password manager.
      </span>

      <div className="bg-violet-500 text-white rounded-lg p-6 mt-10">
        <p className="">
          In the digital age, passwords are fundamental to safeguarding your
          online presence and assets. Implementing strong password practices is
          essential for maintaining the integrity, confidentiality, and security
          of your personal and professional life on the internet.
        </p>
      </div>

      <div className="mr-auto">
        <Managers />
      </div>

      <Hardware />

      <Open />

      <div className="mt-10 mr-auto">
        <span className="mr-2 text-tiny text-slate-400">
          Site created by <strong>GrayGecko</strong> ©2024
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
    </main>
  );
}
