// import { Star } from 'lucide-react';

// const testimonials = [
//   {
//     id: 1,
//     name: "Priya Sharma",
//     location: "Mumbai, Maharashtra",
//     rating: 5,
//     text: "Ikaaya Reality helped me find my dream home in just 2 weeks! Their team was incredibly professional and understood exactly what I was looking for.",
//     property: "3BHK Apartment"
//   },
//   {
//     id: 2,
//     name: "Rajesh Kumar",
//     location: "Delhi NCR",
//     rating: 5,
//     text: "Excellent service and transparent dealings. They guided me through the entire buying process and made it stress-free.",
//     property: "Independent Villa"
//   },
//   {
//     id: 3,
//     name: "Anita Patel",
//     location: "Bangalore, Karnataka",
//     rating: 5,
//     text: "Outstanding property consultation! Ikaaya Reality's market knowledge and negotiation skills saved me lakhs on my investment property.",
//     property: "Commercial Space"
//   },
//   {
//     id: 4,
//     name: "Vikram Singh",
//     location: "Pune, Maharashtra",
//     rating: 5,
//     text: "From property search to final registration, everything was handled professionally. Highly recommend Ikaaya Reality for property investments.",
//     property: "2BHK Flat"
//   },
//   {
//     id: 5,
//     name: "Meera Reddy",
//     location: "Hyderabad, Telangana",
//     rating: 5,
//     text: "Amazing experience! They showed me multiple options within my budget and helped me make the right choice. Very satisfied with their service.",
//     property: "Row House"
//   },
//   {
//     id: 6,
//     name: "Amit Joshi",
//     location: "Ahmedabad, Gujarat",
//     rating: 5,
//     text: "Professional, reliable, and trustworthy. Ikaaya Reality made my property buying journey smooth and hassle-free.",
//     property: "Penthouse"
//   }
// ];

// // Triple testimonials for seamless loop
// const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

// export default function TestimonialMarquee() {
//   return (
//     <div className="bg-gray-50 py-16 overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             What Our Happy Clients Say
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
//           <p className="text-gray-600 mt-4 text-lg">
//             Trusted by thousands for their real estate journey
//           </p>
//         </div>

//         {/* Marquee Container */}
//         <div className="relative">
//           {/* Gradient Overlays */}
//           <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
//           <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
//           {/* Marquee Animation */}
//           <div className="flex animate-marquee hover:pause-marquee space-x-4">
//             {allTestimonials.map((testimonial, index) => (
//               <div 
//                 key={`${testimonial.id}-${index}`} 
//                 className="flex-shrink-0 w-80"
//               >
//                 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
//                   {/* Stars */}
//                   <div className="flex justify-center mb-4">
//                     <div className="flex space-x-1">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Quote */}
//                   <blockquote className="text-gray-700 text-sm leading-relaxed mb-6 text-center h-20 overflow-hidden">
//                     "{testimonial.text}"
//                   </blockquote>
                  
//                   {/* Client Info */}
//                   <div className="text-center border-t border-gray-100 pt-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
//                       {testimonial.name.charAt(0)}
//                     </div>
//                     <h4 className="text-lg font-semibold text-gray-800 mb-1">
//                       {testimonial.name}
//                     </h4>
//                     <p className="text-gray-500 text-sm mb-3">
//                       {testimonial.location}
//                     </p>
//                     <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
//                       {testimonial.property}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Company Badge */}
//         <div className="text-center mt-12">
//           <div className="inline-flex items-center bg-white rounded-full px-8 py-4 shadow-md border border-gray-200">
//             <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
//               I
//             </div>
//             <div className="text-left">
//               <div className="text-gray-800 font-bold text-xl">Ikaaya Reality</div>
//               <div className="text-gray-600 text-sm">Your Trusted Real Estate Partner</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl"></div>
//       </div>

//       {/* Custom CSS for Marquee Animation */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(100%);
//           }
//           100% {
//             transform: translateX(-100%);
//           }
//         }
        
//         .animate-marquee {
//           animation: marquee 40s linear infinite;
//         }
        
//         .pause-marquee {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// }
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Ikaaya Reality helped me find my dream home in just 2 weeks! Their team was incredibly professional and understood exactly what I was looking for.",
    property: "3BHK Apartment"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi NCR",
    rating: 5,
    text: "Excellent service and transparent dealings. They guided me through the entire buying process and made it stress-free.",
    property: "Independent Villa"
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Bangalore, Karnataka",
    rating: 5,
    text: "Outstanding property consultation! Ikaaya Reality's market knowledge and negotiation skills saved me lakhs on my investment property.",
    property: "Commercial Space"
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "From property search to final registration, everything was handled professionally. Highly recommend Ikaaya Reality for property investments.",
    property: "2BHK Flat"
  },
  {
    id: 5,
    name: "Meera Reddy",
    location: "Hyderabad, Telangana",
    rating: 5,
    text: "Amazing experience! They showed me multiple options within my budget and helped me make the right choice. Very satisfied with their service.",
    property: "Row House"
  },
  {
    id: 6,
    name: "Amit Joshi",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "Professional, reliable, and trustworthy. Ikaaya Reality made my property buying journey smooth and hassle-free.",
    property: "Penthouse"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const goToTestimonial = (index : any) => {
    if (index <= testimonials.length - 3) {
      setCurrentIndex(index);
    }
  };

  // Get visible testimonials (3 at a time)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="bg-gray-50 py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Happy Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg">
            Trusted by thousands for their real estate journey
          </p>
        </div>

        {/* Main Testimonial Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>

          {/* Testimonial Cards Container */}
          <div className="overflow-hidden py-5 px-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100/3)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-1/3 flex-shrink-0"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group h-full">
                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-gray-700 text-sm leading-relaxed mb-6 text-center min-h-20">
                      "{testimonial.text}"
                    </blockquote>
                    
                    {/* Client Info */}
                    <div className="text-center border-t border-gray-100 pt-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                        {testimonial.name.charAt(0)}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm mb-3">
                        {testimonial.location}
                      </p>
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {testimonial.property}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: testimonials.length - 2 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Current Position Indicator */}
        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">
            Showing {currentIndex + 1}-{Math.min(currentIndex + 3, testimonials.length)} of {testimonials.length} testimonials
          </p>
        </div>

        {/* Company Badge */}
        {/* <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-8 py-4 shadow-md border border-gray-200">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              I
            </div>
            <div className="text-left">
              <div className="text-gray-800 font-bold text-xl">Ikaaya Reality</div>
              <div className="text-gray-600 text-sm">Your Trusted Real Estate Partner</div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}