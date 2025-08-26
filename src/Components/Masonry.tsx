// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// const categories = {
//   Interiors: ["/img1.png", "/img2.png", "/img3.png", "/img4.png","/img5.jpg", "/img6.jpg", "/img7.jpg","/img8.jpg","/img9.png","/img10.jpg"],
//   Facade: ["/img5.jpg", "/img6.jpg", "/img7.jpg","/img5.jpg", "/img6.jpg", "/img7.jpg"],
//   Clubhouse: ["/img8.jpg", "/img9.png", "/img10.jpg","/img5.jpg", "/img6.jpg", "/img7.jpg"],
//   Landscape: ["/img11.png", "/img12.jpg","/img5.jpg", "/img6.jpg", "/img7.jpg"],
// };

// const Masonry: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false); // Modal open state
//   const [currentIndex, setCurrentIndex] = useState<number | null>(null); // Current image index
//   const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("Interiors"); // Active tab
//   const images = categories[activeCategory]; // Images for the active tab

//   const openLightbox = (index: number) => {
//     setCurrentIndex(index);
//     setIsOpen(true);
//   };

//   const closeLightbox = () => {
//     setIsOpen(false);
//     setCurrentIndex(null);
//   };

//   const goToPrevious = () => {
//     if (currentIndex !== null) {
//       setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//     }
//   };

//   const goToNext = () => {
//     if (currentIndex !== null) {
//       setCurrentIndex((currentIndex + 1) % images.length);
//     }
//   };

//   return (
//     <div className="lg:mx-28 space-y-6 mb-20">
//       {/* Tabs for Categories */}
//       <div className="flex lg:flex-row md:flex-row flex-col mx-4 lg:space-x-4 md:space-x-4 justify-center">
//         {Object.keys(categories).map((category) => (
//           <button
//             key={category}
//             onClick={() => setActiveCategory(category as keyof typeof categories)}
//             className={`px-5 mt-2 rounded-lg py-2 ${
//               activeCategory === category
//                 ? "bg-blue-800 text-white"
//                 : "bg-[#1c1b1b] text-white"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Masonry Layout */}
//       <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
//         <div className="my-5 lg:p-5 md:p-4 p-1">
//           <h1 className="text-3xl font-heading">{activeCategory}</h1>
//           <p className="text-sm my-2">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.
//             <br /> Lorem Ipsum has been the industry&apos;s standard dummy text{" "}
//           </p>
//         </div>
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className="break-inside-avoid cursor-pointer"
//             onClick={() => openLightbox(index)} // Open modal on click
//           >
//             <Image
//               src={src}
//               alt={`Gallery Image ${index + 1}`}
//               width={500}
//               height={500}
//               className="w-full h-auto rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Lightbox Modal */}
//       {isOpen && currentIndex !== null && (
//         <div className="fixed -inset-6 z-50 flex items-center justify-center bg-black bg-opacity-80">
//           {/* Close Button */}
//           <button
//             className="absolute top-4 right-14 text-white text-3xl"
//             onClick={closeLightbox}
//           >
//             &times;
//           </button>

//           {/* Image Display */}
//           <div className="relative max-h-full max-w-4xl mx-auto flex items-center">
//             {/* Previous Button */}
//             <button
//               className="absolute left-0 text-white text-3xl p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
//               onClick={goToPrevious}
//             >
//               &#8249;
//             </button>

//             <Image
//               src={images[currentIndex]}
//               alt={`Gallery Image ${currentIndex + 1}`}
//               width={800}
//               height={800}
//               className="rounded-md h-full"
//             />

//             {/* Next Button */}
//             <button
//               className="absolute right-0 text-white text-3xl p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
//               onClick={goToNext}
//             >
//               &#8250;
//             </button>
//           </div>
//         </div>
//       )}
//       <div className="flex justify-center">
//       <button className="bg-[#2d2d2d] text-white py-2 px-6 rounded-sm mb-5">Load More!</button>
//       </div>  
//     </div>
//   );
// };

