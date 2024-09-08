import React, { useEffect } from "react";
import ProgressCard from "../ProgressCard";
import LineBox from "../LineBox";
import BackgroundLayout from "../Backgroung";
import { useNavigate } from "react-router-dom"; // For navigation
import useStepStore from "../../../Provider/useStepStore"; // Zustand store for steps
import useSurveyStore from "../../../Provider/useSurveyStore"; // Import Zustand store

function EatingHabits() {
  const { selections, updateSelection } = useSurveyStore();
  const { incrementStep } = useStepStore(); // Zustand for steps

  const navigate = useNavigate();

  useEffect(() => {
    // Load previously selected option from Zustand
    const storedOption = selections.eatingHabits;
    if (storedOption) {
      // Update local state with the stored value
      updateSelection("eatingHabits", storedOption);
    }
  }, [selections.eatingHabits, updateSelection]);
 
  // Handle LineBox selection
  const handleLineBoxClick = (option) => {
    // Update selection in Zustand store
    updateSelection("eatingHabits", option);

    incrementStep();

    // Navigate to the Meals component
    navigate("/meals");
  };

  return (
    <BackgroundLayout>
      <div className="flex justify-center items-center min-h-screen px-4 py-6">
        <div className="flex flex-col items-center justify-center w-full max-w-lg p-6 rounded-lg border border-[#E4EDE7] bg-white">
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
              isSelected={selections.eatingHabits === "3 times"}
              onClick={() => handleLineBoxClick("3 times")}
              aria-selected={
                selections.eatingHabits === "3 times" ? "true" : "false"
              }
            />
            <LineBox
              title="4 times"
              description="Eat breakfast, lunch, dinner, and a snack"
              isSelected={selections.eatingHabits === "4 times"}
              onClick={() => handleLineBoxClick("4 times")}
              aria-selected={
                selections.eatingHabits === "4 times" ? "true" : "false"
              }
            />
            <LineBox
              title="5 times"
              description="Eat breakfast, lunch, dinner, and two snacks"
              isSelected={selections.eatingHabits === "5 times"}
              onClick={() => handleLineBoxClick("5 times")}
              aria-selected={
                selections.eatingHabits === "5 times" ? "true" : "false"
              }
            />
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default EatingHabits;
