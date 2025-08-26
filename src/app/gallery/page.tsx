import React from "react";
import Masonry from "../../Components/Masonry";

const page = () => {
  return (
    <div>
      {/* Hero Banner Section */}
      <div 
        className="w-full h-[55vh] px-5 md:px-14 md:h-[70vh] flex items-center bg-cover bg-center lg:h-[72vh] relative overflow-hidden" 
        style={{ 
          backgroundImage: "url('/ikaaya/bannerG.png')" 
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="container max-w-screen-xl mx-auto text-white lg:mb-[-20px] relative z-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading uppercase mb-4 tracking-wide">
              Gallery
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Discover Our Architectural Excellence
            </p>
          </div>
        </div>
      </div> 

      {/* Introduction Section */}
      <div className="text-center py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-5">
          <h1 className="lg:text-5xl md:text-4xl text-4xl my-5 font-light font-heading text-gray-800">
            GALLERY
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Explore our collection of stunning architectural projects, from modern interiors to 
            impressive building facades. Each image tells a story of craftsmanship, innovation, 
            and attention to detail that defines our work.
          </p>
        </div>
      </div>

      {/* Masonry Gallery Component */}
      <Masonry />
    </div>
  );
};

export default page;