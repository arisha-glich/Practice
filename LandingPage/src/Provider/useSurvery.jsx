import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const SurveyContext = createContext();

// Custom hook to use the SurveyContext
export const useSurvey = () => {
  return useContext(SurveyContext);
};

// Provider component to manage and share state
export const SurveyProvider = ({ children }) => {
  const [selections, setSelections] = useState({});

  // Load selections from localStorage on mount
  useEffect(() => {
    const storedSelections = localStorage.getItem('surveySelections');
    if (storedSelections) {
      setSelections(JSON.parse(storedSelections));
    }
  }, []);

  // Save selections to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('surveySelections', JSON.stringify(selections));
  }, [selections]);

  // Function to update the selections
  const updateSelection = (step, option) => {
    setSelections((prev) => ({ ...prev, [step]: option }));
  };

  return (
    <SurveyContext.Provider value={{ selections, updateSelection }}>
      {children}
    </SurveyContext.Provider>
  );
};
