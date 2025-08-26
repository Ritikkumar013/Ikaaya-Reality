// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Image from "next/image";

// const SwiperCarousel: React.FC = () => {
//   return (
//     <div className="w-full max-w-screen-xl px-20 mx-auto">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         spaceBetween={30}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 10000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         className=" overflow-hidden"
//       >
//         <SwiperSlide>
//           {/* <img
//             src="/images/interiors/interior1.jpg"
//             alt="Interior 1"
//             className="w-full h-[400px] object-cover"
//           /> */}
//           <Image
//             src="/slide-1-img.jpg"
//             width={1536}
//             height={750}
//             alt="Picture of the author"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           {/* <img
//             src="/images/interiors/interior2.jpg"
//             alt="Interior 2"
//             className="w-full h-[400px] object-cover"
//           /> */}
//           <Image
//             src="/slide-2-img.jpg"
//             width={1536}
//             height={750}
//             alt="Picture of the author"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           {/* <img
//             src="/images/interiors/interior3.jpg"
//             alt="Interior 3"
//             className="w-full h-[400px] object-cover"
//           /> */}
//           <Image
//             src="/slide-3-img.jpg"
//             width={1536}
//             height={750}
//             alt="Picture of the author"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           {/* <img
//             src="/images/interiors/interior3.jpg"
//             alt="Interior 3"
//             className="w-full h-[400px] object-cover"
//           /> */}
//           <Image
//             src="/slide-4-img.jpg"
//             width={1536}
//             height={750}
//             alt="Picture of the author"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default SwiperCarousel;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const SwiperCarousel: React.FC = () => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1} // Default to 1 slide per view
        breakpoints={{
          640: { slidesPerView: 1 }, // Small screens
          768: { slidesPerView: 1 }, // Medium screens
          1024: { slidesPerView: 2 }, // Large screens (2 slides visible)
        }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Faster transitions
        pagination={{ clickable: true }}
        navigation={true}
        className="overflow-hidden"
      >
        {["slide-1-img.jpg", "slide-2-img.jpg", "slide-3-img.jpg", "slide-4-img.jpg"].map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/${src}`}
              width={1536}
              height={750}
              alt={`Slide ${index + 1}`}
              className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
