import Image from "next/image"
import mainImage from "../../assets/Image-1.jpg"
import { chakra } from "../utils/fonts"
import Link from "next/link"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mr-auto mb-4">
        <Image className="" priority src={mainImage} width={325} height={300} alt="image"/>
        <div className="flex flex-col">
          <h1
            className={`${chakra.className} font-bold text-5xl text-slate-600`}
          >
            Password Generator
          </h1>
          <h2 className="mt-2 font-light">
            Create secure passwords and easily copy them to your clipboard.
          </h2>

          <Link
          href="/info"
          className="border-[#FD735B] text-slate-600 hover:bg-[#FD735B] hover:text-white hover:shadow-md border-2 px-2 py-1 mt-2 rounded-lg duration-500 text-center w-[150px]"
        >
          <FontAwesomeIcon className="mr-1" icon={faInfoCircle} />
          Info
        </Link>
        </div>
      </div>
    )
}