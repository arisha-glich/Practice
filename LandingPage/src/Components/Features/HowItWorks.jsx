import React from "react";
import img1 from "../../assets/images/works/1.png";
import img2 from "../../assets/images/works/2.png";
import img3 from "../../assets/images/works/11.png";
import img4 from "../../assets/images/works/22.png";
import img5 from "../../assets/images/works/33.png";
import img6 from "../../assets/images/works/44.png";

const HowItWorks = () => {
  return (
    <section className="container mx-auto my-12 p-6 bg-white rounded-lg">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600">
          How We Work Out Things
        </h1>
        <p className="mb-8 mt-6 text-base md:text-lg">
          At Muslim Ticket, we streamline the process to create an event with
          ease and grace. Our approach is designed to make event planning and
          promotions a breeze, whether for small gatherings or large crowds.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
        {/* Image 1 on the Top or Left */}
        <div className="md:w-1/4">
          <img
            src={img1}
            alt="Happy People"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Middle Steps Section */}
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <img
                src={img3}
                alt="Step 1"
                className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0"
              />
              <div className="md:ml-4 flex-1 p-4 rounded-lg bg-gray-100">
                {/* Step 1 content */}
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
              <img
                src={img4}
                alt="Step 2"
                className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0"
              />
              <div className="md:mr-4 flex-1 p-4 rounded-lg bg-gray-100">
                {/* Step 2 content */}
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <img
                src={img5}
                alt="Step 3"
                className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0"
              />
              <div className="md:ml-4 flex-1 p-4 rounded-lg bg-gray-100">
                {/* Step 3 content */}
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
              <img
                src={img6}
                alt="Step 4"
                className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0"
              />
              <div className="md:mr-4 flex-1 p-4 rounded-lg bg-gray-100">
                {/* Step 4 content */}
              </div>
            </div>
          </div>
        </div>

        {/* Image 2 on the Bottom or Right */}
        <div className="md:w-1/4">
          <img
            src={img2}
            alt="Happy People"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
