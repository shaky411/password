import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import githubImage from "../../assets/github.png";

export default function Open() {
  return (
    <main>
      <div className="flex flex-col sm:flex-row bg-slate-100 p-10 rounded-lg justify-center items-center border gap-5 shadow mt-4">
        <Image src={githubImage} width={200} height={200} alt="github logo" />

        <div className="sm:w-1/2 flex flex-col gap-4">
          <p>
            I believe in transparency when working with sensitive information
            which is why I have decided to make this password generator, <strong>open
            source</strong> .
          </p>

          <Link
            className="bg-indigo-500 hover:opacity-40 duration-300 w-full text-center sm:w-fit px-4 py-2 rounded-full text-white mx-auto"
            href="https://github.com/shaky411/password.git"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            View Code
          </Link>
        </div>
      </div>
    </main>
  );
}
