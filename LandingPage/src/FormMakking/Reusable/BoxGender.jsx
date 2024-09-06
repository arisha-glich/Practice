import React from "react";

const BoxComponent = ({
  title,
  imageUrl,
  className = "",
  titleClassName = "",
  imageClassName = "",
  onClick, // Added onClick for interaction
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative w-[361px] h-[99px] rounded-[30px] border-[1px] border-r-0 border-[#b6bcb8] bg-white ${className}`}
    >
      {/* Container for Title and Image */}
      <div className="flex flex-col  h-full">
        {/* Title */}
        {title && (
          <div
            className={`text-[#000]  justify-center m-3  font-ubuntu text-[24px] font-bold top-6 leading-[27.58px] text-center ${titleClassName}`}
          >
            {title}
          </div>
        )}
        {/* Image */}
        {imageUrl && (
          <div className={`flex  ${imageClassName}`}>
            <img
              src={imageUrl}
              alt={title}
              className=" justify-start w-14 h-10"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BoxComponent;
