"use client";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-4 md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <Link href="/">
            <p className="text-white text-2xl font-bold">
              Sagar's Website
            </p>
          </Link>
          <button
            className="md:hidden text-white focus:outline-none focus:text-white"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-4 items-center mt-4 md:mt-0`}
        >
          <li>
            <Link href="#about">
              <p className="text-white hover:text-gray-300">About</p>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <p className="text-white hover:text-gray-300">About</p>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <p className="text-white hover:text-gray-300">About</p>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <p className="text-white hover:text-gray-300">About</p>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <p className="text-white hover:text-gray-300">About</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
