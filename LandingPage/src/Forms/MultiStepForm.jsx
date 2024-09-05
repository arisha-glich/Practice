import React, { useState, useCallback, useEffect } from "react";
import steps from "../Data/Steps";
import { saveToLocalStorage, getFromLocalStorage } from "../util/localStorage";
import IntroScreen from "./IntroScreen";
import logo from "../assets/images/logo.png";
import { CongratulationsScreen } from "./Congratulation";
import ProgressIndicator from "./ProgressIndicator";
import FormSteps from "./FormSteps";

const MultiStepForm = () => {
  // Retrieve form data and current step from local storage
  const initialFormData = getFromLocalStorage("formData", {});
  const initialStep = getFromLocalStorage("currentStep", 0);

  const [currentStep, setCurrentStep] = useState(initialStep);
  const [formData, setFormData] = useState(initialFormData);
  const [showIntro, setShowIntro] = useState(initialStep === 0); // Show intro only if at the beginning
  const [isCompleted, setIsCompleted] = useState(false);

  // Save form data to local storage
  useEffect(() => {
    saveToLocalStorage("formData", formData);
  }, [formData]);

  // Save current step to local storage
  useEffect(() => {
    saveToLocalStorage("currentStep", currentStep);
  }, [currentStep]);

  // Move to the next step
  const handleNext = useCallback(() => {
    setCurrentStep((prevStep) => {
      const nextStep = prevStep + 1;
      if (nextStep >= steps.length) {
        setIsCompleted(true);
        return steps.length - 1;
      }
      return nextStep;
    });
  }, []);

  // Move to the previous step
  const handleBack = useCallback(() => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  }, []);

  // Reset the form and local storage
  const handleClose = useCallback(() => {
    setFormData({});
    setCurrentStep(0);
    saveToLocalStorage("formData", {});
    saveToLocalStorage("currentStep", 0);
    setShowIntro(true);
    setIsCompleted(false);
  }, []);

  // Show the intro screen if it was the initial step, otherwise show the form or completion screen
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
        <img src={logo} alt="Logo" className="w-24" />
      </div>

      {showIntro ? (
        <IntroScreen onClose={handleClose} onStart={() => setShowIntro(false)} />
      ) : isCompleted ? (
        <CongratulationsScreen onClose={handleClose} />
      ) : (
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 relative">
          <button className="absolute top-4 right-4 text-red-500" onClick={handleClose}>
            &times;
          </button>

          <ProgressIndicator currentStep={currentStep} totalSteps={steps.length} />

          <FormSteps
            currentStep={currentStep}
            formData={formData} // Pass formData if needed
            onNext={handleNext}
            onBack={handleBack}
            onFormDataChange={setFormData} // Pass function to update formData if needed
          />
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
