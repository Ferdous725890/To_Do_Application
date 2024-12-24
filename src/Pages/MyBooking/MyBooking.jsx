import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../shared Component/Authprovider/Authprovider";
import axios from "axios";
import BookingCar from "../../Components/CardTable.jsx/BookingCar";

const MyBooking = () => {
  const [bookingCarData, setBookingCarData] = useState([]);
  const { user } = useContext(Authcontext);

  useEffect(() => {
    fetchAlldata();
  }, [user]);

  const fetchAlldata = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/booking/${user?.email}`
    );
    setBookingCarData(data);
  };

  if (!bookingCarData) {
    return <div>Loading...</div>;
  }

  const handelCancel = async(id) =>{
    console.log(id, 'clancel');
try{
await axios.delete( `${import.meta.env.VITE_API_URL}/booking_cancel/${id}`)
.then(res => console.log(res.data))
fetchAlldata()
}
catch(err){
console.log(err);
}
  }

  return (
    <div>
      
      {bookingCarData.length}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th></th>
                <th>Car Image</th>
                <th>Car Model</th>
                <th>Booking Date</th>
                <th>Total Price</th>
                <th>Booking Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
 
            {bookingCarData?.map((booking, index) => <tr key={index} >
                <th>  {index +1} </th>
                <td>{booking.carmodel}</td>
                <td>{booking.price}</td>
                <td> {booking.availability} </td>
                <td> {booking.images} </td>
                <td> {booking.Description} </td>
                <div>
                    <button onClick={()=>handelCancel(booking._id)} > Cancel </button>
                    <button> Edit </button>
                </div>
                
              </tr> )}
             
            </tbody>
           
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
