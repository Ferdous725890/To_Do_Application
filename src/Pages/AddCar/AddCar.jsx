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
    // const from = event.target;
    // const carmodel = from.carmodel.value;
    // const price = from.price.value;
    // const Registration_Number = from.Registration_Number.value;
    // const Description = from.Description.value;
    // const availability = from.availability.value;
    // const features = from.features.value;
    // const location = from.location.value;

    // const formData = new FormData(event.target); // FormData তৈরি
    // const selectedFeatures = formData.getAll("features"); // সরাসরি চেক করা ভ্যালু নিয়ে আসা
    // console.log("Selected Features:", selectedFeatures);

    // -------------------------------------------------------------------------------
    // const formData = new FormData(event.target); // FormData তৈরি
    // const allData = Object.fromEntries(formData.entries()); // ফর্মের সব ডেটা একটি অবজেক্টে রূপান্তর
    // const {carmodel, price, Registration_Number, Description, availability,location, ...newJob } = allData;
    // console.table({carmodel, price, Registration_Number, Description, availability,location, newJob });
    // newJob.features = newJob.features.split('\n');
    // console.log("Full Form Data:", allData);
    // Get current date and time in ISO format
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

    // console.log(features,'-------------------my feature ');
    //     const cardAddedInformation = {
    //       carmodel,
    //       price,
    //       Registration_Number,
    //       Description,
    //       availability,
    //       location,
    //       email: user?.email,
    //       bookingCount: "0",
    //     };

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
    <div
      className="
    
bg-gradient-to-t from-[#26cae0] to-[#d0a7f4] 
    
    w-[900px] mx-auto mt-10 rounded-lg shadow-xl text-white mb-20"
    >
      <form onSubmit={handleCardAdded} className=" p-10">
        <div className="grid grid-cols-2 gap-5">
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
              className="w-full bg-gray-700 text-[#9333EA] border px-3 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              className="w-full bg-gray-700 border px-3 py-2 text-[#9333EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Daily Rental Price"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {/* Vehicle Registration Number */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Vehicle Registration Number
            </label>
            <input
              type="number"
              id="registrationNumber"
              name="Registration_Number"
              className="w-full border bg-gray-700 px-3 py-2 text-[#9333EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              className="w-full border bg-gray-700 px-3 py-2 text-[#9333EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
            className="w-full bg-gray-700 text-[#9333EA] min-h-48 border px-3 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
            className="select select-bordered bg-gray-900 w-full text-[#9333EA]"
            defaultValue="Availability"
          >
            <option disabled value="Availability">
              Availability
            </option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>
        {/* ----------------------------- Features ---------------------------- */}
        <div className="flex justify-between border mt-5 mb-5 px-5 py-2 rounded-lg">
          <label
            htmlFor="features"
            className="block mb-2 text-base font-medium text-white"
          >
            Features :
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

        {/* Image Url */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Car Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            className="w-full border bg-gray-700 px-3 py-2 text-[#9333EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Car Image URL"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold"
        >
          Add_Car
        </button>
      </form>
    </div>
  );
};

export default AddCar;
