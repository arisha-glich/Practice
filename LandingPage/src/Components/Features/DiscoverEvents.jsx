import React from 'react';

import img1 from '../../assets/images/Events/1.png'
import img2 from '../../assets/images/Events/2.png'
import img3 from '../../assets/images/Events/3.png'
import img4 from '../../assets/images/Events/4.png'
const DiscoverEvents = () => {
  const events = [
    { type: 'Educational', imgSrc: img1, title: 'Culture and Ethics Debate Session with Muslim Debate', date: 'Monday, 29th May 11:00 AM (GMT+5)', location: 'Town Hall, Leeds, UK' },
    { type: 'Free', imgSrc: img2, title: 'Culture and Ethics Debate Session with Muslim Debate', date: 'Monday, 29th May 11:00 AM (GMT+5)', location: 'Town Hall, Leeds, UK' },
    { type: 'Social', imgSrc: img3, title: 'Culture and Ethics Debate Session with Muslim Debate', date: 'Monday, 29th May 11:00 AM (GMT+5)', location: 'Town Hall, Leeds, UK' },
    { type: 'Charity', imgSrc: img4, title: 'Culture and Ethics Debate Session with Muslim Debate', date: 'Monday, 29th May 11:00 AM (GMT+5)', location: 'Town Hall, Leeds, UK' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-600">EVENTS</h1>
        <p className="mt-4 text-gray-700">Discover Events</p>
        <p className="text-gray-500">At Muslim Ticket, we’ve streamlined our process to ensure a seamless experience...</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={event.imgSrc} alt={event.type} className="w-full h-40 object-cover"/>
            <div className="p-4">
              <span className="inline-block bg-pink-500 text-white px-2 py-1 text-xs font-bold rounded">{event.type}</span>
              <h2 className="mt-2 text-lg font-semibold text-gray-800">{event.title}</h2>
              <p className="mt-1 text-sm text-gray-600">{event.date}</p>
              <p className="mt-1 text-sm text-gray-600">{event.location}</p>
              <button className="mt-4 w-full bg-gray-800 text-white py-2 rounded">Book Tickets</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverEvents;
