// ProgressIndicator.js
import React from "react";

const ProgressIndicator = React.memo(({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center mt-4" aria-label={`Step ${currentStep + 1} of ${totalSteps}`}>
      <span className="text-sm font-bold mr-2">
        {currentStep }/{totalSteps}
      </span>
      <div className="flex items-center space-x-1">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index <= currentStep ? "bg-green-900" : "bg-gray-300"
            }`}
            aria-current={index === currentStep ? "step" : undefined}
          />
        ))}
      </div>
    </div>
  );
});

export default ProgressIndicator;
