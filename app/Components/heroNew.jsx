import Image from "next/image";
import mainImage from "../../assets/Image-1.jpg";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { bangers, raleway, oxygen } from "../utils/fonts";

export default function HeroNew() {
  return (
    <div className="flex gap-4 items-start justify-center mb-4 bg-[url('../public/assets/password_hero.png')] bg-cover h-[600px] bg-no-repeat bg-center w-full rounded-md">
      <div className=" flex flex-col text-center p-10 md:p-20">
        <h1
          className={`${raleway.className} font-semibold text-4xl md:text-5xl lg:text-6xl text-gray-700`}
        >
          Password Generator
        </h1>
        <h2 className={`${raleway.className} text-lg mt-2 my-2`}>
          Create secure passwords and easily copy them to your clipboard.
        </h2>
        <Link href="/info"><FontAwesomeIcon size="lg" className="text-[#FD735B] hover:opacity-45 duration-300" icon={faInfoCircle} /></Link>

        {/* <div className="mx-auto mt-4 w-full">
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
          </div> */}
      </div>
    </div>
  );
}
