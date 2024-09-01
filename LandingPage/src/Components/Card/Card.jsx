import React from 'react';

import img1 from '../../assets/images/Cards/1.png'
import img2 from '../../assets/images/Cards/2.png'
import img3 from '../../assets/images/Cards/3.png'
import img4 from '../../assets/images/Cards/4.png'
import img5 from '../../assets/images/Cards/5.png'
import img6 from '../../assets/images/Cards/6.png'

const EventCategories = () => {
  const categories = [
    {
      title: "Social",
      image: img1,
      category: "Category 1",
      positionClass: "mt-0", // No margin adjustment
    },
    {
      title: "Marriage",
      image: img2,
      category: "Category 2",
      positionClass: "mt-4", // Slightly lower
    },
    {
      title: "Academic",
      image: img3,
      category: "Category 3",
      positionClass: "mt-8", // Lower
    },
    {
      title: "Charity",
      image: img4,
      category: "Category 4",
      positionClass: "-mt-4", // Slightly higher
    },
    {
      title: "Eid Events",
      image: img5,
      category: "Category 5",
      positionClass: "-mt-8", // Higher
    },
    {
      title: "Community",
      image: img6,
      category: "Category 6",
      positionClass: "mt-0", // No margin adjustment
    },
    {
      title: "Nasheeds",
      image: img1,
      category: "Category 7",
      positionClass: "mt-4", // Slightly lower
    },
    {
      title: "Free",
      image: img2,
      category: "Category 8",
      positionClass: "-mt-4", // Slightly higher
    },
  ];

  return (
    <div className="bg-white  flex flex-col w-[240] h-[300] items-center  ">
      <div className="py-10 px-5">
      <h1 className="text-4xl font-bold text-pink-600">Category</h1>
        <h2 className="text-center text-2xl font-bold mb-6">Wide range of Muslim event categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className={`relative w-[24] h-64 overflow-hidden rounded-lg shadow-lg ${category.positionClass}`}>
              <img
                src={category.image}
                className="w-full h-full object-cover object-bottom"
                alt={category.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCategories;
