// eslint-disable-next-line no-unused-vars
import React from "react";
import Img1 from "../assets/Collection Page Images/YES/Screenshot 2023-11-05 at 10.09.15.png";
import Img2 from "../assets/Collection Page Images/YES/SLEEVELESS TEE.png";
import Img3 from "../assets/Collection Page Images/YES/Cargo-Pants11.png";

const Fixed_Card2 = () => {
 const cards = [
  {
   heading: "Swim Collection",
   title: "Dive into Style with Premium Swimwear",
   image: Img1,
   buttonText: "Shop",
  },
  {
   heading: "Activewear",
   title: "Unleash Your Power with Ultra-Comfort Activewear",
   image: Img2,
   buttonText: "Shop",
  },
  {
   heading: "Running Shorts",
   title: "Run Freely in Lightweight Performance Shorts",
   image: Img3,
   buttonText: "Shop",
  },
 ];

 return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
   {cards.map((card, index) => (
    <div
     key={index}
     className="relative bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
    >
     {/* Text on Image */}
     <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 text-center">
      <h2 className="text-4xl font-bold mb-2">{card.heading}</h2>
      <h3 className="text-sm mb-4 font-mono">{card.title}</h3>
      <button className="px-8 bg-white text-black border rounded-full shadow-lg hover:bg-transparent hover:text-white duration-700 w-full sm:w-auto">
       {card.buttonText}
      </button>
     </div>
     {/* Image */}
     <img
      src={card.image}
      alt={card.title}
      className="w-[500px] h-[600px] object-cover"
     />
    </div>
   ))}
  </div>
 );
};

export default Fixed_Card2;
