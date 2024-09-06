import React from 'react';
import logo from '../../assets/images/logo.png';
import cross2 from '../../assets/images/cross2.png';
import { useNavigate } from 'react-router-dom';
import useSurveyStore from '../../Provider/useSurveyStore'; // Zustand store

const BackgroundLayout = ({ children }) => {
  const navigate = useNavigate();
  const clearAllData = useSurveyStore((state) => state.clearAllData); // Get the clearAllData action

  const handleClose = () => {
    // Clear all data from store and localStorage
    clearAllData();

    // Navigate to home page
    navigate('/');
  };

  return (
    <div className="w-full h-screen bg-[#F0F4F8] flex flex-col items-center justify-center absolute">
      <img src={logo} alt="Logo" className="absolute top-12 w-100 h-auto" />
      <button onClick={handleClose} className="absolute top-12 right-6">
        <img src={cross2} alt="Close" className="w-6 h-6 bg-red-300 rounded-sm" />
      </button>
      <div>{children}</div>
    </div>
  );
};

export default BackgroundLayout;
