import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ProgressCard from "../ProgressCard";
import BackgroundLayout from "../Backgroung"; // Fixed typo in import

const Whatisketo = () => {
  const totalSteps = 12;
  const [currentStep, setCurrentStep] = useState(4);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Load saved step from localStorage if it exists
    const savedStep = localStorage.getItem("currentStep");
    if (savedStep) {
      setCurrentStep(parseInt(savedStep));
    }
  }, []);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      localStorage.setItem("currentStep", nextStep);
    }

    // Navigate to the next step (e.g., Energy Level)
    navigate('/energy-level'); // Use navigate to change route
  };

  const handleClose = () => {
    // Handle the close button functionality here (e.g., navigate back or close modal)
    window.history.back();
  };

  return (
    <BackgroundLayout onClose={handleClose}>
      <div className="">
        <div className="mt-145px w-[697px] h-[570px] bg-white p-8 rounded-lg shadow-md">
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
              and improve various health conditions. The goal of the diet is to
              induce a state of ketosis in the body, in which the body switches
              from using glucose as its primary source of energy to using
              ketones, which are produced by the liver from stored fat.
            </p>

            <h3 className="text-lg font-bold text-center my-4">
              Benefits of keto diet?
            </h3>

            {/* Benefits List */}
            <ul className="list-disc space-y-3 ml-6">
              <li>
                Weight loss: The keto diet can help reduce appetite and increase
                fat burning.
              </li>
              <li>
                Improved blood sugar control: It can help lower blood sugar and
                improve insulin sensitivity.
              </li>
              <li>
                Increased energy: Many people report feeling more energetic on
                the keto diet.
              </li>
              <li>
                Reduced inflammation: It may help reduce inflammation, common in
                chronic diseases.
              </li>
              <li>
                Improved heart health: Keto may help lower cholesterol and
                triglyceride levels.
              </li>
              <li>
                Potential anti-cancer effects: Some studies suggest it has
                anti-cancer properties.
              </li>
            </ul>

            {/* Next Button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleNext}
                className="bg-green-500 text-white px-8 py-2 rounded-full hover:bg-green-600"
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
