import React, { useEffect, useState } from 'react';
import ProgressCard from '../ProgressCard';
import LineBox from '../LineBox';
import BackgroundLayout from '../Backgroung';
import { useNavigate } from 'react-router-dom'; // For navigation

function EatingHabits() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load previously selected option from local storage
    const storedOption = localStorage.getItem('eatingHabits');
    setSelectedOption(storedOption);
  }, []);

  // Handle LineBox selection
  const handleLineBoxClick = (option) => {
    // Save selected option to local storage
    localStorage.setItem('eatingHabits', option);
    setSelectedOption(option);

    // Navigate to the Meals component
    navigate('/meals');
  };

  return (
    <BackgroundLayout>
      <div className="flex justify-center items-center h-screen">
        <div
          className="flex flex-col items-center justify-center"
          style={{
            width: '697px',
            height: '425px',
            borderRadius: '30px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E4EDE7',
          }}
        >
          {/* Upper Progress Card */}
          <ProgressCard
            title="Eating Habits"
            description="How many times do you eat in a day?"
            totalSteps={12}
          />

          {/* Lower LineBoxes */}
          <LineBox
            title="3 times"
            description="Eat breakfast, lunch, and dinner"
            isSelected={selectedOption === '3 times'} // Mark selected
            onClick={() => handleLineBoxClick('3 times')}
            aria-selected={selectedOption === '3 times' ? 'true' : 'false'}
          />
          <LineBox
            title="4 times"
            description="Eat breakfast, lunch, dinner, and a snack"
            isSelected={selectedOption === '4 times'} // Mark selected
            onClick={() => handleLineBoxClick('4 times')}
            aria-selected={selectedOption === '4 times' ? 'true' : 'false'}
          />
          <LineBox
            title="5 times"
            description="Eat breakfast, lunch, dinner, and two snacks"
            isSelected={selectedOption === '5 times'} // Mark selected
            onClick={() => handleLineBoxClick('5 times')}
            aria-selected={selectedOption === '5 times' ? 'true' : 'false'}
          />
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default EatingHabits;
