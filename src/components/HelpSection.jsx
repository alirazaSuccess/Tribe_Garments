// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaQuestionCircle, FaBox, FaUndo } from "react-icons/fa";

const HelpSection = () => {
  const cards = [
    {
      icon: <FaQuestionCircle size={30} className="text-black mb-4" />,
      title: "Get Help Buying",
      description: "If you have any questions about our gear, get in touch.",
      link: "Chat with us",
    },
    {
      icon: <FaBox size={30} className="text-black mb-4" />,
      title: "Free Chronopost Delivery",
      description: "Fast, secure delivery with tracking for peace of mind.",
      link: "Learn more",
    },
    {
      icon: <FaUndo size={30} className="text-black mb-4" />,
      title: "Free & Easy Returns",
      description: "Free returns on all orders within 14 days from the delivery date.",
      link: "Learn more",
    },
  ];

  return (
    <section className="bg-white py-10 mx-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-0">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start items-center mb-4">
              <span>{card.icon}</span>
            </div>
            <h2 className="text-lg font-bold text-black mb-2">{card.title}</h2>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <a
              href="#"
              className="text-black underline hover:no-underline transition"
            >
              {card.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HelpSection;
