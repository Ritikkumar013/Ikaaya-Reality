
// import React, { useState, useEffect } from 'react';
// import { MapPin, Bed, Bath, Car, Home, Calendar, Ruler, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
// import Link from 'next/link';

// interface Property {
//   id: number;
//   title: string;
//   developer: string;
//   location: string;
//   image: string;
//   status: 'Resale' | 'New' | 'Rent';
//   bedrooms: number;
//   bathrooms?: number;
//   builtUpArea: string;
//   carpetArea?: string;
//   plotArea?: string;
//   floors?: string;
//   parking?: string;
//   price: number;
//   pricePerSqft?: number;
//   readyToMove?: boolean;
//   age?: number;
//   constructionStatus?: string;
//   amenities?: string[];
//   featured?: boolean;
//   balconies?: number;
//   furnishing?: string;
//   facing?: string;
//   rentalIncome?: number;
//   propertyType: 'Residential' | 'Commercial';
//   subType?: 'Flat/Apartment' | 'Independent House/Villa' | 'Builder Floor' | 'Plot/Land' | 'Farmhouse' | 'Office' | 'Retail' | 'Hospitality' | 'Other';
// }

// interface PropertyCardProps {
//   property: Property;
// }

// const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
//   const formatPrice = (price: number): string => {
//     if (price >= 10000000) {
//       return `₹${(price / 10000000).toFixed(1)} Crores`;
//     } else if (price >= 100000) {
//       return `₹${(price / 100000).toFixed(1)} Lakhs`;
//     }
//     return `₹${price.toLocaleString()}`;
//   };

//   const getPropertyTypeColor = (type: string): string => {
//     switch (type.toLowerCase()) {
//       case 'resale':
//         return 'bg-blue-100 text-blue-800';
//       case 'new':
//         return 'bg-green-100 text-green-800';
//       case 'rent':
//         return 'bg-purple-100 text-purple-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
//       {/* Image Section */}
//       <div className="relative overflow-hidden">
//         <img
//           src={property.image}
//           alt={property.title}
//           className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//         <div className="absolute top-4 left-4">
//           <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPropertyTypeColor(property.status)}`}>
//             {property.status}
//           </span>
//         </div>
//         {property.featured && (
//           <div className="absolute top-4 right-4">
//             <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//               Featured
//             </span>
//           </div>
//         )}
//       </div>

//       {/* Content Section */}
//       <div className="p-6">
//         {/* Title and Developer */}
//         <div className="mb-4">
//           <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//             {property.title}
//           </h3>
//           <p className="text-gray-600 font-medium">By {property.developer}</p>
//           <div className="flex items-center text-gray-500 mt-1">
//             <MapPin className="w-4 h-4 mr-1" />
//             <span className="text-sm">{property.location}</span>
//           </div>
//         </div>

//         {/* Property Details Grid */}
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div className="space-y-2">
//             <div className="text-sm text-gray-500">Configurations</div>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center">
//                 <Bed className="w-4 h-4 mr-1 text-gray-400" />
//                 <span className="text-sm font-medium">{property.bedrooms} BHK</span>
//               </div>
//               {property.bathrooms && (
//                 <div className="flex items-center">
//                   <Bath className="w-4 h-4 mr-1 text-gray-400" />
//                   <span className="text-sm font-medium">{property.bathrooms}</span>
//                 </div>
//               )}
//             </div>
//           </div>
          
//           <div className="space-y-2">
//             <div className="text-sm text-gray-500">Built Up Area</div>
//             <div className="flex items-center">
//               <Ruler className="w-4 h-4 mr-1 text-gray-400" />
//               <span className="text-sm font-medium">{property.builtUpArea}</span>
//             </div>
//           </div>
//         </div>