// export default Masonry;


"use client";
import React, { useState } from "react";
import Image from "next/image";

const categories = {
  Interiors: [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=800&fit=crop",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=700&fit=crop",
    "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=500&h=750&fit=crop",
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500&h=650&fit=crop",
    "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=500&h=800&fit=crop",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500&h=700&fit=crop",
    "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=750&fit=crop",
    "https://images.unsplash.com/photo-1616137466211-f939fc48ddb0?w=500&h=650&fit=crop"
  ],
  Facade: [
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=700&fit=crop",
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=800&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=650&fit=crop",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=750&fit=crop",
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&h=700&fit=crop",
    "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&h=800&fit=crop",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=650&fit=crop"
  ],
  Clubhouse: [
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=500&h=700&fit=crop",
    "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=750&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=650&fit=crop",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500&h=700&fit=crop",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500&h=600&fit=crop"
  ],
  Landscape: [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=700&fit=crop",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=650&fit=crop",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&h=750&fit=crop",
    "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=500&h=700&fit=crop",
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&h=800&fit=crop"
  ]
};

const Masonry: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Modal open state
  const [currentIndex, setCurrentIndex] = useState<number | null>(null); // Current image index
  const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("Interiors"); // Active tab
  const images = categories[activeCategory]; // Images for the active tab

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentIndex(null);
  };

  const goToPrevious = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % images.length);
    }
  };

  // Category descriptions
  const categoryDescriptions = {
    Interiors: "Explore stunning interior designs featuring modern living spaces, elegant bedrooms, contemporary kitchens, and sophisticated architectural details that showcase the finest in residential design.",
    Facade: "Discover exceptional building facades that blend architectural innovation with aesthetic appeal, showcasing modern exteriors and timeless design elements.",
    Clubhouse: "Browse luxury clubhouse designs that combine functionality with elegance, featuring recreational spaces, community areas, and premium amenities.",
    Landscape: "View beautiful landscape architecture that harmoniously integrates buildings with their natural surroundings, creating serene outdoor environments."
  };

  return (
    <div className="lg:mx-28 space-y-6 mb-20">
      {/* Tabs for Categories */}
      <div className="flex lg:flex-row md:flex-row flex-col mx-4 lg:space-x-4 md:space-x-4 justify-center">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category as keyof typeof categories)}
            className={`px-6 mt-2 rounded-lg py-3 font-medium transition-all duration-200 ${
              activeCategory === category
                ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg transform scale-105"
                : "bg-[#1c1b1b] text-white hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Layout */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
        <div className="my-5 lg:p-5 md:p-4 p-1 break-inside-avoid">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">{activeCategory}</h1>
          <p className="text-gray-600 leading-relaxed">
            {categoryDescriptions[activeCategory]}
          </p>
        </div>
        {images.map((src, index) => (
          <div
            key={index}
            className="break-inside-avoid cursor-pointer group mb-4"
            onClick={() => openLightbox(index)} // Open modal on click
          >
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <Image
                src={src}
                alt={`${activeCategory} Image ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-auto transition-all duration-300 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && currentIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            onClick={closeLightbox}
          >
            &times;
          </button>

          {/* Image Display */}
          <div className="relative max-h-[90vh] max-w-[90vw] mx-auto flex items-center">
            {/* Previous Button */}
            <button
              className="absolute -left-16 text-white text-4xl p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
              onClick={goToPrevious}
            >
              &#8249;
            </button>

            <Image
              src={images[currentIndex]}
              alt={`${activeCategory} Image ${currentIndex + 1}`}
              width={800}
              height={800}
              className="rounded-lg max-h-[90vh] max-w-[90vw] object-contain"
            />

            {/* Next Button */}
            <button
              className="absolute -right-16 text-white text-4xl p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
              onClick={goToNext}
            >
              &#8250;
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
      
      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white py-3 px-8 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
          Load More Images
        </button>
      </div>  
    </div>
  );
};

export default Masonry;