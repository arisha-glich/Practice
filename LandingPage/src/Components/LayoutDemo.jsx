import React, { useState } from 'react';

const LayoutDemo = () => {
  const [layout, setLayout] = useState('flex');
  const [flexDirection, setFlexDirection] = useState('flex-row');
  const [flexAlignItems, setFlexAlignItems] = useState('items-center');
  const [flexJustifyContent, setFlexJustifyContent] = useState('justify-center');
  const [flexAlignSelf, setFlexAlignSelf] = useState('self-auto');
  const [gridProperty, setGridProperty] = useState('grid-cols-3');

  const flexDirections = [
    { name: 'Row', value: 'flex-row' },
    { name: 'Column', value: 'flex-col' },
  ];

  const flexAlignments = [
    { name: 'Start', value: 'items-start' },
    { name: 'Center', value: 'items-center' },
    { name: 'End', value: 'items-end' },
    { name: 'Stretch', value: 'items-stretch' },
  ];

  const flexJustifyContents = [
    { name: 'Start', value: 'justify-start' },
    { name: 'Center', value: 'justify-center' },
    { name: 'End', value: 'justify-end' },
    { name: 'Between', value: 'justify-between' },
    { name: 'Around', value: 'justify-around' },
    { name: 'Evenly', value: 'justify-evenly' },
  ];

  const flexAlignSelfs = [
    { name: 'Auto', value: 'self-auto' },
    { name: 'Start', value: 'self-start' },
    { name: 'Center', value: 'self-center' },
    { name: 'End', value: 'self-end' },
    { name: 'Stretch', value: 'self-stretch' },
  ];

  const gridProperties = [
    { name: '1 Column', value: 'grid-cols-1' },
    { name: '2 Columns', value: 'grid-cols-2' },
    { name: '3 Columns', value: 'grid-cols-3' },
    { name: '4 Columns', value: 'grid-cols-4' },
    { name: '5 Columns', value: 'grid-cols-5' },
    { name: 'Gap 1', value: 'gap-1' },
    { name: 'Gap 2', value: 'gap-2' },
    { name: 'Gap 4', value: 'gap-4' },
    { name: 'Gap 8', value: 'gap-8' },
  ];

  const buttonClass = (isSelected) => 
    `px-3 py-1 border border-gray-300 rounded shadow-sm transition ${
      isSelected ? 'bg-gray-600 text-white' : 'bg-beige text-gray-800 hover:bg-gray-200'
    }`;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Layout Demos</h1>
      
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setLayout('flex')}
          className={buttonClass(layout === 'flex')}
        >
          Flexbox
        </button>
        <button
          onClick={() => setLayout('grid')}
          className={buttonClass(layout === 'grid')}
        >
          Grid
        </button>
      </div>

      {layout === 'flex' && (
        <div className="p-6 bg-white shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Flexbox Demo</h2>
          
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            <h3 className="w-full text-center mb-2 font-semibold">Flex Direction</h3>
            {flexDirections.map((prop) => (
              <button
                key={prop.value}
                onClick={() => setFlexDirection(prop.value)}
                className={buttonClass(flexDirection === prop.value)}
              >
                {prop.name}
              </button>
            ))}
          </div>
          
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            <h3 className="w-full text-center mb-2 font-semibold">Align Items</h3>
            {flexAlignments.map((prop) => (
              <button
                key={prop.value}
                onClick={() => setFlexAlignItems(prop.value)}
                className={buttonClass(flexAlignItems === prop.value)}
              >
                {prop.name}
              </button>
            ))}
          </div>
          
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            <h3 className="w-full text-center mb-2 font-semibold">Justify Content</h3>
            {flexJustifyContents.map((prop) => (
              <button
                key={prop.value}
                onClick={() => setFlexJustifyContent(prop.value)}
                className={buttonClass(flexJustifyContent === prop.value)}
              >
                {prop.name}
              </button>
            ))}
          </div>

          <div className="mb-4 flex flex-wrap justify-center gap-2">
            <h3 className="w-full text-center mb-2 font-semibold">Align Self</h3>
            {flexAlignSelfs.map((prop) => (
              <button
                key={prop.value}
                onClick={() => setFlexAlignSelf(prop.value)}
                className={buttonClass(flexAlignSelf === prop.value)}
              >
                {prop.name}
              </button>
            ))}
          </div>
          
          <div className={`flex ${flexDirection} ${flexAlignItems} ${flexJustifyContent} gap-4 p-4 border border-gray-300 rounded-md bg-white`}>
            <div className={`flex-1 bg-red-500 text-white p-4 text-center ${flexAlignSelf}`}>Heeeeeeeeeeeeellllllllllllooooooo</div>
            <div className={`flex-1 bg-green-500 text-white p-4 text-center ${flexAlignSelf}`}>Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
            <div className={`flex-1 bg-blue-500 text-white p-4 text-center ${flexAlignSelf}`}>Hoooooooooooooooooooooeeeeeeeeeeeeeeeeeeeewwwwwwww</div>
          </div>
        </div>
      )}

      {layout === 'grid' && (
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Grid Demo</h2>
          
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            <h3 className="w-full text-center mb-2 font-semibold">Grid Properties</h3>
            {gridProperties.map((prop) => (
              <button
                key={prop.value}
                onClick={() => setGridProperty(prop.value)}
                className={buttonClass(gridProperty === prop.value)}
              >
                {prop.name}
              </button>
            ))}
          </div>
          
          <div className={`grid ${gridProperty} gap-4 p-4 border border-gray-300 rounded-md bg-white`}>
            <div className="bg-red-500 text-white p-4 text-center">Item 1</div>
            <div className="bg-green-500 text-white p-4 text-center">Item 2</div>
            <div className="bg-blue-500 text-white p-4 text-center">Item 3</div>
            <div className="bg-yellow-500 text-white p-4 text-center">Item 4</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutDemo;



//justify — to position something along the primary axis.
//align — to position something along the cross axis.
//content — a group of “stuff” that can be distributed.
//items — single items that can be positioned individually.