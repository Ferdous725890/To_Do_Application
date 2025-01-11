import React from "react";
import { Link } from "react-router-dom";

const SingleCar = ({ singleCar,viewMode  }) => {
  const {
    _id,
    carmodel,
    price,
    image,
    Registration_Number,
    Description,
    availability,
    location,
    addedDate,
  } = singleCar;

  return (
    <div className="card w-full border border-gray-500 shadow-lg text-white rounded-lg  mb-5">
      {/* Car Details */}
      <img className={
        `
      ${viewMode === 'grid' ? 'h-[250px]' : "h-full max-h-[700px]"} 
          w-full bg-cover`} src={image} alt="" />
<div className="">
  
<div className="p-4 grid">
     <h2 className="text-lg font-bold ">{carmodel}</h2>
      <p className=" mt-1">
        {Registration_Number}
      </p>
     
      <p className="text-white mt-1">
        ${price}/day
      </p>
      <p className=" mt-1">
        {Description.slice(0, 50)}.......
      </p>
 

      <p className=" mt-1">
        <strong>Availability:</strong> {availability}
      </p>
      {/* Rating */}
      <div className="rating">
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          disabled
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          defaultChecked
          disabled
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          disabled
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          disabled
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          disabled
        />
      </div>
      <Link to={`/detailsPage/${_id}`}>
        <button className=" mt-3 py-2 px-4 bg-[#05A3D6] text-white rounded-lg hover:bg-[#0f475a] transition">
          Book Now 
        </button>
      </Link>
     </div>

      {/* Book Now Button */}
</div>
    </div>
  );
};

export default SingleCar;
