import React from "react";
import { FaCar, FaDollarSign, FaMousePointer, FaHeadset } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const WhyChooseUs = () => {
  return (
    // py-12 bg-[#1D252D] rounded-lg border border-gray-700 shadow-4xl mt-10 mb-20
    <section className="">
      <div className="text-center mb-8 mt-20">
        <h2 className="text-3xl font-bold text-white"></h2>
        <p className="text-gray-400 mt-2"></p>
      </div>

      {/* Marquee Component */}
      <Marquee gradient={false} speed={50}>
        <div className="flex gap-10 px-4">
          {/* Wide Variety of Cars */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-500 text-white p-4 rounded-full">
              <FaCar className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-white">
              Wide Variety of Cars
            </h3>
            <p className="text-gray-400 mt-2">
              From budget-friendly options to luxury vehicles.
            </p>
          </div>

          {/* Affordable Prices */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-500 text-white p-4 rounded-full">
              <FaDollarSign className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-white">
              Affordable Prices
            </h3>
            <p className="text-gray-400 mt-2">
              Competitive daily rates you can count on.
            </p>
          </div>

          {/* Easy Booking Process */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-500 text-white p-4 rounded-full">
              <FaMousePointer className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-white">
              Easy Booking Process
            </h3>
            <p className="text-gray-400 mt-2">
              Seamlessly book your ride in just a few clicks.
            </p>
          </div>

          {/* Customer Support */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-red-500 text-white p-4 rounded-full">
              <FaHeadset className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-white">
              Customer Support
            </h3>
            <p className="text-gray-400 mt-2">
              24/7 assistance for all your queries.
            </p>
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default WhyChooseUs;
