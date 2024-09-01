import React from "react";
import TicketFeeCalculator from "./PriceTicket";

const PricingComponent = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        {/* Pricing Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-pink-600">PRICING</h1>
          <p className="mt-4 text-lg font-medium text-gray-700">
            We keep it simple, no contracts, no need to pre-pay, no fuss.
          </p>
        </div>

        {/* Pricing Sections */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
          {/* Centered Box */}
          <div className="bg-gradient-to-r from-[#F81A84] to-[#2200F3] w-full md:w-[288px] h-[200px] p-6 rounded-[30px] flex flex-col items-center justify-between">
            <p className="text-white text-lg font-semibold text-center">
              Exclusive Discounts for Charities
            </p>
            <button className="bg-white px-6 py-3 rounded-lg text-black text-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300">
              Get Discount
            </button>
          </div>

          {/* Smaller Boxes */}
          <div className="bg-gradient-to-r from-[#010035] to-[#020056] text-white p-6 rounded-lg text-center w-full md:w-[288px] h-[404px]">
            <h2 className="text-2xl font-bold">Paid Events</h2>
            <p className="text-3xl font-bold mt-4">6.5% + £0.30</p>
            <p className="mt-4 text-sm">
              Per ticket sold. No hassle of processing fees.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#010035] to-[#020056] text-white p-6 rounded-lg text-center w-full md:w-[288px] h-[200px]">
            <h2 className="text-xl font-bold">Free Events</h2>
            <p className="text-2xl font-bold mt-4">No Fee</p>
          </div>
        </div>

        <TicketFeeCalculator />
      </div>
    </div>
  );
};

export default PricingComponent;
