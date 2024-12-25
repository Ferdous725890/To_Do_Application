import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../shared Component/Authprovider/Authprovider";
import axios from "axios";

import LatestCar from "./LatestCar";

const SecondBanner = () => {
  const [latestCar, setLatestCar] = useState([]);
  const { user } = useContext(Authcontext);
  console.log(latestCar);

  useEffect(() => {
    fetchAlldata();
  }, []);

  const fetchAlldata = async () => {
    await axios
      .get(`${import.meta.env.VITE_API_URL}/added_car/available_car/latest`)
      .then((res) => setLatestCar(res.data));
  };

  return (
    <div>
      <h2>
        Latest Data <span>{latestCar?.length}</span>{" "}


        <div className="grid grid-cols-3  gap-y-10">
            {
                latestCar.map(car => <LatestCar key={car._id} car={car}></LatestCar>)
            }
        </div>

      
      </h2>



    </div>
  );
};

export default SecondBanner;
