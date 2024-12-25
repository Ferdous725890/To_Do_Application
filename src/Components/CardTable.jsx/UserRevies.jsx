import React, { useState } from "react";

const UserRevies = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      date: "2024-12-25",
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maiores! This is the first review.",
    },
    {
      date: "2024-12-26",
      name: "Jane Smith",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maiores! This is the second review.",
    },
    {
      date: "2024-12-27",
      name: "Emily Davis",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maiores! This is the third review.",
    },
  ];

  return (
    <div className="mt-10 h-[300px]">
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
            <div className="space-x-5 mt-5">
              <button onClick={() => setCurrentReview(0)}>1</button>
              <button onClick={() => setCurrentReview(1)}>2</button>
              <button onClick={() => setCurrentReview(2)}>3</button>
            </div>
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
              }}
              className="rounded-badge"
              src="https://rentify.appdevs.net/public/frontend/images/site-section/9158cd20-88c2-4d2b-b93a-d2993d91845e.webp"
              alt="Custom Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRevies;
