import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import BackgroundLayout from "../Backgroung"; // Assuming BackgroundLayout is a custom wrapper
import useSurveyStore from "../../../Provider/useSurveyStore"; // Zustand store
import ProgressCard from "../ProgressCard";
import useStepStore from '../../../Provider/useStepStore'; // Zustand store for steps

import Input from "../../Reusable/Input"; // Import the reusable Input component

const AgeHeight = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const { updateSelection } = useSurveyStore(); // Zustand store
  const navigate = useNavigate();
  const { incrementStep } = useStepStore(); // Zustand for steps
 
 

  // Load previous data from Zustand and localStorage when the component mounts
  useEffect(() => {
    const storedAge = localStorage.getItem("age");
    const storedHeight = localStorage.getItem("height");
    if (storedAge) setAge(storedAge);
    if (storedHeight) setHeight(storedHeight);
  }, []);

  // Handle Next button click
  const handleNextClick = () => {
    // Save data to Zustand and localStorage
    updateSelection("age", age);
    updateSelection("height", height);
    localStorage.setItem("age", age);
    localStorage.setItem("height", height);
    incrementStep();

    // Navigate to Result component
    navigate("/result");
  };

  return (
    <BackgroundLayout>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center w-[697px] h-[485px] max-w-lg p-6 rounded-xl bg-white border border-gray-200 shadow-md">
          {/* Upper Progress Card */}
          <ProgressCard title="Age and Height" totalSteps={12} />

          {/* Age Input */}
          <div className="w-full mb-6 justify-center items-center ">
            <Input
              label="What is your age"
              unitOptions={["yrs"]}
              weight={age}
              setWeight={setAge}
            />
          </div>

          {/* Height Input */}
          <div className="w-full mb-6">
            <Input
              label="What is your height"
              unitOptions={["cm"]}
              weight={height}
              setWeight={setHeight}
            />
          </div>

          {/* Next Button */}
          <div className="flex">
            <button
              onClick={handleNextClick}
              className="top-[150px] w-[281px] justify-center text-center mt-7 py-3 px-4 bg-green-500 text-white font-ubuntu font-bold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 text-[14px]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default AgeHeight;
