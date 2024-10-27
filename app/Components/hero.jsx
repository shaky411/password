import Image from "next/image";
import mainImage from "../../assets/Image-1.jpg";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { bangers, raleway, oxygen } from "../utils/fonts";

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-4">
      <Image
        className=""
        priority
        src={mainImage}
        width={325}
        height={300}
        alt="image"
      />
      <div className="flex flex-col items-center text-center">
        <h1
          className={`${bangers.className} text-4xl md:text-7xl lg:text-8xl text-slate-600 drop-shadow-md`}
        >
          Password Generator
        </h1>
        <h2 className={`${raleway.className} mt-2 font-light`}>
          Create secure passwords and easily copy them to your clipboard.
        </h2>

        <div className="mx-auto mt-4 w-full">
          <Link
            href="/info"
            className={`${oxygen.className} text-center relative inline-block group py-2 px-3 w-full`}
          >
            <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-orange-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border border-orange-800 group-hover:bg-orange-100"></span>
            <span className="relative text-[#FD735B] ">
              <FontAwesomeIcon className="mr-2" icon={faInfoCircle} />
              Info
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
