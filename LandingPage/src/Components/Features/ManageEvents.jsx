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
  <div className="flex w-[565px] h-[172.8px] p-6 bg-white bg-opacity-100 rounded-lg ">
    <img src={icon} alt={title} className="w-[126px] h-[100px] mr-4 object-contain" />
    <div className="flex flex-col justify-center">
      <h3 className="text-xl font-bold">{title}</h3>
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
    <div className="min-h-screen bg-gradient-to-r bg-white text-black flex flex-col items-center">
      <section className=" w-full max-w-6xl "> 
      <h1 className="text-4xl font-bold text-pink-600">FEATURES</h1>


        <h2 className="text-center text-4xl font-semibold mb-8">Simplified ticketing with a full suite of features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
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
