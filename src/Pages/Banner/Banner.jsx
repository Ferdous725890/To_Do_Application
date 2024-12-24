import React from "react";
import WhyChooseUs from "../../Components/WhyChoseUs";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div>
      <div className="relative mt-3">
        <video
          src="/src/assets/video.mp4"
          className="w-full rounded-2xl lob"
          autoPlay
          loop
          muted
          playsInline
          style={{
            height: "calc(100vh - 5rem)", // 4rem = Navbar height
            display: "block",
            objectFit: "cover",
          }}
        />

        <div className="absolute top-28 left-96 text-[#00C2FF] text-4xl font-bold">
        <ReactTyped
      strings={[
        "Smart Choices, Smart Rides",
        "Welcome to Rentify",
      
      ]}
      typeSpeed={40}
      backSpeed={50}
     
      loop
    >
 
    </ReactTyped>
        </div>


      
      </div>

      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Banner;
