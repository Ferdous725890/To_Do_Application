import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { Authcontext } from "../../Authprovider/Authprovider";

const Navbar = () => {
  const { user, userLogOut } = useContext(Authcontext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  const handleLogOut = () => {
    console.log("Btn clicked");
    userLogOut().then((result) => {
      console.log("Log out successful", result);
      navigate('/login')
    });
  };

  const linksNotUser = (
    <>
      <Link
        className="text-[#00C2FF] font-bold px-5 py-[3px] rounded-md flex items-center"
        to="/"
      >
        <FaHome className="text-lg mr-2" /> Home
      </Link>
      <Link
        className="text-[#00C2FF] font-bold px-5 py-[3px] rounded-md flex items-center"
        to="/avilableCar"
      >
        <FaHome className="text-lg mr-2" /> Available Cars
      </Link>
    </>
  );

  const links = (
    <>
      <Link
        className="text-[#00C2FF] hover: font-bold px-5 py-[3px] rounded-md flex items-center"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-[#00C2FF] font-bold px-5 py-[3px] rounded-md flex items-center"
        to="/addCard"
      >
        Add Car
      </Link>
      <Link
        className="text-[#00C2FF] font-bold px-5 py-[3px] rounded-md flex items-center"
        to="/myCar"
      >
        My Cars
      </Link>
      <Link
        className="text-[#00C2FF] font-bold px-5 py-[3px] rounded-md flex items-center"
        to="/avilableCar"
      >
        Available Cars
      </Link>
      <Link
        className="text-[#00C2FF] font-bold px-5 py-[3px] rounded-md flex items-center"
        to="/MyBooking"
      >
        My Bookings
      </Link>
      <Link
        className="text-[#00C2FF] font-bold px-5 py-[3px] rounded-md flex items-center"
        to="/contactus"
      >
        ContactUs
      </Link>
    </>
  );

  // border-b

  return (
   <div>
     <div className=" bg-[#1a0b2e] backdrop-blur-3xl shadow-lg fixed top-0 left-0 right-0 z-50 opacity-95 backdrop-blur-2xl overflow-hidden">
      <div className="container w-11/12 mx-auto  bg-[#1D252D] bg-[#1a0b2e] ">
        <div className="navbar flex justify-between items-center">
          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-square btn-ghost"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="w-[120px]"
              src="https://i.ibb.co.com/XVnJ0dv/1e3f54f3-a1b0-425b-9f0e-c8494b5164a2.png"
              alt="Logo"
            />
          </div>

          {/* Links */}
          <div className="hidden lg:flex  ">
            {user?.email ? links : linksNotUser}
          </div>

          {/* User Menu */}
          <div className="flex">
            {!user?.email ? (
              <Link
                className="border text-[#00C2FF] font-bold px-3 py-[3px] rounded-md flex items-center"
                to="/login"
              >
                <AiOutlineLogin className="text-lg mr-2" /> Log In
              </Link>
            ) : (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  {/* Use user.photoURL for the avatar */}
                  <div className="w-10 rounded-full">
                    <img
                    referrerpolicy="no-referrer"
                      alt="User Avatar"
                      src={user && user.photoURL || 'https://i.ibb.co.com/0nvdFb5/Screenshot-54.png'}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Responsive Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="menu bg-[#1D252D] space-y-2 px-4 py-2">
            {user?.email ? links : linksNotUser}
          </div>
        </div>
      )}
    </div>

    <div className="pt-[100px]">

    </div>
 

   </div>
  );
};

export default Navbar;