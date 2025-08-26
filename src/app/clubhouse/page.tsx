// import React from "react";
// import Image from "next/image";

// const page = () => {
//   return (
//     <div>
//       <div
//         className="w-full h-[55vh] px-5 md:px-14 md:h-[70vh] flex items-center bg-cover bg-center lg:h-[72vh]"
//         style={{ backgroundImage: "url('/gallery.png')" }}
//       >
//         {" "}
//         <div className="container  max-w-screen-xl mx-auto text-white lg:mb-[-20px]">
//           <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-heading uppercase">
//             Clubhouse
//           </h1>
//         </div>
//       </div>
//       <div className="text-center my-10">
//         <h1 className="text-5xl my-5 font-light font-heading">Clubhouse</h1>
//         <p className="px-72 text-center font-sans font-extralight">
//           The fact that the Premium Clubhouse is an ideal location for
//           motorsports is demonstrated by the shape of the building, which is
//           based on part of the legendary Le Mans race track. Motorsport
//           enthusiasts will experience productions and exhibits from the great
//           diversity of motorsport. In addition to the history of racing,
//           highlights of technical development, influential personalities and
//           paths to a sustainable future of motorsport are presented. Selected
//           interactive exhibits provide insights into the world of racing. The
//           new exhibition concept invites guests to experience various facets of
//           racing up close and to try out being a racing driver.
//         </p>
//       </div>

//       <div className="flex justify-center gap-10 my-16">
//         <Image
//           className="w-96 rounded-xl"
//           src="/img1.jpeg"
//           width={500}
//           height={500}
//           alt=""
//         />

//         <Image
//           className="w-96 rounded-xl"
//           src="/img1.jpeg"
//           width={500}
//           height={500}
//           alt=""
//         />

//         <Image
//           className="w-96 rounded-xl"
//           src="/image3.jpg"
//           width={500}
//           height={500}
//           alt=""
//         />
//       </div>

//       <div className="container flex my-10">
//         <div className="mx-28 ml-36 my-10 basis-1/2">
//           <h2 className="text-3xl font-bold font-heading">
//             Other Apartment Clubhouse Activities: Places to Play
//           </h2>
//           {/* <p className="font-semibold text-lg my-3">
//     Other common amenities offered by an apartment complex’s clubhouse include locker rooms, conference rooms, and event spaces. Some clubhouses even have game rooms and babysitting centers. The conference rooms can typically serve as an office for any residents who work remotely and are looking for a quiet, yet communal place to get their work done.
//   </p> */}
//           <p className="text-lg my-3">
//             Nearby your apartment’s clubhouse usually is the apartment’s pool
//             and possibly tennis court and basketball courts, among other things.
//             While these are also great places to gain a sense of community,
//             apartment clubhouses can offer a more intimate feel with events
//             hosted in the space.
//           </p>

//           <h3 className="text-lg font-semibold my-3">Pros of a Clubhouse</h3>
//           <ul className="font-light list-disc">
//             <li>An easy way to gather with other community members</li>
//             <li>
//               Great way to enjoy playing different sports or throwing parties
//               for events
//             </li>
//             <li>A central hub to socialize</li>
//             <li>Included in your rent</li>
//           </ul>

//           <h3 className="text-lg font-semibold my-3">Cons of a Clubhouse</h3>
//           <ul className="font-light list-disc">
//             <li>
//               You may not want to participate in any of the clubhouse activities
//             </li>
//             <li>A portion of your rent is used to pay for upkeep</li>
//             <li>Not all apartments offer the same clubhouse features</li>
//           </ul>
//         </div>

//         <div className="basis-1/2 flex flex-col justify-center ">
//           <Image
//             className="w-[500px] rounded-xl mr-28"
//             src="/mic.jpg"
//             width={1000}
//             height={800}
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { ChevronLeft, ChevronRight } from 'lucide-react';

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Original items
  const originalItems = Array(7)
    .fill(null)
    .map((_, index) => ({
      id: index,
      content: (
        <div className="w-48 h-64 bg-[#2C3942] rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 mx-4" />
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
    const baseTransform = -currentSlide * 272; // 272px = card width (256px) + margin (16px)
    return `translateX(${baseTransform}px)`;
  };

  return (
    <div>
      <div
        className="w-full h-[55vh] px-5 md:px-14 md:h-[70vh] flex items-center bg-cover bg-center lg:h-[72vh]"
        style={{ backgroundImage: "url('/gallery.png')" }}
      >
        {" "}
        <div className="container  max-w-screen-xl mx-auto text-white lg:mb-[-20px]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-heading uppercase">
            Clubhouse
          </h1>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            {/* Image Container */}
            <div className="w-full md:w-1/2">
              <Image
                className="w-full  rounded-lg object-cover"
                src="/slide-2-img.jpg"
                alt="Clubhouse Interior"
                width={600}
                height={600}
                priority
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h6 className="text-sm md:text-base uppercase tracking-wider text-gray-600">
                Luxury Apartments
              </h6>
              <h1 className="text-3xl font-heading md:text-4xl lg:text-5xl font-bold py-4">
                INTRODUCING A NEW
                <br className="hidden md:block" />
                RESIDENTIAL COMPLEX
              </h1>
              <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed">
                Each apartments has been individually designed to maximise space
                and light. Smart Home Technology installed as standard in each
                apartment putting you in total control of your home at the touch
                of a button from wherever you might be.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#374550] text-slate-100 py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-20">
          {/* About Us */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-1/2 space-y-4">
              <h1 className="text-3xl md:text-4xl font-heading font-bold">
                About Us
              </h1>
              <p className="text-gray-300">
                We are a real estate firm with over 20 years of expertise, and
                our main goal is to provide amazing locations to our partners.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-slate-50 text-slate-950 py-2 px-6 rounded-md hover:bg-slate-300 transition-colors">
                Read more!
              </button>
            </div>
          </div>

          {/* About Us Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-20 my-12 md:my-16 lg:my-20">
            <Image
              className="w-full rounded-lg aspect-video object-cover"
              src="/slide-3-img.jpg"
              alt="About Us Image 1"
              width={500}
              height={500}
            />
            <Image
              className="w-full rounded-lg aspect-video object-cover"
              src="/slide-4-img.jpg"
              alt="About Us Image 2"
              width={500}
              height={500}
            />
          </div>

          {/* Text with logo */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12 md:py-16 lg:py-20">
            <p className="text-base md:text-lg md:basis-2/3 text-center md:text-left">
              All-inclusive real estate services to facilitate the easy and
              confident purchase, sale, and management of your properties.
            </p>
            <div className="md:basis-1/3 flex justify-center md:justify-end">
              <Image
                className="w-24 md:w-28"
                src="/logo-white-text.png"
                alt="Company Logo"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Carousel */}
          <div className="relative bg-[#374550] overflow-hidden -mx-4 md:-mx-8 lg:-mx-20">
            <div className="max-w-[100vw] overflow-hidden py-12">
              <div
                className="flex transition-transform duration-500 ease-in-out px-8 md:px-12 items-center"
                style={{ transform: getTransformValue() }}
              >
                {items.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex-shrink-0">
                    {item.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
