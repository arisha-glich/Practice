import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundLayout from "../Backgroung"; // Custom wrapper component
import useSurveyStore from "../../../Provider/useSurveyStore"; // Zustand store
import ProgressCard from "../ProgressCard"; // Progress card component
import Input from "../../Reusable/Input"; // Reusable input component
import useStepStore from '../../../Provider/useStepStore'; // Zustand store for steps

const Weight = () => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [unit, setUnit] = useState("Metric"); // Toggle between Metric/Imperial
  const { updateSelection } = useSurveyStore(); // Zustand store
  const { incrementStep } = useStepStore(); // Zustand for steps
  const navigate = useNavigate();

  // Load previous data from Zustand and localStorage when the component mounts
  useEffect(() => {
    const storedCurrentWeight = localStorage.getItem("currentWeight");
    const storedTargetWeight = localStorage.getItem("targetWeight");
    if (storedCurrentWeight) setCurrentWeight(storedCurrentWeight);
    if (storedTargetWeight) setTargetWeight(storedTargetWeight);
  }, []);

  // Handle Next button click
  const handleNextClick = () => {
    // Save data to Zustand and localStorage
    updateSelection("currentWeight", currentWeight);
    updateSelection("targetWeight", targetWeight);
    localStorage.setItem("currentWeight", currentWeight);
    localStorage.setItem("targetWeight", targetWeight);

    incrementStep();

    // Navigate to Result component
    navigate("/age-height");
  };

  return (
    <BackgroundLayout>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center t-[145px] w-[697px] max-w-lg p-6 rounded-xl bg-white border border-gray-200 shadow-md">
          {/* Upper Progress Card */}
          <ProgressCard title="Weight" totalSteps={12} />

          {/* Toggle for Metric/Imperial */}
          <div className="flex items-center space-x-4 mb-6">
            <button
              className={`${
                unit === "Metric"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } px-4 py-2 rounded-full`}
              onClick={() => setUnit("Metric")}
            >
              Metric
            </button>
            <button
              className={`${
                unit === "Imperial"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } px-4 py-2 rounded-full`}
              onClick={() => setUnit("Imperial")}
            >
              Imperial
            </button>
          </div>

          {/* Current Weight Input */}
          <div className="w-full mb-6">
            <Input
              label="What is your CURRENT weight"
              unitOptions={unit === "Metric" ? ["kg"] : ["lbs"]}
              weight={currentWeight}
              setWeight={setCurrentWeight}
            />
          </div>

          {/* Target Weight Input */}
          <div className="w-full mb-6">
            <Input
              label="What is your TARGET weight"
              unitOptions={unit === "Metric" ? ["kg"] : ["lbs"]}
              weight={targetWeight}
              setWeight={setTargetWeight}
            />
          </div>

          {/* Next Button */}
          <div className="flex">
            <button
              onClick={handleNextClick}
              className="w-[281px] justify-center text-center mt-7 py-3 px-4 bg-green-500 text-white font-ubuntu font-bold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 text-[14px]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Weight;
