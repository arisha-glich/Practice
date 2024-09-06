import React from 'react';

const OptionBox = ({ image, title, isSelected, onClick }) => {
  return (
    <div
      className={`w-[361px] h-[50px] flex items-center border ${isSelected ? 'border-green-500' : 'border-[#E4EDE7]'} rounded-[15px] px-4 my-2 cursor-pointer`}
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-[23px] h-[21px] mr-4"
      />
      <span className="font-ubuntu text-[12px] leading-[13.79px]">{title}</span>
      {isSelected && (
        <span className="ml-auto text-green-500">✔</span>  
      )}
    </div>
  );
};

export default OptionBox;
