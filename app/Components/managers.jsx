import Image from "next/image";
import passwordImage from "../../public/1password.jpg";
import dashlane from "../../public/dashlane.jpg";
import nordpass from "../../assets/nordpass.png";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { raleway } from "../utils/fonts";

export default function Managers() {
  return (
    <main className={`${raleway.className} flex flex-col gap-4 my-10`}>
      <div>
        <h2>My Password Manager recommendations:</h2>
      </div>

      <div className="flex gap-5">
        <Link
          className="hover:scale-110 duration-300"
          href="https://www.1password.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <Image
            src={passwordImage}
            width={200}
            height={200}
            alt="1 Password company logo"
            placeholder="blur"
          />
        </Link>

        <Link
          className="hover:scale-110 duration-300"
          href="https://www.dashlane.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <Image
            src={dashlane}
            width={200}
            height={200}
            alt="dashlane company logo"
            placeholder="blur"
          />
        </Link>

        <Link
          className="hover:scale-110 duration-300 border"
          href="https://www.nordpass.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <Image
            src={nordpass}
            width={200}
            height={200}
            alt="nordpass company logo"
            placeholder="blur"
          />
        </Link>
      </div>

      <div className="flex items-center justify-center text-sm text-rose-400">
        <p>
          <FontAwesomeIcon className="mr-1" icon={faTriangleExclamation} /> For
          ultimate security, I suggest using the password generators provided
          with your password manager.
        </p>
      </div>
    </main>
  );
}
