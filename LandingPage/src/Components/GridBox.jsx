import React, { useState } from 'react';

const GridDemo = () => {
  const [property, setProperty] = useState('');

  const gridProperties = [
    { name: 'Grid 2 Columns', value: 'grid-cols-2' },
    { name: 'Grid 3 Columns', value: 'grid-cols-3' },
    { name: 'Grid 4 Columns', value: 'grid-cols-4' },
    { name: 'Auto Rows Fr', value: 'auto-rows-fr' },
    { name: 'Auto Cols Fr', value: 'auto-cols-fr' },
    { name: 'Gap 4', value: 'gap-4' },
    { name: 'Gap 8', value: 'gap-8' },
    { name: 'Justify Items Start', value: 'justify-items-start' },
    { name: 'Justify Items Center', value: 'justify-items-center' },
    { name: 'Justify Items End', value: 'justify-items-end' },
    { name: 'Align Items Start', value: 'items-start' },
    { name: 'Align Items Center', value: 'items-center' },
    { name: 'Align Items End', value: 'items-end' },
    { name: 'Align Content Start', value: 'content-start' },
    { name: 'Align Content Center', value: 'content-center' },
    { name: 'Align Content End', value: 'content-end' },
    { name: 'Align Content Space Between', value: 'content-between' },
    { name: 'Align Content Space Around', value: 'content-around' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Grid Demo</h2>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {gridProperties.map((prop) => (
            <button
              key={prop.value}
              onClick={() => setProperty(prop.value)}
              className="px-3 py-1 bg-beige text-gray-800 border border-gray-300 rounded shadow-sm hover:bg-gray-200 transition"
            >
              {prop.name}
            </button>
          ))}
        </div>
        <div className={`grid ${property} gap-4 p-4 border border-gray-300 rounded-md bg-white`}>
          <div className="bg-red-500 text-white p-4 text-center">Item 1</div>
          <div className="bg-green-500 text-white p-4 text-center">Item 2</div>
          <div className="bg-blue-500 text-white p-4 text-center">Item 3</div>
          <div className="bg-yellow-500 text-white p-4 text-center">Item 4</div>
        </div>
      </div>
    </div>
  );
};

export default GridDemo;
