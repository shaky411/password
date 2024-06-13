import Image from "next/image";
import passwordImage from "../../public/1password.jpg";
import dashlane from "../../public/dashlane.jpg";
import Link from "next/link";

export default function Managers() {
  return (
    <main className="flex flex-col gap-4 mt-10">
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
            className=""
            src={passwordImage}
            width={200}
            height={200}
            alt="1 Password Logo"
          />
        </Link>

        <Link
          className="hover:scale-110 duration-300"
          href="https://www.dashlane.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <Image src={dashlane} width={200} height={200} alt="dashlane logo" />
        </Link>
      </div>
    </main>
  );
}