//         {/* Additional Details */}
//         <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
//           {property.carpetArea && (
//             <div>
//               <span className="text-gray-500">Carpet Area:</span>
//               <span className="ml-1 font-medium">{property.carpetArea}</span>
//             </div>
//           )}
//           {property.plotArea && (
//             <div>
//               <span className="text-gray-500">Plot Area:</span>
//               <span className="ml-1 font-medium">{property.plotArea}</span>
//             </div>
//           )}
//           {property.floors && (
//             <div>
//               <span className="text-gray-500">Floors:</span>
//               <span className="ml-1 font-medium">{property.floors}</span>
//             </div>
//           )}
//           {property.parking && (
//             <div className="flex items-center">
//               <Car className="w-4 h-4 mr-1 text-gray-400" />
//               <span className="font-medium">{property.parking}</span>
//             </div>
//           )}
//         </div>

//         {/* Amenities */}
//         {property.amenities && property.amenities.length > 0 && (
//           <div className="mb-4">
//             <div className="text-sm text-gray-500 mb-2">Amenities</div>
//             <div className="flex flex-wrap gap-2">
//               {property.amenities.slice(0, 3).map((amenity, index) => (
//                 <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
//                   {amenity}
//                 </span>
//               ))}
//               {property.amenities.length > 3 && (
//                 <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
//                   +{property.amenities.length - 3} more
//                 </span>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Price Section */}
//         <div className="border-t pt-4">
//           <div className="flex items-center justify-between mb-4">
//             <div>
//               <div className="text-2xl font-bold text-gray-900">
//                 {formatPrice(property.price)}
//               </div>
//               {property.pricePerSqft && (
//                 <div className="text-sm text-gray-500">
//                   ₹{property.pricePerSqft.toLocaleString()}/sqft
//                 </div>
//               )}
//             </div>
//             {property.readyToMove && (
//               <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
//                 <Home className="w-4 h-4 mr-1" />
//                 Ready to Move
//               </div>
//             )}
//           </div>

//           {/* Age and Status */}
//           {(property.age || property.constructionStatus) && (
//             <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//               {property.age && (
//                 <div className="flex items-center">
//                   <Calendar className="w-4 h-4 mr-1" />
//                   <span>{property.age} years old</span>
//                 </div>
//               )}
//               {property.constructionStatus && (
//                 <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
//                   {property.constructionStatus}
//                 </span>
//               )}
//             </div>
//           )}

//           {/* Get In Touch Button */}
//           <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center group">
//             Get In Touch
//             <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// interface PropertyCardsGridProps {
//   cardsPerPage?: number;
//   autoPlay?: boolean;
//   autoPlayInterval?: number;
// }

// const PropertyCardsGrid: React.FC<PropertyCardsGridProps> = ({ 
//   cardsPerPage = 3, 
//   autoPlay = false, 
//   autoPlayInterval = 5000 
// }) => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [touchStart, setTouchStart] = useState<number | null>(null);
//   const [touchEnd, setTouchEnd] = useState<number | null>(null);
//   const sampleProperties: Property[] = [
//     {
//       id: 1,
//       title: "Prestige White Meadows - Villas",
//       developer: "Prestige",
//       location: "Whitefield",
//       image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop",
//       status: "Resale" as const,
//       propertyType: "Residential" as const,
//       subType: "Independent House/Villa" as const,
//       bedrooms: 5,
//       bathrooms: 6,
//       builtUpArea: "5576-6219 sqft",
//       carpetArea: "4800-5200 sqft",
//       plotArea: "8000-9000 sqft",
//       floors: "G+2",
//       parking: "3 Cars",
//       price: 100000000,
//       pricePerSqft: 18000,
//       readyToMove: true,
//       age: 3,
//       amenities: ["Swimming Pool", "Gym", "Club House", "Security", "Garden", "Power Backup"],
//       featured: true,
//       balconies: 4,
//       furnishing: "Semi Furnished",
//       facing: "East"
//     },
//     {
//       id: 2,
//       title: "Chaithanya Smaran",
//       developer: "Chaithanya",
//       location: "Seegehalli",
//       image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
//       status: "Resale" as const,
//       propertyType: "Residential" as const,
//       subType: "Flat/Apartment" as const,
//       bedrooms: 4,
//       bathrooms: 4,
//       builtUpArea: "4200-4700 sqft",
//       carpetArea: "3800-4200 sqft",
//       floors: "G+2",
//       parking: "2 Cars",
//       price: 100000000,
//       pricePerSqft: 22000,
//       readyToMove: false,
//       constructionStatus: "Under Construction",
//       amenities: ["Club House", "Swimming Pool", "Gym", "Landscaped Garden"],
//       featured: false,
//       balconies: 3,
//       furnishing: "Unfurnished",
//       facing: "North"
//     },
//     {
//       id: 3,
//       title: "Adarsh Serenity",
//       developer: "Adarsh Developers",
//       location: "Kannamangala",
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
//       status: "Resale" as const,
//       propertyType: "Residential" as const,
//       subType: "Independent House/Villa" as const,
//       bedrooms: 3,
//       bathrooms: 3,
//       builtUpArea: "3150-3625 sqft",
//       carpetArea: "2800-3200 sqft",
//       floors: "G+1",
//       parking: "2 Cars",
//       price: 65000000,
//       pricePerSqft: 19500,
//       readyToMove: true,
//       age: 2,
//       amenities: ["Security", "Power Backup", "Water Supply", "Garden"],
//       featured: false,
//       balconies: 2,
//       furnishing: "Fully Furnished",
//       facing: "South",
//       rentalIncome: 45000
//     }
//   ];

