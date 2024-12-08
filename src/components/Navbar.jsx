// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Center: Logo */}
        <div className="hidden lg:flex items-center justify-center">
          <a href="/" className="text-2xl font-bold">
            Garments
          </a>
        </div>
        {/* Left: Navigation Links */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
        <ul
          className={`lg:flex lg:items-center lg:gap-8 absolute lg:static w-full lg:w-auto transition-all duration-300 ${isMenuOpen ? "top-16 left-0 bg-black opacity-50" : "top-[-300px] left-0"
            }`}
        >
          <li className="text-center py-2 lg:py-0">
            <a href="#home" className="block px-4 hover:underline duration-700">
              Home
            </a>
          </li>
          <li className="text-center py-2 lg:py-0">
            <a href="#about" className="block px-4 hover:underline duration-700">
              About
            </a>
          </li>
          <li className="text-center py-2 lg:py-0">
            <a href="#services" className="block px-4 hover:underline duration-700">
              Services
            </a>
          </li>
        </ul>

        {/* Right: Search and Cart Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full">
            <CiSearch className="h-6 w-6 text-white" />
          </button>
          <button className="p-2 rounded-full">
            <IoIosCart className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
