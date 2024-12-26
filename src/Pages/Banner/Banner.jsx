import React from "react";
import WhyChooseUs from "../../Components/WhyChoseUs";
import { ReactTyped } from "react-typed";
import { TbCarSuvFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import SecondBanner from "../../Components/CardTable.jsx/SecondBanner";
import DownloodSection from "../../Components/CardTable.jsx/DownloodSection";
import UserRevies from "../../Components/CardTable.jsx/UserRevies";
import FeaturesSection from "../../Components/CardTable.jsx/FeaturesSection";
import Offer from "../../Components/CardTable.jsx/Offer";

const Banner = () => {
  return (
    <div className="relative ">
      <div>
        <div className="hero min-h-screen">
        <video
  src="/assets/video.mp4"
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

          <div className="hero-overlay bg-opacity-0"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className=" absolute top-20">
              <h1 className="mb-5 text-5xl font-bold text-[#00C2FF] ">
                <ReactTyped
                  strings={[
                    "Welcome to Rentify",
                    "Smart Choices",
                    "Smart Rides",
                  ]}
                  typeSpeed={70}
                  backSpeed={50}
                  loop
                ></ReactTyped>
              </h1>
              <p className="mb-5 max-w-md text-gray-800">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>

              <button className="border animate-bounce border-[#00C2FF] px-3 py-1 text-[#00C2FF] rounded-md hover:bg-[#00C2FF] hover:text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <SecondBanner></SecondBanner>
      <UserRevies></UserRevies>
      <Offer></Offer>
      <FeaturesSection></FeaturesSection>
      <DownloodSection></DownloodSection>
    </div>
  );
};

export default Banner;

{
  /* <div className=" mt-3 rounded-xl shadow-2xl ">
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

        <div className="absolute top-28 left-[450px] text-[#00C2FF] text-4xl font-bold">
          <ReactTyped
            strings={["Smart Choices, Smart Rides", "Welcome to Rentify"]}
            typeSpeed={70}
            backSpeed={50}
            loop
          ></ReactTyped>

          <h1 className="text-sm font-normal text-end mt-5 ">
            <Link to={"/avilableCar"}>
              <span className="border border-black px-3 rounded-md hover:bg-[#00C2FF] hover:text-white">
                {" "}
                Booking Now
              </span>
            </Link>
          </h1>
        </div>

        <div className="absolute top-72 w-1/4 left-10 text-gray-600">
          Welcome to Rentify At Rentify, we believe that every adventure begins
          with the perfect ride. Our fleet of meticulously maintained vehicles,
          ranging from sleek sedans to spacious SUVs and luxurious cars, is
          geared to elevate your travel experience.
        </div>
      </div> */
}
