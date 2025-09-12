"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "HOME",
    "ALL POST",
    "BUSINESS",
    "TECHNOLOGY",
    "PODCAST",
    "SHOP",
  ];
  const socialLinks = ["facebook", "twitter", "instagram"];

  return (
    <nav className="w-full border-b bg-[#FFFDFA] h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center pt-5 ">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dpahyb1x9/image/upload/v1756974823/Pering_logo_kpkkbf.png"
            alt="Logo"
            width={90}
            height={40}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((label) => (
            <Link
              key={label}
              href={
                label === "HOME"
                  ? "/"
                  : `/${label.toLowerCase().replace(/\s+/g, "-")}`
              }
              className="hover:text-gray-900 text-[12px] font-semibold font-[outfit]"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-2">
          {socialLinks.map((platform) => (
            <a
              key={platform}
              href={`https://www.${platform}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className=" border-2 rounded px-3 hover:text-gray-900 hover:border-gray-700 capitalize"
            >
              {platform}
            </a>
          ))}

          <div className="flex items-center bg-[#ffbd3ab0] rounded px-2 w-30 py-1">
            <FaSearch className="text-black mr-2 text-lg" />
            <input
              type="search"
              placeholder="Search"
              className="border-none bg-transparent  text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        <button
          className="md:hidden p-2 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-2 px-4 py-3">
            {navLinks.map((label) => (
              <Link
                key={label}
                href={
                  label === "HOME"
                    ? "/"
                    : `/${label.toLowerCase().replace(/\s+/g, "-")}`
                }
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                {label}
              </Link>
            ))}

            <div className="flex flex-col space-y-2 mt-2">
              {socialLinks.map((platform) => (
                <a
                  key={platform}
                  href={`https://www.${platform}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" border-3 rounded px-3 py-1 text-gray-700 hover:text-gray-900 hover:border-gray-700 capitalize"
                >
                  {platform}
                </a>
              ))}
              <Link href={"/"}>
                
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
