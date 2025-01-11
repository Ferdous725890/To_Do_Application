import React from "react";

const DownloodSection = () => {
  return (
    <div className="bg-white/10 backdrop-blur-3xl bg-opacity-50 mt-[150px] rounded-lg mb-20">
      <div className="md:ml-32">
        <div className="pt-10 pl-10">
          <h2 className="text-white text-3xl mb-7">Download the Rentify App</h2>
          <p className="md:w-4/12 text-white text-sm">
            Make your car rental experience even more convenient by downloading
            the Rentify app. Available on both iOS and Android platforms, our
            app brings a range of features to your fingertips.
          </p>
        </div>

        <div className="md:grid md:grid-cols-2 pl-10 mt-10">
          <div className=" flex h-10 ">
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
                className="w-5 mr-2"
                src="https://i.ibb.co.com/2hm404P/app-store-5977575.png"
                alt=""
              />
              Apple Store
            </button>
          </div>

          <div className="mt-10 mr-5">
            <img
              src="https://i.ibb.co.com/4Pkz16H/a0203d16-7990-4d1d-a5c2-600817f49d0f-1.png"
              alt="Animated Image"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloodSection;
