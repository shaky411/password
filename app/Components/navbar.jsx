"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { monoton } from "../utils/fonts";


export default function Navbar() {
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
      href: "/",
    },
    {
      id: 3,
      link: "about",
      href: "/info",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full p-7 px-4 text-white bg-gray-700 mb-10 relative z-20">
      <div>
        <h1 className={`${monoton.className} text-4xl text-gray-400 font-signature ml-2`}>
          <Link
            className="link-underline link-underline-black"
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            Password Generator
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, href }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={href}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, href }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
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