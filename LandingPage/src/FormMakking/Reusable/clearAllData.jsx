import React from 'react';
import useSurveyStore from '../../Provider/useSurveyStore'; // Import the Zustand store

const ClearFormButton = () => {
  const clearAllData = useSurveyStore((state) => state.clearAllData);

  return (
    <button onClick={clearAllData} className="bg-red-500 text-white p-2 rounded">
      Clear All Data
    </button>
  );
};

export default ClearFormButton;
