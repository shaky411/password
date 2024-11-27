import Image from "next/image";
import Link from "next/link";
import pipLogo from "../../public/assets/horizontal_large.png";

export default function PIPAD() {
  return (
    <main>
      <div className="bg-[#F4EEE5] grid gap-10 grid-cols-1 items-center md:grid-cols-2 p-10 rounded-lg shadow border">
        <div className="flex flex-col gap-4">
          {/* <Image className="" src={pipLogo} width={80} alt="amazon prime logo" /> */}

          <h2 className="text-2xl font-semibold">
            Personal Independence Payment Assistance
          </h2>
          <p>
            Helping You Navigate PIP Claims with Transparent, Affordable Support
            – No Win, No Fee.
          </p>
          <Link
            className=""
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://amzn.to/3C5XP9T"
          >
            <Link
              href="https://www.pip-assist.co.uk"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mr-auto bg-[#CA5659] text-slate-100 hover:opacity-50 duration-300 px-4 w-full sm:w-[180px] py-2 border-2 rounded-full font-semibold"
            >
              More info
            </Link>
          </Link>
        </div>

        <div>
          <Image src={pipLogo} width={600} alt="amazon logo" />
        </div>
      </div>
    </main>
  );
}
