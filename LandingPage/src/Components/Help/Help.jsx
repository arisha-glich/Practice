import React from 'react';
import backgroundImage from '../../assets/images/help.png'; // Update the path as needed

const HelpCenterCard = () => {
  return (
    <div
      className="relative bg-blue-900 text-white p-8 rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4">Visit Our Help Center for Support</h3>
        <p className="text-lg mb-4">Our dedicated team is always ready to answer your questions.</p>
        <a href="/help-center" className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
          Go to Help Center
        </a>
      </div>
    </div>
  );
};

export default HelpCenterCard;
