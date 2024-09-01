import React from "react";
import img from '../assets/images/background.png';

const EventTicketing = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Header Section */}
      <div
        className="relative text-white text-center py-16 px-8"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          maxWidth: '1440px',
          height: '595px',
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-[90%] sm:w-[782px] h-auto max-w-[90%] sm:h-[150px] rounded-tl-[6px] rounded-br-none rounded-bl-none rounded-tr-none flex flex-col items-center justify-center">
            <div className="text-[32px] sm:text-[50px] text-white font-bold leading-[40px] sm:leading-[72px] mb-4">
              Event ticketing made simple
            </div>
          </div>

          <p className="text-base sm:text-lg mb-12 mt-2">
            Providing a global platform for Muslim-friendly events, built for
            Muslims, by Muslims.
          </p>

          <button className="bg-white text-purple-700 py-2 px-6 font-semibold rounded-lg transition duration-300 text-sm sm:text-base">
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventTicketing;
