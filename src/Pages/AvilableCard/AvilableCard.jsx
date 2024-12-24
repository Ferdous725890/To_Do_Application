import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleCar from '../../Components/CardTable.jsx/SingleCar';

const AvilableCar = () => {
  const [allCar, setAllCar] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  useEffect(() => {
    fetchAlldata();
  }, []);

  const fetchAlldata = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/added_car/available_car`
      );
      setAllCar(data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const filteredCars = allCar.filter(car =>
    car.carmodel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewToggle = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Available Cars</h2>

      {/* Search Input */}
      <div className="mt-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by car model, brand, or location"
          className="p-2 border rounded-lg w-full"
        />
      </div>

      {/* Toggle View Button */}
      <button
        onClick={handleViewToggle}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Switch to {viewMode === 'grid' ? 'List' : 'Grid'} View
      </button>

      {/* Display Cars */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-3 gap-10 mt-6' : 'mt-6'}>
        {filteredCars.length > 0 ? (
          filteredCars.map((singleCar, index) => (
            <SingleCar key={index} singleCar={singleCar} />
          ))
        ) : (
          <p>No cars found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default AvilableCar;
