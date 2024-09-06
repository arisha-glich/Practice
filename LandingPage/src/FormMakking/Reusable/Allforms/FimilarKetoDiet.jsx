import React from 'react';
import ProgressCard from '../ProgressCard';
import LineBox from '../LineBox';
import BackgroundLayout from '../Backgroung';
import { useSurvey } from '../../../Provider/useSurvery';
import { useNavigate } from 'react-router-dom'; // For navigation

function FimilarKetoDiet() {
  const { selections, updateSelection } = useSurvey(); // Get context data
  const navigate = useNavigate();

  const handleLineBoxClick = (option) => {
    // Update selection in context
    updateSelection('ketoDiet', option);

    // Save selected option to local storage
    localStorage.setItem('ketoDiet', option);

    // Navigate to the next step
    navigate('/eating-habits'); 
  };

  return (
    <BackgroundLayout>
      <div className="flex justify-center items-center min-h-screen px-4 py-6">
        <div
          className="flex flex-col items-center justify-center w-full max-w-lg p-6 rounded-lg border border-[#E4EDE7] bg-white shadow-md"
        >
          {/* Upper Progress Card */}
          <ProgressCard
            title="Keto Diet"
            description="How familiar are you with the Keto diet?"
            totalSteps={12}
          />

          {/* Lower LineBoxes */}
          <div className="flex flex-col gap-4 mt-4 w-full">
            <LineBox
              title="Expert"
              isSelected={selections.ketoDiet === 'Expert'} // Mark selected
              onClick={() => handleLineBoxClick('Expert')}
              aria-selected={selections.ketoDiet === 'Expert' ? 'true' : 'false'}
            />
            <LineBox
              title="I have heard a thing or two"
              isSelected={selections.ketoDiet === 'I have heard a thing or two'} // Mark selected
              onClick={() => handleLineBoxClick('I have heard a thing or two')}
              aria-selected={selections.ketoDiet === 'I have heard a thing or two' ? 'true' : 'false'}
            />
            <LineBox
              title="Beginner"
              isSelected={selections.ketoDiet === 'Beginner'} // Mark selected
              onClick={() => handleLineBoxClick('Beginner')}
              aria-selected={selections.ketoDiet === 'Beginner' ? 'true' : 'false'}
            />
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default FimilarKetoDiet;
