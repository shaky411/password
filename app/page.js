import Password from "./Components/password";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Managers from "./Components/managers";
import Hardware from "./Components/hardware";
import Hero from "./Components/hero";
import Open from "./Components/open";
import Strip from "./Components/strip";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-4xl mx-auto p-6">
      <Hero />
      <Password />

      <Strip />

      <div className="mr-auto">
        <Managers />
      </div>




      {/* <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="7kqkk5rvsfv" data-color="#FFDD00" data-emoji="🍺"  data-font="Cookie" data-text="Buy me a beer" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script> */}
      <Hardware />
      <Open />
    </main>
  );
}



