import Image from "next/image";
import Link from "next/link";
import { bangers, raleway } from "../utils/fonts";
import MetadataComponent from "../utils/metadata";

export const metadata = MetadataComponent({
    title: "Information for creating strong secure passwords",
  description: "Useful information for creating secure passwords to protect your data and online security",
  keywords: "info, passwords, information",
  canonicalUrl: "https://www.passwordmanager.org.uk/info",
  openGraphTitle: "Creating Secuure Passwords",
  openGraphDescription: "Useful information for creating secure passwords",
});

export default function About() {
  return (
    <main className="flex flex-col items-center justify-start max-w-6xl mx-auto p-10 sm:p-10 min-h-screen">
      <div className="flex flex-col items-center justify-center gap-4 max-w-3xl text-center">
        <h1
          className={`${bangers.className} text-5xl font-light text-slate-600`}
        >
          About
        </h1>
        <p className={`${raleway.className} font-light`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          laboriosam aliquam adipisci, architecto obcaecati accusantium, ea fuga
          esse dolor consequuntur aliquid quos quasi tenetur officia libero
          facere nesciunt suscipit! A magnam, distinctio minima voluptatibus
          earum placeat sed nihil corrupti harum non porro. Ipsa sed harum,
          sapiente ducimus expedita veritatis consequatur!
        </p>
      </div>

      <div className="my-10 mr-auto">
        <Link
          href="/"
          className="relative inline-block font-medium group py-1.5 px-2.5 "
        >
          <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-indigo-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
          <span className="relative text-indigo-600 ">&larr; back</span>
        </Link>
      </div>
    </main>
  );
}
 