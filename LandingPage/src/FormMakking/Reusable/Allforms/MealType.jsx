import React from 'react';
import OptionBox from '../OptionBox';
import poultryImg from '../../../assets/images/MealsType/1.png';
import porkImg from '../../../assets/images/MealsType/2.png';
import beefImg from '../../../assets/images/MealsType/3.png';
import fishImg from '../../../assets/images/MealsType/4.png';
import lambImg from '../../../assets/images/MealsType/5.png';
import vealImg from '../../../assets/images/MealsType/6.png';
import vegetarianImg from '../../../assets/images/MealsType/7.png';
import ProgressCard from '../ProgressCard';
import BackgroundLayout from '../Backgroung';
import useSurveyStore from '../../../Provider/useSurveyStore'; // Import Zustand store
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Mealtype = () => {
  const { selections, updateSelection } = useSurveyStore(); // Get Zustand store data
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    // Toggle selection
    const updatedOptions = selections.mealTypes.includes(option)
      ? selections.mealTypes.filter((item) => item !== option)
      : [...selections.mealTypes, option];

    // Update selection in Zustand store
    updateSelection('mealTypes', updatedOptions);

    // Save selected options to localStorage
    localStorage.setItem('selectedMealTypes', JSON.stringify(updatedOptions));
  };

  const handleNextClick = () => {
    // Navigate to the next screen (update path based on routing)
    navigate('/ingredients');
  };

  return (
    <BackgroundLayout>
      <div className="flex flex-col justify-center items-center min-h-screen px-4 py-6 relative">
        <div
          className="flex flex-col items-center justify-center w-full max-w-lg p-6 rounded-xl bg-white border border-gray-200 shadow-md"
        >
          {/* Upper Progress Card */}
          <ProgressCard
            title="Meal Type"
            description="Which types of meals do you dislike?"
            totalSteps={12}
          />

          {/* Reusable Option Boxes */}
          <div className="flex flex-col items-center space-y-4 mt-8 w-full">
            {[
              { title: 'Poultry', image: poultryImg },
              { title: 'Pork', image: porkImg },
              { title: 'Beef', image: beefImg },
              { title: 'Fish', image: fishImg },
              { title: 'Lamb', image: lambImg },
              { title: 'Veal', image: vealImg },
              { title: 'I am vegetarian', image: vegetarianImg },
            ].map((item) => (
              <OptionBox
                key={item.title}
                image={item.image}
                title={item.title}
                isSelected={selections.mealTypes.includes(item.title)} // Mark selected
                onClick={() => handleOptionClick(item.title)}
                aria-selected={selections.mealTypes.includes(item.title) ? 'true' : 'false'}
              />
            ))}
          </div>

          {/* Next Button */}
          <div className="flex justify-center mt-8">
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-md"
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Mealtype;
