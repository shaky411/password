import Image from "next/image";
import Link from "next/link";
import primeImage from "../../public/assets/prime_001.png";
import primeWhite from "../../public/assets/prime_white.png";

export default function PIPAD() {
    return (
      <main>
        <div className="bg-[#222F3E] text-white grid gap-10 grid-cols-1 md:grid-cols-2 p-10 rounded-lg">
          <div className="flex flex-col gap-4">
            <Image className="" src={primeWhite} width={80} alt="amazon prime logo" />
  
            <h2 className="text-2xl font-semibold">
              Enjoy the best of shopping and entertainment with Prime
            </h2>
            <p>We're giving you 30 days of Prime for FREE!</p>
            <span className="text-sm">Only £8.99/month after free trial.</span>
            <Link
            className=""
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://amzn.to/3C5XP9T"
            >
              <button className="mr-auto bg-[#FFC403] hover:bg-orange-300 duration-300 text-[#222F3E] px-4 w-full sm:w-[180px] py-2 border-2 border-[#FF6137] rounded font-semibold">
                Try Prime
              </button>
            </Link>
          </div>
  
          <div>
            <Image src={primeImage} width={600} alt="amazon logo" />
          </div>
        </div>
      </main>
    );
  }