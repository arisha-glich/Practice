import React from 'react';
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0d0f47] text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Muslim Ticket Logo" className="w-32 md:w-48 mb-4" />
            <p className="text-xs md:text-sm">&copy; 2024 Muslim Ticket</p>
          </div>

          {/* Links Sections */}
          <div className="flex flex-col md:flex-row md:justify-between w-full space-y-8 md:space-y-0">
            <div className="flex-1">
              <h4 className="font-bold mb-4 text-lg">Customers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-gray-300">Find an event</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">Find your ticket</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">FAQ</a></li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="font-bold mb-4 text-lg">Organizers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-gray-300">Create an event</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">List your event</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">Help</a></li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-gray-300">Privacy & Terms</a></li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="font-bold mb-4 text-lg">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-gray-300">Contact us</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">Facebook</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">Instagram</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
