import React from 'react';
import icon1 from "../../assets/images/icons/1.png";
import icon2 from "../../assets/images/icons/2.png";
import icon3 from "../../assets/images/icons/3.png";
import icon4 from "../../assets/images/icons/4.png";
import icon5 from "../../assets/images/icons/5.png";
import icon6 from "../../assets/images/icons/6.png";
import icon7 from "../../assets/images/icons/7.png";
import icon8 from "../../assets/images/icons/8.png";
import icon9 from "../../assets/images/icons/9.png";
import icon10 from "../../assets/images/icons/10.png";

// FeatureCard component to display individual feature details
const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col md:flex-row items-start p-6 bg-white shadow-lg rounded-lg">
    <img src={icon} alt={title} className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 object-contain" />
    <div className="flex flex-col justify-center">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

// Section component to display the entire section with all features
const Section = () => {
  const features = [
    {
      icon: icon1,
      title: 'Build your event page',
      description: 'Easily build a custom event page with our tools.',
    },
    {
      icon: icon2,
      title: 'Reporting and analytics',
      description: 'Gain insights with detailed reports and analytics.',
    },
    {
      icon: icon3,
      title: 'Pass the fees on',
      description: 'Choose to pass fees to attendees or absorb them.',
    },
    {
      icon: icon4,
      title: 'Multiple ticket types',
      description: 'Offer different ticket types and pricing tiers.',
    },
    {
      icon: icon5,
      title: 'Add donation pages for events',
      description: 'Accept donations easily through your event page.',
    },
    {
      icon: icon6,
      title: 'Manage orders',
      description: 'Efficiently manage orders with our intuitive tools.',
    },
    {
      icon: icon7,
      title: 'Secure payment methods',
      description: 'Accept payments with leading payment gateways.',
    },
    {
      icon: icon8,
      title: 'Booking widget for your website',
      description: 'Embed our booking widget on your website easily.',
    },
    {
      icon: icon9,
      title: 'Attendee check-in',
      description: 'Streamline attendee check-in with our mobile app.',
    },
    {
      icon: icon10,
      title: 'Discount codes',
      description: 'Create and manage promotional codes for your event.',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-100 to-white text-black py-12">
      <section className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 text-center">
          FEATURES
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Simplified ticketing with a full suite of features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section;
