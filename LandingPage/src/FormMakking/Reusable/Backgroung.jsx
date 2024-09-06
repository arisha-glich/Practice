import React from 'react';
import logo from '../../assets/images/logo.png'; // Path to your logo image
import closeIcon from '../../assets/images/cross.png'; // Path to your close button image
import cross2 from '../../assets/images/cross2.png'
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const BackgroundLayout = ({ children, onClose }) => {
    const navigate = useNavigate(); // Initialize useNavigate

  const handleClose = () => {
    // Clear local storage
    localStorage.clear();

    // Navigate to the homepage
    navigate('/');}
  return (

    <div className="w-full h-screen bg-[#F0F4F8] flex flex-col items-center justify-center relative">
      {/* Logo */}
      <img src={logo} alt="Logo" className="absolute top-12 alig w-100 h-auto" />

      {/* Cross/Close Button */}
      {/* Cross/Close Button */}
      <button onClick={handleClose} className="absolute top-12 right-6">
        <img src={cross2} alt="Close" className="w-6 h-6 bg-red-300 rounded-sm" />
      </button>

      {/* Main content area */}
      <div className="  ">
        {children}
      </div>
    </div>
  );
};

export default BackgroundLayout;
