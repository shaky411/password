import Password from "./Components/password";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Managers from "./Components/managers";
import Hardware from "./Components/hardware";
import Hero from "./Components/hero";
import Open from "./Components/open";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-4xl mx-auto p-6">
      <Hero />
      <Password />

      <span className="text-sm text-rose-400 mr-auto mt-2">
        <FontAwesomeIcon className="mr-1" icon={faTriangleExclamation} />
        Once copied, please save the password in a secure location such as a
        password manager.
      </span>

      <div className="bg-violet-500 text-white rounded-lg p-6 mt-10">
        <p className="">
          In the digital age, passwords are fundamental to safeguarding your
          online presence and assets. Implementing strong password practices is
          essential for maintaining the integrity, confidentiality, and security
          of your personal and professional life on the internet.
        </p>
      </div>

      <div className="mr-auto">
        <Managers />
      </div>

      <Hardware />

      <Open />
    </main>
  );
}
