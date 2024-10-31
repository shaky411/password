import Image from "next/image";
import securitykey from "../../public/security_key.png";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { raleway, space } from "../utils/fonts";

export default function Hardware() {
  return (
    <main className="flex flex-col gap-4">
      <span className={`${raleway.className} mr-auto mt-10`}>My Hardware recommendations:</span>

      <div className="flex flex-col justify-center items-center gap-10 border p-6 rounded-lg shadow bg-gradient-to-r from-slate-400 via-slate-300 to-slate-100">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <Image
          className="hidden md:flex"
            src={securitykey}
            width={250}
            height={150}
            alt="security key image"
          />

          <p className={`${space.className}`}>
            Using a two-factor authentication (2FA) security key greatly
            enhances online security by providing robust protection against
            phishing and password theft. Unlike SMS or app-based codes, security
            keys require physical possession, making unauthorized access
            significantly harder. They are easy to use, work offline, and are
            compatible with a wide range of devices and platforms. This added
            layer of security ensures that even if your password is compromised,
            your accounts remain secure, offering peace of mind and compliance
            with stringent security standards.
          </p>
        </div>

        <Link
          href="https://www.amazon.co.uk/Yubico-Two-factor-authentication-security-certified/dp/B08DHL1YDL/ref=sr_1_5?crid=7AN8DI868Y5Y&amp;dib=eyJ2IjoiMSJ9.6mEnrMWeKBC9SREHb4zIrcm-tlYt5XW6TkAfcc1UGMdVLqlY1hDPhcp_PM6UeXg6ebRS4RQGe7pvc6SZ2CMJ5mepW-1IwCNYketmOfOsCbZtPVc-HKD2wcuA4sUdAK3g0U0fJrqB5MDYOtax_ACMkstX-AwmiCShGmT26WWJrZZKHGHBTIUw5A4BBD9NauYISHX4-sNyW6DcOJ5_lKiC1VagVbTUR5VtW_DmqxnvTUo.QFwAUoPBz5QNhx2gO_mc04yoBZkf0fgsQzCWDHyxLqk&amp;dib_tag=se&amp;keywords=password+key&amp;qid=1718119563&amp;sprefix=password+key%252Caps%252C86&amp;sr=8-5&_encoding=UTF8&tag=graygecko-21&linkCode=ur2&linkId=e1a1b0ffd94ffca2254650b64867cd51&camp=1634&creative=6738"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={`${raleway.className} text-blue-500 hover:opacity-40 duration-300 ml-auto my-2`}
        >
          <FontAwesomeIcon className="mr-1" icon={faCartShopping} />
          Purchase on Amazon UK
        </Link>
      </div>
    </main>
  );
}
