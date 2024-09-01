import React, { useState } from 'react';

const HeaderTwo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#010035] via-[#010035] to-[#020056] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Left Section - UK Button */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors">
            <span className="font-semibold">English (UK)</span>
          </button>

          {/* Right Section - Help Center with Dropdown */}
          <div className="relative">
            <button 
              onClick={toggleDropdown} 
              className="font-barlow text-sm font-medium leading-5 text-white bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
              Help Center
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-colors">FAQ</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-colors">Contact Support</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-colors">Live Chat</a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? '✖' : '☰'}
        </button>

        {/* Center Section - Navigation Links */}
        <div className={`md:flex space-x-4 items-center ${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#" className="font-barlow text-sm font-medium leading-5 text-white hover:text-[#ff0053] transition-colors">Create Events</a>
          <a href="#" className="font-barlow text-sm font-medium leading-5 text-white hover:text-[#ff0053] transition-colors">Find Events</a>
          <a href="#" className="font-barlow text-sm font-medium leading-5 bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-[#e0004a] hover:text-white transition-colors">Signup</a>
          <a href="#" className="font-barlow text-sm font-medium leading-5 bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-[#e0004a] hover:text-white transition-colors">Login</a>
          <a href="#" className="font-barlow text-sm font-medium leading-5 bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-[#e0004a] hover:text-white transition-colors">For Customers</a>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
