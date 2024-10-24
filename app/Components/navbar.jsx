"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { bangers, oxygen } from "../utils/fonts";
import dayjs from "dayjs";

export default function Navbar() {

  const todaysDate = dayjs().format('DD-MM-YYYY');
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      href: "/",
    },
    {
      id: 2,
      link: "contact",
      href: "/#contact",
    },
    {
      id: 3,
      link: "info",
      href: "/info",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full p-7 px-4 text-white bg-gray-700 mb-10 relative z-20">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className={`${bangers.className} text-xl sm:text-4xl text-pink-400 border p-2 rounded-lg border-pink-400 font-signature ml-2`}
        >
          Password Generator
        </Link>
        <span className={`${oxygen.className} text-gray-500`}>{todaysDate}</span>
      </div>

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

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-gray-400">
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
