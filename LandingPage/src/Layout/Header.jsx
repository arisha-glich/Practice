import React, { useState } from "react";
import logo from "../assets/images/logo2.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white text-black py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Muslim Ticket Logo" className="w-24 h-8" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <nav className={`md:flex space-x-6 ${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <a
            href="#"
            className="text-base font-medium text-gray-800 hover:text-[#ff0053] transition-colors"
          >
            Find Events
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-800 hover:text-[#ff0053] transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-800 hover:text-[#ff0053] transition-colors"
          >
            Prices
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-800 hover:text-[#ff0053] transition-colors"
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-800 hover:text-[#ff0053] transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-lg font-bold bg-gradient-to-r from-[#F81A84] to-[#2200F3] bg-clip-text text-transparent hover:bg-gradient-to-l hover:from-[#2200F3] hover:to-[#F81A84] transition-colors"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
