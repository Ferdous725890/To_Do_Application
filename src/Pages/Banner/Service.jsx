import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  const Service = [
    {
      title: "Hourly Package",
      price: "1,200/3 Hours",
      details: [
        "Ideal for short trips within the city.",
        "Includes 10 kilometers per hour.",
        "Fuel charges included.",
        "Driver support available.",
      ],
    },
    {
      title: "Daily Package",
      price: "4,500/Day",
      details: [
        "Perfect for full-day use on any route.",
        "Includes up to 100 kilometers.",
        "Fuel charges not included.",
        "Driver support available.",
      ],
    },
    {
      title: "Outstation Package",
      price: "12,000 (Dhaka to Cox’s Bazar)",
      details: [
        "Best for long-distance travel.",
        "Includes specific destinations.",
        "Fuel charges included.",
        "Driver support available.",
      ],
    },
  ];

  return (
    <div className="p-6 ">
      <div className="w-full max-w-[600px] flex  justify-center items-center mx-auto">

      <h1 className="border-b-2 pb-2 rounded-lg text-4xl font-bold text-center mb-12">
        Affordable Car Rental Packages
      </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Service.map((pkg, index) => (
          <div
            key={index}
            className=" grid shadow-md bg-white/10 backdrop-blur-2xl border-0 border-t border-b rounded-lg p-4  border-gray-200"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {pkg.title}
            </h2>
            <p className="text-lg text-green-600 font-bold mb-4">
              ${pkg.price}
            </p>
            <ul className="list-disc list-inside space-y-2 text-white">
              {pkg.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            <Link to={"/avilableCar"}>
              <div className="border border-[#6433aaa8] rounded-lg py-[6px] flex justify-center items-center bg-[#2c1250]/60 mt-5">
                <button className="text-center">Book Now </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
