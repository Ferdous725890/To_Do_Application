import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Authcontext } from "../../shared Component/Authprovider/Authprovider";
import { format } from "date-fns";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const CarDetailsPage = () => {
  const [rating, setRating] = useState(0);
  console.log(rating, "added rating");
  const navigate = useNavigate();
  const { user } = useContext(Authcontext);
  const [allCar, setAllCar] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchAlldata();
  }, []);

  const fetchAlldata = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/detailsPage/${id}`
      );
      setAllCar(data); // Set the fetched data to state
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch car details!",
      });
    }
  };

  if (!allCar) {
    return <div>Loading...</div>;
  }

  const {
    _id,
    carmodel,
    price,
    availability,
    features,
    image,
    Description,
    reviews,
  } = allCar;

  const currentDate = new Date();
  const formattedDate = format(currentDate, "yyyy-MM-dd");

  const bookingData = {
    carmodel,
    price,
    availability,
    features,
    image,
    Description,
    reviews,
    job_id: _id,
    email: user?.email,
    formattedDate,
    rating,

    bidCount: 0,
  };

  const handleRatingClick = (index) => {
    const newRating = index + 1;
    setRating(newRating);
  };

  const handelBooking = async (id) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/booking`,
        bookingData
      );
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Booking Successful",
          text: "Your booking has been confirmed!",
        });
        navigate("/MyBooking");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: "There was an error processing your booking. Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-[calc(100vh-9rem)] flex items-center justify-center p-6">
      <div className="max-w-4xl grid md:grid-cols-2 w-[1000px] border p-5 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="flex items-center justify-center rounded-lg">
          <img
            src={image}
            alt={"Car"}
            className="lg:max-w-[700px] w-full border mb-3 lg:h-[300px] items-center justify-center rounded-lg  object-cover"
          />{" "}
        </div>

        {/* Details Section */}
        <div className="lg:pl-10 md:pl-5">
          <h3 className="text-xl font-bold text-white ">
            <span className="">{carmodel}</span>
          </h3>
          <p className="text-white text-sm mt-2">{Description}</p>
          <div className="grid md:grid-cols-2">
            <p className="text-white mt-2">{formattedDate}</p>
            <p className="text-white font mt-2">{availability}</p>
          </div>
          {/* Features */}
          <div className="mt-2">
            <h4 className="text-white font-bold">Features:</h4>
            <ul className="list-disc list-inside ">
              <div className="grid grid-cols-2 text-white">
                {features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </div>
            </ul>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mt-2"></h4>
              <div className="space-y-2">
                {reviews?.map((review, index) => (
                  <p key={index} className="text-blue-400 italic">
                    "{review}"
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews */}

          <div className="flex mt-2">
            {[0, 1, 2, 3, 4].map((index) => (
              <span
                key={index}
                onClick={() => handleRatingClick(index)}
                className="cursor-pointer"
              >
                {index < Math.floor(rating) ? (
                  <FaStar className="text-yellow-500" />
                ) : index < Math.ceil(rating) ? (
                  <FaStarHalfAlt className="text-yellow-500" />
                ) : (
                  <FaRegStar className="text-yellow-500" />
                )}
              </span>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="mt-4">
            <button
              onClick={() => handelBooking(_id)}
              className="w-full py-[4px] bg-white/10  text-white rounded-lg  transition transform hover:scale-105"
            >
              Book-Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
