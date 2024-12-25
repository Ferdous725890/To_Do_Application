import React from "react";
import { Link } from "react-router-dom";

const SingleCar = ({ singleCar }) => {
  const { _id, carmodel, price, 
    image, Registration_Number, Description, availability, location, addedDate } = singleCar;
    console.log(addedDate, "amar date ");

  return (
    <div className="card w-full bg-white shadow-md rounded-lg p-4">
      {/* Car Details */}
      <img src={image} alt="" />
      <h2 className="text-xl font-bold text-gray-800">{carmodel}</h2>
     
      <p className="text-gray-600 mt-1">
        <strong>Price:</strong> ${price}/day
      </p>
      <p className="text-gray-600 mt-1">
        <strong>Availability:</strong> {availability}
      </p>
      <p className="text-gray-600 mt-1">
        <strong>Registration Number:</strong> {Registration_Number}
      </p>
      <p className="text-gray-600 mt-1">
        <strong>Description:</strong> {Description}
      </p>
      <p className="text-gray-600 mt-1">
        <strong>Date : {addedDate?.curentDate}</strong>
      </p>

      <p className="text-gray-600 mt-2">
        <strong>Location:</strong> {location}
      </p>

      {/* Rating */}
      <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>

      {/* Book Now Button */}
      <Link to={`/detailsPage/${_id}`}>
        <button className="mt-4 py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          Book Now
        </button>
      </Link>
    </div>
  );
};

export default SingleCar;
