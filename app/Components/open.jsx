import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import githubImage from "../../assets/github.png";
import { oxygen, space } from "../utils/fonts";

export default function Open() {
  return (
    <main>
      <div className="flex flex-col sm:flex-row bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 p-10 rounded-lg justify-center items-center border gap-5 shadow my-4">
        <Image src={githubImage} width={200} height={200} alt="github logo" />

        <div className="sm:w-1/2 flex flex-col gap-4">
          <p className={`${space.className} text-center`}>
            I believe in transparency when working with sensitive information
            which is why I have decided to make this password generator{" "}
            <strong>open source</strong>.
          </p>

          <div className="mx-auto w-full sm:w-fit">
            <Link
              aria-label="link to my github profile"
              href="https://github.com/shaky411/password.git"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`${oxygen.className} text-center relative inline-block group py-2 px-3 w-full`}
            >
              <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-indigo-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-indigo-500 border border-indigo-800 group-hover:bg-indigo-400"></span>
              <span className="relative text-white ">View Code</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
