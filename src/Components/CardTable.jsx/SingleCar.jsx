import React from "react";
import { Link } from "react-router-dom";

const SingleCar = ({ singleCar, viewMode }) => {
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
      <img
        className={`
      ${
        viewMode === "grid"
          ? "min-h-[250px] h-full w-full object-cover"
          : "h-full lg:min-h-[500px] w-full object-cover"
      } 
          w-full bg-cover`}
        src={image}
        alt=""
      />
      <div className="">
        <div className="p-4 grid">
          <h2 className="text-lg font-bold ">{carmodel}</h2>
          <div className="grid grid-cols-2  mt-2">
            <p className="">{Registration_Number}</p>

            <p
              className={` ${
                viewMode === "grid" ? `bg-white/10 rounded-md text-center` : ""
              }`}
            >
              {availability}
            </p>
          </div>
          <div className={` ${
                viewMode === "grid" ? `` : "items-center md:grid grid-cols-2"
              }`}>
            <p className=" mt-2 mb-2">{Description.slice(0, 50)}.......</p>

            {/* Rating */}
            <div className="rating w-20">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
                disabled
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
                defaultChecked
                disabled
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
                disabled
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
                disabled
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
                disabled
              />
            </div>
          </div>

          <Link to={`/detailsPage/${_id}`}>
            <button
              className={`${
                viewMode === "grid"
                  ? " mt-3 py-[4px] px-4 bg-white/10 w-full text-white rounded-md hover:bg-[#0f475a] transition"
                  : "mt-3 py-[4px] px-4 bg-white/10  text-white rounded-md hover:bg-[#0f475a] transition"
              }`}
            >
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
