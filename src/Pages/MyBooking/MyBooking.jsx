import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../shared Component/Authprovider/Authprovider";
import axios from "axios";
import Swal from "sweetalert2"; 
import BookingCar from "../../Components/CardTable.jsx/BookingCar";

const MyBooking = () => {
  const [bookingCarData, setBookingCarData] = useState([]);
  const { user } = useContext(Authcontext);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetchAlldata();
  }, [user]);

  const fetchAlldata = async () => {
    setLoading(true); 
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/booking/${user?.email}`
      );
      setBookingCarData(data);
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      setLoading(false); 
    }
  };

  const handelCancel = async (id) => {
 
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/booking_cancel/${id}`);
        Swal.fire("Cancelled!", "Your booking has been cancelled.", "success");
        fetchAlldata(); // Refresh the booking data after cancel
      } catch (err) {
        console.log(err);
        Swal.fire("Error!", "Something went wrong. Please try again.", "error");
      }
    }
  };

  const handelEdit = async (id) => {
   
    const result = await Swal.fire({
      title: "Edit Booking",
      text: "Are you sure you want to edit this booking?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, edit it!",
      cancelButtonText: "No, don't edit",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });

    if (result.isConfirmed) {
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/booking_cancel/${id}`);
        Swal.fire("Editing", "You can now edit the booking.", "success");
      } catch (err) {
        console.log(err);
        Swal.fire("Error!", "Something went wrong. Please try again.", "error");
      }
    }
  };

  if (loading) {
    return (
      <div>
      <div className="overflow-x-auto max-w-full mt-10 mb-[200px]">
        <table className="table table-xs bg-[#111827] w-full bg-white/10">
          <thead>
            <tr className="shadow-lg">
              <th className="border text-center text-base font-bold text-white">Car Image</th>
              <th className="border text-center text-base font-bold text-white">Car Model</th>
              <th className="border text-center text-base font-bold text-white">Booking Date</th>
              <th className="border text-center text-base font-bold text-white">Total Price</th>
              <th className="border text-center text-base font-bold text-white">Booking Status</th>
              <th className="border text-center text-base font-bold text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookingCarData?.map((booking, index) => (
              <tr key={index}>
                <td className="border text-center text-white text-sm w-[150px]">
                  <img className="w-[150px]" src={booking.image} alt="" />
                </td>
                <td className="border text-center text-white text-sm">{booking.carmodel}</td>
                <td className="border text-center text-white text-sm">{booking?.formattedDate}</td>
                <td className="border text-center text-white text-sm">{booking.price}</td>
                <td className="border text-center text-white text-sm">


                <span className="bg-yellow-400/50 px-2 rounded-md py-1 text-center">
                pending
                    </span>
                </td>
                <td className="border text-center text-white text-sm">
                  <div>
                    <button
                      className="mr-2 text-red-300"
                      onClick={() => handelCancel(booking._id)}
                    >
                      Cancel
                    </button>
                    <button
                      className="text-green-500"
                      onClick={() => handelEdit(booking._id)}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    );
  }

  return (
    <div>
      <div>
        <div className="overflow-x-auto mt-10 mb-[200px]">
          <table className="table table-xs bg-[#111827] bg-white/10">
            <thead>
              <tr className="shadow-lg">
               
                <th     className="border text-center text-base font-bold text-white">Car Model</th>
                <th className="border     text-center text-base font-bold text-white">Booking Date</th>
                <th className="border     text-center text-base font-bold text-white">Total Price</th>
                <th className="border     text-center text-base font-bold text-white">Booking Status</th>
                <th className="border     text-center text-base font-bold text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookingCarData?.map((booking, index) => (
                <tr key={index}>
                 
                  <td className="border  text-center text-white text-sm">{booking.carmodel}</td>
                  <td className="border     text-center text-white text-sm">{booking?.formattedDate}</td>
                  <td className="border     text-center text-white text-sm">{booking.price}</td>
                  <td className="border     text-center text-white text-sm"> <span className="bg-yellow-400/50 px-2 rounded-md py-1 text-center">
                pending
                    </span> </td>
                  <td className="border     text-center text-white text-sm">
                    <div>
                      <button className="mr-2 text-red-300" onClick={() => handelCancel(booking._id)}>Cancel</button>
                      <button className="text-green-500" onClick={() => handelEdit(booking._id)} >Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;




