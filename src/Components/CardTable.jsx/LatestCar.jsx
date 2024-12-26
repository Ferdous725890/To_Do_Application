import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // For star ratings

const LatestCar = ({ car }) => {
  const {
    Description,
    Registration_Number,
    addedDate, // The addedDate object with curentDate and curenttime
    availability,
    bookingCount,
    carmodel,
    email,
    features,
    location,
    price,
    rating: initialRating, // Assuming there's an initial rating from the backend
    _id,
  } = car;

  const [rating, setRating] = useState(initialRating || 0); // State for dynamic rating

  // Function to calculate the difference in days based on date only (ignore time)
  const calculateDaysAgo = (date, time) => {
    const currentDate = new Date();
    const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()); // Normalize to midnight

    // Combine date and time to create a valid date-time string
    const dateTimeString = `${date}T${time}`;
    const addedDateObj = new Date(dateTimeString);

    // Normalize the addedDate to midnight (ignoring time)
    const addedDateOnly = new Date(addedDateObj.getFullYear(), addedDateObj.getMonth(), addedDateObj.getDate());

    // Calculate the difference in time (in milliseconds)
    const differenceInTime = currentDateOnly - addedDateOnly;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); // Convert the difference from milliseconds to days
    return differenceInDays;
  };

  const daysAgo = calculateDaysAgo(addedDate.curentDate, addedDate.curenttime);

  // Function to render the stars based on the current rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half star if the rating has a decimal >= 0.5
    const emptyStars = 5 - fullStars - halfStars; // Remaining empty stars

    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }
    if (halfStars) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
    }

    return stars;
  };

  // Handle the rating click event
  const handleRatingClick = (index) => {
    const newRating = index + 1; // Index is 0-based, so +1 to get the rating
    setRating(newRating);
    // Optionally, you can save the new rating to the backend
    // For example: updateCarRating(carId, newRating);
  };

  return (
    <div>
      <div className="w-full shadow-2xl border border-gray-700 sm:w-[80%] lg:w-[90%] h-[500px] hover:scale-[1.05] transition-all duration-1000 overflow-hidden rounded-md relative cursor-pointer group">
        {/*  icons  */}
        <div className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]">
          <FaRegHeart className="text-[1.1rem] text-gray-600" />
          <div className="flex items-center gap-[5px]">
            <MdOutlineTimer className="text-orange-700 text-[1.1rem]" />
            <p className="text-[1rem] text-orange-700"> Added {daysAgo} days ago</p>
          </div>
        </div>

        {/*  image  */}
        <img
          src="https://i.ibb.co/j84Rc3k/311287391-425320746432238-8292720755221813967-n.jpg"
          alt="animated_card"
          className="w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out"
        />

        {/*  texts  */}
        <div className="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full text-white">
          <h3 className="text-[1.4rem] font-bold "> Daily Price: {carmodel}</h3>
          <p className="text-[0.9rem] ">Daily Price: {price}</p>
          <p className="text-[0.9rem] ">Availability: {availability}</p>

          {/* Rating Section */}
          <div className="flex items-center mt-2">
            <span className="text-[1rem] text-yellow-500 font-bold">Rating: </span>
            <div className="flex ml-2">
              {renderStars(rating)} {/* Render a single set of stars based on current rating */}
            </div>
            <span className="ml-2 text-white text-[0.9rem]">({rating}/5)</span>
          </div>

          {/* Clickable stars for dynamic rating */}
          <div className="flex mt-2">
            {[0, 1, 2, 3, 4].map((index) => (
              <span
                key={index}
                onClick={() => handleRatingClick(index)}
                className="cursor-pointer"
              >
                {/* Render stars based on the index of the clicked star */}
                {index < Math.floor(rating) ? (
                  <FaStar className="text-yellow-500" />
                ) : index < Math.ceil(rating) ? (
                  <FaStarHalfAlt className="text-yellow-500" />
                ) : (
                  <FaRegStar className="text-yellow-500" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCar;
