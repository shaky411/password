import Link from "next/link";
import Image from "next/image";
import kindleImage from "../../public/assets/kindle_background.jpg";
import kindleTitle from "../../public/assets/kindle_title.png";

export default function Kindle() {
  return (
    <main>
      <div className="bg-[#222F3E] text-white grid gap-10 grid-cols-1 md:grid-cols-2 p-10 rounded-lg mt-10">
        <div className="flex justify-between flex-col gap-4">
          <div className="space-y-8">
            <Image
              className="mx-auto"
              src={kindleTitle}
              width={280}
              alt="amazon kindle"
            />

            <h2 className="text-xl font-semibold">
              Explore millions of books, thousands of audiobooks and selected
              magazine subscriptions on any device.
            </h2>
          </div>

          <Link
            className="w-full"
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://amzn.to/3C7VJGt"
          >
            <button className=" bg-[#FFC403] hover:bg-orange-300 duration-300 text-[#222F3E] px-4 py-2 w-full border-2 border-[#FF6137] rounded font-semibold">
              Start your 30 day free trial - pay later
            </button>
          </Link>
        </div>

        <div>
          <Image src={kindleImage} width={600} alt="amazon kindle image" />
        </div>
      </div>
    </main>
  );
}
