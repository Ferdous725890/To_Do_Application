import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../shared Component/Authprovider/Authprovider";
import Swal from "sweetalert2";
import EditCarData from "../../Components/CardTable.jsx/EditCarData";
import { BsPencilFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const MyCar = () => {
  const { user } = useContext(Authcontext);

  const [cars, setCars] = useState([]);
  const [edit, setEdit] = useState({});
  const [open, setOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState(""); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetchAlldata();
  }, [user]); 

  const fetchAlldata = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/my_car_page/${user?.email}`
      );
      setCars(data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    } finally {
      setLoading(false); 
    }
  };

  const sortCars = (criteria) => {
    let sortedCars = [...cars];
    if (criteria === "dateNewest") {
      sortedCars.sort(
        (a, b) => new Date(b.addedDate.curentDate) - new Date(a.addedDate.curentDate)
      );
    } else if (criteria === "dateOldest") {
      sortedCars.sort(
        (a, b) => new Date(a.addedDate.curentDate) - new Date(b.addedDate.curentDate)
      );
    } else if (criteria === "priceLowest") {
      sortedCars.sort((a, b) => a.price - b.price);
    } else if (criteria === "priceHighest") {
      sortedCars.sort((a, b) => b.price - a.price);
    }
    setCars(sortedCars); 
  };

  const handleSortChange = (event) => {
    const selectedCriteria = event.target.value;
    setSortCriteria(selectedCriteria);
    sortCars(selectedCriteria);
  };

  const handelDeleted = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `${import.meta.env.VITE_API_URL}/my_car_page/${id}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          fetchAlldata(); 
        } catch (err) {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again.",
            icon: "error",
          });
        }
      }
    });
  };

  const hendeledit = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/my_car_page_edit/${id}`
      );
      setEdit(response.data);
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
    fetchAlldata();
  };

  return (
    <div className="mt-10 md:mb-[300px]">
 
      <div className="flex justify-end mb-4">
        <select
          value={sortCriteria}
          onChange={handleSortChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">Sort By</option>
          <option value="dateNewest">Date Added (Newest First)</option>
          <option value="dateOldest">Date Added (Oldest First)</option>
          <option value="priceLowest">Price (Lowest First)</option>
          <option value="priceHighest">Price (Highest First)</option>
        </select>
      </div>

    
      {loading ? (
        <div className="flex justify-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr className="border">
                <th className="border text-center border-gray-400 font-bold text-base text-white">
                  User name
                </th>
                <th className="border text-center border-gray-400 font-bold text-base text-white">
                  Car Image
                </th>
                <th className="border text-center border-gray-400 font-bold text-base text-white">
                  Car Model
                </th>
                <th className="border text-center border-gray-400 font-bold text-base text-white">
                  Daily Rental Price
                </th>
                <th className="border text-center border-gray-400 font-bold text-base text-white">
                  Availability
                </th>
                <th className="border text-center border-gray-400 font-bold text-base text-white">
                  Date Added
                </th>
                <th className="border text-center border-gray-400 font-bold text-base text-white">
                  Location
                </th>
                <th className="border text-center border-gray-400 font-bold text-base text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr className="border" key={car._id}>
                  <td className="border text-center text-white text-sm">
                    {user?.displayName}
                  </td>
                  <td className="border text-center text-white text-sm">
                    <img
                      className="w-32 text-center rounded-lg"
                      src={car.image}
                      alt=""
                    />
                  </td>
                  <td className="border text-center text-white text-sm">
                    {car.carmodel}
                  </td>
                  <td className="border text-center text-white text-sm">
                    {car.price}
                  </td>
                  <td className="border text-center text-white text-sm">
                    {car.availability}
                  </td>
                  <td className="border text-center text-white text-sm">
                    Date: {car.addedDate.curentDate} <br />
                    Time: {car.addedDate.curenttime}
                  </td>
                  <td className="border text-center text-white text-sm">
                    {car.location}
                  </td>
                  <td className="border text-center text-white text-sm">
                    <button
                      onClick={() => handelDeleted(car._id)}
                      className="text-red-500 font-bold mr-5"
                    >
                      <MdDeleteForever className="text-xl" />
                    </button>
                    <button
                      onClick={() => hendeledit(car._id)}
                      className="text-green-500 font-bold"
                    >
                      <BsPencilFill className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {open && (
        <dialog className="modal" open>
          <div className="modal-box bg-gradient-to-t from-[#26cae0] to-[#d0a7f4]">
            <h2 className="text-center text-2xl mb-5 font-medium text-[#7E22CE]">
              Update Your Data
            </h2>
            <EditCarData edit={edit} />
            <div className="modal-action">
              <button onClick={handleCloseModal} className="btn w-full">
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyCar;
