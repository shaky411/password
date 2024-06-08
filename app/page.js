import Image from "next/image";
import Password from "./Components/password";
import { lora } from "@/app/utils/fonts";
import { chakra } from "./utils/fonts";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-5xl mx-auto p-4">
      <div className="flex items-center justify-center m-10 text-4xl font-medium">
      <h1 className={`${chakra.className} font-bold text-slate-600`}>Password Generator</h1>
      </div>
      <Password />
    </main>
  );
}
