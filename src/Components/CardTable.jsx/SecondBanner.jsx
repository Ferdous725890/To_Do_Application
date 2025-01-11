import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../shared Component/Authprovider/Authprovider";
import axios from "axios";

import LatestCar from "./LatestCar";

const SecondBanner = () => {
  const [latestCar, setLatestCar] = useState([]);
  const { user } = useContext(Authcontext);

  useEffect(() => {
    fetchAlldata();
  }, []);

  const fetchAlldata = async () => {
    await axios
      .get(`${import.meta.env.VITE_API_URL}/added_car/available_car/latest`)
      .then((res) => setLatestCar(res.data));
  };

  return (
    <div className="mt-12">
      <div className="w-full  max-w-[600px] flex  justify-center items-center mx-auto">
      <h2 className="border-b-2 px-1 pb-3 rounded-lg text-4xl mb-10 text-center  text-white ">
        Latest Car <span>({latestCar?.length})</span>{" "}
      </h2>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-y-10">
        {latestCar.map((car) => (
          <LatestCar key={car._id} car={car}></LatestCar>
        ))}
      </div>
    </div>
  );
};

export default SecondBanner;
