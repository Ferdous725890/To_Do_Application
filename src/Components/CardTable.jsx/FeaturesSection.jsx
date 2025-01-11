import React, { useEffect, useState } from "react";
import WhyChooseUs from "../WhyChoseUs";

const FeaturesSection = () => {
  const features = [
    "Whatever your journey, we have the perfect vehicle to complement your style and needs.",
    "Experience straightforward and transparent pricing with no hidden fees.",
    "With just a few clicks, you can secure your ideal car and hit the road in no time.",
    "Our knowledgeable and friendly support team is available 24/7 to assist you, ensuring a smooth and enjoyable rental experience.",
    "Including regular vehicle inspections and adherence to industry standards, to guarantee a secure and worry-free journey.",
    "Rentify adapts to your schedule, making car rental convenient for any occasion.",
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector("#features-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div
      id="features-section"
      className=" text-white  px-5 mt-10 mb-10 rounded-md"
    >
    
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-20 text-[#00C2FF]">Why Choose Us</h2>

      </div>


      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative backdrop-blur-sm bg-white/20  p-6  animate-bounce rounded-lg shadow-md transform transition-transform duration-500 ${
              visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }} >
            <div className="absolute -top-3 -left-3 bg-[#00C2FF] w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold">
              {index + 1}
            </div>
           
            <p className="pl-12">{feature}</p>
          </div>
        ))}
      </div>

      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default FeaturesSection;
