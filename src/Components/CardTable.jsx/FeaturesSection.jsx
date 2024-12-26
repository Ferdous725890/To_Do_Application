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
          setVisible(true); // Set visibility true when section is in view
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
      className="bg-[#15181E] text-white py-10 px-5 mt-32 mb-10 rounded-md"
    >
      {/* Section Title */}
      <div className="text-center mb-8 ">
        <h2 className="text-4xl font-bold text-[#00C2FF]">Why Choose Us</h2>
        <p className="text-lg mt-2">Discover the benefits of booking with us.</p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative bg-[#1C2128] p-6  animate-bounce rounded-lg shadow-md transform transition-transform duration-500 ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }} // Delay for staggered animation
          >
            {/* Number Badge */}
            <div className="absolute -top-3 -left-3 bg-[#00C2FF] w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold">
              {index + 1}
            </div>
            {/* Feature Text */}
            <p className="pl-12">{feature}</p>
          </div>
        ))}
      </div>

      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default FeaturesSection;






















// import React from "react";
// import WhyChooseUs from "../WhyChoseUs";

// const FeaturesSection = () => {
//   const features = [
//     "Whatever your journey, we have the perfect vehicle to complement your style and needs.",
//     "Experience straightforward and transparent pricing with no hidden fees.",
//     "With just a few clicks, you can secure your ideal car and hit the road in no time.",
//     "Our knowledgeable and friendly support team is available 24/7 to assist you, ensuring a smooth and enjoyable rental experience.",
//     "Including regular vehicle inspections and adherence to industry standards, to guarantee a secure and worry-free journey.",
//     "Rentify adapts to your schedule, making car rental convenient for any occasion.",
//   ];

//   return (
//     <div className="bg-[#15181E] text-white py-10 px-5 mt-32 mb-10 rounded-md ">
//       {/* Section Title */}
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-bold text-[#00C2FF]">Why Choose Us</h2>
//         <p className="text-lg mt-2">Discover the benefits of booking with us.</p>
//       </div>

//       {/* Grid Layout */}
//       <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="relative bg-[#1C2128] p-6 rounded-lg shadow-md"
//           >
//             {/* Number Badge */}
//             <div className="absolute -top-3 -left-3 bg-[#00C2FF] w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold">
//               {index + 1}
//             </div>
//             {/* Feature Text */}
//             <p className="pl-12">{feature}</p>
//           </div>
//         ))}
//       </div>




//       <WhyChooseUs></WhyChooseUs>
//     </div>
//   );
// };

// export default FeaturesSection;
