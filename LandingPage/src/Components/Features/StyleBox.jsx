import React from 'react';

const StyledBox = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto px-4 py-8">
      <div className="relative w-full h-[315px] bg-gradient-to-r from-[#010035] via-[#020056] to-[#020056] rounded-lg flex flex-col items-center justify-center p-6 md:p-8 lg:p-12">
        <div className="font-figtree text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
          A simpler way to manage events
        </div>
        <button className="px-6 py-3 bg-pink-600 text-white text-lg font-semibold rounded-full hover:bg-pink-700 transition duration-300">
          Create Event
        </button>
      </div>
    </div>
  );
};

export default StyledBox;
