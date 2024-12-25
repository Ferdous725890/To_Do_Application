import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { Authcontext } from "../../Authprovider/Authprovider";

const Navbar = () => {
  const { user, userLogOut } = useContext(Authcontext);
  

  const handelLogOut = () => {
    console.log("btn click");
    userLogOut().then((result) => {
      console.log("log out succesful", result);
    });
  };

  const linksnotUser = (
    <>
      <Link
        className="border border-[#00C2FF] text-[#00C2FF] font-bold px-5 py-[3px] rounded-md  flex items-center "
        to="/"
      >
        {" "}
        <FaHome className="text-lg mr-2" /> Home
      </Link>
      <Link
        className="border border-[#00C2FF] text-[#00C2FF] font-bold px-5 py-[3px] rounded-md  flex items-center "
        to="/avilableCar"
      >
        {" "}
        <FaHome className="text-lg mr-2" /> Available Cars
      </Link>
    </>
  );

  const links = (
    <>
      <Link
        className="border border-[#00C2FF] text-[#00C2FF] font-bold px-5 py-[3px] rounded-md  flex items-center "
        to="/"
      >
        {" "}
        <FaHome className="text-lg mr-2" /> Home
      </Link>
      <Link
        className="border border-[#00C2FF] text-[#00C2FF] font-bold px-5 py-[3px] rounded-md  flex items-center "
        to="/addCard"
      >
        {" "}
        <FaHome className="text-lg mr-2" /> Add Car
      </Link>
      <Link
        className="border border-[#00C2FF] text-[#00C2FF] font-bold px-5 py-[3px] rounded-md  flex items-center "
        to="/myCar"
      >
        {" "}
        <FaHome className="text-lg mr-2" /> My Cars
      </Link>
      <Link
        className="border border-[#00C2FF] text-[#00C2FF] font-bold px-5 py-[3px] rounded-md  flex items-center "
        to="/avilableCar"
      >
        {" "}
        <FaHome className="text-lg mr-2" /> Available Cars
      </Link>
      <Link
        className="border border-[#00C2FF] text-[#00C2FF] font-bold px-5 py-[3px] rounded-md  flex items-center "
        to="/MyBooking"
      >
        {" "}
        <FaHome className="text-lg mr-2" /> My Bookings
      </Link>
    </>
  );
  return (
    <div className="bg-[#1D252D]">
      <div className="container w-11/12 mx-auto border-b bg-[#1D252D]">
        <div className="navbar bg-base-100 flex justify-between items-center ">
          {/* Start Section */}
          <div className="flex justify-start">
            <img
              className="w-[120px]"
              src="https://i.ibb.co.com/XVnJ0dv/1e3f54f3-a1b0-425b-9f0e-c8494b5164a2.png"
              alt=""
            />
         
          </div>

          {/* Center Section */}
          <div className="space-x-4">{user?.email ? links : linksnotUser}</div>

          {/* End Section */}
          <div className="flex">
            <div className="dropdown dropdown-end">
              <Link
                className="border   border-[#00C2FF] text-[#00C2FF] font-bold px-3 mr-5 py-[3px] rounded-md  flex items-center "
                to="/login"
              >
                {" "}
                <AiOutlineLogin className="text-lg mr-2" /> log in
              </Link>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.displayName}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handelLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
