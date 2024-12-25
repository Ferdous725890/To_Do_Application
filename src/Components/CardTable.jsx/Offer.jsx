import React from "react";

const Offer = () => {
  return (
    <div className="mt-32">

<h2 className="text-4xl font-medium text-center">Special Offers Just for You!</h2>
      <div className="flex justify-center space-x-8  mt-12">
        {/* Offer Card 1 */}
        <div className="group [perspective:1000px] w-full sm:w-[80%] lg:w-[30%] h-[350px]">
          <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
              <img
                src="https://i.ibb.co.com/WVTt46Y/Pngtree-sleek-and-speedy-3d-render-13355997.jpg"
                alt="Offer 1"
                className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-[1.5rem]  [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5">
                15% Off Weekend Rentals
              </h2>
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]">
              <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-4">
                Weekend Rental Offer
              </h2>
              <p className="text-gray-600">
                Enjoy a 15% discount on all weekend car rentals. Book your dream
                car today!
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Offer Card 2 */}
        <div className="group [perspective:1000px] w-full sm:w-[80%] lg:w-[30%] h-[350px] ">
          <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]  from-green-500 via-teal-500 to-blue-500 bg-white  ">
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden]">
              <img
                src="https://i.ibb.co.com/WVTt46Y/Pngtree-sleek-and-speedy-3d-render-13355997.jpg"
                alt="Offer 2"
                className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5">
                $99/day Luxury Cars
              </h2>
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]">
              <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-4">
                Luxury Car Offer
              </h2>
              <p className="text-gray-600">
                Rent luxury cars at an unbeatable price of $99/day this holiday
                season.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Offer Card 3 */}
        <div className="group [perspective:1000px] w-full sm:w-[80%] lg:w-[30%] h-[350px]">
          <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
              <img
                src="https://i.ibb.co.com/WVTt46Y/Pngtree-sleek-and-speedy-3d-render-13355997.jpg"
                alt="Offer 3"
                className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5">
                10% Off First Purchase
              </h2>
            </div>

            {/* Back Side */}
            <div className="absolute w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-full bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]">
              <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-4">
                First Purchase Offer
              </h2>
              <p className="text-gray-600">
                Get 10% off your first purchase with us. Don't miss this
                exclusive deal!
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                Claim Offer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
