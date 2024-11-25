"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { bangers, oxygen } from "../utils/fonts";
import dayjs from "dayjs";
import Image from "next/image";
import logo from "../../public/assets/IMG_1114.png";

export default function Navbar() {
  const todaysDate = dayjs().format("DD-MM-YYYY");
  const [nav, setNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // Navbar visible initially
  const lastScrollYRef = useRef(0); // Ref to track last scroll position

  const links = [
    { id: 1, link: "home", href: "/" },
    { id: 2, link: "contact", href: "/#contact" },
    { id: 3, link: "info", href: "/info" },
    { id: 4, link: "blog", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 50) {
        // Scrolling down, hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up, show navbar
        setShowNavbar(true);
      }

      lastScrollYRef.current = currentScrollY; // Update the ref
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // No dependencies needed since we use refs

  return (
    <div
      className={`flex justify-between items-center w-full p-7 px-4 bg-slate-700 fixed z-20 shadow-lg transition-transform duration-700 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2 ml-4">
          <Image src={logo} width={50} alt="Logo" />
          <Link
            href="/"
            className={`${bangers.className} text-xl sm:text-4xl text-pink-400 border p-2 rounded-lg border-pink-400 font-signature ml-2`}
          >
            Password Generator
          </Link>
          <span className={`${oxygen.className} hidden lg:block text-gray-500`}>
            {todaysDate}
          </span>
        </div>

        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link, href }) => (
              <li
                key={id}
                className={`${oxygen.className} nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline`}
              >
                <Link href={href}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-start items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-gray-400 opacity-90 pt-32">
          {links.map(({ id, link, href }) => (
            <li
              key={id}
              className={`${bangers.className} px-4 cursor-pointer capitalize py-6 text-3xl`}
            >
              <Link onClick={() => setNav(!nav)} href={href}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
