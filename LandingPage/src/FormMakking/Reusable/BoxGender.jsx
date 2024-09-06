import React from "react";

const BoxComponent = ({
  title,
  imageUrl,
  className = "",
  titleClassName = "",
  imageClassName = "",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative w-[361px] h-[99px] rounded-[30px] border-[1px] border-[#b6bcb8] flex items-center justify-between px-5 cursor-pointer ${className}`}
    >
      {/* Image on the left */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className={`w-8 h-8 ${imageClassName}`} // Adjusted size for closer match
        />
      )}

      {/* Title in the center */}
      {title && (
        <div
          className={`text-[#000] font-ubuntu text-[24px] font-bold leading-[27.58px] text-center flex-1 ${titleClassName}`}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default BoxComponent;
