import React from 'react';

const PeerExample = () => {
  return (
    <div className="p-4">
      <input
        type="text"
        id="name"
        className="peer p-2 border rounded-md focus:outline-none"
        placeholder="Enter your name"
      />
      <label
        htmlFor="name"
        className="ml-2 text-gray-500 peer-focus:text-blue-500"
      >
        Name
      </label>
    </div>
  );
};

export default PeerExample;
