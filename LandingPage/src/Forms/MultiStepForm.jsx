import React, { useState, useEffect } from "react";
import { FaMars, FaVenus, FaWeight, FaDumbbell } from "react-icons/fa";
import { saveToLocalStorage, getFromLocalStorage } from "../util/localStorage";
import IntroScreen from "./IntroScreen";
import { FormStep } from "../Components/Practics/Card/OptionCard";
import logo from "../assets/images/logo.png";
import { CongratulationsScreen } from "./Congratulation";

// Steps configuration
const steps = [
  {
    title: "Gender",
    options: [
      { label: "Male", value: "male", icon: FaMars },
      { label: "Female", value: "female", icon: FaVenus },
    ],
  },
  {
    title: "Keto Diet Goal",
    description: "What is your goal with the Keto diet?",
    options: [
      { label: "Lose weight", value: "lose_weight", icon: FaWeight },
      { label: "Gain muscle", value: "gain_muscle", icon: FaDumbbell },
      { label: "Maintain weight", value: "maintain_weight", icon: FaWeight },
      { label: "Reverse diet", value: "reverse_diet", icon: FaWeight },
      { label: "I don’t know", value: "dont_know", icon: FaWeight },
    ],
  },
  {
    title: "Keto Diet Familiarity",
    description: "How familiar are you with the Keto diet?",
    options: [
      { label: "Expert", value: "expert" },
      { label: "I've heard a thing or two", value: "familiar" },
      { label: "Beginner", value: "beginner" },
    ],
  },
  {
    title: "What is Keto Diet?",
    description: "Introduction to the Keto diet",
    options: [],
    content: `
      The ketogenic diet, also known as the keto diet, is a high-fat, low-carbohydrate diet that has been shown to promote weight loss and improve various health conditions...
    `,
  },
  {
    title: "Meal Preparation",
    description: "How much time do you have for meal preparation each day?",
    options: [
      { label: "30 minutes", value: "30_minutes" },
      { label: "1 hour", value: "1_hour" },
      { label: "1.5 hours", value: "1.5_hours" },
      { label: "2 hours", value: "2_hours" },
    ],
  },
  {
    title: "Workout Frequency",
    description: "How often do you plan to work out?",
    options: [
      { label: "Daily", value: "daily" },
      { label: "3-5 times a week", value: "3_5_times" },
      { label: "1-2 times a week", value: "1_2_times" },
      { label: "Not sure yet", value: "not_sure" },
    ],
  },
  {
    title: "Dietary Restrictions",
    description: "Do you have any dietary restrictions?",
    options: [
      { label: "None", value: "none" },
      { label: "Vegetarian", value: "vegetarian" },
      { label: "Vegan", value: "vegan" },
      { label: "Gluten-Free", value: "gluten_free" },
      { label: "Other", value: "other" },
    ],
  },
  {
    title: "Energy Level",
    description: "How is your energy level throughout the day?",
    options: [
      { label: "Insanely low", value: "insanely_low" },
      { label: "Low", value: "low" },
      { label: "Average", value: "average" },
      { label: "Above average", value: "above_average" },
      { label: "High", value: "high" },
      { label: "Super high", value: "super_high" },
    ],
  },
  {
    title: "Meat Type",
    description: "Which meats you DON'T like?",
    options: [
      { label: "Poultry", value: "poultry" },
      { label: "Pork", value: "pork" },
      { label: "Beef", value: "beef" },
      { label: "Fish", value: "fish" },
      { label: "Lamb", value: "lamb" },
      { label: "Veal", value: "veal" },
      { label: "I am vegetarian", value: "vegetarian" },
    ],
  },
  {
    title: "Ingredients",
    description: "Which ingredients you DON'T like?",
    options: [
      { label: "Onion", value: "onion" },
      { label: "Mushrooms", value: "mushrooms" },
      { label: "Eggs", value: "eggs" },
      { label: "Milk", value: "milk" },
      { label: "Cheese", value: "cheese" },
      { label: "Butter", value: "butter" },
      { label: "Avocado", value: "avocado" },
      { label: "Seafood", value: "seafood" },
      { label: "Olives", value: "olives" },
      { label: "Capers", value: "capers" },
      { label: "Coconut", value: "coconut" },
      { label: "Goat cheese", value: "goat_cheese" },
      { label: "I eat them all", value: "eat_all" },
    ],
  },
  {
    title: "Weight",
    description: "Enter your current and target weight",
    inputs: [
      {
        label: "Current Weight",
        name: "current_weight",
        type: "number",
        unit: "kg",
      },
      {
        label: "Target Weight",
        name: "target_weight",
        type: "number",
        unit: "kg",
      },
    ],
  },
  {
    title: "Age & Height",
    description: "Enter your age and height",
    inputs: [
      { label: "Age", name: "age", type: "number", unit: "yrs" },
      { label: "Height", name: "height", type: "number", unit: "cm" },
    ],
  },
  // Additional form steps can be added here
];

const ProgressIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <span className="text-sm font-bold mr-2">
        {currentStep + 1}/{totalSteps}
      </span>
      <div className="flex items-center space-x-1">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index <= currentStep ? "bg-green-900" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const MultiStepForm = () => {
  const initialFormData = getFromLocalStorage("formData", {
    gender: "",
    keto_diet_goal: "",
    keto_diet_familiarity: "",
    meal_preparation: "",
    workout_frequency: "",
    dietary_restrictions: "",
    energy_level: "",
    meat_type: "",
    ingredients: "",
    current_weight: "",
    target_weight: "",
    age: "",
    height: "",
    // Add other fields as needed
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(getFromLocalStorage("formData", {}));
  const [showIntro, setShowIntro] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false); // New state for completion

  useEffect(() => {
    saveToLocalStorage("formData", formData);
  }, [formData]);

  const handleOptionSelect = (value) => {
    const updatedFormData = {
      ...formData,
      [steps[currentStep].title]: value,
    };
    setFormData(updatedFormData);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);
  };

  const handleFinish = () => {
    handleClose(); // Reset everything when finish is clicked
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true); // Mark as completed when reaching the end
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setFormData({});
    saveToLocalStorage("formData", {});
    setShowIntro(true);
  };

  const handleStart = () => {
    setShowIntro(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
          <img src={logo} alt="Logo" className="w-24" />
        </div>
        {showIntro ? (
          <IntroScreen onClose={handleClose} onStart={handleStart} />
        ) : isCompleted ? (
          // Show Congratulations Screen after completion
          <CongratulationsScreen onClose={handleFinish} />
        ) : (
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 relative">
            <button
              className="absolute top-4 right-4 text-red-500"
              onClick={handleClose}
            >
              &times;
            </button>
            {/* Add Progress Indicator Here */}
            <ProgressIndicator
              currentStep={currentStep}
              totalSteps={steps.length}
            />

            <FormStep
              title={steps[currentStep].title}
              description={steps[currentStep].description}
              options={steps[currentStep].options}
              inputs={steps[currentStep].inputs}
              content={steps[currentStep].content}
              selectedOption={formData[steps[currentStep].title]}
              onOptionSelect={handleOptionSelect}
              onInputChange={handleInputChange}
              onNext={handleNext}
              onBack={handleBack}
              showBack={currentStep > 0}
              showNext={
                !!steps[currentStep].inputs || !!steps[currentStep].content
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
