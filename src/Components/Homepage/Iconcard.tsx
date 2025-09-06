
// import React from "react";
// import Image from "next/image";

// const   IconCards: React.FC = () => {
//   const cards = [
//     { icon: "/prop-icon-1.png", label: "FLAT / APPARTMENTS" },
//     { icon: "/prop-icon-2.png", label: "INDEPENDENT HOUSE / VILLA'S" },
//     { icon: "/prop-icon-3.png", label: "BUILDER FLOOR" },
//     { icon: "/prop-icon-4.png", label: "PLOT / LAND" },
//     { icon: "/prop-icon-5.png", label: "FARMHOUSE" },
//     { icon: "/prop-icon-6.png", label: "OTHERS" },
//   ];
//   const cards2 = [
//     { icon: "/prop-icon-1.png", label: "OFFICE" },
//     { icon: "/prop-icon-2.png", label: "RETAIL" },
//     { icon: "/prop-icon-3.png", label: "PLOT" },
//     { icon: "/prop-icon-4.png", label: "LAND" },
//     { icon: "/prop-icon-5.png", label: "HOSPITALITY" },
//     { icon: "/prop-icon-6.png", label: "HELP 24/7" },
//   ];

//   return (
//     <div>
//       <h1 className="text-[#F7E7CE] text-3xl italic mb-4">RESIDENTIAL :</h1>
//     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 ">
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center justify-center text-white py-7 hover:bg-gray-800 transition border border-[#B79868] rounded-lg p-4"
//         >
//           {/* Icon Image */}
//           <Image 
//             src={card.icon}
//             alt={card.label}
//             width={50}
//             height={45}
//             className="w-12 h-12 object-contain"
//           />
//           {/* Label */}
//           <h3 className="mt-3 text-lg uppercase text-[#F7E7CE] font-heading text-center">
//             {card.label}
//           </h3>
//         </div>
//       ))}
//     </div>



//    <h1 className="text-[#F7E7CE] text-3xl italic mb-4 mt-10 ">COMMERCIAL :</h1>
// <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 ">

//       {cards2.map((card, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center justify-center text-white py-7 hover:bg-gray-800 transition border border-[#B79868] rounded-lg p-4"
//         >
//           {/* Icon Image */}
//           <Image 
//             src={card.icon}
//             alt={card.label}
//             width={50}
//             height={45}
//             className="w-12 h-12 object-contain"
//           />
//           {/* Label */}
//           <h3 className="mt-3 text-lg uppercase text-[#F7E7CE] font-heading text-center">
//             {card.label}
//           </h3>
//         </div>
//       ))}
//     </div>
// </div>
//   );
// };

// export default IconCards;


import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const PropertyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Property data
  const residentialCards = [
    { icon: "/prop-icon-1.png", label: "FLAT / APARTMENTS", type: "RESIDENTIAL" },
    { icon: "/prop-icon-2.png", label: "INDEPENDENT HOUSE / VILLA'S", type: "RESIDENTIAL" },
    { icon: "/prop-icon-3.png", label: "BUILDER FLOOR", type: "RESIDENTIAL" },
    { icon: "/prop-icon-4.png", label: "PLOT / LAND", type: "RESIDENTIAL" },
    { icon: "/prop-icon-5.png", label: "FARMHOUSE", type: "RESIDENTIAL" },
    { icon: "/prop-icon-6.png", label: "OTHERS", type: "RESIDENTIAL" },
  ];
  
  const commercialCards = [
    { icon: "/prop-icon-1.png", label: "OFFICE", type: "COMMERCIAL" },
    { icon: "/prop-icon-2.png", label: "RETAIL", type: "COMMERCIAL" },
    { icon: "/prop-icon-3.png", label: "PLOT", type: "COMMERCIAL" },
    { icon: "/prop-icon-4.png", label: "LAND", type: "COMMERCIAL" },
    { icon: "/prop-icon-5.png", label: "HOSPITALITY", type: "COMMERCIAL" },
    { icon: "/prop-icon-6.png", label: "HELP 24/7", type: "COMMERCIAL" },
  ];

  // Combine all cards
  const allCards = [...residentialCards, ...commercialCards];

  const originalItems = allCards.map((card, index) => ({
    id: index,
    content: (
      <div className="w-48 h-64 bg-[#2C3942] rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 mx-4 border border-[#B79868] hover:border-[#F7E7CE] group cursor-pointer">
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          {/* Icon */}
          <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
            <Image 
              src={card.icon}
              alt={card.label}
              width={60}
              height={60}
              className="w-15 h-15 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100"
            />
          </div>
          
          {/* Label */}
          <h3 className="text-[#F7E7CE] font-heading text-sm uppercase leading-tight group-hover:text-white transition-colors duration-300">
            {card.label}
          </h3>
          
          {/* Decorative element */}
          <div className="mt-3 w-12 h-0.5 bg-[#B79868] group-hover:bg-[#F7E7CE] transition-colors duration-300"></div>
        </div>
      </div>
    ),
  }));

  // Duplicate items for infinite scroll effect
  const items = [...originalItems, ...originalItems, ...originalItems];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        // Reset position when we reach the second set of items
        if (next >= originalItems.length * 2) {
          return originalItems.length;
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [originalItems.length]);

  // Reset to middle set when reaching the end
  useEffect(() => {
    if (currentSlide >= originalItems.length * 2) {
      setTimeout(() => {
        setCurrentSlide(originalItems.length);
      }, 0);
    }
    if (currentSlide <= 0) {
      setTimeout(() => {
        setCurrentSlide(originalItems.length);
      }, 0);
    }
  }, [currentSlide, originalItems.length]);

  const getTransformValue = () => {
    const baseTransform = -currentSlide * 224; // 224px = card width (192px) + margin (32px)
    return `translateX(${baseTransform}px)`;
  };

  return (
    <div>
      <div className="relative bg-[#374550] overflow-hidden -mx-4 ">
        {/* Section Header */}
        <div className="text-center py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F7E7CE] font-heading mb-4">
            PROPERTY CATEGORIES
          </h2>
          <div className="w-24 h-1 bg-[#B79868] mx-auto rounded-full mb-6"></div>
          <p className="text-[#F7E7CE] text-lg opacity-80">
            Discover Your Perfect Property Match
          </p>
        </div>

        <div className="max-w-[100vw] py-3 overflow-hidden pb-16">
          <div
            className="flex transition-transform duration-500 ease-in-out px-8 md:px-12 items-center"
            style={{ transform: getTransformValue() }}
          >
            {items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex-shrink-0 relative">
                {item.content}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center pb-8 space-x-2">
          {originalItems.slice(0, Math.min(8, originalItems.length)).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(originalItems.length + index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                (currentSlide - originalItems.length) === index
                  ? 'bg-[#F7E7CE] w-6'
                  : 'bg-[#B79868] hover:bg-[#F7E7CE]'
              }`}
            />
          ))}
        </div>

        {/* Category Legend */}
        <div className="flex justify-center pb-8 space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-[#B79868] rounded-full"></div>
            <span className="text-[#F7E7CE] text-sm font-medium">RESIDENTIAL</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-[#B79868] rounded-full"></div>
            <span className="text-[#F7E7CE] text-sm font-medium">COMMERCIAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCarousel;