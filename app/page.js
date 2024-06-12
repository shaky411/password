import Password from "./Components/password";
import { chakra } from "./utils/fonts";
import "@fortawesome/fontawesome-svg-core/styles.css";
import mainImage from "../assets/Image-1.jpg";
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faInfo,
  faInfoCircle,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Managers from "./Components/managers";
import securitykey from "../public/security_key.jpg";

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
        <p className="font-light">
          In the digital age, passwords are fundamental to safeguarding your
          online presence and assets. Implementing strong password practices is
          essential for maintaining the integrity, confidentiality, and security
          of your personal and professional life on the internet.
        </p>
      </div>

      <span className="mr-auto mt-10">My Hardware recommendations:</span>

      <div className="flex mt-5 flex-col sm:flex-row justify-center items-center mr-auto gap-10 border p-6 rounded-lg shadow">
        <Image
          src={securitykey}
          width={150}
          height={150}
          alt="security key image"
        />

        <p className="font-light">
          Using a two-factor authentication (2FA) security key greatly enhances
          online security by providing robust protection against phishing and
          password theft. Unlike SMS or app-based codes, security keys require
          physical possession, making unauthorized access significantly harder.
          They are easy to use, work offline, and are compatible with a wide
          range of devices and platforms. This added layer of security ensures
          that even if your password is compromised, your accounts remain
          secure, offering peace of mind and compliance with stringent security
          standards.
        </p>
      </div>

      <Link
        href="https://www.amazon.co.uk/Yubico-Two-factor-authentication-security-certified/dp/B08DHL1YDL/ref=sr_1_5?crid=7AN8DI868Y5Y&amp;dib=eyJ2IjoiMSJ9.6mEnrMWeKBC9SREHb4zIrcm-tlYt5XW6TkAfcc1UGMdVLqlY1hDPhcp_PM6UeXg6ebRS4RQGe7pvc6SZ2CMJ5mepW-1IwCNYketmOfOsCbZtPVc-HKD2wcuA4sUdAK3g0U0fJrqB5MDYOtax_ACMkstX-AwmiCShGmT26WWJrZZKHGHBTIUw5A4BBD9NauYISHX4-sNyW6DcOJ5_lKiC1VagVbTUR5VtW_DmqxnvTUo.QFwAUoPBz5QNhx2gO_mc04yoBZkf0fgsQzCWDHyxLqk&amp;dib_tag=se&amp;keywords=password+key&amp;qid=1718119563&amp;sprefix=password+key%252Caps%252C86&amp;sr=8-5&_encoding=UTF8&tag=graygecko-21&linkCode=ur2&linkId=e1a1b0ffd94ffca2254650b64867cd51&camp=1634&creative=6738"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="text-blue-500 hover:opacity-40 duration-300 ml-auto my-4"
      >
        <FontAwesomeIcon className="mr-1" icon={faCartShopping} />
        Purchase on Amazon UK
      </Link>

      <div className="mr-auto">
        <Managers />
      </div>

      <div className="mt-10 mr-auto">
        <span className="mr-2 text-tiny text-slate-400">Site created by</span>
        <Link
          className="bg-slate-100 hover:opacity-40 duration-300 px-4 py-2 mr-auto mt-4 rounded-full border text-sm font-semibold text-blue-500"
          href="https://www.graygecko.co.uk"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          GrayGecko Web Design
        </Link>
      </div>
    </main>
  );
}
