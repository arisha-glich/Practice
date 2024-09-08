import React, { useState } from 'react';

const Input = ({ label, unitOptions }) => {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState(unitOptions[0]);

  return (
    <div className="flex flex-col items-center">
      <label className="text-lg font-bold text-center mb-2">
        {label}
      </label>
      <div className="flex w-[281px] h-[50px] items-center justify-between border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight"
          className="flex-grow text-center px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div className="border-l border-gray-300 px-4 py-2 bg-gray-50">
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="focus:outline-none bg-transparent"
          >
            {unitOptions.map((option) => (
              <option key={option} value={option}>
                {option}
                
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Input;