//   const totalPages = Math.ceil(sampleProperties.length / cardsPerPage);
//   const minSwipeDistance = 50;

//   // Auto-play functionality
//   useEffect(() => {
//     if (!autoPlay) return;
    
//     const interval = setInterval(() => {
//       setCurrentPage(prev => {
//         if (prev < totalPages - 1) {
//           return prev + 1;
//         } else {
//           return 0; // Loop back to first page
//         }
//       });
//     }, autoPlayInterval);
    
//     return () => clearInterval(interval);
//   }, [autoPlay, autoPlayInterval, totalPages]);

//   // Navigation functions
//   const goToNextPage = () => {
//     if (isTransitioning) return;
//     if (currentPage < totalPages - 1) {
//       setIsTransitioning(true);
//       setCurrentPage(prev => prev + 1);
//       setTimeout(() => setIsTransitioning(false), 300);
//     }
//   };

//   const goToPrevPage = () => {
//     if (isTransitioning) return;
//     if (currentPage > 0) {
//       setIsTransitioning(true);
//       setCurrentPage(prev => prev - 1);
//       setTimeout(() => setIsTransitioning(false), 300);
//     }
//   };

//   const goToPage = (page: number) => {
//     if (isTransitioning || page === currentPage) return;
//     setIsTransitioning(true);
//     setCurrentPage(page);
//     setTimeout(() => setIsTransitioning(false), 300);
//   };

//   // Touch handlers for swipe gestures
//   const onTouchStart = (e: React.TouchEvent) => {
//     setTouchEnd(null);
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const onTouchMove = (e: React.TouchEvent) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const onTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
    
//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > minSwipeDistance;
//     const isRightSwipe = distance < -minSwipeDistance;

//     if (isLeftSwipe) {
//       goToNextPage();
//     } else if (isRightSwipe) {
//       goToPrevPage();
//     }
//   };

//   // Get current page properties
//   const getCurrentPageProperties = () => {
//     const startIndex = currentPage * cardsPerPage;
//     const endIndex = startIndex + cardsPerPage;
//     return sampleProperties.slice(startIndex, endIndex);
//   };

//   return (
//     <div className="min-h-screen py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">Featured Properties to Buy</h1>
//             <p className="text-gray-600">Discover your dream property from our curated selection</p>
//             <div className="mt-2 text-sm text-gray-500">
//               Page {currentPage + 1} of {totalPages} • {sampleProperties.length} properties
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <button 
//               onClick={() => setCurrentPage(0)}
//               className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors"
//             >
//               View All
//               <ArrowRight className="w-4 h-4 ml-1" />
//             </button>
//             <div className="flex space-x-2">
//               <button 
//                 onClick={goToPrevPage}
               
