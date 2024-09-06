import React from 'react';
import img from '../../../assets/images/Result/img.png';
import img2 from '../../../assets/images/Result/1.png';
import img3 from '../../../assets/images/Result/2.png';
import BackgroundLayout from '../Backgroung';

const Result = () => {
  return (
    <BackgroundLayout>
      <div className="flex justify-center items-center h-screen">
        <div
          className="relative flex flex-col items-center justify-center"
          style={{
            width: '697px',
            height: '486px',
            borderRadius: '30px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E4EDE7',
          }}
        >
          {/* Left Image Section */}
          <div className="absolute w-[300px] h-[278px] top-[50px] left-[20px]">
            <img src={img} alt="Left" className="w-full h-full object-contain" />
          </div>

          {/* Right Writing Section */}
          <div className="absolute top-[50px] left-[350px]">
            <p className="text-2xl font-bold">Evaluating Result</p>
          </div>

          {/* Additional Images */}
          <div className="absolute w-[225px] h-[170px] top-[150px] left-[350px]">
            <img src={img2} alt="Additional" className="w-full h-full object-contain" />
          </div>

          <div className="absolute w-[225px] h-[170px] top-[350px] left-[350px]">
            <img src={img3} alt="Additional 2" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Result;
