import React, { useContext } from "react";
import { FormContext } from "./FormContext"; // Import the context

const FormStep = () => {
  const { currentStep, formData, handleOptionSelect, handleInputChange, handleNext, handleBack } = useContext(FormContext);
  const step = steps[currentStep];

  return (
    <div>
      <h2>{step.title}</h2>
      <p>{step.description}</p>
      {/* Render options or inputs based on step content */}
      {step.options && step.options.map((option) => (
        <OptionCard
          key={option.value}
          icon={option.icon}
          label={option.label}
          isSelected={formData[step.title] === option.value}
          onClick={() => handleOptionSelect(option.value)}
        />
      ))}
      {/* Add buttons for Next/Back */}
      <div className="flex justify-between mt-4">
        {currentStep > 0 && <button onClick={handleBack}>Back</button>}
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default FormStep;