//                 className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
//                 title="Previous page"
//               >
//                 <ChevronLeft className="w-5 h-5 text-gray-600" />
//               </button>
//               <button 
//                 onClick={goToNextPage}
//                 // disabled={isTransitioning || currentPage === totalPages - 1}
//                 className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
//                 title="Next page"
//               >
//                 <ChevronRight className="w-5 h-5 text-gray-600" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Properties Grid Container with Swipe */}
//         <div 
//           className="relative overflow-hidden"
//           onTouchStart={onTouchStart}
//           onTouchMove={onTouchMove}
//           onTouchEnd={onTouchEnd}
//         >
//           <div 
//             className={`grid transition-all duration-300 ease-in-out ${
//               cardsPerPage === 1 ? 'grid-cols-1' : 
//               cardsPerPage === 2 ? 'grid-cols-1 md:grid-cols-2' : 
//               'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
//             } gap-8`}
//             style={{
//               opacity: isTransitioning ? 0.7 : 1,
//               transform: isTransitioning ? 'scale(0.98)' : 'scale(1)'
//             }}
//           >
//             {getCurrentPageProperties().map((property) => (
//               <PropertyCard key={`${property.id}-${currentPage}`} property={property} />
//             ))}
//           </div>
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex justify-center items-center mt-8 space-x-2">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               onClick={() => goToPage(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-200 ${
//                 index === currentPage
//                   ? 'bg-blue-600 scale-125'
//                   : 'bg-gray-300 hover:bg-gray-400'
//               }`}
//               aria-label={`Go to page ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Page Navigation Info */}
//         <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-gray-500">
//           <span>
//             Showing {currentPage * cardsPerPage + 1}-{Math.min((currentPage + 1) * cardsPerPage, sampleProperties.length)} of {sampleProperties.length}
//           </span>
          
//           {/* Navigation Status */}
//           <div className="flex items-center space-x-4">
//             <span className={`${currentPage === 0 ? 'text-gray-400' : 'text-gray-600'}`}>
//               {currentPage === 0 ? 'First page' : `Can go back`}
//             </span>
//             <span className="text-gray-300">|</span>
//             <span className={`${currentPage === totalPages - 1 ? 'text-gray-400' : 'text-gray-600'}`}>
//               {currentPage === totalPages - 1 ? 'Last page' : `Can go forward`}
//             </span>
//           </div>
          
//           <div className="flex items-center space-x-2">
//             <span>Cards per page:</span>
//             <select 
//               value={cardsPerPage}
//               onChange={(e) => {
//                 const newCardsPerPage = parseInt(e.target.value);
//                 setCurrentPage(0); // Reset to first page
//                 // Note: In a real implementation, you'd pass this up to parent component
//               }}
//               className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value={1}>1</option>
//               <option value={2}>2</option>
//               <option value={3}>3</option>
//               <option value={6}>6</option>
//             </select>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="mt-12 text-center">
//           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//            <Link href='/aPlan'> <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center">
//               <Home className="w-5 h-5 mr-2" />
//               Browse All Properties
//             </button></Link>
//             <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
//               Sell / Rent Property
//             </button>
//           </div>
          
//           {/* Keyboard Navigation Hint */}
//           <div className="mt-4 text-xs text-gray-400">
//             💡 Tip: Use left/right arrow keys or swipe on mobile to navigate
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Usage Example Component with different configurations
// const PropertyShowcase: React.FC = () => {
//   return (
//     <div className="space-y-16">
//       {/* Default 3 cards per page */}
//       <PropertyCardsGrid />
      
//       {/* Auto-playing carousel with 2 cards per page */}
//       {/* <PropertyCardsGrid cardsPerPage={3} autoPlay={true} autoPlayInterval={4000} /> */}
      
//       {/* Single card focus mode */}
//       {/* <PropertyCardsGrid cardsPerPage={3} /> */}
//     </div>
//   );
// };

// export default PropertyShowcase;

'use client';

