import React, { useState } from "react";
import OptionBox from "../OptionBox"; // Reusable OptionBox component
import onionImg from "../../../assets/images/Ingredients/1.png";
import mushroomImg from "../../../assets/images/Ingredients/2.png";
import saltImg from "../../../assets/images/Ingredients/3.png";
import riceImg from "../../../assets/images/Ingredients/4.png";
import cheeseImg from "../../../assets/images/Ingredients/5.png";
import baconImg from "../../../assets/images/Ingredients/6.png";
import avocadoImg from "../../../assets/images/Ingredients/7.png";
import seafoodImg from "../../../assets/images/Ingredients/8.png";
import olivesImg from "../../../assets/images/Ingredients/9.png";
import capersImg from "../../../assets/images/Ingredients/10.png";
import goatCheeseImg from "../../../assets/images/Ingredients/11.png";
import food from "../../../assets/images/Ingredients/14.png";
import ProgressCard from "../ProgressCard";
import BackgroundLayout from "../Backgroung";
import { useNavigate } from "react-router-dom";

const Ingredients = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const navigate = useNavigate();

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredients((prevSelected) =>
      prevSelected.includes(ingredient)
        ? prevSelected.filter((item) => item !== ingredient) // Unselect if already selected
        : [...prevSelected, ingredient] // Add to selected list
    );
  };

  const handleNextClick = () => {
    // Save selected ingredients to localStorage or handle as needed
    localStorage.setItem("selectedIngredients", JSON.stringify(selectedIngredients));

    // Navigate to the next screen
    navigate("/physical-activity"); // Update the path for navigation
  };

  return (
    <BackgroundLayout>
      <div
        className="flex flex-col h-screen"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E4EDE7",
          width:" 697px",
          height: " 100%",
          top: "40px"
        }}
      >
        {/* Upper Progress Card */}
        <ProgressCard
          title="Ingredients"
          description="Which ingredients you DON'T like?"
          totalSteps={12}
        />

        {/* Reusable Option Boxes */}
        <div className="flex flex-col items-center space-y-4 mt-8 px-4">
        <OptionBox
            image={food}
            title="I eat all them"
            isSelected={selectedIngredients.includes("")}
            onClick={() => handleIngredientClick("")}
          />
          <OptionBox
            image={onionImg}
            title="Onions"
            isSelected={selectedIngredients.includes("Onions")}
            onClick={() => handleIngredientClick("Onions")}
          />
          <OptionBox
            image={mushroomImg}
            title="Mushrooms"
            isSelected={selectedIngredients.includes("Mushrooms")}
            onClick={() => handleIngredientClick("Mushrooms")}
          />
          <OptionBox
            image={saltImg}
            title="Salt"
            isSelected={selectedIngredients.includes("Salt")}
            onClick={() => handleIngredientClick("Salt")}
          />
          <OptionBox
            image={riceImg}
            title="Rice"
            isSelected={selectedIngredients.includes("Rice")}
            onClick={() => handleIngredientClick("Rice")}
          />
          <OptionBox
            image={cheeseImg}
            title="Cheese"
            isSelected={selectedIngredients.includes("Cheese")}
            onClick={() => handleIngredientClick("Cheese")}
          />
          <OptionBox
            image={baconImg}
            title="Bacon"
            isSelected={selectedIngredients.includes("Bacon")}
            onClick={() => handleIngredientClick("Bacon")}
          />
          <OptionBox
            image={avocadoImg}
            title="Avocado"
            isSelected={selectedIngredients.includes("Avocado")}
            onClick={() => handleIngredientClick("Avocado")}
          />
          <OptionBox
            image={seafoodImg}
            title="Seafood"
            isSelected={selectedIngredients.includes("Seafood")}
            onClick={() => handleIngredientClick("Seafood")}
          />
          <OptionBox
            image={olivesImg}
            title="Olives"
            isSelected={selectedIngredients.includes("Olives")}
            onClick={() => handleIngredientClick("Olives")}
          />
          <OptionBox
            image={capersImg}
            title="Capers"
            isSelected={selectedIngredients.includes("Capers")}
            onClick={() => handleIngredientClick("Capers")}
          />
          <OptionBox
            image={goatCheeseImg}
            title="Goat Cheese"
            isSelected={selectedIngredients.includes("Goat Cheese")}
            onClick={() => handleIngredientClick("Goat Cheese")}
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
    </BackgroundLayout>
  );
};

export default Ingredients;
