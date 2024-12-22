import axios from "axios";
import React, { useContext } from "react";
import { Authcontext } from "../../shared Component/Authprovider/Authprovider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AddCar = () => {
  const { user } = useContext(Authcontext);
  const handleCardAdded = async (event) => {
    event.preventDefault();
    const from = event.target;
    const carmodel = from.carmodel.value;
    const price = from.price.value;
    const Registration_Number = from.Registration_Number.value;
    const Description = from.Description.value;
    const availability = from.availability.value;
    const location = from.location.value;

    const cardAddedInformation = {
      carmodel,
      price,
      Registration_Number,
      Description,
      availability,
      location,
      email: user?.email,
      bookingCount: "0",
    };

    try {
      await axios
        .post(`${import.meta.env.VITE_API_URL}/added_car`, cardAddedInformation)
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            title: "Successfully Added!",
            icon: "success",
            draggable: true,
          });
        });
    } catch (err) {
      console.log(err);

      // `${import.meta.env.VITE_API_URL}/add-job`,
    }




    
  };
  return (
    <div className="">
      <form onSubmit={handleCardAdded} className="space-y-7">
        {/* Card Model */}
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-sm font-medium">
            Car Model
          </label>
          <input
            type="text"
            id="CarModel"
            name="carmodel"
            className="w-full border px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Daily Rental Price */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Daily Rental Price
          </label>
          <input
            type="number"
            id="Daily_Renta_lPrice"
            name="price"
            className="w-full border px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter Daily Rental Price"
          />
        </div>
        {/* Availability */}
        <div className="">
          <label
            htmlFor="availability"
            className="block mb-2 text-sm font-medium"
          >
            Availability
          </label>
          <select
            name="availability"
            className="select select-bordered w-full"
            defaultValue="Availability"
          >
            <option disabled value="Availability">
              Availability
            </option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>

        {/* Vehicle Registration Number */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Vehicle Registration Number
          </label>
          <input
            type="number"
            id="registrationNumber"
            name="Registration_Number"
            className="w-full border px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter Daily Rental Price"
          />
        </div>

        {/* ----------------------------- Features ---------------------------- */}
        <div>
          <label htmlFor="features" className="block mb-2 text-sm font-medium">
            Features
          </label>
          <label className="block">
            <input type="checkbox" name="features" value="GPS" /> GPS
          </label>
          <label className="block">
            <input type="checkbox" name="features" value="AC" /> AC
          </label>
          <label className="block">
            <input type="checkbox" name="features" value="Bluetooth" />{" "}
            Bluetooth
          </label>
          <label className="block">
            <input type="checkbox" name="features" value="Heated Seats" />{" "}
            Heated Seats
          </label>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Description
          </label>
          <textarea
            type="text"
            id="Description"
            name="Description"
            className="w-full min-h-48 border px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Description"
          />
        </div>
        {/* Location */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full border px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Location"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AddCar;
