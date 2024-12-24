import React from "react";
import { FaCar, FaDollarSign, FaMousePointer, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <p className="text-gray-600 mt-2">Discover the benefits of booking with us.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {/* Wide Variety of Cars */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-500 text-white p-4 rounded-full">
            <FaCar className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mt-4">Wide Variety of Cars</h3>
          <p className="text-gray-600 mt-2">From budget-friendly options to luxury vehicles.</p>
        </div>

        {/* Affordable Prices */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-500 text-white p-4 rounded-full">
            <FaDollarSign className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mt-4">Affordable Prices</h3>
          <p className="text-gray-600 mt-2">Competitive daily rates you can count on.</p>
        </div>

        {/* Easy Booking Process */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-yellow-500 text-white p-4 rounded-full">
            <FaMousePointer className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mt-4">Easy Booking Process</h3>
          <p className="text-gray-600 mt-2">Seamlessly book your ride in just a few clicks.</p>
        </div>

        {/* Customer Support */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-500 text-white p-4 rounded-full">
            <FaHeadset className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mt-4">Customer Support</h3>
          <p className="text-gray-600 mt-2">24/7 assistance for all your queries.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
