import React, { useEffect } from "react";
import ProgressCard from "../ProgressCard";
import BackgroundLayout from "../../Reusable/Backgroung";
import useSurveyStore from "../../../Provider/useSurveyStore";
import { useNavigate } from "react-router-dom";
import BoxComponent from "../BoxGender";
import male from "../../../assets/images/mars.png";
import female from "../../../assets/images/venus.png";
import useStepStore from '../../../Provider/useStepStore'; // Zustand store for steps


const Gender = () => {
  const { selections, updateSelection } = useSurveyStore();
  const { incrementStep } = useStepStore(); // Zustand for steps

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const savedGender = localStorage.getItem("gender");
      if (savedGender) {
        updateSelection("gender", savedGender);
      }
    } catch (error) {
      console.error("Failed to load gender from localStorage:", error);
    }
  }, [updateSelection]);

  const handleBoxClick = (gender) => {
    updateSelection("gender", gender);
    localStorage.setItem("gender", gender);
  incrementStep();
    navigate("/keto-diet");
  };

  return (
    <BackgroundLayout>
      <div className="flex justify-center items-center min-h-screen px-4 py-6">
        <div className="flex flex-col items-center justify-center w-full max-w-md p-6 sm:p-8 rounded-lg border border-[#E4EDE7] bg-white">
          <ProgressCard title="Gender" totalSteps={12} />

          <div className="flex flex-col mt-4 space-y-4 w-full">
            <BoxComponent
              title="Male"
              imageUrl={male}
              className={`cursor-pointer w-full sm:w-[300px] ${
                selections.gender === "Male" ? "bg-green-100" : "bg-white"
              }`}
              onClick={() => handleBoxClick("Male")}
              aria-selected={selections.gender === "Male"}
              alt="Male"
            />

            <BoxComponent
              title="Female"
              imageUrl={female}
              className={`cursor-pointer w-full sm:w-[300px] ${
                selections.gender === "Female" ? "bg-green-100" : "bg-white"
              }`}
              onClick={() => handleBoxClick("Female")}
              aria-selected={selections.gender === "Female"}
              alt="Female"
            />
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Gender;
