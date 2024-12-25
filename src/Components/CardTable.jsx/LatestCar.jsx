import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

const LatestCar = ({ car }) => {
  const {
    Description,
    Registration_Number,
    addedDate,
    availability,
    bookingCount,
    carmodel,
    email,
    features,
    location,
    price,
    _id,
  } = car;

  return (
    <div>
      <div className="w-full shadow-2xl border border-gray-700 sm:w-[80%] lg:w-[90%]  h-[400px] hover:scale-[1.05] transition-all duration-1000 overflow-hidden rounded-md relative cursor-pointer group">
        {/*  icons  */}
        <div className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]">
          <FaRegHeart className="text-[1.1rem] text-gray-600" />
          <div className="flex items-center gap-[5px]">
            <MdOutlineTimer className="text-orange-700 text-[1.1rem]" />
            <p className="text-[1rem] text-orange-700">5 min</p>
          </div>
        </div>

        {/*  image  */}
        <img
          src="https://i.ibb.co.com/j84Rc3k/311287391-425320746432238-8292720755221813967-n.jpg"
          alt="animated_card"
          className="w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out"
        />

        {/*  texts  */}
        <div className="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full text-white">
          <h3 className="text-[1.4rem] font-bold "> Daily Price: {carmodel}</h3>
          <p className="text-[0.9rem] ">Daily Price: {price}</p>
          <p className="text-[0.9rem] ">Availability: {availability}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestCar;
