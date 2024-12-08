// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Img from '../assets/Collection Page Images/YES/Mobile/Heath-Cream-Mob.png'
import Img_1 from '../assets/Collection Page Images/YES/Mobile/Franco-Mob.png'
import Img_2 from '../assets/Collection Page Images/YES/Mobile/LongPoncho-Active-Mob.png'
import Img_3 from '../assets/Collection Page Images/YES/Mobile/LongPoncho-Active-Mob1.png'
import Img_4 from '../assets/Collection Page Images/YES/Mobile/ActiveSwimwearMobile1.png'
import Img_5 from '../assets/Collection Page Images/YES/Mobile/FelixMob1.png'

const CardsCarousel = () => {
 const cards = [
  { title: "Card 1", description: "Description 1", image: Img },
  { title: "Card 2", description: "Description 2", image: Img_1 },
  { title: "Card 3", description: "Description 3", image: Img_2 },
  { title: "Card 4", description: "Description 4", image: Img_3 },
  { title: "Card 5", description: "Description 5", image: Img_4 },
  { title: "Card 6", description: "Description 6", image: Img_5 },
 ];

 const scrollRef = useRef(null);

 const scrollLeft = () => {
  scrollRef.current.scrollBy({
   left: -300,
   behavior: "smooth",
  });
 };

 const scrollRight = () => {
  scrollRef.current.scrollBy({
   left: 300,
   behavior: "smooth",
  });
 };

 return (
  <div className="relative w-[100%] mx-auto my-16">
   {/* New Arrivals Header */}
   <div className="text-center mb-6">
    <h2 className="text-5xl font-bold text-black pb-16">New Arrivals</h2>
   </div>

   {/* Carousel Wrapper */}
   <div
    ref={scrollRef}
    className="flex overflow-x-hidden space-x-6 p-4 snap-x snap-mandatory scrollbar-hide"
   >
    {cards.map((card, index) => (
     <div
      key={index}
      className="min-w-[300px] h-[500px] flex-shrink-0 relative rounded-lg overflow-hidden snap-center transform transition-transform duration-300 hover:scale-105 shadow-md"
     >
      <img
       src={card.image}
       alt={card.title}
       className="w-[350px] h-[400px]"
      />
      <div className="absolute bottom-0 w-full text-black text-center py-4">
       <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
       <p className="text-lg">{card.description}</p>
      </div>
     </div>
    ))}
   </div>

   {/* Navigation Buttons */}
   <button
    onClick={scrollLeft}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-slate-500
hover:bg-slate-400 text-black p-3 rounded-full z-10"
   >
    <FaChevronLeft />
   </button>
   <button
    onClick={scrollRight}
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-slate-500 text-black hover:bg-slate-400 p-3 rounded-full z-10"
   >
    <FaChevronRight />
   </button>

   {/* View All Button */}
   <div className="text-center mt-8">
    <button className="bg-black text-white text-[15px] font-bold px-10 py-1 rounded-md text-xl hover:bg-gray-500">
     View All
    </button>
   </div>
  </div>
 );
};

export default CardsCarousel;
