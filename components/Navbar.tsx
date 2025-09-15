"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-[#FFFDFA] h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center pt-5">
        {/* Logo */}
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dpahyb1x9/image/upload/v1756974823/Pering_logo_kpkkbf.png"
            alt="Logo"
            width={90}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link href="/" className="hover:text-gray-900 text-[12px] font-semibold font-[outfit]">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/all-post" className="hover:text-gray-900 text-[12px] font-semibold font-[outfit]">
              ALL POST
            </Link>
          </li>
          <li>
            <Link href="/business" className="hover:text-gray-900 text-[12px] font-semibold font-[outfit]">
              BUSINESS
            </Link>
          </li>
          <li>
            <Link href="/technology" className="hover:text-gray-900 text-[12px] font-semibold font-[outfit]">
              TECHNOLOGY
            </Link>
          </li>
          <li>
            <Link href="/podcast" className="hover:text-gray-900 text-[12px] font-semibold font-[outfit]">
              PODCAST
            </Link>
          </li>
          <li>
            <Link href="/signIn" className="hover:text-gray-900 text-[12px] font-semibold font-[outfit]">
              CREATE POST
            </Link>
          </li>
        </ul>

        {/* Social + Search */}
        <div className="hidden md:flex items-center space-x-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="border-2 rounded px-3 hover:text-gray-900 hover:border-gray-700">
            facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="border-2 rounded px-3 hover:text-gray-900 hover:border-gray-700">
            twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="border-2 rounded px-3 hover:text-gray-900 hover:border-gray-700">
            instagram
          </a>

          <div className="flex items-center bg-[#ffbd3ab0] rounded px-2 w-30 py-1">
            <FaSearch className="text-black mr-2 text-lg" />
            <input
              type="search"
              placeholder="Search"
              className="border-none bg-transparent text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-lg flex flex-col space-y-2 px-4 py-3">
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/all-post" className="text-gray-700 hover:text-gray-900 font-medium">
              ALL POST
            </Link>
          </li>
          <li>
            <Link href="/business" className="text-gray-700 hover:text-gray-900 font-medium">
              BUSINESS
            </Link>
          </li>
          <li>
            <Link href="/technology" className="text-gray-700 hover:text-gray-900 font-medium">
              TECHNOLOGY
            </Link>
          </li>
          <li>
            <Link href="/podcast" className="text-gray-700 hover:text-gray-900 font-medium">
              PODCAST
            </Link>
          </li>
          <li>
            <Link href="/signin" className="text-gray-700 hover:text-gray-900 font-medium">
              CREATE POST
            </Link>
          </li>

          {/* Social links in mobile menu */}
          <div className="flex flex-col space-y-2 mt-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="border-3 rounded px-3 py-1 text-gray-700 hover:text-gray-900 hover:border-gray-700">
              facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="border-3 rounded px-3 py-1 text-gray-700 hover:text-gray-900 hover:border-gray-700">
              twitter
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="border-3 rounded px-3 py-1 text-gray-700 hover:text-gray-900 hover:border-gray-700">
              instagram
            </a>
          </div>
        </ul>
      )}
    </nav>
  );
}
