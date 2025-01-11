import { ReactTyped } from "react-typed";
import WhyChooseUs from "../../Components/WhyChoseUs";

import { TbCarSuvFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
const BannerVideo = () => {
  return (
    <div>
      <div className=" ">
        <div className="hero ">
          <video
            src="/assets/video.mp4"
            className=" md:w-screen rounded-2xl lob "
            autoPlay
            loop
            muted
            playsInline
            // "calc(100vh - 0rem)"
            style={{
              height: "calc(100vh - 10rem)",
              width: "h-screen",

              display: "block",
              objectFit: "cover",
            }}
          />

          <div className="hero-overlay bg-opacity-0"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className=" absolute top-32">
              <h1 className="mb-5 text-4xl font-bold text-white uppercase ">
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
              <p className="mb-5 max-w-md text-white ">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque
              </p>

              <button className="border animate-bounce border px-3 py-1 text-white rounded-md hover:bg-[#00C2FF] hover:text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
