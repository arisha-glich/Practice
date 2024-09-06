import React, { useState } from 'react';

// Example image imports (adjust the paths to your images)
import backIcon from '../../assets/images/next.png';
import Stroke from '../../assets/images/Stroke.png';
import Dot from '../../assets/images/Dot.png';

const ProgressCard = ({ title, description, totalSteps }) => {
  const [currentStep, setCurrentStep] = useState(1); // Set to 2 as per the image

  // Increment and decrement step functions
  const incrementStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const decrementStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle the back button functionality
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full flex flex-col items-center bg-white  rounded-lg">
      {/* Container for Button and Title */}
      <div className="flex items-center justify-between w-full px-4 mb-4">
        {/* Back button with image */}
        <button onClick={goBack} className="flex items-center">
          {/* Image inside button */}
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
        <img src={Dot} alt="Dot" className="w-2 h-2" />
        <img src={Stroke} alt="Stroke" className="w-7 h-2" />
        <img src={Dot} alt="Dot" className="w-2 h-2" />
        <img src={Dot} alt="Dot" className="w-2 h-2" />
        <img src={Dot} alt="Dot" className="w-2 h-2" />
      </div>

      {/* Description */}
      <p className="text-[#0D2114] text-sm font-bold">{description}</p>
    </div>
  );
};

export default ProgressCard;
