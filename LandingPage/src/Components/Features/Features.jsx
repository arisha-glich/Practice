import React from "react";
import b1 from "../../assets/images/b1.png";
import b2 from "../../assets/images/b2.png";
import b3 from "../../assets/images/b3.png";
import b4 from "../../assets/images/b4.png";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      imgSrc: b1,
      altText: "Easy to Use",
      label: "Easy to Use",
    },
    {
      id: 2,
      imgSrc: b3,
      altText: "Low Fees",
      label: "Low Fees",
    },
    {
      id: 3,
      imgSrc: b2,
      altText: "More Features",
      label: "More Features",
    },
    {
      id: 4,
      imgSrc: b4,
      altText: "Get Discounts",
      label: "Get Discounts",
    },
  ];

  return (
    <div className="bg-white p-8 rounded-md ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center rounded-lg shadow-md p-4"
          >
            <img
              src={feature.imgSrc}
              alt={feature.altText}
              className="w-60 h-60 sm:w-20rem sm:h-14rem mb-4 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
