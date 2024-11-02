import Image from "next/image";
import Link from "next/link";
import profileImage from "../../assets/profile_image.JPG";
import profileBackground from "../../assets/profile_background.jpg";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { bangers, oxygen, raleway, space } from "../utils/fonts";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  return (
    <main>
      <div className="max-w-5xl w-full mt-4 flex flex-col md:flex-row gap-10">
        <div className="max-w-5xl w-full bg-gradient-to-b from-gray-800 via-gray-700 to-gray-500 shadow-lg rounded-lg text-gray-100">
          <div className="rounded-t-lg h-52 overflow-hidden">
            <Image
              priority
              src={profileBackground}
              alt="misty forest image"
              className="object-top"
            />
          </div>
          <div className="mx-auto w-40 h-40 relative -mt-20 border-4 border-gray-700  rounded-full overflow-hidden">
            <Image src={profileImage} alt="profile image" priority />
          </div>

          <div className="text-center mt-2">
            <h2
               className={`${bangers.className} text-3xl sm:text-4xl text-gray-200`}
            >
              Marc Norris
            </h2>
            <p className={`${raleway.className} text-pink-500 font-semibold`}>
              Junior Web Dev
            </p>

            <div className="flex justify-center mb-4 border-b border-gray-400 mx-10">
              <div id="contact" className="flex justify-center gap-3 my-4">
                <Link
                  href="https://medium.com/@shaky411"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon
                    className="text-gray-300 hover:text-gray-400 duration-400"
                    size="lg"
                    icon={faMedium}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/marc_bristol_uk/?next=%2F"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon
                    className="text-gray-300 hover:text-gray-400 duration-400"
                    size="lg"
                    icon={faInstagram}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/marcnorris1984/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon
                    className="text-gray-300 hover:text-gray-400 duration-400"
                    size="lg"
                    icon={faLinkedin}
                  />
                </Link>
                <Link
                  href="https://uk.pinterest.com/marcn2230/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon
                    className="text-gray-300 hover:text-gray-400 duration-400"
                    size="lg"
                    icon={faPinterest}
                  />
                </Link>
                <Link
                  href="https://x.com/graygekko"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon
                    className="text-gray-300 hover:text-gray-400 duration-400"
                    size="lg"
                    icon={faXTwitter}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col px-10 pb-8 gap-4 items-center">
            <span className={`${raleway.className} text-lg font-semibold`}>
              About me
            </span>
            <p className={`${raleway.className} sm:px-10 text-center text-lg`}>
              Junior web developer passionate about front-end design and
              development. Proud father of two beautiful daughters and husband
              to a wonderful wife. When I’m not coding, you’ll find me catching
              waves, exploring country trails with the family, or diving into
              the latest tech trends.
            </p>

            <div className="mx-auto w-full sm:w-fit">
              <Link
                href="/blog"
                className={`${oxygen.className} text-center relative inline-block group py-2 px-3 w-full`}
              >
                <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-gray-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-gray-500 border border-gray-900 group-hover:bg-gray-400"></span>
                <span className="relative text-white">Read my blog &rarr;</span>
              </Link>
            </div>
          </div>

          <div className="p-10 bg-gray-200 text-slate-900 rounded-b-lg mt-2 flex flex-col gap-4 items-center justify-center">
            {/* <h2 className={`${bangers.className} text-3xl text-gray-600`}>Get in Touch</h2> */}
            <span className={`${space.className} text-center`}>
              For all enquiries, please reach out through one of my social links
              or the link below.
            </span>
            <Link
            prefetch={true}
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://github.com/shaky411"
              className={`${space.className} focus:outline-none w-full text-center text-3xl rounded-full bg-white shadow-inner border text-pink-500 hover:text-pink-800 duration-400 px-6 py-4`}
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              Github
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
