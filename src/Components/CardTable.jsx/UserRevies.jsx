import React, { useState, useEffect } from "react";

const UserReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      date: "2024-12-25",
      name: "John Doe",
      content:
        "The service was excellent! The website was user-friendly, and I easily found what I was looking for. Delivery was prompt, and the product quality exceeded my expectations. Highly recommend!",
      image:
        "https://rentify.appdevs.net/public/frontend/images/site-section/9158cd20-88c2-4d2b-b93a-d2993d91845e.webp",
    },
    {
      date: "2024-12-26",
      name: "Jane Smith",
      content:
        "I had an amazing shopping experience! The customer support team was responsive and helpful. The product was exactly as described and arrived in perfect condition. I'll definitely be returning for more.",
      image:
        "https://rentify.appdevs.net/public/frontend/images/site-section/196bf84e-5e00-42df-9a24-a9f17578ed18.webp",
    },
    {
      date: "2024-12-27",
      name: "Emily Davis",
      content:
        "Fast, reliable, and top-notch quality! The product selection is vast, and the prices are competitive. I appreciated the smooth checkout process and quick updates on my order status. Great job!",
      image:
        "https://rentify.appdevs.net/public/frontend/images/site-section/9158cd20-88c2-4d2b-b93a-d2993d91845e.webp",
    },
    {
      date: "2024-12-28",
      name: "Michael Brown",
      content:
        "Outstanding experience! The website is well-organized, making it easy to find exactly what I needed. The product arrived on time and in perfect condition.",
      image:
        "https://rentify.appdevs.net/public/frontend/images/site-section/196bf84e-5e00-42df-9a24-a9f17578ed18.webp",
    },
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="mt-12 h-[300px] hidden lg:block">
      <div>
        <h2 className="text-4xl mb-12 text-center text-[#00C2FF]">
          Testimonial
        </h2>
      </div>
      <div className="bg-gradient-to-r from-white/10  to-[#54839B] w-5/12 mx-auto rounded-lg h-[250px] relative">
        <div className="flex justify-between " >
          <div className=""></div>
          <div className="mt-5">
            <p className="text-xl mb-2 text-white">
              {reviews[currentReview].name}
            </p>
            <h2 className="text-white font-medium">
              {reviews[currentReview].date}
            </h2>
            <p className="w-[280px] p-2">{reviews[currentReview].content}</p>
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
              className="rounded-badge bg-cover"
              src={reviews[currentReview].image}
              alt="Custom Image "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
