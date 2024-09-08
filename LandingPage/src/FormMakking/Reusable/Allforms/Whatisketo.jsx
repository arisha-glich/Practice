import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressCard from "../ProgressCard";
import BackgroundLayout from "../Backgroung";
import useSurveyStore from "../../../Provider/useSurveyStore";
import icon from "../../../assets/images/placeholder-icon.png";
import useStepStore from "../../../Provider/useStepStore"; // Zustand store for steps

const Whatisketo = () => {
  const totalSteps = 12;
  const { currentStep, setCurrentStep } = useSurveyStore(); // Zustand for survey management
  const { incrementStep } = useStepStore(); // Zustand for steps
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNext = () => {
    if (currentStep < totalSteps) {
      // Increment step in the Zustand step store
    }
    incrementStep();
    // Navigate to the next step (e.g., Energy Level)
    navigate("/energy-level");
  };

  const handleClose = () => {
    // Handle the close button functionality (e.g., navigate back)
    window.history.back();
  };

  return (
    <BackgroundLayout onClose={handleClose}>
      <div className="flex justify-center items-center ">
        <div className="w-[697px] h-[600px] bg-white p-8 rounded-tl-[30px] rounded-br-lg border border-gray-300 shadow-md">
          {/* Upper Progress Card */}
          <ProgressCard
            title="Keto diet"
            description="What is keto diet?"
            totalSteps={totalSteps}
          />

          {/* Main Keto Diet Information */}
          <div className="mt-6 text-[#0D2114] text-sm font-semibold">
            <p className="mb-4">
              The ketogenic diet, also known as the keto diet, is a high-fat,
              low-carbohydrate diet that has been shown to promote weight loss
              and improve various health conditions.
            </p>

            <h3 className="text-lg font-bold text-center my-4">
              Benefits of keto diet?
            </h3>

            {/* Benefits List */}
            <ul className="list-none space-y-3 ml-6">
              <li className="flex items-center">
                <img src={icon} alt="icon" className="mr-2" />
                <span>
                  Weight loss: The keto diet can help reduce appetite and
                  increase fat burning.
                </span>
              </li>
              <li className="flex items-center">
                <img src={icon} alt="icon" className="mr-2" />
                <span>
                  Improved blood sugar control: It can help lower blood sugar
                  and improve insulin sensitivity.
                </span>
              </li>
              <li className="flex items-center">
                <img src={icon} alt="icon" className="mr-2" />
                <span>
                  Increased energy: Many people report feeling more energetic on
                  the keto diet.
                </span>
              </li>
              <li className="flex items-center">
                <img src={icon} alt="icon" className="mr-2" />
                <span>
                  Reduced inflammation: It may help reduce inflammation, common
                  in chronic diseases.
                </span>
              </li>
              <li className="flex items-center">
                <img src={icon} alt="icon" className="mr-2" />
                <span>
                  Improved heart health: Keto may help lower cholesterol and
                  triglyceride levels.
                </span>
              </li>
              <li className="flex items-center">
                <img src={icon} alt="icon" className="mr-2" />
                <span>
                  Potential anti-cancer effects: Some studies suggest it has
                  anti-cancer properties.
                </span>
              </li>
            </ul>

            {/* Next Button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleNext}
                className="bg-green-500 text-white px-8 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Whatisketo;
