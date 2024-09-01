import React from 'react';

const TicketFeeCalculator = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen py-8 px-4">
      <div className="w-full max-w-4xl bg-gradient-to-r from-[#F81A84] to-[#2200F3] p-6 rounded-lg shadow-lg">
        {/* Ticket Fee Calculator Header */}
        <h1 className="text-2xl font-bold text-white mb-4">Ticket Fee Calculator</h1>

        {/* Ticket Price and Total Tickets Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg p-4 shadow-md">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Ticket price</label>
            <div className="bg-gray-100 p-4 rounded-lg text-center text-lg font-semibold text-[#2200F3]">£ 2</div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Total tickets</label>
            <div className="bg-gray-100 p-4 rounded-lg text-center text-lg font-semibold text-[#2200F3]">10</div>
          </div>
        </div>

        {/* Total Price and Booking Fee */}
        <div className="flex flex-col md:flex-row justify-between mt-6 text-lg font-semibold text-black">
          <p>Total ticket price: <span className="text-[#2200F3]">£ 20.00</span></p>
          <p className="mt-2 md:mt-0">Booking fee: <span className="text-[#F81A84]">£ 1.48</span></p>
        </div>

        {/* Fee Absorption Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {/* You Absorb Booking Fee */}
          <div className="p-6 bg-white rounded-lg text-center shadow-md">
            <h3 className="font-bold bg-gradient-to-r from-[#F81A84] to-[#2200F3] bg-clip-text text-transparent text-xl mb-4">
              You absorb booking fee
            </h3>
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <p className="text-xs">Customer pays</p>
                <p className="text-xl font-bold">£ 21.48</p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-xs">Total due to you</p>
                <p className="text-xl font-bold">£ 20.00</p>
              </div>
            </div>
          </div>

          {/* Customer Pays Booking Fee */}
          <div className="p-6 bg-white rounded-lg text-center shadow-md">
            <h3 className="font-bold bg-gradient-to-r from-[#F81A84] to-[#2200F3] bg-clip-text text-transparent text-xl mb-4">
              Customer pays booking fee
            </h3>
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <p className="text-xs">Customer pays</p>
                <p className="text-xl font-bold">£ 21.48</p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-xs">Total due to you</p>
                <p className="text-xl font-bold">£ 20.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketFeeCalculator;
