import React from "react";
import Navbar from "../../shared Component/Provider/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/*---------------------------Navbar ------------------------- */}
      <header>
        <Navbar></Navbar>
      </header>
      {/*---------------------------Main Section------------------------- */}
      <main className="container mx-auto w-11/12" >
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
