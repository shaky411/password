import Password from "./Components/password";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Managers from "./Components/managers";
import Hardware from "./Components/hardware";
import Hero from "./Components/hero";
import Open from "./Components/open";
import Strip from "./Components/strip";
import Contact from "./Components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-4xl mx-auto p-6">
      <Hero />
      <Password />

      <Strip />

      <div className="mr-auto">
        <Managers />
      </div>

      <Hardware />
      <Open />
      {/* <Contact /> */}
    </main>
  );
}