import React from "react";

const OptionCard = ({ label, icon, isSelected, onClick }) => {
  return (
    <div
      className={`flex items-center cursor-pointer p-6 rounded-3xl 
      ${isSelected ? "bg-blue-50 border-2 border-green-400" : "bg-white border-2 border-gray-300"}`}
      style={{ width: "361px", height: "99px" }}
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        {icon && (
          <img
            src={icon}
            alt={`${label} icon`}
            className="w-8 h-8" // Adjust size as needed
          />
        )}
        <p className="text-lg">{label}</p>
      </div>
    </div>
  );
};

export default OptionCard;
