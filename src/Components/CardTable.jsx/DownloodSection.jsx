import React from "react";

const DownloodSection = () => {
  return (
    <div className="bg-gradient-to-r from-white/10  to-[#2b2f34fa]  mt-[150px] rounded-lg mb-20">
      <div className="md:ml-32">
        <div className="pt-10 pl-10">
          <h2 className="text-white text-3xl">Download the Rentify App</h2>
          <p className="md:w-4/12 text-white text-sm mt-3">
            Make your car rental experience even more convenient by downloading
            the Rentify app. Available on both iOS and Android platforms, our
            app brings a range of features to your fingertips.
          </p>
        </div>

        <div className="flex pl-10 mt-5">
          <div className=" flex h-10">
            <button className="bg-[#0B0B0B] animate-bounce text-white  px-2 text-[13px] mr-5  rounded-lg   flex items-center ">
              <img
                className="w-7 mr-1"
                src="https://i.ibb.co.com/0nCzMHB/play-12942208.png"
                alt=""
              />
              Get It On Google Play
            </button>

            <button className=" animate-bounce flex rounded-md text-white items-center bg-[#0B0B0B] px-5 text-[13px]">
              <img
                className="w-7 mr-2"
                src="https://i.ibb.co.com/2hm404P/app-store-5977575.png"
                alt=""
              />
              Apple Store
            </button>
          </div>
          <div className="w-[400px]">
            {/* Adding the keyframes and animation inline */}
            <style>
              {`
          @keyframes moveRight {
            0% {
              transform: translateX(100%);
            }
            50% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .moveRight {
            animation: moveRight 3s ease-in-out infinite;
          }
        `}
            </style>

            {/* Image container with moveRight class */}
            <div className="ml-10 moveRight">
              <img
                src="https://i.ibb.co.com/4Pkz16H/a0203d16-7990-4d1d-a5c2-600817f49d0f-1.png"
                alt="Animated Image"
                className=" object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloodSection;
