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
import Managers from "./Components/managers";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-4xl mx-auto p-6 mb-10">
      <div className="flex flex-col gap-4 justify-start mr-auto mb-4">
        <Image priority src={mainImage} width={325} height={300} alt="image" />
        <div className="">
          <h1
            className={`${chakra.className} font-bold text-5xl text-slate-600`}
          >
            Password Generator
          </h1>
          <h2 className="mt-2 font-light">
            Create secure passwords and easily copy them to your clipboard.
          </h2>
        </div>
        <Link
          href="/info"
          className="border-[#FD735B] text-slate-600 hover:bg-[#FD735B] hover:text-white hover:shadow-md border-2 px-2 py-1 rounded-lg duration-500 text-center w-[100px]"
        >
          <FontAwesomeIcon className="mr-1" icon={faInfoCircle} />
          Info
        </Link>
      </div>
      <Password />

      <div className="mt-4 flex flex-col gap-4">
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

<div className="mr-auto">
<Managers />
</div>
      
      <span className="mr-auto mt-10 text-tiny text-slate-400">Site created by M.Norris ©2024</span>
      
      
    </main>
  );
}
