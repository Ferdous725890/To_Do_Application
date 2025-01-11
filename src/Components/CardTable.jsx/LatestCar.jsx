import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestCar = ({ car }) => {
  const {
    Description,
    Registration_Number,
    addedDate, 
    availability,
    bookingCount,
    carmodel,
    email,
    features,
    location,
    price,
    rating: initialRating, 
    _id,
    
image,
  } = car;


console.log(car);

  const [rating, setRating] = useState(initialRating || 0); 


  const calculateDaysAgo = (date, time) => {
    const currentDate = new Date();
    const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()); 

    const dateTimeString = `${date}T${time}`;
    const addedDateObj = new Date(dateTimeString);

    const addedDateOnly = new Date(addedDateObj.getFullYear(), addedDateObj.getMonth(), addedDateObj.getDate());
    const differenceInTime = currentDateOnly - addedDateOnly;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); // Convert the difference from milliseconds to days
    return differenceInDays;
  };

  const daysAgo = calculateDaysAgo(addedDate.curentDate, addedDate.curenttime);
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; 
    const emptyStars = 5 - fullStars - halfStars;

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


  const handleRatingClicks = (index) => {
    const newRating = index + 1;
    setRating(newRating);

  };

  return (
    <div>
      <div className="w-full shadow-2xl border border-gray-700 sm:w-[80%] lg:w-[90%] h-[400px] hover:scale-[1.05] transition-all duration-1000 overflow-hidden rounded-md relative cursor-pointer group">

        <div className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-400 flex items-center justify-between w-full hover:h[90%] p-[15px]">
          <FaRegHeart className="text-[1.1rem] text-gray-600" />
          <div className="flex items-center gap-[5px]">
            <MdOutlineTimer className="text-white text-[1.1rem]" />
            <p className="text-xs text-white"> Added {daysAgo} days ago</p>
          </div>
        </div>


        <img
        // "https://i.ibb.co/j84Rc3k/31287391--8292720755221813967-n.jpg"
          src={image}
          alt="animated_card"
          className="w-full  bg-cover pb-14 group-hover:pb-0 h-[300px] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-1000 ease-out"
        />

        {/*  texts  */}
        <div className="absolute -bottom-8 left-0 py-[20px] pb-[40px] px-[20px] w-full text-white">
          <h3 className="text-base font-bold mb-1 ">{carmodel}</h3>
         <div className="grid grid-cols-3">
         <p className="text-[0.9rem] mb-1 ">${price}/day</p>
         <p className="text-[0.9rem] ">{availability}</p>
         </div>

     
        <div className="grid grid-cols-3 items-center">
       

          {/* Clickable stars for dynamic rating */}
          <div className="flex mt-2">
            {[0, 1, 2, 3, 4].map((index) => (
              <span
                key={index}
                onClick={() => handleRatingClick(index)}
                className="cursor-pointer"
                
              >
             
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

          <div className="flex items-center mt-2">
            <span className="text-[1rem] text-yellow-500 font-bold"> </span>
           
            <span className="ml-2 text-white text-[0.9rem]">(5/50)</span>
          </div>
          <div>

          </div>
        </div>

          <Link to={'/avilableCar'}><button className="mt-3 bg-gray-50/10 px-3 text-center text-white rounded-md hover:underline hover:text-green-500">Claim Offer</button></Link>
        </div>
      </div>
    </div>
  );
};

export default LatestCar;
