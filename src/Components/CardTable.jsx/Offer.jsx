import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="mt-20">

<h2 className="text-4xl text-white font-medium text-center mb-16">Special Offers Just for You!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center mt-10 mb-10">
        {/* Offer Card 1 */}
        <div className="group [perspective:1000px] mb-10 w-full sm:w-[80%] lg:w-[90%] h-[350px]">
          <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden]">
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
            <div className="absolute w-full h-full border-gray-500 border bg-slate-900 shadow-2xl rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]">
              <h2 className="text-[1.2rem] font-semibold text-white mb-4">
                Weekend Rental Offer
              </h2>
              <p className="text-white">
                Enjoy a 15% discount on all weekend car rentals. Book your dream
                car today!
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
               <Link to={'/avilableCar'}><button className="bg-white hover:bg-gray-400 px-4 rounded-md py-[6px] text-black"> Learn More</button></Link>
              </a>
            </div>
          </div>
        </div>

        {/* Offer Card 2 */}
        <div className="group [perspective:1000px] mb-10 w-full sm:w-[80%] lg:w-[90%] h-[350px] ">
          <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]   ">
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden]">
              <img
                src="https://i.ibb.co.com/S77V3gq/Screenshot-68.png"
                alt="Offer 2"
                className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5">
                $99/day Luxury Cars
              </h2>
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full bg-slate-900 border-gray-500 border rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px] ">
              <h2 className="text-[1.2rem] font-semibold text-white mb-4"> Rent luxury cars
              </h2>
              <p className="
              mb-4 text-white">
                Rent luxury cars at an unbeatable price of $99/day this holiday
                season.
              </p>
              <Link to={'/avilableCar'}><button className="bg-white hover:bg-gray-400 px-4 rounded-md py-[6px] text-black"> Claim Offer</button></Link>
              
            </div>
          </div>
        </div>

        {/* Offer Card 3 */}
        <div className="group [perspective:1000px] w-full sm:w-[80%] lg:w-[90%] h-[350px]">
          <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden] ">
              <img
                src="https://i.ibb.co.com/ZSYqrT0/Screenshot-72.png"
                alt="Offer 3"
                className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5">
                10% Off First Purchase
              </h2>
    
            </div>

            {/* Back Side */}
            <div className="absolute w-full  h-full rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]  bg-slate-900 border-gray-500 border">
              <h2 className="text-[1.2rem] font-semibold mb-4 text-white">
                First Purchase Offer
              </h2>
              <p className="text-white ">
                Get 10% off your first purchase with us. Don't miss this
                exclusive deal!
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                   <Link to={'/avilableCar'}><button className="bg-white hover:bg-gray-400 px-4 rounded-md py-[6px] text-black"> Claim Offer</button></Link>
          
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
