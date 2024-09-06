import React from 'react';
import ProgressCard from '../ProgressCard';
import BackgroundLayout from '../Backgroung'; 
import useSurveyStore from '../../../Provider/useSurveyStore'; // Import Zustand store
import { useNavigate } from 'react-router-dom'; // For navigation
import CustomBox from '../CustomBox';
import instantlyLow from '../../../assets/images/1.png';
import low from '../../../assets/images/2.png';
import medium from '../../../assets/images/3.png';
import high from '../../../assets/images/4.png';
import large from '../../../assets/images/5.png';
import moreLarge from '../../../assets/images/6.png';

function Energylevel() {
  const { selections, updateSelection } = useSurveyStore(); // Use Zustand store
  const navigate = useNavigate();

  const handleLineBoxClick = (option) => {
    // Update selection in Zustand store
    updateSelection('energyLevel', option);

    // Navigate to the next step
    navigate('/meal-type'); 
  };

  return (
    <BackgroundLayout>
      <div className="flex justify-center items-center h-screen">
        <div
          className="flex flex-col items-center justify-center"
          style={{
            width: '697px',
            height: '475px',
            borderRadius: '30px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E4EDE7',
            padding: '40px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Upper Progress Card */}
          <ProgressCard
            title="Energy Level"
            description="How is your energy throughout the day?"
            totalSteps={12}
          />

          {/* Custom Boxes */}
          <div className="flex flex-wrap justify-between mt-4">
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
              title="Above Average"
              imageUrl={high}
              onClick={() => handleLineBoxClick('Above Average')}
              isSelected={selections.energyLevel === 'Above Average'}
              borderCircleSize="55px"
              imageSize="18px"
              borderCircleColor="#E4F5B1" // Light green color
            />
            <CustomBox
              title="High"
              imageUrl={large}
              onClick={() => handleLineBoxClick('High')}
              isSelected={selections.energyLevel === 'High'}
              borderCircleSize="55px"
              imageSize="18px"
              borderCircleColor="#B1E4F5" // Light blue color
            />
            <CustomBox
              title="Super High"
              imageUrl={moreLarge}
              onClick={() => handleLineBoxClick('Super High')}
              isSelected={selections.energyLevel === 'Super High'}
              borderCircleSize="55px"
              imageSize="18px"
              borderCircleColor="grey" // Light grey-blue color
            />
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default Energylevel;
