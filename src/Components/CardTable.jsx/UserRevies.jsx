import React, { useState, useEffect } from "react";

const UserReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      date: "2024-12-25",
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maiores! This is the first review.",
      image:
        "https://rentify.appdevs.net/public/frontend/images/site-section/9158cd20-88c2-4d2b-b93a-d2993d91845e.webp",
    },
    {
      date: "2024-12-26",
      name: "Jane Smith",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maiores! This is the second review.",
      image:
        "https://rentify.appdevs.net/public/frontend/images/site-section/196bf84e-5e00-42df-9a24-a9f17578ed18.webp",
    },
    {
      date: "2024-12-27",
      name: "Emily Davis",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maiores! This is the third review.",
      image:
        "https://rentify.appdevs.net/public/frontend/images/site-section/9158cd20-88c2-4d2b-b93a-d2993d91845e.webp",
    },
    {
      date: "2024-12-28",
      name: "Michael Brown",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maiores! This is the fourth review.",
      image:
        "https://rentify.appdevs.net/public/frontend/images/site-section/196bf84e-5e00-42df-9a24-a9f17578ed18.webp",
    },
  ];

  // Automatically change reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [reviews.length]);

  return (
    <div className="mt-10 h-[300px] hidden md:block">
      <div>
        <h2 className="text-4xl text-center text-[#00C2FF]">Testimonial</h2>
        <p className="text-4xl mt-3 mb-5 xl text-center">Our Customers Review</p>
      </div>
      <div className="bg-gradient-to-r from-white/10 to-[#54839B] w-5/12 mx-auto rounded-lg h-[250px] relative">
        <div className="flex justify-between">
          <div></div>
          <div className="mt-5">
            <h2>{reviews[currentReview].date}</h2>
            <p>{reviews[currentReview].name}</p>
            <p className="w-[280px]">{reviews[currentReview].content}</p>
          </div>
        </div>
        <div className="absolute -left-14 top-8 ">
          <div
            style={{
              background: "linear-gradient(to top, #15181E, #03AFE6)",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 10px 100px rgb(0, 194, 255)",
            }}
          >
            <img
              style={{
                width: "200px",
                height: "150px",
              }}
              className="rounded-badge"
              src={reviews[currentReview].image}
              alt="Custom Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
