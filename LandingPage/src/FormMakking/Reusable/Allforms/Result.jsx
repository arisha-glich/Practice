import React from 'react';
import img from '../../../assets/images/Result/img.png';
import BackgroundLayout from '../Backgroung'; // Assuming BackgroundLayout is a custom wrapper component.
import placeholderIcon from '../../../assets/images/placeholder-icon.png'; // Placeholder for tick sign images

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
          <div className="absolute w-[250px] h-[278px] top-[100px] left-[50px]">
            <img src={img} alt="Left" className="w-full h-full object-contain" />
          </div>

          {/* Right Writing Section */}
          <div className="absolute top-[140px] left-[350px]">
            <p className="text-2xl font-bold">Calculating your results...</p>
            <div className="w-full bg-gray-200 rounded-full mt-2">
              <div
                className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: '70%' }}
              >
                {/* Progress Bar */}
              </div>
            </div>

            {/* Steps with placeholder icons */}
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-center">
                <img src={placeholderIcon} alt="check" className="w-4 h-4 mr-2" />
                Processing entered data.
              </li>
              <li className="flex items-center">
                <img src={placeholderIcon} alt="check" className="w-4 h-4 mr-2" />
                Estimating your healthcare needs.
              </li>
              <li className="flex items-center">
                <img src={placeholderIcon} alt="check" className="w-4 h-4 mr-2" />
                Calculating your macros.
              </li>
              <li className="flex items-center">
                <img src={placeholderIcon} alt="check" className="w-4 h-4 mr-2" />
                Picking out recipes.
              </li>
              <li className="flex items-center">
                <img src={placeholderIcon} alt="check" className="w-4 h-4 mr-2" />
                Your personalized plan is ready!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Result;
