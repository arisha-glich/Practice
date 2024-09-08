import React from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/images/next.png';
import Stroke from '../../assets/images/Stroke.png';
import Dot from '../../assets/images/Dot.png';
import useStepStore from '../../Provider/useStepStore.js'; // Zustand store for steps

const ProgressCard = ({ title, description }) => {
  const navigate = useNavigate();

  // Zustand store to manage steps
  const { currentStep, totalSteps, incrementStep, decrementStep } = useStepStore();

  // Handle the back button functionality
  const goBack = () => {
    if (currentStep > 1) { // Only decrement if not at the first step
        decrementStep();
      }
      navigate(-1); // Navigate back to the previous page// Navigate back to the previous page
  };

  return (
    <div className="w-full flex flex-col items-center bg-white rounded-lg">
      {/* Container for Button and Title */}
      <div className="flex items-center justify-between w-full px-4 mb-4">
        {/* Back button with image */}
        <button onClick={goBack} className="flex items-center">
          <img src={backIcon} alt="Back" className="w-4 h-4 mr-2" />
        </button>

        {/* Title Centered */}
        <h2 className="text-[#0D2114] text-2xl font-bold text-center w-full">
          {title}
        </h2>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-center space-x-2 mb-2">
        <button onClick={decrementStep} className="text-sm font-bold">
          &lt;
        </button>
        <p className="text-[#0D2114] text-lg font-bold">{`${currentStep}/${totalSteps}`}</p>
        <button onClick={incrementStep} className="text-sm font-bold">
          &gt;
        </button>
      </div>

      {/* Dots/Dashes Progress Visualization */}
      <div className="flex items-center space-x-1 mb-4">
        {/* Dots and Stroke: You can customize this logic further to show the right dots/strokes */}
        {Array.from({ length: totalSteps }).map((_, index) => (
          <img
            key={index}
            src={index < currentStep ? Stroke : Dot} // Show Stroke for completed steps and Dot for remaining
            alt={index < currentStep ? 'Stroke' : 'Dot'}
            className={index < currentStep ? 'w-7 h-2' : 'w-2 h-2'}
          />
        ))}
      </div>

      {/* Description */}
      <p className="text-[#0D2114] text-sm font-bold">{description}</p>
    </div>
  );
};

export default ProgressCard;
