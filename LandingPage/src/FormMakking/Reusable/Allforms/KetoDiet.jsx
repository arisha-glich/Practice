import React, { useEffect } from 'react';
import ProgressCard from '../ProgressCard';
import LineBox from '../LineBox';
import BackgroundLayout from '../../Reusable/Backgroung';
import { useSurvey } from '../../../Provider/useSurvery';
import { useNavigate } from 'react-router-dom'; // For navigation

function KetoDiet() {
  const { selections, updateSelection } = useSurvey(); // Get context data
  const navigate = useNavigate();

  const handleLineBoxClick = (option) => {
    // Update selection in context
    updateSelection('ketoDiet', option);

    // Save selected option to local storage
    localStorage.setItem('ketoDiet', option);

    // Navigate to the next step
    navigate('/fimilarketodiet'); 
  };

  useEffect(() => {
    // Retrieve the saved selection from local storage
    const savedSelection = localStorage.getItem('ketoDiet');
    if (savedSelection) {
      updateSelection('ketoDiet', savedSelection);
    }
  }, [updateSelection]); // Dependency array includes updateSelection to avoid redundant updates

  return (
    <BackgroundLayout>
      <div className="flex flex-col justify-center items-center h-screen px-4 py-6">
        <div
          className="flex flex-col items-center justify-center w-full max-w-md p-6 rounded-xl bg-white border border-gray-200 shadow-md"
        >
          {/* Upper Progress Card */}
          <ProgressCard
            title="Keto Diet"
            description="How familiar are you with Keto diet?"
            totalSteps={12}
          />

          {/* Lower LineBoxes */}
          <div className="flex flex-col mt-6 space-y-4 w-full">
            {['Lose Weight', 'Gain Weight', 'Maintain Weight', 'Reverse Diet', "I Don't Know"].map((option) => (
              <LineBox
                key={option}
                title={option}
                isSelected={selections.ketoDiet === option} // Mark selected
                onClick={() => handleLineBoxClick(option)}
                aria-selected={selections.ketoDiet === option ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default KetoDiet;
