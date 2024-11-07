import Password from "./Components/password";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Managers from "./Components/managers";
import Hardware from "./Components/hardware";
import Hero from "./Components/hero";
import Open from "./Components/open";
import Strip from "./Components/strip";
import Profile from "./Components/profile";
import Prime from "./Components/prime";
import PrimeVideo from "./Components/primeVideo";
import Kindle from "./Components/kindle";
import GoogleAd from "./Components/googleAd";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-4xl mx-auto p-6 sm:p-10">
      <Hero />
      <Password />

      <Strip />

      <div className="mr-auto">
        <Managers />
      </div>
      {/* <Prime /> */}
      <PrimeVideo />
      <GoogleAd adSlot="7321242428" />
      {/* <Kindle /> */}
      {/* <Hardware /> */}
      <Open />

      <Profile />
      <Kindle />
      {/* <Example /> */}
    </main>
  );
}
