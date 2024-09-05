import React, { useState } from 'react';
import FormStep from './FormStep'; // Adjust the import path as needed
import steps from '../Data/Steps'; // Import the default export

const FormSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = steps[currentStep];

  return (
    <div className="w-full max-w-lg mx-auto p-8">
      <FormStep
        title={step.title}
        description={step.description}
        options={step.options}
        inputs={step.inputs ? step.inputs : []} // Use 'inputs' from the step
        content={step.content}
        onNext={handleNext}
        onBack={handleBack}
        showBack={currentStep > 0}
        backbutton="/path/to/backbutton.png" // Adjust path as needed
      />
    </div>
  );
};

export default FormSteps;
