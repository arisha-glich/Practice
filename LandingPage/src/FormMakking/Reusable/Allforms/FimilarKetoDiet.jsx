import React, { useEffect } from "react";
import ProgressCard from "../ProgressCard";
import LineBox from "../LineBox";
import BackgroundLayout from "../Backgroung";
import useSurveyStore from "../../../Provider/useSurveyStore"; // Import Zustand store
import { useNavigate } from "react-router-dom"; // For navigation
import useStepStore from '../../../Provider/useStepStore'; // Zustand store for steps


function FamiliarKetoDiet() {
  const { selections, updateSelection } = useSurveyStore();
  const { incrementStep } = useStepStore(); // Zustand for steps

  const navigate = useNavigate();

  // Load the selection from localStorage on component mount
  useEffect(() => {
    const savedSelection = localStorage.getItem("ketoDietSelection");
    if (savedSelection) {
      updateSelection("ketoDiet", savedSelection); // Update Zustand store with localStorage value
    }
  }, [updateSelection]);

  const handleLineBoxClick = (option) => {
    // Update selection in Zustand store
    updateSelection("ketoDiet", option);

    // Save selection to localStorage
    localStorage.setItem("ketoDietSelection", option);
    incrementStep();

    // Navigate to the next step
    navigate("/eating-habits");
  };

  return (
    <BackgroundLayout>
      <div className="flex justify-center items-center min-h-screen px-4 py-6">
        <div className="flex flex-col items-center justify-center w-full max-w-lg p-6 rounded-lg border border-[#E4EDE7] bg-white shadow-md">
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
              isSelected={selections.ketoDiet === "Expert"} // Mark selected
              onClick={() => handleLineBoxClick("Expert")}
              aria-selected={
                selections.ketoDiet === "Expert" ? "true" : "false"
              }
            />
            <LineBox
              title="I have heard a thing or two"
              isSelected={selections.ketoDiet === "I have heard a thing or two"} // Mark selected
              onClick={() => handleLineBoxClick("I have heard a thing or two")}
              aria-selected={
                selections.ketoDiet === "I have heard a thing or two"
                  ? "true"
                  : "false"
              }
            />
            <LineBox
              title="Beginner"
              isSelected={selections.ketoDiet === "Beginner"} // Mark selected
              onClick={() => handleLineBoxClick("Beginner")}
              aria-selected={
                selections.ketoDiet === "Beginner" ? "true" : "false"
              }
            />
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default FamiliarKetoDiet;
