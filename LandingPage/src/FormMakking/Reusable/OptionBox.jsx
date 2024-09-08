import React from 'react';

const OptionBox = ({ image, title, isSelected, onClick, additionalClasses = '' }) => {
  return (
    <div
      className={`w-[361px] h-[50px] flex items-center border rounded-[15px] px-4 my-2 cursor-pointer transition-colors duration-300 ${
        isSelected ? 'border-green-500 bg-green-50' : 'border-[#E4EDE7] bg-white'
      } hover:border-green-300 ${additionalClasses}`}
      onClick={onClick}
      aria-selected={isSelected}
      role="button"
    >
      {/* Option Image */}
      <img
        src={image}
        alt={title}
        className="w-[23px] h-[21px] mr-4"
      />

      {/* Option Title */}
      <span className="font-ubuntu text-[12px] leading-[13.79px]">
        {title}
      </span>

      {/* Selected Checkmark */}
      {isSelected && (
        <span className="ml-auto text-green-500">
          ✔
        </span>
      )}
    </div>
  );
};

export default OptionBox;
