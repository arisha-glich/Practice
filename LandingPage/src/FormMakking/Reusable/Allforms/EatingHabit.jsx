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
      <div className="flex justify-center items-center min-h-screen px-4 py-6">
        <div
          className="flex flex-col items-center justify-center w-full max-w-lg p-6 rounded-lg border border-[#E4EDE7] bg-white"
        >
          {/* Upper Progress Card */}
          <ProgressCard
            title="Eating Habits"
            description="How many times do you eat in a day?"
            totalSteps={12}
          />

          {/* Lower LineBoxes */}
          <div className="flex flex-col mt-4 space-y-4 w-full">
            <LineBox
              title="3 times"
              description="Eat breakfast, lunch, and dinner"
              isSelected={selectedOption === '3 times'}
              onClick={() => handleLineBoxClick('3 times')}
              aria-selected={selectedOption === '3 times' ? 'true' : 'false'}
            />
            <LineBox
              title="4 times"
              description="Eat breakfast, lunch, dinner, and a snack"
              isSelected={selectedOption === '4 times'}
              onClick={() => handleLineBoxClick('4 times')}
              aria-selected={selectedOption === '4 times' ? 'true' : 'false'}
            />
            <LineBox
              title="5 times"
              description="Eat breakfast, lunch, dinner, and two snacks"
              isSelected={selectedOption === '5 times'}
              onClick={() => handleLineBoxClick('5 times')}
              aria-selected={selectedOption === '5 times' ? 'true' : 'false'}
            />
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default EatingHabits;
