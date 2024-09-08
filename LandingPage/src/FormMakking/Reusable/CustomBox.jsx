import React from "react";

// Reusable Box Component
const CustomBox = ({
  title,
  imageUrl,
  onClick,
  isSelected,
  backgroundColor,
  borderColor = "#E4EDE7",
  borderCircleSize = "55px",
  borderCircleColor = "#FFFFF",
  imageSize = "17px",
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative w-[175px] h-[134px] rounded-[30px] mb-5 border-[1px] mt-23 ${
        isSelected ? "border-yellow-500" : borderColor
      } bg-white cursor-pointer`}
      style={{
        backgroundColor: backgroundColor || "white",
        borderRadius: "30px",
        opacity: "1",
      }}
    >
      {/* Border Circle */}
      <div
        className="absolute rounded-[15px]"
        style={{
          width: borderCircleSize,
          height: borderCircleSize,
          border: `1px solid ${borderColor}`,
          backgroundColor: borderCircleColor,
          top: "22px",
          left: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={imageUrl}
          alt="icon"
          className="absolute"
          style={{
            width: imageSize,
            height: "auto",
            opacity: "100",
          }}
        />
      </div>

      {/* Title */}
      <div className="absolute bottom-4 w-full text-center text-[#333] font-semibold">
        {title}
      </div>
    </div>
  );
};

export default CustomBox;
