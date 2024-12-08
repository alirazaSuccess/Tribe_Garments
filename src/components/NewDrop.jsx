// eslint-disable-next-line no-unused-vars
import React from "react";

const NewDrops = () => {
  return (
    <section className="bg-[#FAF9F5] flex flex-col md:flex-row items-center py-20 gap-10 md:gap-20 justify-center mx-5">
      {/* Left Section */}
      <div className="flex flex-col text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          New Drops
        </h1>
        <p className="text-lg text-gray-700">
          Sign up for early access to exclusive launches.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center md:items-start w-full md:w-auto">
        <div className="flex flex-col md:flex-row items-center w-full">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-400 p-3 w-full md:w-[300px] text-black rounded-l-md outline-none mb-2"
          />
          <button className="bg-black text-white px-5 py-3 rounded-r-md font-medium hover:bg-gray-800 transition w-full md:w-auto mb-2">
            Subscribe
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center md:text-left">
          Learn more about how we protect your personal data by viewing our{" "}
          <a
            href="#"
            className="underline font-medium hover:text-black transition"
          >
            Privacy Notice
          </a>.
        </p>
      </div>
    </section>
  );
};

export default NewDrops;
