// HelpCenterContainer.js
import React from "react";
import HelpCenterCard from "./Help"; // Adjust the path as needed

const HelpCenterContainer = () => {
  return (
    <div
      style={{
        overflow: "hidden", // Ensure child div is not clipped
      }}
    >
      <div className="relative w-full h-full p-8">
        <HelpCenterCard />
      </div>
    </div>
  );
};

export default HelpCenterContainer;
