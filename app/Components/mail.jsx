import { Chakra_Petch } from "next/font/google";
import { chakra, bangers } from "../utils/fonts";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Email() {
  return (
    <main id="contact" className="flex flex-col justify-center items-center gap-4 mt-4 bg-slate-100 max-w-5xl w-full rounded-lg p-10 shadow-md border">
      <h2 className={`${bangers.className} text-gray-600 text-3xl`}>Get in Touch</h2>
      <p className="text-center">For all enquiries, please reach out through the link below.</p>
      <Link
        className="text-xl sm:text-5xl text-pink-500 hover:text-pink-800 duration-400 bg-white p-5 shadow-inner rounded-xl border w-full text-center"
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://github.com/shaky411"
      >
        <FontAwesomeIcon className="mr-2" icon={faGithub} />
        Github
      </Link>
    </main>
  );
}
