// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaInstagram, FaStrava, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-10 h-auto md:h-[500px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First section: Logo and Icons */}
        <div className="flex flex-col items-center md:items-start text-left px-2 md:px-0">
          <h1 className='text-2xl font-bold mb-4'>Garments®</h1>
          <p className='text-sm text-center md:text-left'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores error possimus placeat iure officiis explicabo unde inventore! Nihil, quidem incidunt.
          </p>
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            <FaInstagram className="text-2xl" />
            <FaStrava className="text-2xl" />
            <FaYoutube className="text-2xl" />
          </div>
        </div>

        {/* Second section: Shop */}
        <div className="flex flex-col items-start text-left px-2 md:px-0">
          <h3 className="font-semibold mb-2">Shop</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Latest Drop</a></li>
            <li><a href="#" className="hover:text-gray-400">Shorts</a></li>
            <li><a href="#" className="hover:text-gray-400">Tops</a></li>
            <li><a href="#" className="hover:text-gray-400">Pants</a></li>
            <li><a href="#" className="hover:text-gray-400">Headwear</a></li>
            <li><a href="#" className="hover:text-gray-400">Accessories</a></li>
          </ul>
        </div>

        {/* Third section: Help */}
        <div className="flex flex-col items-start text-left px-2 md:px-0 mt-6 md:mt-0">
          <h3 className="font-semibold mb-2">Help</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-400">Delivery</a></li>
            <li><a href="#" className="hover:text-gray-400">Return Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Register A Return</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Payment Options</a></li>
            <li><a href="#" className="hover:text-gray-400">Manage Cookies</a></li>
          </ul>
        </div>
      </div>

      <div className="text-right mr-6 md:mr-20 mt-6 md:mt-0">
        <span>©2024 Garments® Terms & Conditions</span>
      </div>
    </footer>
  );
};

export default Footer;
