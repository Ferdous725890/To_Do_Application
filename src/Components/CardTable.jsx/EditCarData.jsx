import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const EditCarData = ({ edit }) => {
  const [edits, setEdits] = useState(edit); // Initialize with the passed `edit` prop

  const handleUpdate = async (event) => {
    event.preventDefault();

    const form = event.target;
    const updatedCar = {
      carmodel: form.carmodel.value,
      price: form.price.value,
      Registration_Number: form.Registration_Number.value,
      Description: form.Description.value,
      availability: form.availability.value,
      location: form.location.value,
    };

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/my_car_page_update/${edit._id}`,
        updatedCar
      );

      if (response.data) {
        setEdits(response.data); // Update local state with the new data
        Swal.fire({
          title: "Successfully Updated!",
          icon: "success",
          draggable: true,
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Update Failed!",
        text: "Something went wrong.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleUpdate} className="text-white">
      <div className="grid grid-cols-2 gap-5">
  {/* Card Model */}
  <div className="mb-4 ">
          <label htmlFor="CarModel" className="block  mb-2 text-sm font-medium">
            Car Model
          </label>
          <input
            type="text"
            id="CarModel"
            name="carmodel"
            defaultValue={edits.carmodel}
            className="w-full border text-[#7E22CE] px-3 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your car model"
          />
        </div>

        {/* Daily Rental Price */}
        <div className="mb-4">
          <label htmlFor="DailyRentalPrice" className="block mb-2 text-sm font-medium">
            Daily Rental Price
          </label>
          <input
            type="number"
            id="DailyRentalPrice"
            name="price"
            defaultValue={edits.price}
            className="w-full border px-3 py-2 text-[#7E22CE] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter daily rental price"
          />
        </div>
      </div>


 {/* Vehicle Registration Number */}
 <div className="mb-4">
          <label
            htmlFor="RegistrationNumber"
            className="block mb-2 text-sm font-medium"
          >
            Vehicle Registration Number
          </label>
          <input
            type="text"
            id="RegistrationNumber"
            name="Registration_Number"
            defaultValue={edits.Registration_Number}
            className="w-full border px-3 py-2 text-[#7E22CE] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter vehicle registration number"
          />
        </div>

  {/* Description */}
  <div className="mb-4">
          <label
            htmlFor="Description"
            className="block mb-2 text-sm font-medium"
          >
            Description
          </label>
          <textarea
            id="Description"
            name="Description"
            defaultValue={edits.Description}
            className="w-full min-h-32 border px-3 py-2 text-[#7E22CE] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter description"
          />
        </div>


        {/* Availability */}
        <div className="mb-4">
          <label
            htmlFor="availability"
            className="block mb-2 text-sm font-medium"
          >
            Availability
          </label>
          <select
            name="availability"
            defaultValue={edits.availability}
            className="select select-bordered w-full text-[#7E22CE]"
          >
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>

       
      

        {/* Location */}
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2 text-sm font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            defaultValue={edits.location}
            className="w-full border px-3 py-2 text-[#7E22CE] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter location"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditCarData;
