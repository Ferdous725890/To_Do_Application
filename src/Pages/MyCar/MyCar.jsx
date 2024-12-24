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
  console.log(edit, "--------------------- edit file");

  useEffect(() => {
    fetchAlldata();
  }, [user]);

  const fetchAlldata = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/my_car_page/${user?.email}`
    );
    setCars(data);
  };

  if (!cars) {
    return <div><span className="loading loading-bars loading-lg"></span></div>; 
  }
  if (!edit) {
    return <div><span className="loading loading-bars loading-lg"></span></div>; 
  }



  const handelDeleted = async (id) => {
    console.log(id);

    // Show confirmation alert
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
          // If confirmed, call the delete API
          const response = await axios.delete(
            `${import.meta.env.VITE_API_URL}/my_car_page/${id}`
          );

          console.log(response);

          // Show success alert
          Swal.fire(
            {
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            },
            fetchAlldata()
          );
        } catch (err) {
          console.error(err);

          // Show error alert if the API fails
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
      console.log(id, "ata amar id");
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/my_car_page_edit/${id}`
      );
      setEdit(response.data); 
      setOpen(true); 
      fetchAlldata()
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>{cars.length}</h2>
      {/* Table of cars */}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>Count</th>
                <th>Car Image</th>
                <th>Car Model</th>
                <th>Daily Rental Price</th>
                <th>Availability</th>
                <th>Date Added</th>
                <th>Location</th>
                <th>User Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <tr key={car._id}>
                  <th>{index + 1}</th>
                  <td className=""> <img  className="w-32 text-center rounded-lg" src={car.image} alt="" /> </td>
                  <td> {car.carmodel} </td>
                  <td>{car.price}</td>
                  <td>{car.availability}</td>
                  <td>{car.addedDate}</td>
                  <td>{car.location}</td>
                  <td>12/5/2020</td>
                  <td >
                    <button
                      onClick={() => handelDeleted(car._id)}
                      className="text-red-500 font-bold mr-5"
                    >
                      <MdDeleteForever className="text-xl"  />

                      {/* Deleted */}
                    </button>
                    <button
                      onClick={() => hendeledit(car._id)}
                      className="text-green-500 font-bold"
                    >
                     <BsPencilFill className="text-lg" /> 
                     {/* Edit */}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



      </div>

<div className="">
        {/* Modal - conditionally rendered based on `open` state */}
        {open && (
  <dialog className="modal" open>
    <div className="modal-box bg-[#00C2FF]"> {/* Wider modal */}
    <h2 className="text-center text-2xl mb-5 font-medium text-[#7E22CE]">Update Your Data</h2>
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
    </div>
  );
};

export default MyCar;












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
