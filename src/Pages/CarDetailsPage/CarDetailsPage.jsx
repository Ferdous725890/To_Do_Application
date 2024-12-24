import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Authcontext } from "../../shared Component/Authprovider/Authprovider";

const CarDetailsPage = () => {
  const { user, } = useContext(Authcontext);
  const [allCar, setAllCar] = useState(null);
  console.log(allCar);
  const { id } = useParams();

  useEffect(() => {
    fetchAlldata();
  }, []);

  const fetchAlldata = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/detailsPage/${id}`
      );
      console.log(data, "Fetched Car Details");
      setAllCar(data); // Set the fetched data to state
    } catch (error) {
      console.error("Error fetching car details:", error);
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

  const bookingData = {
    carmodel,
    price,
    availability,
    features,
    image,
    Description,
    reviews,
    email: user?.email,
  };

  const handelBooking = async (id) => {
    console.log(id);
    await axios
      .post(`${import.meta.env.VITE_API_URL}/booking`, bookingData)
      .then((res) => console.log(res.data));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
        {/* Image Section */}
        <div className="relative">
          <img src={image} alt={"helo"} className="w-full h-64 object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
          <h2 className="absolute bottom-4 left-4 text-3xl text-white font-bold">
            {carmodel}
          </h2>
        </div>

        {/* Details Section */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">
            Price Per Day: <span className="text-purple-600">${price}</span>
          </h3>
          <p className="text-lg text-gray-600">
            <strong>Availability:</strong> {availability}
          </p>
          <p className="text-gray-600">
            <strong>Description:</strong> {Description}
          </p>

          {/* Features */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800">Features:</h4>
            <p>{features}</p>
            <ul className="list-disc list-inside text-gray-600">
              {features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Reviews */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800">Reviews:</h4>
            <div className="space-y-2">
              {reviews?.map((review, index) => (
                <p key={index} className="text-gray-600 italic">
                  "{review}"
                </p>
              ))}
            </div>
          </div>

          {/* Book Now Button */}
          <button
            onClick={() => handelBooking(_id)}
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white rounded-lg font-semibold transition transform hover:scale-105"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
