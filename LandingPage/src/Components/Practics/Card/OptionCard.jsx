import React from "react";
import backbutton from "../../../assets/images/next.png"; // Adjust the path as needed

export const OptionCard = ({ icon: Icon, label, isSelected, onClick }) => {
  return (
    <div
      className={`flex items-center p-4 cursor-pointer transition-colors duration-300
        ${isSelected ? "border-green-500 bg-green-100" : "border-gray-300 bg-transparent"}
        hover:border-green-900 hover:bg-green-50`} // Updated to hover:border-green-900 for dark green border
      style={{
        width: "361px",
        height: "50px",
        top: "361px",
        left: "460px",
        gap: "0px",
        borderRadius: "15px 0 0 0",
        border: "1px solid",
      }}
      onClick={onClick}
    >
      <Icon
        className={`text-xl mr-4 ${
          isSelected ? "text-green-500" : "text-gray-500"
        }`}
      />
      <span className="text-gray-700 font-medium">{label}</span>
    </div>
  );
};

export const FormStep = ({
  title,
  description,
  options = [],
  inputs = [],
  content,
  selectedOption = {},
  onOptionSelect,
  onInputChange,
  onNext,
  onBack,
  showBack,
  showNext,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center font-Ubuntu text-sm font-bold leading-4 bg-black text-white p-8 rounded-lg">
      <div className="flex items-center justify-between w-full mb-4">
        {/* Flex container for title and back button */}
        {showBack && (
          <button
            className="flex items-center p-2 rounded bg-gray-200"
            onClick={onBack}
          >
            <img src={backbutton} alt="Back" className="w-6 h-6" />
          </button>
        )}
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      {description && <p className="text-gray-300 mb-4">{description}</p>}
      {content && <div className="mb-4">{content}</div>}
      <div className="my-4">
        {options.map((option) => (
          <div
            key={option.value}
            className={`flex items-center p-4 cursor-pointer transition-colors duration-300
              ${selectedOption === option.value ? 'bg-green-100 border-green-900' : 'bg-white border-gray-300'}
              border rounded-lg hover:border-green-900 hover:bg-green-50`} // Dark green border on hover and light green background
            onClick={() => onOptionSelect(option.value)}
          >
            {option.icon && (
              <option.icon
                className={`text-xl mr-4 ${selectedOption === option.value ? 'text-green-500' : 'text-gray-500'}`}
              />
            )}
            <span className="text-gray-700 font-medium">{option.label}</span>
          </div>
        ))}
      </div>
      <div>
        {inputs.map((input) => (
          <div key={input.name} className="mb-4">
            <label htmlFor={input.name} className="block mb-2 font-medium">
              {input.label}
            </label>
            <div className="flex items-center">
              <input
                type={input.type}
                id={input.name}
                name={input.name}
                value={selectedOption[input.name] || ""}
                onChange={onInputChange}
                className="border-gray-300 border rounded p-2 transition-colors duration-300 hover:border-green-900 focus:border-green-900 hover:bg-green-50 focus:outline-none" // Hover effect for dark green border and light green background
                required
              />
              <span className="ml-2">{input.unit}</span>
            </div>
          </div>
        ))}
      </div>
      {showNext && (
        <button
          className="mt-6 bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors duration-300"
          onClick={onNext}
        >
          Next
        </button>
      )}
    </div>
  );
};