import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
interface PropertyData {
  id: number;
  title: string;
  developer: string;
  location: string;
  image: string;
  propertyType: 'Residential' | 'Commercial';
  subType: string;
  bedrooms: number;
  bathrooms: number;
  balconies?: number;
  carpetArea: string;
  builtUpArea: string;
  plotArea?: string;
  floors: string;
  facing: string;
  readyToMove: boolean;
  age?: number;
  price: number;
  pricePerSqft: number;
  parking: string;
  furnishing: string;
  amenities: string[];
  status: 'Resale' | 'New' | 'Rent';
  constructionStatus?: string;
}

interface ApartmentCardProps {
  property: PropertyData;
  number: number;
  isReversed?: boolean;
}

const ApartmentCard = ({ property, number, isReversed = false }: ApartmentCardProps) => {
  const formatPrice = (price: number): string => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Crores`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} Lakhs`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'resale':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'rent':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} rounded-lg md:py-16 md:border-0 border md:border-b md:rounded-none`}>
      <div className={`w-full md:w-1/2 relative ${!isReversed ? 'md:border-r md:pr-12' : 'md:border-l md:pl-12'} md:border-gray-200`}>
        <div className="relative bg-gray-200 aspect-video md:aspect-[4/3] w-full rounded-lg overflow-hidden group">
          <Image
            src={property.image} 
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(property.status)}`}>
              {property.status}
            </span>
          </div>
          {/* Ready to Move Badge */}
          {property.readyToMove && (
            <div className="absolute bottom-4 right-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                Ready to Move
              </span>
            </div>
          )}
        </div>
        <div className="absolute top-4 left-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl z-10 md:hidden">
          {number.toString().padStart(2, '0')}
        </div>
      </div>
      
      <div className="w-full md:w-1/2 relative">
        <div className="relative p-x-4 md:pl-16">
          {/* Number indicator - hidden on mobile, visible on desktop */}
          <div className="hidden md:flex absolute left-[20px] top-0 w-12 h-12 bg-black text-white rounded-full items-center justify-center text-xl">
            {number.toString().padStart(2, '0')}
          </div>
          
          <div className='p-4'>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">{property.propertyType} • {property.subType}</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {property.facing} Facing
              </span>
            </div>
            
            <h2 className="text-2xl font-medium mt-2">{property.title}</h2>
            
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <span>📍 {property.location}</span>
              <span className="mx-2">•</span>
              <span>By {property.developer}</span>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Carpet Area:</span>
                <div className="font-medium">{property.carpetArea}</div>
              </div>
              <div>
                <span className="text-gray-500">Built-up Area:</span>
                <div className="font-medium">{property.builtUpArea}</div>
              </div>
              <div>
                <span className="text-gray-500">Floor:</span>
                <div className="font-medium">{property.floors}</div>
              </div>
              <div>
                <span className="text-gray-500">Furnishing:</span>
                <div className="font-medium">{property.furnishing}</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-2xl font-medium">{formatPrice(property.price)}</p>
                <p className="text-sm text-gray-500">₹{property.pricePerSqft.toLocaleString()}/sqft</p>
              </div>
              {property.age && (
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  {property.age} years old
                </span>
              )}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 md:flex gap-y-3">
                <Feature icon="🛏️" text={`${property.bedrooms} Beds`} />
                <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-6 self-center"></div>
                <Feature icon="🚿" text={`${property.bathrooms} Baths`} />
                <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-6 self-center"></div>
                <Feature icon="🏠" text={property.balconies ? `${property.balconies} Balconies` : 'No Balcony'} />
                <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-6 self-center"></div>
                <Feature icon="🚗" text={property.parking} />
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors rounded-sm flex-1 sm:flex-none">
                  Inquire Now!
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 text-sm hover:bg-gray-50 transition-colors rounded-sm flex-1 sm:flex-none">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureProps {
  icon: string;
  text: string;
}

const Feature = ({ icon, text }: FeatureProps) => (
  <div className="flex items-center gap-2 text-sm">
    <span className="text-lg">{icon}</span>
    <span>{text}</span>
  </div>
);

