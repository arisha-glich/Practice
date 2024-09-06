import React, { useState } from "react";
import OptionBox from "../OptionBox";
import poultryImg from "../../../assets/images/MealsType/1.png";
import porkImg from "../../../assets/images/MealsType/2.png";
import beefImg from "../../../assets/images/MealsType/3.png";
import fishImg from "../../../assets/images/MealsType/4.png";
import lambImg from "../../../assets/images/MealsType/5.png";
import vealImg from "../../../assets/images/MealsType/6.png";
import vegetarianImg from "../../../assets/images/MealsType/7.png";
import ProgressCard from "../ProgressCard";
import BackgroundLayout from "../Backgroung";
import { useNavigate } from "react-router-dom"; // For navigation

const Mealtype = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    // Toggle selection
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option) // Unselect if already selected
        : [...prevSelected, option] // Add to selected list
    );
  };

  const handleNextClick = () => {
    // Save selected options to localStorage or handle them as needed
    localStorage.setItem("selectedMealTypes", JSON.stringify(selectedOptions));

    // Navigate to the next screen (update path based on routing)
    navigate("/ingredients");
  };

  return (
    <BackgroundLayout>
      <div className="flex flex-col justify-center items-center min-h-screen px-4 py-6">
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
            <OptionBox
              image={poultryImg}
              title="Poultry"
              isSelected={selectedOptions.includes("Poultry")}
              onClick={() => handleOptionClick("Poultry")}
            />
            <OptionBox
              image={porkImg}
              title="Pork"
              isSelected={selectedOptions.includes("Pork")}
              onClick={() => handleOptionClick("Pork")}
            />
            <OptionBox
              image={beefImg}
              title="Beef"
              isSelected={selectedOptions.includes("Beef")}
              onClick={() => handleOptionClick("Beef")}
            />
            <OptionBox
              image={fishImg}
              title="Fish"
              isSelected={selectedOptions.includes("Fish")}
              onClick={() => handleOptionClick("Fish")}
            />
            <OptionBox
              image={lambImg}
              title="Lamb"
              isSelected={selectedOptions.includes("Lamb")}
              onClick={() => handleOptionClick("Lamb")}
            />
            <OptionBox
              image={vealImg}
              title="Veal"
              isSelected={selectedOptions.includes("Veal")}
              onClick={() => handleOptionClick("Veal")}
            />
            <OptionBox
              image={vegetarianImg}
              title="I am vegetarian"
              isSelected={selectedOptions.includes("Vegetarian")}
              onClick={() => handleOptionClick("Vegetarian")}
            />
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
