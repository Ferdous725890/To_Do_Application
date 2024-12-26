import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../shared Component/Authprovider/Authprovider";
import axios from "axios";
import BookingCar from "../../Components/CardTable.jsx/BookingCar";

const MyBooking = () => {
  const [bookingCarData, setBookingCarData] = useState([]);
  const { user } = useContext(Authcontext);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchAlldata();
  }, [user]);

  const fetchAlldata = async () => {
    setLoading(true); // Start loading when the request is made
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/booking/${user?.email}`
      );
      setBookingCarData(data);
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      setLoading(false); // Stop loading once the data is fetched
    }
  };

  const handelCancel = async (id) => {
    console.log(id, "cancel");
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/booking_cancel/${id}`);
      fetchAlldata(); // Refresh the booking data after cancel
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    // Display loading spinner while data is being fetched
    return (
      <div className="flex justify-center items-center mt-10">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="overflow-x-auto mt-10 mb-10">
          <table className="table table-xs bg-slate-600">
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
                  <td className="border text-center text-white text-sm">{booking.availability}</td>
                  <td className="border text-center text-white text-sm">
                    <div>
                      <button onClick={() => handelCancel(booking._id)}>Cancel</button>
                      <button>Edit</button>
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








// import React, { useContext, useEffect, useState } from "react";
// import { Authcontext } from "../../shared Component/Authprovider/Authprovider";
// import axios from "axios";
// import BookingCar from "../../Components/CardTable.jsx/BookingCar";

// const MyBooking = () => {
//   const [bookingCarData, setBookingCarData] = useState([]);
//   const { user } = useContext(Authcontext);

//   useEffect(() => {
//     fetchAlldata();
//   }, [user]);

//   const fetchAlldata = async () => {
//     const { data } = await axios.get(
//       `${import.meta.env.VITE_API_URL}/booking/${user?.email}`
//     );
//     setBookingCarData(data);
//   };

//   if (!bookingCarData) {
//     return <div>Loading...</div>;
//   }

//   const handelCancel = async(id) =>{
//     console.log(id, 'clancel');
// try{
// await axios.delete( `${import.meta.env.VITE_API_URL}/booking_cancel/${id}`)
// .then(res => console.log(res.data))
// fetchAlldata()
// }
// catch(err){
// console.log(err);
// }
//   }

//   return (
//     <div>
      
//       {bookingCarData.length}
//       <div>
//         <div className="overflow-x-auto mt-10 mb-10">
//           <table className="table table-xs bg-slate-600">
//             <thead>
//               <tr className="shadow-lg">
//                 <th className="border text-center text-base font-bold text-white" >Car Image</th>
//                 <th className="border text-center text-base font-bold text-white" >Car Model</th>
//                 <th className="border text-center text-base font-bold text-white" >Booking Date</th>
//                 <th className="border text-center text-base font-bold text-white" >Total Price</th>
//                 <th className="border text-center text-base font-bold text-white" >Booking Status</th>
//                 <th className="border text-center text-base font-bold text-white" >Actions</th>
//               </tr>
//             </thead>
//             <tbody>
 
//             {bookingCarData?.map((booking, index) => <tr key={index} >
             
//                 <td className="border text-center text-white text-sm  w-[150px] " > <img className="w-[150px] " src={booking.image} alt="" /></td>
//                 <td className="border text-center text-white text-sm " >{booking.carmodel}</td>
//                 <td className="border text-center text-white text-sm " >{booking?.addedDate?.curentDate}</td>
//                 <td className="border text-center text-white text-sm " > {booking.price} </td>
//                 <td className="border text-center text-white text-sm " > {booking.availability} </td>
//                 <td className="border text-center text-white text-sm " > 
                  
                  
//                 <div >
//                     <button onClick={()=>handelCancel(booking._id)} > Cancel </button>
//                     <button> Edit </button>
//                 </div>
                  
//                    </td>
                
               
                
//               </tr> )}
             
//             </tbody>
           
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyBooking;
