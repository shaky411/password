import Password from "./Components/password";
import { chakra } from "./utils/fonts";
import "@fortawesome/fontawesome-svg-core/styles.css";
import mainImage from "../assets/Image-1.jpg";
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faInfoCircle,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-5xl mx-auto p-4">
      <div className="flex flex-col items-start justify-center m-6">
        <Image src={mainImage} width={300} height={300} alt="image" />
        <div className="mt-4">
          <h1
            className={`${chakra.className} font-bold text-4xl text-slate-600`}
          >
            Password Generator
          </h1>
          <span className="text-lg font-light">
            Create secure passwords and easily copy them to your clipboard.
          </span>
        </div>
        <Link
          href="/info"
          className="border-[#FD735B] text-slate-600 hover:bg-[#FD735B] hover:text-white border px-2 py-1 rounded-lg mt-4 duration-500"
        >
          <FontAwesomeIcon className="mr-1" icon={faInfoCircle} />
          Info
        </Link>
      </div>
      <Password />

      <div className="max-w-2xl mt-4 flex flex-col gap-4">
        <span className="text-sm text-rose-400">
          <FontAwesomeIcon className="mr-1" icon={faTriangleExclamation} />
          Once copied, please save the password in a secure location such as a
          password manager.
        </span>
        <p className="font-light mb-10">
          In the digital age, passwords are fundamental to safeguarding your
          online presence and assets. Implementing strong password practices is
          essential for maintaining the integrity, confidentiality, and security
          of your personal and professional life on the internet.
        </p>
      </div>
    </main>
  );
}
