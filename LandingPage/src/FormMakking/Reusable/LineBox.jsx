import React from 'react';

const LineBox = ({ title, description, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick} // Handle click event
      className={`w-[361px] h-[50px] border rounded-[15px] mt-3 flex flex-col justify-center p-2 cursor-pointer transition-all duration-300 ${
        isSelected ? 'border-green-500 bg-green-50' : 'border-[#E4EDE7]'
      } hover:border-green-500`} // Conditional styling based on selection
    >
      <h3 className="text-[#0D2114] text-sm font-bold-400 p-1">{title}</h3>
      <p className="text-[#99A69D] text-xs font-ubuntu p-1">{description}</p>
    </div>
  );
};

export default LineBox;
