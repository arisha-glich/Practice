import React from 'react';

const GroupExample = () => {
  return (
    <div className="group p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
      <h2 className="text-xl font-bold group-hover:text-red-500">
        Hover over me!
      </h2>
      <p className="mt-2 text-gray-700 group-hover:text-red-900">
        The text and background color change when you hover over this card.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded group-hover:bg-blue-700">
        Hover Button
      </button>
    </div>
  );
};

export default GroupExample;
