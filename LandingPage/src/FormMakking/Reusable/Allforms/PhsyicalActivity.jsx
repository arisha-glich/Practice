import React from 'react';
import ProgressCard from '../ProgressCard';
import BackgroundLayout from '../Backgroung'; 
import { useSurvey } from '../../../Provider/useSurvery';
import { useNavigate } from 'react-router-dom'; // For navigation
import CustomBox from '../CustomBox';
import instantlyLow from '../../../assets/images/Activity/1.png';
import low from '../../../assets/images/Activity/2.png';
import medium from '../../../assets/images/Activity/3.png';
import large from '../../../assets/images/Activity/4.png';

function PhysicalActivity() {
  const { selections, updateSelection } = useSurvey(); // Get context data
  const navigate = useNavigate();

  const handleLineBoxClick = (option) => {
    // Update selection in context
    updateSelection('energyLevel', option);

    // Save selected option to local storage
    localStorage.setItem('energyLevel', option);

    // Navigate to the next step
    navigate('/result'); 
  };

  return (
    <BackgroundLayout>
      <div className="flex justify-center items-center min-h-screen px-4 py-6">
        <div
          className="flex flex-col items-center justify-center w-full max-w-lg p-6 rounded-xl bg-white border border-gray-200 shadow-md"
        >
          {/* Upper Progress Card */}
          <ProgressCard
            title="Energy Level"
            description="How is your energy throughout the day?"
            totalSteps={12}
          />

          {/* Custom Boxes */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <CustomBox
              title="Instantly Low"
              imageUrl={instantlyLow}
              onClick={() => handleLineBoxClick('Instantly Low')}
              isSelected={selections.energyLevel === 'Instantly Low'}
              borderCircleSize="55px"
              imageSize="20px"
              borderCircleColor="#F4D4D4" // Light red color
            />
            <CustomBox
              title="Low"
              imageUrl={low}
              onClick={() => handleLineBoxClick('Low')}
              isSelected={selections.energyLevel === 'Low'}
              borderCircleSize="55px"
              imageSize="18px"
              borderCircleColor="#FDE7A9" // Light yellow color
            />
            <CustomBox
              title="Average"
              imageUrl={medium}
              onClick={() => handleLineBoxClick('Average')}
              isSelected={selections.energyLevel === 'Average'}
              borderCircleSize="55px"
              imageSize="18px"
              borderCircleColor="#F6F1B2" // Light green-yellow color
            />
            <CustomBox
              title="Hard"
              imageUrl={large}
              onClick={() => handleLineBoxClick('Hard')}
              isSelected={selections.energyLevel === 'Hard'}
              borderCircleSize="55px"
              imageSize="18px"
              borderCircleColor="#F6F1B2" // Light green-yellow color
            />
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default PhysicalActivity;
