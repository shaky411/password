import Password from "./Components/password";
import { chakra } from "./utils/fonts";
import "@fortawesome/fontawesome-svg-core/styles.css";
import mainImage from "../assets/Image-1.jpg"
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-5xl mx-auto p-4">
      <div className="flex flex-col items-start justify-center m-10">
      <Image
      src={mainImage}
      width={300}
      height={300}
      alt="image"
      />
        <div className="mt-4">
        <h1 className={`${chakra.className} font-bold text-4xl text-slate-600`}>Password Generator</h1>
        <span className="text-lg font-light">Create secure passwords and easily copy them to your clipboard.</span>
        </div>
        <Link href="/info" className="border-[#FD735B] hover:bg-[#FD735B] hover:text-white border px-2 py-1 rounded-lg mt-4 duration-500">Info</Link>
      </div>
      <Password />
      <span className="text-sm mt-4 my-10 text-rose-400"><FontAwesomeIcon className="mr-2" icon={faTriangleExclamation} />Once copied, please save the password in a secure location such as a password manager.</span>
    </main>
  );
}
