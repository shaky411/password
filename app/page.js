import Password from "./Components/password";
import { chakra } from "./utils/fonts";
import "@fortawesome/fontawesome-svg-core/styles.css";
import mainImage from "../assets/Image-1.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-5xl mx-auto p-4">
      <div className="flex flex-col items-start justify-center m-10">
      <Image
      src={mainImage}
      width={300}
      height={300}
      alt="image"
      />
        <div className="mt-4">
        <h1 className={`${chakra.className} font-bold text-4xl text-slate-600`}>Password Generator</h1>
        <span className="text-lg font-light">Create secure passwords and easily copy them to your clipboard.</span>
        </div>
      </div>
      <Password />
      <span className="text-sm mt-4 my-10 text-rose-500">Once copied, please save the password in a secure location such as a password manager.</span>
    </main>
  );
}
