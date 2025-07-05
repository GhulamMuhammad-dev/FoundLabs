"use client";
import React, { useState } from "react";
import Link from "next/link";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-bl from-white to-gray-300 border-b border-gray-200 sticky top-0 w-full lg:w-3/4 lg:m-auto lg:mt-4 z-50 lg:rounded-3xl lg:border-b-2   lg:border-[#724bf0] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo and navigation links */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  <div className="h-8 w-8 bg-[#724bf0] rounded-lg flex items-center justify-center text-white font-bold mr-2">
                    FL
                  </div>
                  <span className="text-xl font-bold text-[#1c1c1e]">
                    FoundLabs
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Left side links */}
            <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
              <div className="flex space-x-8 md:space-x-4">
                <Link href="/">
                  <span className="text-gray-700 hover:text-[#724bf0] px-3 py-2 text-sm font-medium cursor-pointer">
                    Home
                  </span>
                </Link>
                <Link href="/services">
                  <span className="text-gray-700 hover:text-[#724bf0] px-3 py-2 text-sm font-medium cursor-pointer">
                    Services
                  </span>
                </Link>
                <Link href="/work">
                  <span className="text-gray-700 hover:text-[#724bf0] px-3 py-2 text-sm font-medium cursor-pointer">
                    Work
                  </span>
                </Link>
                <Link href="/about">
                  <span className="text-gray-700 hover:text-[#724bf0] px-3 py-2 text-sm font-medium cursor-pointer">
                    About
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - CTA buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/applications">
              <span className="text-gray-700 hover:text-[#724bf0] px-3 py-2 text-sm font-medium cursor-pointer">
                Applications
              </span>
            </Link>
            <Link href="/contact">
              <span className="bg-[#724bf0] hover:bg-[#5e3ac7] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer">
                Contact
              </span>
            </Link>
           
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#724bf0] hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1 bg-white">
          <Link href="/">
            <span className="block pl-3 pr-4 py-2 border-l-4 border-[#724bf0] text-base font-medium text-[#724bf0] cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/services">
            <span className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-[#724bf0] hover:border-[#724bf0] cursor-pointer">
              Services
            </span>
          </Link>
          <Link href="/work">
            <span className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-[#724bf0] hover:border-[#724bf0] cursor-pointer">
              Work
            </span>
          </Link>
          <Link href="/about">
            <span className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-[#724bf0] hover:border-[#724bf0] cursor-pointer">
              About
            </span>
          </Link>
          <div className="pt-4 border-t border-gray-200">
            <div className="flex space-x-4 px-4">
              <Link href="/applications">
                <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                  Applications
                </span>
              </Link>
              <Link href="/Contact">
                <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#724bf0] hover:bg-[#5e3ac7] cursor-pointer">
                 Contact
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