export default function FeaturedPropertiesHome() {
  const propertyData: PropertyData[] = [
    {
      id: 1,
      title: "Prestige White Meadows Villa",
      developer: "Prestige Group",
      location: "Whitefield, Bangalore",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      propertyType: "Residential",
      subType: "Independent House/Villa",
      bedrooms: 4,
      bathrooms: 4,
      balconies: 3,
      carpetArea: "2800 sqft",
      builtUpArea: "3200 sqft",
      plotArea: "4000 sqft",
      floors: "G+2",
      facing: "East",
      readyToMove: true,
      age: 2,
      price: 85000000,
      pricePerSqft: 26563,
      parking: "3 Cars",
      furnishing: "Semi Furnished",
      amenities: ["Swimming Pool", "Gym", "Club House", "Security", "Garden", "Power Backup", "Water Supply"],
      status: "Resale"
    },
    {
      id: 2,
      title: "Brigade Cornerstone Utopia",
      developer: "Brigade Group",
      location: "Varthur, Bangalore", 
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      propertyType: "Residential",
      subType: "Flat/Apartment",
      bedrooms: 3,
      bathrooms: 3,
      balconies: 2,
      carpetArea: "1850 sqft",
      builtUpArea: "2100 sqft",
      floors: "15th Floor of 25",
      facing: "North",
      readyToMove: false,
      price: 75000000,
      pricePerSqft: 35714,
      parking: "2 Cars",
      furnishing: "Unfurnished",
      amenities: ["Swimming Pool", "Gym", "Club House", "Children's Play Area", "Landscaped Gardens", "Security"],
      status: "New",
      constructionStatus: "Under Construction - 85% Complete"
    },
    // {
    //   id: 3,
    //   title: "Sobha Dream Acres Villa",
    //   developer: "Sobha Limited",
    //   location: "Panathur, Bangalore",
    //   image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    //   propertyType: "Residential", 
    //   subType: "Independent House/Villa",
    //   bedrooms: 5,
    //   bathrooms: 5,
    //   balconies: 4,
    //   carpetArea: "3500 sqft",
    //   builtUpArea: "4000 sqft",
    //   plotArea: "5200 sqft",
    //   floors: "G+2",
    //   facing: "South",
    //   readyToMove: true,
    //   age: 1,
    //   price: 120000000,
    //   pricePerSqft: 30000,
    //   parking: "4 Cars",
    //   furnishing: "Fully Furnished",
    //   amenities: ["Private Swimming Pool", "Home Theater", "Gym", "Servant Quarters", "Generator", "Security", "Landscaped Garden", "Intercom"],
    //   status: "Resale"
    // },
    // {
    //   id: 4,
    //   title: "Godrej Reflections Apartment",
    //   developer: "Godrej Properties",
    //   location: "Harlur, Bangalore",
    //   image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    //   propertyType: "Residential",
    //   subType: "Flat/Apartment", 
    //   bedrooms: 2,
    //   bathrooms: 2,
    //   balconies: 2,
    //   carpetArea: "1200 sqft",
    //   builtUpArea: "1400 sqft",
    //   floors: "8th Floor of 12",
    //   facing: "West",
    //   readyToMove: true,
    //   age: 3,
    //   price: 45000000,
    //   pricePerSqft: 32143,
    //   parking: "1 Car + 1 Bike",
    //   furnishing: "Semi Furnished",
    //   amenities: ["Swimming Pool", "Gym", "Club House", "Children's Play Area", "24x7 Security", "Power Backup"],
    //   status: "Resale"
    // }
  ];

  return (
    <div className="pb-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our selection of premium properties designed for modern living. Each unit offers exceptional quality, prime locations, and luxury amenities.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mt-6">
            <span>📍 Bangalore</span>
            <span>🏠 {propertyData.length} Properties</span>
            <span>💰 ₹45L - ₹12Cr</span>
          </div>
        </div>

        {/* Properties List - Exact layout match */}
        <div className="space-y-8">
          {propertyData.map((property, index) => (
            <ApartmentCard 
              key={property.id} 
              property={property}
              number={index + 1} 
              isReversed={index % 2 === 1} 
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
         <Link href='/aPlan'> <button className="bg-black text-white px-8 py-3 rounded-sm hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
            View All Properties
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button></Link>
        </div>
      </div>
    </div>
  );
}