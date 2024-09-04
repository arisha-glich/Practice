import React from 'react';
import { FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo.png'

const IntroScreen = ({ onClose, onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 relative text-center">
        <button className="absolute top-4 right-4 text-red-500" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="mb-8">
          <img src={logo} alt="Logo" className="mx-auto w-32 h-32" /> {/* Adjust logo path */}
        </div>
        <button
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={onStart}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
