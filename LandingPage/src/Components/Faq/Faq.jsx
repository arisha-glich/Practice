import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <span className="text-lg text-gray-500">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="py-2">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How much does The Muslim Ticket cost?",
      answer: "For free tickets, there's no fee. If you're hosting a paid event, we take just 3% of the ticket price plus 0.20 cents to maintain our platform and keep it secure.",
    },
    {
      question: "What type of events can I host on MuslimTicket?",
      answer: "You can host a variety of events including social gatherings, charity events, and more.",
    },
    {
      question: "Is event management or customer support included?",
      answer: "Yes, we offer basic event management tools and customer support to help you with any issues.",
    },
    {
      question: "Can I customize my event and profile to match my branding?",
      answer: "Absolutely! You can customize your event page and profile with your own branding to ensure a cohesive look.",
    },
    {
      question: "How fast can I set up my account?",
      answer: "You can set up your account and start creating events within minutes.",
    },
    {
      question: "When will I receive payment after my event?",
      answer: "Payments are typically processed and disbursed within 5-7 business days after your event ends.",
    },
    {
      question: "Can I add special requirements during the booking process?",
      answer: "Yes, you can specify special requirements that attendees need to provide during the booking process.",
    },
    {
      question: "Can I schedule multiple sessions for my event?",
      answer: "Yes, you can schedule multiple sessions for your event, and each session will be treated as a separate event instance.",
    },
    {
      question: "What's the maximum number of attendees I can host?",
      answer: "There's no limit to the number of attendees you can host for online events. For in-person events, this depends on the venue capacity.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">FAQ</h1>
      <h2 className="text-center text-2xl font-semibold mb-8">Your Questions, Answered!</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
