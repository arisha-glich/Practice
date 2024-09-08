import React, { useEffect } from 'react';
import ProgressCard from '../ProgressCard';
import BackgroundLayout from '../../Reusable/Backgroung';
import useSurveyStore from '../../../Provider/useSurveyStore';
import useStepStore from '../../../Provider/useStepStore'; // Zustand store for steps
import { useNavigate } from 'react-router-dom';
import LineBox from '../../Reusable/LineBox'; // Import the LineBox component

function KetoDiet() {
  const { selections, updateSelection } = useSurveyStore();
  const { incrementStep } = useStepStore(); // Zustand for steps
 
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    // Save selected option to Zustand store and local storage
    updateSelection('ketoDiet', option);
    localStorage.setItem('ketoDiet', option);

    // Increment step and navigate to the next form
    incrementStep();
    navigate('/fimilarketodiet');
  };

 
  // Load saved selection from localStorage on mount
  useEffect(() => {
    const savedSelection = localStorage.getItem('ketoDiet');
    if (savedSelection) {
      updateSelection('ketoDiet', savedSelection);
    }
  }, [updateSelection]);

  
  const options = [
    { title: 'Lose Weight' },
    { title: 'Gain Weight' },
    { title: 'Maintain Weight' },
    { title: 'Reverse Diet' },
    { title: "I Don't Know" },
  ];

  return (
    <BackgroundLayout>
      <div className="flex flex-col justify-center items-center h-screen px-4 py-6">
        <div className="flex flex-col items-center justify-center w-full max-w-md p-6 rounded-xl bg-white border border-gray-200 shadow-md">
          {/* Upper Progress Card */}
          <ProgressCard
            title="Keto Diet"
            description="How familiar are you with the Keto diet?"
            totalSteps={12} // Total steps in the progress
         
          />

          {/* Line Boxes for Options */}
          <div className="flex flex-col mt-6 space-y-4 w-full">
            {options.map((option) => (
              <LineBox
                key={option.title}
                title={option.title}
                isSelected={selections.ketoDiet === option.title} // Check if this option is selected
                onClick={() => handleOptionClick(option.title)} // Handle click
              />
            ))}
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default KetoDiet;
