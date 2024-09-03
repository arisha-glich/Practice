import React, { useState } from 'react';

const FlexboxDemo = () => {
  const [property, setProperty] = useState('');

  const flexProperties = [
    { name: 'Flex Direction Row', value: 'flex-row' },
    { name: 'Flex Direction Column', value: 'flex-col' },
    { name: 'Flex Wrap Wrap', value: 'flex-wrap' },
    { name: 'Flex Wrap No Wrap', value: 'flex-nowrap' },
    { name: 'Justify Content Start', value: 'justify-start' },
    { name: 'Justify Content Center', value: 'justify-center' },
    { name: 'Justify Content End', value: 'justify-end' },
    { name: 'Justify Content Space Between', value: 'justify-between' },
    { name: 'Justify Content Space Around', value: 'justify-around' },
    { name: 'Align Items Start', value: 'items-start' },
    { name: 'Align Items Center', value: 'items-center' },
    { name: 'Align Items End', value: 'items-end' },
    { name: 'Align Items Stretch', value: 'items-stretch' },
    { name: 'Align Content Start', value: 'content-start' },
    { name: 'Align Content Center', value: 'content-center' },
    { name: 'Align Content End', value: 'content-end' },
    { name: 'Align Content Space Between', value: 'content-between' },
    { name: 'Align Content Space Around', value: 'content-around' },
    { name: 'Align Self Auto', value: 'self-auto' },
    { name: 'Align Self Start', value: 'self-start' },
    { name: 'Align Self Center', value: 'self-center' },
    { name: 'Align Self End', value: 'self-end' },
    { name: 'Align Self Stretch', value: 'self-stretch' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Flexbox Demo</h2>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {flexProperties.map((prop) => (
            <button
              key={prop.value}
              onClick={() => setProperty(prop.value)}
              className="px-3 py-1 bg-beige text-gray-800 border border-gray-300 rounded shadow-sm hover:bg-gray-200 transition"
            >
              {prop.name}
            </button>
          ))}
        </div>
        <div className={`flex ${property} gap-4 p-4 border border-gray-300 rounded-md bg-white`}>
          <div className="flex-1 bg-red-500 text-white p-4 text-center">Item 1</div>
          <div className="flex-1 bg-green-500 text-white p-4 text-center">Item 2</div>
          <div className="flex-1 bg-blue-500 text-white p-4 text-center">Item 3</div>
        </div>
      </div>
    </div>
  );
};

export default FlexboxDemo;
