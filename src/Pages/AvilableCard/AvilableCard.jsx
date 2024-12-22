import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleCar from '../../Components/CardTable.jsx/SingleCar';

const AvilableCar = () => {
    const [allCar, setAllCar] = useState([]);
  

  
    useEffect(() => {
      fetchAlldata();
    }, []);
  
    const fetchAlldata = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/added_car/available_car`
      );
      setAllCar(data);
    };

    if (!allCar) {
      return <div>Loading...</div>; 
    }
  



    return (
        <div>
           <h2>Available</h2>
           {
            allCar.length
           }
           <div className='grid grid-cols-3 gap-10' >
            {
                allCar.map((singleCar,index) =><SingleCar key={index} singleCar={singleCar} ></SingleCar> )
            }
           </div>
        </div>
    );
};

export default AvilableCar;