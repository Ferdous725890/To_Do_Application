import axios from "axios";
import React, { useContext } from "react";
import { Authcontext } from "../../shared Component/Authprovider/Authprovider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { format } from "date-fns";

const AddCar = () => {
  const { user } = useContext(Authcontext);
  const handleCardAdded = async (event) => {
    event.preventDefault();
   
    const currentDate = new Date();
    const formattedDate = format(currentDate, "yyyy-MM-dd");
    const formattedTime = format(currentDate, "HH:mm:ss");

    const formData = new FormData(event.target);
    const allData = Object.fromEntries(formData.entries());
    const selectedFeatures = formData.getAll("features");
    const cardAddedInformation = {
      ...allData,
      features: selectedFeatures,
      email: user?.email,
      bookingCount: 0,
      addedDate: {
        curentDate: formattedDate,
        curenttime: formattedTime,
      },
    };
    console.log(cardAddedInformation);

   
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
   

      // `${import.meta.env.VITE_API_URL}/add-job`,
    }
  };
  return (
    <div
      className="
 
    max-w-[900px] mx-auto  rounded-lg shadow-2xl text-white mb-20 border md:p-10 "
    >
      <form onSubmit={handleCardAdded} className=" p-10">
        <div className="grid md:grid-cols-2 gap-5">
          {/* Card Model */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium"
            >
              Car Model
            </label>
            <input
              type="text"
              id="CarModel"
              name="carmodel"
              className="w-full bg-white/10 backdrop-blur-3xl text-white  border px-3 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Car Model"
              required
            />
          </div>

          {/* Daily Rental Price */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Daily Rental Price
            </label>
            <input
              type="number"
              id="Daily_Renta_lPrice"
              name="price"
              className="w-full bg-white/10 backdrop-blur-3xl border px-3 py-2 text-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Daily Rental Price"
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {/* Vehicle Registration Number */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Vehicle Registration Number
            </label>
            <input
              type="text"
              id="registrationNumber"
              name="Registration_Number"
              className="w-full border bg-white/10 backdrop-blur-3xl px-3 py-2 text-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder=" Vehicle Registration Number"
              required
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full border bg-white/10 backdrop-blur-3xl px-3 py-2 text-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Location"
            />
          </div>
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
            className="w-full bg-white/10 backdrop-blur-3xl text-white  min-h-48 border px-3 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Description"
          />
        </div>

        {/* Availability */}
        <div className="">
          <label
            htmlFor="availability"
            className="block mb-2 text-sm font-medium "
          >
            Availability
          </label>
          <select
            name="availability"
            className="select select-bordered bg-white/10 backdrop-blur-3xl w-full text-white "
            defaultValue="Availability"
          >
            <option disabled value="Availability">
              Availability
            </option>
            <option className="text-black" value="Available">Available</option>
            <option className="text-black" value="Unavailable">Unavailable</option>
          </select>
        </div>
        {/* ----------------------------- Features ---------------------------- */}
        <div className=" md:flex justify-between border mt-5 mb-5 px-5 py-2 rounded-lg">
          <label
            htmlFor="features"
            className="block mb-2 text-base font-medium text-white "
          >
            Features :
          </label>
          <label className="block">
            <input type="checkbox" name="features" className="bg-[##292036]" value="GPS" /> GPS
          </label>
          <label className="block">
            <input type="checkbox" name="features" className="bg-[##292036]" value="AC" /> AC
          </label>
          <label className="block">
            <input type="checkbox" name="features" className="bg-[##292036]" value="Bluetooth" />{" "}
            Bluetooth
          </label>
          <label className="block">
            <input type="checkbox" name="features" className="bg-[##292036]" value="Heated Seats" />{" "}
            Heated Seats
          </label>
        </div>

        {/* Image Url */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Car Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            className="w-full border bg-white/10 backdrop-blur-3xl px-3 py-2 text-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Car Image URL"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full mt-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold"
        >
          Add_Car
        </button>
      </form>
    </div>
  );
};

export default AddCar;
