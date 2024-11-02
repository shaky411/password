import Image from "next/image";
import Link from "next/link";
import kindleSmall from "../../public/assets/kindle_title.png";

export default function KindleSmall() {
  return (
    <main>
      <div className="bg-[#222F3E] rounded-lg p-4 w-full sm:w-fit sm:ml-auto">
        <Link
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://amzn.to/3C7VJGt"
        >
          <Image
            className="mx-auto"
            src={kindleSmall}
            width={300}
            alt="amazon kindle logo"
          />
        </Link>
      </div>
    </main>
  );
}
