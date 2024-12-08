// eslint-disable-next-line no-unused-vars
import React from "react";
import imageURL from '../assets/Collection Page Images/_E7A1542_0606.jpg'

const Magazine = () => {
 return (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5">
   {/* Left Section - Image */}
   <div className="relative flex justify-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] mb-6 md:mb-0">
    <img src={imageURL} alt="" className="w-full h-full object-cover" />
    <div className="absolute p-6 text-center h-full flex flex-col justify-center items-center">
     <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-8 sm:mb-16">
      Magazine
     </h1>
     <button className="bg-white text-black px-6 font-semibold border hover:bg-transparent hover:text-white transition rounded-2xl mb-8">
      Read
     </button>
     <p className="text-xl sm:text-2xl md:text-4xl text-white font-bold">
      SCOTT IS POSSESSED
     </p>
    </div>
   </div>

   {/* Right Section - Text on Gray Background */}
   <div className="relative bg-[#BAB0A4] flex items-center justify-center w-full min-h-[80vh] sm:min-h-[60vh] md:min-h-[80vh] mb-6 md:mb-0">
    <div className="absolute p-6 text-center w-full flex flex-col items-center justify-center">
     <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
      Get on the List
     </h1>
     <p className="text-lg text-white mb-6 font-bold w-[80%] sm:w-[70%] md:w-[50%] font-mono">
      Sign up for early access to drops, exclusive launches, and running culture from Possessed Magazine.
     </p>
     <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
      <input
       type="text"
       className="bg-transparent text-white border-b-2 w-[80%] sm:w-[300px] p-2 mb-4 sm:mb-0"
       placeholder="Your Email Address"
      />
      <button className="text-white border-b-2 p-2 px-6 mb-4 sm:mb-0">
       SUBMIT
      </button>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Magazine;
