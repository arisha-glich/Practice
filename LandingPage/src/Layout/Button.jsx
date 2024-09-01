import React from 'react';

const Button = ({
  text = 'Click Me',
  backgroundColor = 'bg-gray-600', // Default background color
  textColor = 'text-white',
  padding = 'px-4 py-2', // Adjusted padding for the specified width and height
  borderRadius = 'rounded-lg',
  hoverColor = 'hover:bg-gray-700', // Default hover color
  fontFamily = 'font-outfit',
  fontSize = 'text-[16px]',
  fontWeight = 'font-medium',
  lineHeight = 'leading-[20.16px]',
  textAlign = 'text-center',
  width = 'w-[75px]',
  height = 'h-[20px]',
  onClick = () => {},
}) => {
  return (
    <button
      className={`transition duration-300 ease-in-out ${backgroundColor} ${textColor} ${padding} ${borderRadius} ${fontFamily} ${fontSize} ${fontWeight} ${lineHeight} ${textAlign} ${width} ${height} ${hoverColor} focus:outline-none`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
