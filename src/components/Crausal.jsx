/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ActiveSteve from "../assets/Collection Page Images/Active-Steve.png";
import Mercury from "../assets/Collection Page Images/Mercury-Actuvewear.png";
import Run from "../assets/Collection Page Images/Run-Steve.png";
import Comet from "../assets/Collection Page Images/Comet - Copy.jpg";
import Navbar from "./navbar";
import { CiPause1 } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa";

const Carousel = () => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [isPlaying, setIsPlaying] = useState(true);
 const [progress, setProgress] = useState(0);

 const slides = [
  { image: ActiveSteve, text: "Active Steve Collection" },
  { image: Mercury, text: "Mercury Activewear" },
  { image: Run, text: "Run Steve Collection" },
  { image: Comet, text: "Comet Collection" },
 ];

 const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  setProgress(0);
 };

 const pausePlayHandler = () => {
  setIsPlaying((prev) => !prev);
 };

 useEffect(() => {
  let interval;
  if (isPlaying) {
   interval = setInterval(() => {
    setProgress((prevProgress) => {
     if (prevProgress >= 100) {
      nextSlide();
      return 0;
     }
     return prevProgress + 1;
    });
   }, 30);
  }
  return () => clearInterval(interval);
 }, [isPlaying]);

 return (
  <div className="relative w-full h-screen bg-transparent">
   {/* Carousel Wrapper */}
   <div className="relative w-full h-full overflow-hidden">
    <Navbar />
    {slides.map((slide, index) => (
     <div
      key={index}
      className={`absolute inset-0 transition-all duration-700 ease-in-out ${currentIndex === index
       ? "transform translate-x-0 opacity-100"
       : currentIndex > index
        ? "transform translate-x-[-100%] opacity-0"
        : "transform translate-x-[100%] opacity-0"
       }`}
     >
      <img
       src={slide.image}
       className="block w-full h-full object-cover"
       alt={`Slide ${index + 0}`}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
       {/* Text Overlay */}
       <div className="text-white text-3xl md:text-4xl font-bold text-center px-4 sm:px-6">
        {slide.text}
       </div>
       {/* Shop Now Button */}
       <div className="mt-4">
        <button className="px-8 bg-white text-black border rounded-full shadow-lg hover:bg-transparent hover:text-white duration-700 w-full sm:w-auto">
         Shop Now
        </button>
       </div>
      </div>
     </div>
    ))}
   </div>

   {/* Pause/Play Button */}
   <button
    onClick={pausePlayHandler}
    className="absolute bottom-10 right-10 z-30 text-white px-4 py-2 rounded-full shadow-md focus:outline-none"
   >
    {isPlaying ? <CiPause1 /> : <FaCaretRight />}
   </button>

   {/* Small Progress Bars for Each Slide */}
   <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
    {slides.map((_, index) => (
     <div
      key={index}
      className="relative w-14 h-[2px] bg-gray-300 rounded-full"
     >
      <div
       style={{
        width: `${currentIndex === index ? progress : 0}%`,
       }}
       className="h-full bg-white transition-all duration-100 ease-linear"
      ></div>
     </div>
    ))}
   </div>
  </div>
 );
};

export default Carousel;
