import MetadataComponent from "../utils/metadata";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { bangers, oxygen, raleway } from "../utils/fonts";
import ogImage from "../opengraph-image.png";

import Link from "next/link";
import Prime from "../Components/prime";
import PrimeVideo from "../Components/primeVideo";
import Kindle from "../Components/kindle";
import GoogleAd from "../Components/googleAd";
import GeckoAdLarge from "../Components/geckoAdLarge";

export const metadata = MetadataComponent({
  title: "Information for creating strong secure passwords",
  description: "Useful information for creating secure passwords to protect your data and online security",
  keywords: "info, passwords, information",
  canonicalUrl: "https://www.passwordmanager.org.uk/info",
  openGraphTitle: "Creating Secuure Passwords",
  openGraphDescription: "Useful information for creating secure passwords",
  openGraphImage: ogImage,
});

export default function Info() {
  return (
    <main className="flex flex-col items-center justify-center max-w-6xl mx-auto p-10 sm:p-10">
      <div className="flex flex-col items-center justify-center gap-4 max-w-3xl text-center mt-32">
        <h2
          className={`${bangers.className} text-5xl font-light text-slate-600`}
        >
          Info
        </h2>
        <p className={`${raleway.className} font-light`}>
          Creating secure passwords is crucial for protecting your personal and
          sensitive information. Here are some guidelines and tips to help you
          create strong and secure passwords:
        </p>
      </div>

      <div
        className={`${raleway.className} grid grid-cols-1 sm:grid-cols-3 gap-7 mt-10`}
      >
        <div className="col-span-2 sm:col-span-1 p-4 border rounded-lg bg-indigo-500 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2">
          <span className={`${oxygen.className} font-semibold`}>Length</span>
          <li>
            Longer is better: Aim for at least 12-16 characters. Longer
            passwords are generally more secure.
          </li>
        </div>

        <div className="p-4 border rounded-lg bg-green-500 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 col-span-2">
          <span className={`${oxygen.className} font-semibold`}>
            Complexity
          </span>
          <li>
            Mix of character types: Use a combination of uppercase letters,
            lowercase letters, numbers, and special characters (e.g., @, #, $,
            %, &, etc.).
          </li>
          <li>
            Avoid predictable patterns: Don't use common substitutions (e.g.,
            "P@ssw0rd"), sequences (e.g., "123456"), or repeated characters.
          </li>
        </div>

        <div className="p-4 border rounded-lg bg-yellow-500 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 col-span-2">
          <span className={`${oxygen.className} font-semibold`}>
            Unpredictability
          </span>
          <li>
            Randomness is key: Use a password generator to create truly random
            passwords.
          </li>
          <li>
            Avoid dictionary words: Single dictionary words are easily cracked
            by brute-force attacks.
          </li>
        </div>

        <div className="p-4 border rounded-lg bg-red-500 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 sm:col-span-1 col-span-2">
          <span className={`${oxygen.className} font-semibold`}>
            Uniqueness
          </span>
          <li>
            Different for each account: Use a unique password for every account
            to prevent a breach on one site from compromising others.
          </li>
        </div>

        <div className="p-4 border rounded-lg bg-slate-300 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 sm:col-span-3 md:col-span-1 lg:col-span-1 col-span-2">
          <span className={`${oxygen.className} font-semibold`}>
            Password Managers
          </span>
          <li>
            Use a password manager: Tools like LastPass, 1Password, or Bitwarden
            can generate, store, and manage your passwords securely. This way,
            you only need to remember one master password.
          </li>
        </div>

        <div className="p-4 border rounded-lg bg-purple-500 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 sm:col-span-3 md:col-span-2 lg:col-span-1 col-span-2">
          <span className={`${oxygen.className} font-semibold`}>
            Regular Updates
          </span>
          <li>
            Change passwords regularly: Especially if you suspect an account has
            been compromised.
          </li>
          <li>
            Monitor for breaches: Use services like Have I Been Pwned to check
            if your email or password has been involved in a data breach.
          </li>
        </div>

        <div className="p-4 border rounded-lg bg-fuchsia-400 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 sm:col-span-3 md:col-span-3 lg:col-span-1 col-span-2">
          <span className={`${oxygen.className} font-semibold`}>
            Multi-Factor Authentication (MFA)
          </span>
          <li>
            Multi-factor authentication (MFA) is a security process that
            requires users to verify their identity using two or more different
            factors before accessing a system. These factors typically include
            something the user knows (like a password), something the user has
            (such as a phone or security token), and something the user is
            (biometric data like fingerprints or facial recognition). By
            requiring multiple forms of verification, MFA adds an extra layer of
            protection against unauthorized access.
          </li>
        </div>

        <div className="p-4 border rounded-lg bg-cyan-400 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 sm:col-span-3 col-span-2">
          <span className={`${oxygen.className} font-semibold`}>
            Examples of Strong Passwords
          </span>
          <li>
            Randomly generated: <strong>hT7&3z@Q5!mL0xW</strong>
          </li>
          <li>
            Passphrases: Create a long and unique phrase using random words or
            an easy-to-remember sentence with some complexity added.
          </li>
          <li>
            Example: <strong>CorrectHorseBatteryStaple!92</strong>
          </li>
        </div>

        <div className="p-4 border rounded-lg bg-teal-400 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 sm:col-span-3 lg:col-span-1 col-span-2">
          <span className={`${oxygen.className} font-semibold`}>
            Bad Practices to Avoid
          </span>
          <li>
            Personal Information: Avoid using easily guessable information like
            your name, birthday, or pet's name.
          </li>
          <li>
            Common Passwords: Do not use passwords like "password," "123456," or
            "qwerty."
          </li>
        </div>

        <div className="p-4 border rounded-lg bg-slate-200 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 sm:col-span-3 lg:col-span-2 col-span-2">
          <span className={`${oxygen.className} font-semibold`}>Hardware</span>
          <p>
            Using a two-factor authentication (2FA) security key greatly
            enhances online security by providing robust protection against
            phishing and password theft. Unlike SMS or app-based codes, security
            keys require physical possession, making unauthorized access
            significantly harder. They are easy to use, work offline, and are
            compatible with a wide range of devices and platforms. This added
            layer of security ensures that even if your password is compromised,
            your accounts remain secure, offering peace of mind and compliance
            with stringent security standards.
          </p>
          <Link
            className={`${oxygen.className} text-blue-500 font-semibold hover:opacity-40 duration-300 mr-auto my-2`}
            href="https://www.amazon.co.uk/Yubico-Two-factor-authentication-security-certified/dp/B08DHL1YDL/ref=sr_1_5?crid=7AN8DI868Y5Y&amp;dib=eyJ2IjoiMSJ9.6mEnrMWeKBC9SREHb4zIrcm-tlYt5XW6TkAfcc1UGMdVLqlY1hDPhcp_PM6UeXg6ebRS4RQGe7pvc6SZ2CMJ5mepW-1IwCNYketmOfOsCbZtPVc-HKD2wcuA4sUdAK3g0U0fJrqB5MDYOtax_ACMkstX-AwmiCShGmT26WWJrZZKHGHBTIUw5A4BBD9NauYISHX4-sNyW6DcOJ5_lKiC1VagVbTUR5VtW_DmqxnvTUo.QFwAUoPBz5QNhx2gO_mc04yoBZkf0fgsQzCWDHyxLqk&amp;dib_tag=se&amp;keywords=password+key&amp;qid=1718119563&amp;sprefix=password+key%252Caps%252C86&amp;sr=8-5&_encoding=UTF8&tag=graygecko-21&linkCode=ur2&linkId=e1a1b0ffd94ffca2254650b64867cd51&camp=1634&creative=6738"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            more info
          </Link>
        </div>

        <div className="col-span-2 sm:col-span-3">
          {/* <Prime /> */}
          <GoogleAd adSlot="8464170807" />
        </div>

        {/* <div className="col-span-2 sm:col-span-3">
        <PrimeVideo />
        </div> */}
  <div className="col-span-3"><GeckoAdLarge/></div>

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
