import React from "react";
import Navbar from "../../shared Component/Provider/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Outlet } from "react-router-dom";
// import BannerVideo from "../Banner/BannerVideo";

const HomePage = () => {
  return (
    <div className="bg-[#11071f]">
      {/*---------------------------Navbar ------------------------- */}
      <header>
        <Navbar></Navbar>
        
      </header>
      {/* ---------- */}
    
      {/*  */}
      {/*---------------------------Main Section------------------------- */}
      <main className=" container mx-auto  w-11/12" >
        <Outlet>
        </Outlet>
      </main>
      {/*---------------------------Footer------------------------- */}
      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
};

export default HomePage;
