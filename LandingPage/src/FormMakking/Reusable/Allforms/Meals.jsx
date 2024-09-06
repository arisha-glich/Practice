import React, { useState, useEffect } from 'react';
import ProgressCard from '../ProgressCard';
import LineBox from '../LineBox';
import BackgroundLayout from '../Backgroung';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Meals() {
  const navigate = useNavigate(); // Initialize navigate

  const [selectedOption, setSelectedOption] = useState(null);

  // Load the selected option from localStorage when the component mounts
  useEffect(() => {
    const storedOption = localStorage.getItem('mealPreparationTime');
    if (storedOption) {
      setSelectedOption(storedOption);
    }
  }, []);

  // Handle LineBox selection
  const handleLineBoxClick = (option) => {
    // Save the selected option to localStorage
    localStorage.setItem('mealPreparationTime', option);
    setSelectedOption(option);

    // Navigate to WhatIsKeto component after selecting an option
    navigate('/whatisketo');
  };

  return (
    <BackgroundLayout>
      <div className="flex justify-center items-center h-screen">
        <div
          className="flex flex-col items-center justify-center"
          style={{
            width: '697px',
            height: '486px',
            borderRadius: '30px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E4EDE7',
          }}
        >
          {/* Upper Progress Card */}
          <ProgressCard
            title="Meal Preparation"
            description="How much time do you have to prepare a meal?"
            totalSteps={12}
          />

          {/* Lower LineBoxes */}
          <LineBox
            title="30 min"
            onClick={() => handleLineBoxClick('30 min')}
            isSelected={selectedOption === '30 min'}
          />
          <LineBox
            title="1 hour"
            onClick={() => handleLineBoxClick('1 hour')}
            isSelected={selectedOption === '1 hour'}
          />
          <LineBox
            title="1.5 hours"
            onClick={() => handleLineBoxClick('1.5 hours')}
            isSelected={selectedOption === '1.5 hours'}
          />
          <LineBox
            title="2 hours"
            onClick={() => handleLineBoxClick('2 hours')}
            isSelected={selectedOption === '2 hours'}
          />
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default Meals;
