// import React from "react";
// import Image from "next/image";

// const IconCards: React.FC = () => {
//   const cards = [
//     { icon: "/prop-icon-1.png", label: "RESIDENCE" },
//     { icon: "/prop-icon-2.png", label: "ECO LIVING" },
//     { icon: "/prop-icon-3.png", label: "QUALITY" },
//     { icon: "/prop-icon-4.png", label: "INFO DESK" },
//     { icon: "/prop-icon-5.png", label: "RECEPTION" },
//     { icon: "/prop-icon-6.png", label: "HELP 24/7" },
//   ];

//   return (
//     <div className="flex justify-center md:grid-cols-3 gap-7 ">
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className="basis-1/2 flex lg:flex-col items-center justify-center text-white py-7 hover:bg-gray-800 transition border border-[#B79868]"
//         >
//           {/* Image for the icon */}
//           <Image 
//           src={card.icon}
//           alt={card.label}
//           width={50}
//           height={45}
//           className="w-10 h-10 object-contain"
//           />
//           <h3 className="mt-4 text-lg uppercase text-[#F7E7CE] font-heading">{card.label}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default IconCards;


import React from "react";
import Image from "next/image";

const   IconCards: React.FC = () => {
  const cards = [
    { icon: "/prop-icon-1.png", label: "FLAT / APPARTMENTS" },
    { icon: "/prop-icon-2.png", label: "INDEPENDENT HOUSE / VILLA'S" },
    { icon: "/prop-icon-3.png", label: "BUILDER FLOOR" },
    { icon: "/prop-icon-4.png", label: "PLOT / LAND" },
    { icon: "/prop-icon-5.png", label: "FARMHOUSE" },
    { icon: "/prop-icon-6.png", label: "OTHERS" },
  ];
  const cards2 = [
    { icon: "/prop-icon-1.png", label: "OFFICE" },
    { icon: "/prop-icon-2.png", label: "RETAIL" },
    { icon: "/prop-icon-3.png", label: "PLOT" },
    { icon: "/prop-icon-4.png", label: "LAND" },
    { icon: "/prop-icon-5.png", label: "HOSPITALITY" },
    { icon: "/prop-icon-6.png", label: "HELP 24/7" },
  ];

  return (
    <div>
      <h1 className="text-[#F7E7CE] text-3xl italic mb-4">RESIDENTIAL :</h1>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-white py-7 hover:bg-gray-800 transition border border-[#B79868] rounded-lg p-4"
        >
          {/* Icon Image */}
          <Image 
            src={card.icon}
            alt={card.label}
            width={50}
            height={45}
            className="w-12 h-12 object-contain"
          />
          {/* Label */}
          <h3 className="mt-3 text-lg uppercase text-[#F7E7CE] font-heading text-center">
            {card.label}
          </h3>
        </div>
      ))}
    </div>



   <h1 className="text-[#F7E7CE] text-3xl italic mb-4 mt-10 ">COMMERCIAL :</h1>
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 ">

      {cards2.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-white py-7 hover:bg-gray-800 transition border border-[#B79868] rounded-lg p-4"
        >
          {/* Icon Image */}
          <Image 
            src={card.icon}
            alt={card.label}
            width={50}
            height={45}
            className="w-12 h-12 object-contain"
          />
          {/* Label */}
          <h3 className="mt-3 text-lg uppercase text-[#F7E7CE] font-heading text-center">
            {card.label}
          </h3>
        </div>
      ))}
    </div>
</div>
  );
};

export default IconCards;
