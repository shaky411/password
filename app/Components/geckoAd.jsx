import Image from "next/image";
import Link from "next/link";
import pipLogo from "../../public/assets/horizontal_large.png";
import geckoLogo from "../../public/assets/gecko3d_logo.png";

export default function GeckoAd() {
  return (
    <main>
      <div className="bg-[#3A4536] grid gap-10 border-[#FF3483] grid-cols-1 items-center md:grid-cols-2 p-10 rounded-lg shadow border-2">
        <div className="flex flex-col gap-4">
          {/* <Image className="" src={pipLogo} width={80} alt="amazon prime logo" /> */}

          <h2 className="text-2xl font-semibold text-[#FFE2B8]">
            Octopus Home Mini Cradle
          </h2>
          <p className="text-white">
          Octopus Home Mini Mount | 3D Printed Cable-Free Hub Holder
          </p>
            <Link
              href="https://aniwall.etsy.com/uk/listing/1873377830/octopus-home-mini-mount-3d-printed-cable"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-center bg-[#FF3483] text-slate-100 hover:opacity-50 duration-300 px-4 w-full sm:w-[180px] py-2 rounded-full shadow-md font-semibold"
            >
              More info
            </Link>
        </div>

        <div>
          <Image src={geckoLogo} width={300} alt="amazon logo" />
        </div>
      </div>
    </main>
  );
}
