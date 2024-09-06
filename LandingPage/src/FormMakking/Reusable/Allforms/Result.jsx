import React from 'react';
import img from "../../../assets/images/Result/img.png";
import img2 from "../../../assets/images/Result/1.png";
import img3 from "../../../assets/images/Result/2.png";

const Result = () => {
  return (
    <div className="relative w-[697px] h-[485px] top-[145px] left-[292px] rounded-tl-[30px] border border-[#E4EDE7] bg-white p-8">
      {/* Left Image Section */}
      <div className="absolute w-[300px] h-[278px] top-[50px] left-[20px]">
        <img src={img} alt="Left" className="w-full h-full object-contain" />
      </div>

      {/* Right Writing Section */}
      <div className="absolute top-[50px] left-[350px]">
        <p className="text-2xl font-bold">
          Evaluating Result
        </p>
      </div>

      {/* Additional Images */}
      <div className="absolute w-[225px] h-[170px] top-[150px] left-[350px]">
        <img src={img2} alt="Additional" className="w-full h-full object-contain" />
      </div>

      <div className="absolute w-[225px] h-[170px] top-[350px] left-[350px]">
        <img src={img3} alt="Additional 2" className="w-full h-full object-contain" />
      </div>

      {/* Additional Text */}
      <div className="absolute top-[550px] left-[350px]">
        <p className="text-md text-gray-600">
          Additional text or any further information goes here.
        </p>
      </div>
    </div>
  );
};

export default Result;
