import React, { createContext, useContext, useState } from 'react';

// Create a context
const ProgressContext = createContext();

// Provider component
export const ProgressProvider = ({ children }) => {
  // State to manage the current step
  const [currentStep, setCurrentStep] = useState(1); // Initialize at 1 or the step you need

  // Increment and decrement step functions
  const incrementStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const decrementStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));
  };

  return (
    <ProgressContext.Provider value={{ currentStep, incrementStep, decrementStep }}>
      {children}
    </ProgressContext.Provider>
  );
};

// Hook to use the progress context
export const useProgress = () => useContext(ProgressContext);
