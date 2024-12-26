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
  const [open, setOpen] = useState(false); // State to manage modal visibility
  const [sortCriteria, setSortCriteria] = useState(""); // State for sorting
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetchAlldata();
  }, [user]);

  const fetchAlldata = async () => {
    setLoading(true); // Start loading
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/my_car_page/${user?.email}`
      );
      setCars(data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    } finally {
      setLoading(false); // Stop loading after the data is fetched
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
          const response = await axios.delete(
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
      fetchAlldata();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-10 mb-32">
      {/* Sorting Dropdown */}
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

      {/* Loading Spinner */}
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
                  User Image
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
              <button onClick={() => setOpen(false)} className="btn w-full">
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






























// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { Authcontext } from "../../shared Component/Authprovider/Authprovider";
// import Swal from "sweetalert2";
// import EditCarData from "../../Components/CardTable.jsx/EditCarData";
// import { BsPencilFill } from "react-icons/bs";
// import { MdDeleteForever } from "react-icons/md";

// const MyCar = () => {
//   const { user } = useContext(Authcontext);

//   const [cars, setCars] = useState([]);
//   const [edit, setEdit] = useState({});
//   const [open, setOpen] = useState(false); // State to manage modal visibility
//   const [sortCriteria, setSortCriteria] = useState(""); // State for sorting

//   useEffect(() => {
//     fetchAlldata();
//   }, [user]);

//   const fetchAlldata = async () => {
//     const { data } = await axios.get(
//       `${import.meta.env.VITE_API_URL}/my_car_page/${user?.email}`
//       // `${import.meta.env.VITE_API_URL}/my_car_page?email=${user.email}`
//       // my_car_page?email=zajojigiq@mailinator.com
//     );
//     setCars(data);
//   };

//   const sortCars = (criteria) => {
//     let sortedCars = [...cars];
//     if (criteria === "dateNewest") {
//       sortedCars.sort(
//         (a, b) => new Date(b.addedDate.curentDate) - new Date(a.addedDate.curentDate)
//       );
//     } else if (criteria === "dateOldest") {
//       sortedCars.sort(
//         (a, b) => new Date(a.addedDate.curentDate) - new Date(b.addedDate.curentDate)
//       );
//     } else if (criteria === "priceLowest") {
//       sortedCars.sort((a, b) => a.price - b.price);
//     } else if (criteria === "priceHighest") {
//       sortedCars.sort((a, b) => b.price - a.price);
//     }
//     setCars(sortedCars);
//   };

//   const handleSortChange = (event) => {
//     const selectedCriteria = event.target.value;
//     setSortCriteria(selectedCriteria);
//     sortCars(selectedCriteria);
//   };

//   const handelDeleted = async (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const response = await axios.delete(
//             `${import.meta.env.VITE_API_URL}/my_car_page/${id}`
//           );
//           Swal.fire({
//             title: "Deleted!",
//             text: "Your file has been deleted.",
//             icon: "success",
//           });
//           fetchAlldata();
//         } catch (err) {
//           Swal.fire({
//             title: "Error!",
//             text: "Something went wrong. Please try again.",
//             icon: "error",
//           });
//         }
//       }
//     });
//   };

//   const hendeledit = async (id) => {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_API_URL}/my_car_page_edit/${id}`
//       );
//       setEdit(response.data);
//       setOpen(true);
//       fetchAlldata();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="mt-10 mb-32">
//       {/* Sorting Dropdown */}
//       <div className="flex justify-end mb-4">
//         <select
//           value={sortCriteria}
//           onChange={handleSortChange}
//           className="select select-bordered w-full max-w-xs"
//         >
//           <option value="">Sort By</option>
//           <option value="dateNewest">Date Added (Newest First)</option>
//           <option value="dateOldest">Date Added (Oldest First)</option>
//           <option value="priceLowest">Price (Lowest First)</option>
//           <option value="priceHighest">Price (Highest First)</option>
//         </select>
//       </div>

//       {/* Table of cars */}
//       <div className="overflow-x-auto">
//         <table className="table table-xs">
//           <thead>
//             <tr className="border">
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 User Image
//               </th>
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 Car Image
//               </th>
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 Car Model
//               </th>
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 Daily Rental Price
//               </th>
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 Availability
//               </th>
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 Date Added
//               </th>
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 Location
//               </th>
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {cars.map((car) => (
//               <tr className="border" key={car._id}>
//                 <td className="border text-center text-white text-sm">
//                   {user?.displayName}
//                 </td>
//                 <td className="border text-center text-white text-sm">
//                   <img
//                     className="w-32 text-center rounded-lg"
//                     src={car.image}
//                     alt=""
//                   />
//                 </td>
//                 <td className="border text-center text-white text-sm">
//                   {car.carmodel}
//                 </td>
//                 <td className="border text-center text-white text-sm">
//                   {car.price}
//                 </td>
//                 <td className="border text-center text-white text-sm">
//                   {car.availability}
//                 </td>
//                 <td className="border text-center text-white text-sm">
//                   Date: {car.addedDate.curentDate} <br />
//                   Time: {car.addedDate.curenttime}
//                 </td>
//                 <td className="border text-center text-white text-sm">
//                   {car.location}
//                 </td>
//                 <td className="border text-center text-white text-sm">
//                   <button
//                     onClick={() => handelDeleted(car._id)}
//                     className="text-red-500 font-bold mr-5"
//                   >
//                     <MdDeleteForever className="text-xl" />
//                   </button>
//                   <button
//                     onClick={() => hendeledit(car._id)}
//                     className="text-green-500 font-bold"
//                   >
//                     <BsPencilFill className="text-lg" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal */}
//       {open && (
//         <dialog className="modal" open>
//           <div className="modal-box bg-gradient-to-t from-[#26cae0] to-[#d0a7f4]">
//             <h2 className="text-center text-2xl mb-5 font-medium text-[#7E22CE]">
//               Update Your Data
//             </h2>
//             <EditCarData edit={edit} />
//             <div className="modal-action">
//               <button onClick={() => setOpen(false)} className="btn w-full">
//                 Close
//               </button>
//             </div>
//           </div>
//         </dialog>
//       )}
//     </div>
//   );
// };

// export default MyCar;





































// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { Authcontext } from "../../shared Component/Authprovider/Authprovider";
// import Swal from "sweetalert2";
// import EditCarData from "../../Components/CardTable.jsx/EditCarData";
// import { BsPencilFill } from "react-icons/bs";
// import { MdDeleteForever } from "react-icons/md";

// const MyCar = () => {
//   const { user } = useContext(Authcontext);

//   const [cars, setCars] = useState([]);
//   const [edit, setEdit] = useState({});
//   const [open, setOpen] = useState(false); // State to manage modal visibility
//   const [sortCriteria, setSortCriteria] = useState(""); // State for sorting

//   useEffect(() => {
//     fetchAlldata();
//   }, [user]);

//   const fetchAlldata = async () => {
//     const { data } = await axios.get(
//       `${import.meta.env.VITE_API_URL}/my_car_page/${user?.email}`
//       // `${import.meta.env.VITE_API_URL}/my_car_page?email=${user.email}`
//       // my_car_page?email=zajojigiq@mailinator.com
//     );
//     setCars(data);
//   };

//   const sortCars = (criteria) => {
//     let sortedCars = [...cars];
//     if (criteria === "dateNewest") {
//       sortedCars.sort(
//         (a, b) => new Date(b.addedDate.curentDate) - new Date(a.addedDate.curentDate)
//       );
//     } else if (criteria === "dateOldest") {
//       sortedCars.sort(
//         (a, b) => new Date(a.addedDate.curentDate) - new Date(b.addedDate.curentDate)
//       );
//     } else if (criteria === "priceLowest") {
//       sortedCars.sort((a, b) => a.price - b.price);
//     } else if (criteria === "priceHighest") {
//       sortedCars.sort((a, b) => b.price - a.price);
//     }
//     setCars(sortedCars);
//   };

//   const handleSortChange = (event) => {
//     const selectedCriteria = event.target.value;
//     setSortCriteria(selectedCriteria);
//     sortCars(selectedCriteria);
//   };

//   const handelDeleted = async (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const response = await axios.delete(
//             `${import.meta.env.VITE_API_URL}/my_car_page/${id}`
//           );
//           Swal.fire({
//             title: "Deleted!",
//             text: "Your file has been deleted.",
//             icon: "success",
//           });
//           fetchAlldata();
//         } catch (err) {
//           Swal.fire({
//             title: "Error!",
//             text: "Something went wrong. Please try again.",
//             icon: "error",
//           });
//         }
//       }
//     });
//   };

//   const hendeledit = async (id) => {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_API_URL}/my_car_page_edit/${id}`
//       );
//       setEdit(response.data);
//       setOpen(true);
//       fetchAlldata();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="mt-10 mb-32">
//       {/* Sorting Dropdown */}
//       <div className="flex justify-end mb-4">
//         <select
//           value={sortCriteria}
//           onChange={handleSortChange}
//           className="select select-bordered w-full max-w-xs"
//         >
//           <option value="">Sort By</option>
//           <option value="dateNewest">Date Added (Newest First)</option>
//           <option value="dateOldest">Date Added (Oldest First)</option>
//           <option value="priceLowest">Price (Lowest First)</option>
//           <option value="priceHighest">Price (Highest First)</option>
//         </select>
//       </div>

//       {/* Table of cars */}
//       <div className="overflow-x-auto">
//         <table className="table table-xs">
//           <thead>
//             <tr className="border">
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 User Image
//               </th>
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 Car Image
//               </th>
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 Car Model
//               </th>
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 Daily Rental Price
//               </th>
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 Availability
//               </th>
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 Date Added
//               </th>
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 Location
//               </th>
//               <th className="border text-center border-gray-400 font-bold text-base text-white">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {cars.map((car) => (
//               <tr className="border" key={car._id}>
//                 <td className="border text-center text-white text-sm">
//                   {user?.displayName}
//                 </td>
//                 <td className="border text-center text-white text-sm">
//                   <img
//                     className="w-32 text-center rounded-lg"
//                     src={car.image}
//                     alt=""
//                   />
//                 </td>
//                 <td className="border text-center text-white text-sm">
//                   {car.carmodel}
//                 </td>
//                 <td className="border text-center text-white text-sm">
//                   {car.price}
//                 </td>
//                 <td className="border text-center text-white text-sm">
//                   {car.availability}
//                 </td>
//                 <td className="border text-center text-white text-sm">
//                   Date: {car.addedDate.curentDate} <br />
//                   Time: {car.addedDate.curenttime}
//                 </td>
//                 <td className="border text-center text-white text-sm">
//                   {car.location}
//                 </td>
//                 <td className="border text-center text-white text-sm">
//                   <button
//                     onClick={() => handelDeleted(car._id)}
//                     className="text-red-500 font-bold mr-5"
//                   >
//                     <MdDeleteForever className="text-xl" />
//                   </button>
//                   <button
//                     onClick={() => hendeledit(car._id)}
//                     className="text-green-500 font-bold"
//                   >
//                     <BsPencilFill className="text-lg" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal */}
//       {open && (
//         <dialog className="modal" open>
//           <div className="modal-box bg-gradient-to-t from-[#26cae0] to-[#d0a7f4]">
//             <h2 className="text-center text-2xl mb-5 font-medium text-[#7E22CE]">
//               Update Your Data
//             </h2>
//             <EditCarData edit={edit} />
//             <div className="modal-action">
//               <button onClick={() => setOpen(false)} className="btn w-full">
//                 Close
//               </button>
//             </div>
//           </div>
//         </dialog>
//       )}
//     </div>
//   );
// };

// export default MyCar;













// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { Authcontext } from "../../shared Component/Authprovider/Authprovider";
// import Swal from "sweetalert2";
// import EditCarData from "../../Components/CardTable.jsx/EditCarData";

// const MyCar = () => {

//   //   ----------------------------------------------------------------------------------------------
//   const { user } = useContext(Authcontext);

//   const [cars, setCars] = useState([]);
//   const [edit, setEdit] = useState({});
//   const [open , setOpen] = useState(false)
//   console.log(edit,"--------------------- edit file");

//   useEffect(() => {
//     fetchAlldata();
//   }, [user]);

//   const fetchAlldata = async () => {
//     const { data } = await axios.get(
//       `${import.meta.env.VITE_API_URL}/my_car_page/${user?.email}`
//     );
//     setCars(data);
//   };
//   //   ----------------------------------------------------------------------------------------------
//   const handelDeleted = async (id) => {
//     console.log(id);

//     // Show confirmation alert
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           // If confirmed, call the delete API
//           const response = await axios.delete(
//             `${import.meta.env.VITE_API_URL}/my_car_page/${id}`
//           );

//           console.log(response);

//           // Show success alert
//           Swal.fire(
//             {
//               title: "Deleted!",
//               text: "Your file has been deleted.",
//               icon: "success",
//             },

//             fetchAlldata()
//           );
//         } catch (err) {
//           console.error(err);

//           // Show error alert if the API fails
//           Swal.fire({
//             title: "Error!",
//             text: "Something went wrong. Please try again.",
//             icon: "error",
//           });
//         }
//       }
//     });
//   };
//   //   ----------------------------------------------------------------------------------------------
//   const hendeledit = async (id) =>{

// try{
//     console.log(id, "ata amar id");
//     const data=  await axios.get(`${import.meta.env.VITE_API_URL}/my_car_page_edit/${id}`)
//     .then(res => setEdit(res.data))
//     setOpen(true)

// }
// catch(err) {
//     console.log(err);

// }

// }

//   return (
//     <div>
//       <h2>{cars.length}</h2>
//       {/* ----------------------------------------------------------------Table ------------------------------------------- */}
//       <div>
//         <div className="overflow-x-auto">
//           <div className="overflow-x-auto">
//             <table className="table table-xs">
//               <thead>
//                 <tr>
//                   <th></th>
//                   <th>Car Image</th>
//                   <th>Car Model</th>
//                   <th>Daily Rental Price</th>
//                   <th>Availability</th>
//                   <th>Date Added</th>
//                   <th>location</th>
//                   <th>User Image</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cars.map((car, index) => (
//                   <tr key={car._id}>
//                     <th>{index + 1}</th>
//                     <td> {car.carmodel} </td>
//                     <td>{car.price}</td>
//                     <td>{car.availability}</td>
//                     <td>Date Added</td>
//                     <td>12/5/2020</td>
//                     <td>{car.location}</td>
//                     <div>
//                       <button
//                         onClick={() => handelDeleted(car._id)}
//                         className="text-red-500 font-bold mr-5"
//                       >
//                         Deleted
//                       </button>
//                       <button onClick={() =>hendeledit (car._id) }  className="text-green-500 font-bold">Edit</button>
//                     </div>
//                   </tr>
//                 ))}
//               </tbody>

//             </table>
//           </div>
//         </div>
//       </div>

//    {/* Open the modal using document.getElementById('ID').showModal() method */}
// {
//     setOpen&&(
//         <dialog id="my_modal_1" className="modal">
//   <div className="modal-box">

// <EditCarData edit={edit} ></EditCarData>

//     <h3 className="font-bold text-lg">Hello!</h3>
//     <p className="py-4">Press ESC key or click the button below to close</p>
//     <div className="modal-action">
//       <form method="dialog">
//         {/* if there is a button in form, it will close the modal */}
//         <button className="btn">Close</button>
//       </form>
//     </div>
//   </div>
// </dialog>
//     )
// }

//     </div>
//   );
// };

// export default MyCar;
