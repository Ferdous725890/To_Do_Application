import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleCar from '../../Components/CardTable.jsx/SingleCar';

const AvilableCar = () => {
  const [allCar, setAllCar] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [sortOption, setSortOption] = useState(''); // Sorting option
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const carsPerPage = 10; // Cars per page

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

  const filteredCars = allCar
    .filter(car =>
      car.carmodel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'dateNewest') {
        return new Date(b.addedDate?.curenttime) - new Date(a.addedDate?.curenttime);
      }
      if (sortOption === 'dateOldest') {
        return new Date(a.addedDate?.curenttime) - new Date(b.addedDate?.curenttime);
      }
      if (sortOption === 'priceLowest') {
        return a.price - b.price;
      }
      if (sortOption === 'priceHighest') {
        return b.price - a.price;
      }
      return 0; // Default order
    });

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

      {/* Sorting Dropdown */}
      <div className="mt-4">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded-lg w-full"
        >
          <option value="">Sort By</option>
          <option value="dateNewest">Date Added (Newest First)</option>
          <option value="dateOldest">Date Added (Oldest First)</option>
          <option value="priceLowest">Price (Lowest First)</option>
          <option value="priceHighest">Price (Highest First)</option>
        </select>
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
        {currentCars.length > 0 ? (
          currentCars.map((singleCar, index) => (
            <SingleCar key={index} singleCar={singleCar} />
          ))
        ) : (
          <p>No cars found matching your search.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border rounded-md ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvilableCar;














// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import SingleCar from '../../Components/CardTable.jsx/SingleCar';

// const AvilableCar = () => {
//   const [allCar, setAllCar] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [viewMode, setViewMode] = useState('grid'); // grid or list

//   useEffect(() => {
//     fetchAlldata();
//   }, []);

//   const fetchAlldata = async () => {
//     try {
//       const { data } = await axios.get(
//         `${import.meta.env.VITE_API_URL}/added_car/available_car`
//       );
//       setAllCar(data);
//     } catch (error) {
//       console.error('Error fetching data', error);
//     }
//   };

//   const filteredCars = allCar.filter(car =>
//     car.carmodel.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     car.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     car.location.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleViewToggle = () => {
//     setViewMode(viewMode === 'grid' ? 'list' : 'grid');
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold">Available Cars</h2>

//       {/* Search Input */}
//       <div className="mt-4">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search by car model, brand, or location"
//           className="p-2 border rounded-lg w-full"
//         />
//       </div>

//       {/* Toggle View Button */}
//       <button
//         onClick={handleViewToggle}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
//       >
//         Switch to {viewMode === 'grid' ? 'List' : 'Grid'} View
//       </button>

//       {/* Display Cars */}
//       <div className={viewMode === 'grid' ? 'grid grid-cols-3 gap-10 mt-6' : 'mt-6'}>
//         {filteredCars.length > 0 ? (
//           filteredCars.map((singleCar, index) => (
//             <SingleCar key={index} singleCar={singleCar} />
//           ))
//         ) : (
//           <p>No cars found matching your search.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AvilableCar;
