import React, { useEffect } from "react";
import ProgressCard from "../ProgressCard";
import LineBox from "../LineBox";
import BackgroundLayout from "../Backgroung";
import useSurveyStore from "../../../Provider/useSurveyStore"; // Import Zustand store
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useStepStore from '../../../Provider/useStepStore'; // Zustand store for steps

function Meals() {
  const { selections, updateSelection } = useSurveyStore(); // Get Zustand store data
  const navigate = useNavigate(); // Initialize navigate
  const { incrementStep } = useStepStore(); // Zustand for steps

  // Load the selected option from Zustand when the component mounts
  useEffect(() => {
    const storedOption = localStorage.getItem("mealPreparationTime");
    if (storedOption) {
      updateSelection("mealPreparationTime", storedOption);
    }
  }, [updateSelection]);

  // Handle LineBox selection
  const handleLineBoxClick = (option) => {
    // Save the selected option to Zustand store
    updateSelection("mealPreparationTime", option);

    // Save the selected option to localStorage
    localStorage.setItem("mealPreparationTime", option);
    incrementStep();

    // Navigate to WhatIsKeto component after selecting an option
    navigate("/whatisketo");
  };

  return (
    <BackgroundLayout>
      <div className="flex flex-col justify-center items-center h-screen px-4 py-6">
        <div className="flex flex-col items-center justify-center w-full max-w-lg p-6 rounded-xl bg-white border border-gray-200 shadow-md">
          {/* Upper Progress Card */}
          <ProgressCard
            title="Meal Preparation"
            description="How much time do you have to prepare a meal?"
            totalSteps={12}
          />

          {/* Lower LineBoxes */}
          <div className="flex flex-col mt-6 space-y-4 w-full">
            {["30 min", "1 hour", "1.5 hours", "2 hours"].map((option) => (
              <LineBox
                key={option}
                title={option}
                onClick={() => handleLineBoxClick(option)}
                isSelected={selections.mealPreparationTime === option} // Mark selected
                aria-selected={
                  selections.mealPreparationTime === option ? "true" : "false"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default Meals;
