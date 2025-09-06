// 'use client';

// import React from 'react';

// interface PropertyData {
//   id: number;
//   title: string;
//   developer: string;
//   location: string;
//   image: string;
//   propertyType: 'Residential' | 'Commercial';
//   subType: string;
//   bedrooms: number;
//   bathrooms: number;
//   balconies?: number;
//   carpetArea: string;
//   builtUpArea: string;
//   plotArea?: string;
//   floors: string;
//   facing: string;
//   readyToMove: boolean;
//   age?: number;
//   price: number;
//   pricePerSqft: number;
//   parking: string;
//   furnishing: string;
//   amenities: string[];
//   status: 'Resale' | 'New' | 'Rent';
//   constructionStatus?: string;
// }

// interface ApartmentCardProps {
//   property: PropertyData;
//   number: number;
//   isReversed?: boolean;
// }

// const ApartmentCard = ({ property, number, isReversed = false }: ApartmentCardProps) => {
//   const formatPrice = (price: number): string => {
//     if (price >= 10000000) {
//       return `₹${(price / 10000000).toFixed(1)} Crores`;
//     } else if (price >= 100000) {
//       return `₹${(price / 100000).toFixed(1)} Lakhs`;
//     }
//     return `₹${price.toLocaleString()}`;
//   };

//   const getStatusBadgeColor = (status: string) => {
//     switch (status.toLowerCase()) {
//       case 'new':
//         return 'bg-green-100 text-green-800 border-green-200';
//       case 'resale':
//         return 'bg-blue-100 text-blue-800 border-blue-200';
//       case 'rent':
//         return 'bg-purple-100 text-purple-800 border-purple-200';
//       default:
//         return 'bg-gray-100 text-gray-800 border-gray-200';
//     }
//   };

//   return (
//     <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} rounded-lg md:py-16 md:border-0 border md:border-b md:rounded-none`}>
//       <div className={`w-full md:w-1/2 relative ${!isReversed ? 'md:border-r md:pr-12' : 'md:border-l md:pl-12'} md:border-gray-200`}>
//         <div className="relative bg-gray-200 aspect-video md:aspect-[4/3] w-full rounded-lg overflow-hidden group">
//           <img 
//             src={property.image} 
//             alt={property.title}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//           {/* Status Badge */}
//           <div className="absolute top-4 right-4">
//             <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(property.status)}`}>
//               {property.status}
//             </span>
//           </div>
//           {/* Ready to Move Badge */}
//           {property.readyToMove && (
//             <div className="absolute bottom-4 right-4">
//               <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
//                 Ready to Move
//               </span>
//             </div>
//           )}
//         </div>
//         <div className="absolute top-4 left-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl z-10 md:hidden">
//           {number.toString().padStart(2, '0')}
//         </div>
//       </div>
      
//       <div className="w-full md:w-1/2 relative">
//         <div className="relative p-x-4 md:pl-16">
//           {/* Number indicator - hidden on mobile, visible on desktop */}
//           <div className="hidden md:flex absolute left-[20px] top-0 w-12 h-12 bg-black text-white rounded-full items-center justify-center text-xl">
//             {number.toString().padStart(2, '0')}
//           </div>
          
//           <div className='p-4'>
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm text-gray-500">{property.propertyType} • {property.subType}</span>
//               <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
//                 {property.facing} Facing
//               </span>
//             </div>
            
//             <h2 className="text-2xl font-medium mt-2">{property.title}</h2>
            
//             <div className="flex items-center text-sm text-gray-600 mt-1">
//               <span>📍 {property.location}</span>
//               <span className="mx-2">•</span>
//               <span>By {property.developer}</span>
//             </div>
            
//             <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
//               <div>
//                 <span className="text-gray-500">Carpet Area:</span>
//                 <div className="font-medium">{property.carpetArea}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Built-up Area:</span>
//                 <div className="font-medium">{property.builtUpArea}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Floor:</span>
//                 <div className="font-medium">{property.floors}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Furnishing:</span>
//                 <div className="font-medium">{property.furnishing}</div>
//               </div>
//             </div>
            
//             <div className="flex items-center justify-between mt-4">
//               <div>
//                 <p className="text-2xl font-medium">{formatPrice(property.price)}</p>
//                 <p className="text-sm text-gray-500">₹{property.pricePerSqft.toLocaleString()}/sqft</p>
//               </div>
//               {property.age && (
//                 <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
//                   {property.age} years old
//                 </span>
//               )}
//             </div>
            
//             <div className="mt-6 pt-4 border-t border-gray-200">
//               <div className="grid grid-cols-2 md:flex gap-y-3">
//                 <Feature icon="🛏️" text={`${property.bedrooms} Beds`} />
//                 <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-6 self-center"></div>
//                 <Feature icon="🚿" text={`${property.bathrooms} Baths`} />
//                 <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-6 self-center"></div>
//                 <Feature icon="🏠" text={property.balconies ? `${property.balconies} Balconies` : 'No Balcony'} />
//                 <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-6 self-center"></div>
//                 <Feature icon="🚗" text={property.parking} />
//               </div>
//             </div>

//             {/* Amenities */}
//             {/* <div className="mt-4">
//               <div className="text-sm text-gray-500 mb-2">Key Amenities:</div>
//               <div className="flex flex-wrap gap-2">
//                 {property.amenities.slice(0, 4).map((amenity, index) => (
//                   <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
//                     {amenity}
//                   </span>
//                 ))}
//                 {property.amenities.length > 4 && (
//                   <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
//                     +{property.amenities.length - 4} more
//                   </span>
//                 )}
//               </div>
//             </div> */}
            
//             <div className="mt-6 pt-6 border-t border-gray-200">
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <button className="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors rounded-sm flex-1 sm:flex-none">
//                   Inquire Now!
//                 </button>
//                 <button className="border border-gray-300 text-gray-700 px-8 py-3 text-sm hover:bg-gray-50 transition-colors rounded-sm flex-1 sm:flex-none">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// interface FeatureProps {
//   icon: string;
//   text: string;
// }

// const Feature = ({ icon, text }: FeatureProps) => (
//   <div className="flex items-center gap-2 text-sm">
//     <span className="text-lg">{icon}</span>
//     <span>{text}</span>
//   </div>
// );

// export default function FeaturedApartments() {
//   const propertyData: PropertyData[] = [
//     {
//       id: 1,
//       title: "Prestige White Meadows Villa",
//       developer: "Prestige Group",
//       location: "Whitefield, Bangalore",
//       image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
//       propertyType: "Residential",
//       subType: "Independent House/Villa",
//       bedrooms: 4,
//       bathrooms: 4,
//       balconies: 3,
//       carpetArea: "2800 sqft",
//       builtUpArea: "3200 sqft",
//       plotArea: "4000 sqft",
//       floors: "G+2",
//       facing: "East",
//       readyToMove: true,
//       age: 2,
//       price: 85000000,
//       pricePerSqft: 26563,
//       parking: "3 Cars",
//       furnishing: "Semi Furnished",
//       amenities: ["Swimming Pool", "Gym", "Club House", "Security", "Garden", "Power Backup", "Water Supply"],
//       status: "Resale"
//     },
//     {
//       id: 2,
//       title: "Brigade Cornerstone Utopia",
//       developer: "Brigade Group",
//       location: "Varthur, Bangalore", 
//       image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
//       propertyType: "Residential",
//       subType: "Flat/Apartment",
//       bedrooms: 3,
//       bathrooms: 3,
//       balconies: 2,
//       carpetArea: "1850 sqft",
//       builtUpArea: "2100 sqft",
//       floors: "15th Floor of 25",
//       facing: "North",
//       readyToMove: false,
//       price: 75000000,
//       pricePerSqft: 35714,
//       parking: "2 Cars",
//       furnishing: "Unfurnished",
//       amenities: ["Swimming Pool", "Gym", "Club House", "Children's Play Area", "Landscaped Gardens", "Security"],
//       status: "New",
//       constructionStatus: "Under Construction - 85% Complete"
//     },
//     {
//       id: 3,
//       title: "Sobha Dream Acres Villa",
//       developer: "Sobha Limited",
//       location: "Panathur, Bangalore",
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
//       propertyType: "Residential", 
//       subType: "Independent House/Villa",
//       bedrooms: 5,
//       bathrooms: 5,
//       balconies: 4,
//       carpetArea: "3500 sqft",
//       builtUpArea: "4000 sqft",
//       plotArea: "5200 sqft",
//       floors: "G+2",
//       facing: "South",
//       readyToMove: true,
//       age: 1,
//       price: 120000000,
//       pricePerSqft: 30000,
//       parking: "4 Cars",
//       furnishing: "Fully Furnished",
//       amenities: ["Private Swimming Pool", "Home Theater", "Gym", "Servant Quarters", "Generator", "Security", "Landscaped Garden", "Intercom"],
//       status: "Resale"
//     },
//     {
//       id: 4,
//       title: "Godrej Reflections Apartment",
//       developer: "Godrej Properties",
//       location: "Harlur, Bangalore",
//       image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
//       propertyType: "Residential",
//       subType: "Flat/Apartment", 
//       bedrooms: 2,
//       bathrooms: 2,
//       balconies: 2,
//       carpetArea: "1200 sqft",
//       builtUpArea: "1400 sqft",
//       floors: "8th Floor of 12",
//       facing: "West",
//       readyToMove: true,
//       age: 3,
//       price: 45000000,
//       pricePerSqft: 32143,
//       parking: "1 Car + 1 Bike",
//       furnishing: "Semi Furnished",
//       amenities: ["Swimming Pool", "Gym", "Club House", "Children's Play Area", "24x7 Security", "Power Backup"],
//       status: "Resale"
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <div className="relative h-[45vh] md:h-[70vh] w-full">
//         <div className="absolute inset-0 bg-black/40" />
//         <div 
//           className="absolute inset-0 bg-cover bg-center z-[-1]"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&h=1080&fit=crop')" }}
//         />
//         <div className="relative h-full flex items-center justify-center px-4">
//           <div className="text-center">
//             <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-heading uppercase mb-4">
//               Unit Configuration
//             </h1>
//             <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
//               Explore our premium residential properties with world-class amenities and modern designs
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between mb-12">
//           <div className="space-y-4">
//             <h2 className="text-2xl md:text-3xl font-medium">Featured Properties</h2>
//             <p className="text-gray-600 max-w-2xl">
//               Discover our selection of premium properties designed for modern living. Each unit offers exceptional quality, prime locations, and luxury amenities.
//             </p>
//             <div className="flex items-center gap-6 text-sm text-gray-500">
//               <span>📍 Bangalore</span>
//               <span>🏠 {propertyData.length} Properties</span>
//               <span>💰 ₹45L - ₹12Cr</span>
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-3">
//             <button className="px-6 py-2.5 bg-black text-white hover:bg-gray-800 transition-colors rounded-sm">
//               All Properties
//             </button>
//             <button className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-sm">
//               Villas Only
//             </button>
//             <button className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-sm">
//               Apartments Only
//             </button>
//           </div>
//         </div>

//         {/* Properties List */}
//         <div className="space-y-8">
//           {propertyData.map((property, index) => (
//             <ApartmentCard 
//               key={property.id} 
//               property={property}
//               number={index + 1} 
//               isReversed={index % 2 === 1} 
//             />
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
//           <h3 className="text-2xl font-medium mb-4">Looking for Something Specific?</h3>
//           <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//             Our property experts can help you find the perfect home that matches your requirements and budget.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors rounded-sm">
//               Schedule Site Visit
//             </button>
//             <button className="border border-gray-300 text-gray-700 px-8 py-3 text-sm hover:bg-gray-50 transition-colors rounded-sm">
//               Download Brochure
//             </button>
//             <button className="border border-gray-300 text-gray-700 px-8 py-3 text-sm hover:bg-gray-50 transition-colors rounded-sm">
//               Get Price Quote
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface PropertyData {
//   id: number;
//   title: string;
//   developer: string;
//   location: string;
//   image: string;
//   propertyType: 'Residential' | 'Commercial';
//   subType: string;
//   bedrooms: number;
//   bathrooms: number;
//   balconies?: number;
//   carpetArea: string;
//   builtUpArea: string;
//   plotArea?: string;
//   floors: string;
//   facing: string;
//   readyToMove: boolean;
//   age?: number;
//   price: number;
//   pricePerSqft: number;
//   parking: string;
//   furnishing: string;
//   amenities: string[];
//   status: 'Resale' | 'New' | 'Rent';
//   constructionStatus?: string;
// }

// interface ApartmentCardProps {
//   property: PropertyData;
//   number: number;
//   isReversed?: boolean;
// }

// const ApartmentCard = ({ property, number, isReversed = false }: ApartmentCardProps) => {
//   const formatPrice = (price: number): string => {
//     if (price >= 10000000) {
//       return `₹${(price / 10000000).toFixed(1)} Crores`;
//     } else if (price >= 100000) {
//       return `₹${(price / 100000).toFixed(1)} Lakhs`;
//     }
//     return `₹${price.toLocaleString()}`;
//   };

//   const getStatusBadgeColor = (status: string) => {
//     switch (status.toLowerCase()) {
//       case 'new':
//         return 'bg-green-100 text-green-800 border-green-200';
//       case 'resale':
//         return 'bg-blue-100 text-blue-800 border-blue-200';
//       case 'rent':
//         return 'bg-purple-100 text-purple-800 border-purple-200';
//       default:
//         return 'bg-gray-100 text-gray-800 border-gray-200';
//     }
//   };

//   return (
//     <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} rounded-lg md:py-16 md:border-0 border md:border-b md:rounded-none`}>
//       <div className={`w-full md:w-1/2 relative ${!isReversed ? 'md:border-r md:pr-12' : 'md:border-l md:pl-12'} md:border-gray-200`}>
//         <div className="relative bg-gray-200 aspect-video md:aspect-[4/3] w-full rounded-lg overflow-hidden group">
//           <img 
//             src={property.image} 
//             alt={property.title}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//           {/* Status Badge */}
//           <div className="absolute top-4 right-4">
//             <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(property.status)}`}>
//               {property.status}
//             </span>
//           </div>
//           {/* Ready to Move Badge */}
//           {property.readyToMove && (
//             <div className="absolute bottom-4 right-4">
//               <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
//                 Ready to Move
//               </span>
//             </div>
//           )}
//         </div>
//         <div className="absolute top-4 left-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl z-10 md:hidden">
//           {number.toString().padStart(2, '0')}
//         </div>
//       </div>
      
//       <div className="w-full md:w-1/2 relative">
//         <div className="relative p-x-4 md:pl-16">
//           {/* Number indicator - hidden on mobile, visible on desktop */}
//           <div className="hidden md:flex absolute left-[20px] top-0 w-12 h-12 bg-black text-white rounded-full items-center justify-center text-xl">
//             {number.toString().padStart(2, '0')}
//           </div>
          
//           <div className='p-4'>
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm text-gray-500">{property.propertyType} • {property.subType}</span>
//               <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
//                 {property.facing} Facing
//               </span>
//             </div>
            
//             <h2 className="text-2xl font-medium mt-2">{property.title}</h2>
            
//             <div className="flex items-center text-sm text-gray-600 mt-1">
//               <span>📍 {property.location}</span>
//               <span className="mx-2">•</span>
//               <span>By {property.developer}</span>
//             </div>
            
//             <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
//               <div>
//                 <span className="text-gray-500">Carpet Area:</span>
//                 <div className="font-medium">{property.carpetArea}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Built-up Area:</span>
//                 <div className="font-medium">{property.builtUpArea}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Floor:</span>
//                 <div className="font-medium">{property.floors}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Furnishing:</span>
//                 <div className="font-medium">{property.furnishing}</div>
//               </div>
//             </div>
            
//             <div className="flex items-center justify-between mt-4">
//               <div>
//                 <p className="text-2xl font-medium">{formatPrice(property.price)}</p>
//                 <p className="text-sm text-gray-500">₹{property.pricePerSqft.toLocaleString()}/sqft</p>
//               </div>
//               {property.age && (
//                 <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
//                   {property.age} years old
//                 </span>
//               )}
//             </div>
            
//             <div className="mt-6 pt-4 border-t border-gray-200">
//               <div className="grid grid-cols-2 md:flex gap-y-3">
//                 <Feature icon="🛏️" text={`${property.bedrooms} Beds`} />
//                 <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-6 self-center"></div>
//                 <Feature icon="🚿" text={`${property.bathrooms} Baths`} />
//                 <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-6 self-center"></div>
//                 <Feature icon="🏠" text={property.balconies ? `${property.balconies} Balconies` : 'No Balcony'} />
//                 <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-6 self-center"></div>
//                 <Feature icon="🚗" text={property.parking} />
//               </div>
//             </div>
            
//             <div className="mt-6 pt-6 border-t border-gray-200">
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <button className="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors rounded-sm flex-1 sm:flex-none">
//                   Inquire Now!
//                 </button>
//                 <button className="border border-gray-300 text-gray-700 px-8 py-3 text-sm hover:bg-gray-50 transition-colors rounded-sm flex-1 sm:flex-none">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// interface FeatureProps {
//   icon: string;
//   text: string;
// }

// const Feature = ({ icon, text }: FeatureProps) => (
//   <div className="flex items-center gap-2 text-sm">
//     <span className="text-lg">{icon}</span>
//     <span>{text}</span>
//   </div>
// );

// export default function FeaturedApartments() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 4;

//   const allPropertyData: PropertyData[] = [
//     {
//       id: 1,
//       title: "Prestige White Meadows Villa",
//       developer: "Prestige Group",
//       location: "Whitefield, Bangalore",
//       image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
//       propertyType: "Residential",
//       subType: "Independent House/Villa",
//       bedrooms: 4,
//       bathrooms: 4,
//       balconies: 3,
//       carpetArea: "2800 sqft",
//       builtUpArea: "3200 sqft",
//       plotArea: "4000 sqft",
//       floors: "G+2",
//       facing: "East",
//       readyToMove: true,
//       age: 2,
//       price: 85000000,
//       pricePerSqft: 26563,
//       parking: "3 Cars",
//       furnishing: "Semi Furnished",
//       amenities: ["Swimming Pool", "Gym", "Club House", "Security", "Garden", "Power Backup", "Water Supply"],
//       status: "Resale"
//     },
//     {
//       id: 2,
//       title: "Brigade Cornerstone Utopia",
//       developer: "Brigade Group",
//       location: "Varthur, Bangalore", 
//       image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
//       propertyType: "Residential",
//       subType: "Flat/Apartment",
//       bedrooms: 3,
//       bathrooms: 3,
//       balconies: 2,
//       carpetArea: "1850 sqft",
//       builtUpArea: "2100 sqft",
//       floors: "15th Floor of 25",
//       facing: "North",
//       readyToMove: false,
//       price: 75000000,
//       pricePerSqft: 35714,
//       parking: "2 Cars",
//       furnishing: "Unfurnished",
//       amenities: ["Swimming Pool", "Gym", "Club House", "Children's Play Area", "Landscaped Gardens", "Security"],
//       status: "New",
//       constructionStatus: "Under Construction - 85% Complete"
//     },
//     {
//       id: 3,
//       title: "Sobha Dream Acres Villa",
//       developer: "Sobha Limited",
//       location: "Panathur, Bangalore",
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
//       propertyType: "Residential", 
//       subType: "Independent House/Villa",
//       bedrooms: 5,
//       bathrooms: 5,
//       balconies: 4,
//       carpetArea: "3500 sqft",
//       builtUpArea: "4000 sqft",
//       plotArea: "5200 sqft",
//       floors: "G+2",
//       facing: "South",
//       readyToMove: true,
//       age: 1,
//       price: 120000000,
//       pricePerSqft: 30000,
//       parking: "4 Cars",
//       furnishing: "Fully Furnished",
//       amenities: ["Private Swimming Pool", "Home Theater", "Gym", "Servant Quarters", "Generator", "Security", "Landscaped Garden", "Intercom"],
//       status: "Resale"
//     },
//     {
//       id: 4,
//       title: "Godrej Reflections Apartment",
//       developer: "Godrej Properties",
//       location: "Harlur, Bangalore",
//       image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
//       propertyType: "Residential",
//       subType: "Flat/Apartment", 
//       bedrooms: 2,
//       bathrooms: 2,
//       balconies: 2,
//       carpetArea: "1200 sqft",
//       builtUpArea: "1400 sqft",
//       floors: "8th Floor of 12",
//       facing: "West",
//       readyToMove: true,
//       age: 3,
//       price: 45000000,
//       pricePerSqft: 32143,
//       parking: "1 Car + 1 Bike",
//       furnishing: "Semi Furnished",
//       amenities: ["Swimming Pool", "Gym", "Club House", "Children's Play Area", "24x7 Security", "Power Backup"],
//       status: "Resale"
//     },
//     {
//       id: 5,
//       title: "DLF Camellias Penthouse",
//       developer: "DLF Limited",
//       location: "Golf Course Road, Gurgaon",
//       image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
//       propertyType: "Residential",
//       subType: "Penthouse",
//       bedrooms: 4,
//       bathrooms: 5,
//       balconies: 3,
//       carpetArea: "4200 sqft",
//       builtUpArea: "4800 sqft",
//       floors: "25th Floor of 25",
//       facing: "North-East",
//       readyToMove: true,
//       age: 4,
//       price: 180000000,
//       pricePerSqft: 37500,
//       parking: "3 Cars + 2 Bikes",
//       furnishing: "Fully Furnished",
//       amenities: ["Private Terrace", "Jacuzzi", "Home Automation", "Private Lift", "Gym", "Swimming Pool", "Concierge"],
//       status: "Resale"
//     },
//     {
//       id: 6,
//       title: "Embassy Lake Terraces",
//       developer: "Embassy Group",
//       location: "Hebbal, Bangalore",
//       image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
//       propertyType: "Residential",
//       subType: "Flat/Apartment",
//       bedrooms: 3,
//       bathrooms: 3,
//       balconies: 2,
//       carpetArea: "1950 sqft",
//       builtUpArea: "2200 sqft",
//       floors: "12th Floor of 20",
//       facing: "Lake View",
//       readyToMove: false,
//       price: 95000000,
//       pricePerSqft: 43182,
//       parking: "2 Cars",
//       furnishing: "Semi Furnished",
//       amenities: ["Lake View", "Infinity Pool", "Spa", "Tennis Court", "Kids Zone", "Clubhouse", "Jogging Track"],
//       status: "New",
//       constructionStatus: "Under Construction - 60% Complete"
//     },
//     {
//       id: 7,
//       title: "Lodha World Towers",
//       developer: "Lodha Group",
//       location: "Lower Parel, Mumbai",
//       image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
//       propertyType: "Residential",
//       subType: "Flat/Apartment",
//       bedrooms: 2,
//       bathrooms: 2,
//       balconies: 1,
//       carpetArea: "1100 sqft",
//       builtUpArea: "1300 sqft",
//       floors: "35th Floor of 42",
//       facing: "Sea View",
//       readyToMove: true,
//       age: 5,
//       price: 55000000,
//       pricePerSqft: 42308,
//       parking: "1 Car",
//       furnishing: "Unfurnished",
//       amenities: ["Sea View", "Sky Lounge", "Swimming Pool", "Gym", "24x7 Security", "Valet Parking", "Concierge"],
//       status: "Rent"
//     },
//     {
//       id: 8,
//       title: "Tata Primanti Garden Residences",
//       developer: "Tata Housing",
//       location: "Sector 72, Gurgaon",
//       image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&h=600&fit=crop",
//       propertyType: "Residential",
//       subType: "Independent House/Villa",
//       bedrooms: 3,
//       bathrooms: 4,
//       balconies: 2,
//       carpetArea: "2400 sqft",
//       builtUpArea: "2800 sqft",
//       plotArea: "3200 sqft",
//       floors: "G+1",
//       facing: "South-West",
//       readyToMove: true,
//       age: 1,
//       price: 72000000,
//       pricePerSqft: 25714,
//       parking: "2 Cars + 2 Bikes",
//       furnishing: "Semi Furnished",
//       amenities: ["Private Garden", "Community Pool", "Clubhouse", "Security", "Power Backup", "Jogging Track", "Children's Park"],
//       status: "New"
//     },
//     {
//       id: 9,
//       title: "Tata Primanti Garden Residences",
//       developer: "Tata Housing",
//       location: "Sector 72, Gurgaon",
//       image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&h=600&fit=crop",
//       propertyType: "Residential",
//       subType: "Independent House/Villa",
//       bedrooms: 3,
//       bathrooms: 4,
//       balconies: 2,
//       carpetArea: "2400 sqft",
//       builtUpArea: "2800 sqft",
//       plotArea: "3200 sqft",
//       floors: "G+1",
//       facing: "South-West",
//       readyToMove: true,
//       age: 1,
//       price: 72000000,
//       pricePerSqft: 25714,
//       parking: "2 Cars + 2 Bikes",
//       furnishing: "Semi Furnished",
//       amenities: ["Private Garden", "Community Pool", "Clubhouse", "Security", "Power Backup", "Jogging Track", "Children's Park"],
//       status: "New"
//     }
//   ];

//   // Pagination logic
//   const totalPages = Math.ceil(allPropertyData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentProperties = allPropertyData.slice(startIndex, startIndex + itemsPerPage);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     // Scroll to top of properties section
//     window.scrollTo({ top: 400, behavior: 'smooth' });
//   };

//   const generatePageNumbers = () => {
//     const pages = [];
//     const maxVisiblePages = 5;
    
//     if (totalPages <= maxVisiblePages) {
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(i);
//       }
//     } else {
//       if (currentPage <= 3) {
//         for (let i = 1; i <= 4; i++) pages.push(i);
//         pages.push('...');
//         pages.push(totalPages);
//       } else if (currentPage >= totalPages - 2) {
//         pages.push(1);
//         pages.push('...');
//         for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
//       } else {
//         pages.push(1);
//         pages.push('...');
//         for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
//         pages.push('...');
//         pages.push(totalPages);
//       }
//     }
//     return pages;
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <div className="relative h-[45vh] md:h-[70vh] w-full">
//         <div className="absolute inset-0 bg-black/40" />
//         <div 
//           className="absolute inset-0 bg-cover bg-center z-[-1]"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&h=1080&fit=crop')" }}
//         />
//         <div className="relative h-full flex items-center justify-center px-4">
//           <div className="text-center">
//             <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-heading uppercase mb-4">
//               Unit Configuration
//             </h1>
//             <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
//               Explore our premium residential properties with world-class amenities and modern designs
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between mb-12">
//           <div className="space-y-4">
//             <h2 className="text-2xl md:text-3xl font-medium">Featured Properties</h2>
//             <p className="text-gray-600 max-w-2xl">
//               Discover our selection of premium properties designed for modern living. Each unit offers exceptional quality, prime locations, and luxury amenities.
//             </p>
//             <div className="flex items-center gap-6 text-sm text-gray-500">
//               <span>📍 Multiple Cities</span>
//               <span>🏠 {allPropertyData.length} Properties</span>
//               <span>💰 ₹45L - ₹18Cr</span>
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-3">
//             <button className="px-6 py-2.5 bg-black text-white hover:bg-gray-800 transition-colors rounded-sm">
//               All Properties
//             </button>
//             <button className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-sm">
//               Villas Only
//             </button>
//             <button className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-sm">
//               Apartments Only
//             </button>
//           </div>
//         </div>

//         {/* Properties List */}
//         <div className="space-y-8">
//           {currentProperties.map((property, index) => (
//             <ApartmentCard 
//               key={property.id} 
//               property={property}
//               number={startIndex + index + 1} 
//               isReversed={(startIndex + index) % 2 === 1} 
//             />
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
//           <div className="text-sm text-gray-600">
//             Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, allPropertyData.length)} of {allPropertyData.length} properties
//           </div>
          
//           <div className="flex items-center gap-2">
//             {/* Previous Button */}
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
//                 currentPage === 1 
//                   ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
//                   : 'border-gray-300 text-gray-700 hover:bg-gray-50'
//               }`}
//             >
//               <ChevronLeft className="w-4 h-4" />
//               Previous
//             </button>

//             {/* Page Numbers */}
//             <div className="flex items-center gap-1">
//               {generatePageNumbers().map((page, index) => (
//                 <div key={index}>
//                   {page === '...' ? (
//                     <span className="px-3 py-2 text-gray-400">...</span>
//                   ) : (
//                     <button
//                       onClick={() => handlePageChange(page as number)}
//                       className={`px-3 py-2 rounded-lg transition-colors ${
//                         currentPage === page
//                           ? 'bg-black text-white'
//                           : 'text-gray-700 hover:bg-gray-100'
//                       }`}
//                     >
//                       {page}
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Next Button */}
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
//                 currentPage === totalPages
//                   ? 'border-gray-200 text-gray-400 cursor-not-allowed'
//                   : 'border-gray-300 text-gray-700 hover:bg-gray-50'
//               }`}
//             >
//               Next
//               <ChevronRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
//           <h3 className="text-2xl font-medium mb-4">Looking for Something Specific?</h3>
//           <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//             Our property experts can help you find the perfect home that matches your requirements and budget.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors rounded-sm">
//               Schedule Site Visit
//             </button>
//             <button className="border border-gray-300 text-gray-700 px-8 py-3 text-sm hover:bg-gray-50 transition-colors rounded-sm">
//               Download Brochure
//             </button>
//             <button className="border border-gray-300 text-gray-700 px-8 py-3 text-sm hover:bg-gray-50 transition-colors rounded-sm">
//               Get Price Quote
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Filter, X } from 'lucide-react';
import Image from 'next/image';
interface PropertyData {
  id: number;
  title: string;
  developer: string;
  location: string;
  city: string;
  state: string;
  image: string;
  propertyType: 'Residential' | 'Commercial';
  subType: string;
  bedrooms: number;
  bathrooms: number;
  balconies?: number;
  carpetArea: string;
  carpetAreaSqft: number;
  builtUpArea: string;
  builtUpAreaSqft: number;
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

interface FilterDropdownProps {
  label: string;
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
}

const FilterDropdown = ({ label, options, selectedValue, onChange, icon }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm transition-colors hover:bg-gray-50 min-w-[140px] justify-between ${
          selectedValue !== 'All' ? 'bg-blue-50 border-blue-300 text-blue-700' : 'bg-white text-gray-700'
        }`}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="truncate">
            {selectedValue === 'All' ? label : selectedValue}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                selectedValue === option ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

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
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(property.status)}`}>
              {property.status}
            </span>
          </div>
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

export default function FeaturedApartments() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    location: 'All',
    propertyType: 'All',
    area: 'All',
    budget: 'All',
    status: 'All',
    bedrooms: 'All',
    furnishing: 'All'
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  const itemsPerPage = 4;

  const allPropertyData: PropertyData[] = [
    {
      id: 1,
      title: "Prestige White Meadows Villa",
      developer: "Prestige Group",
      location: "Whitefield, Bangalore",
      city: "Bangalore",
      state: "Karnataka",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      propertyType: "Residential",
      subType: "Independent House/Villa",
      bedrooms: 4,
      bathrooms: 4,
      balconies: 3,
      carpetArea: "2800 sqft",
      carpetAreaSqft: 2800,
      builtUpArea: "3200 sqft",
      builtUpAreaSqft: 3200,
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
      city: "Bangalore",
      state: "Karnataka",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      propertyType: "Residential",
      subType: "Flat/Apartment",
      bedrooms: 3,
      bathrooms: 3,
      balconies: 2,
      carpetArea: "1850 sqft",
      carpetAreaSqft: 1850,
      builtUpArea: "2100 sqft",
      builtUpAreaSqft: 2100,
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
    {
      id: 3,
      title: "Himalayan Heights Villa",
      developer: "Mountain Homes",
      location: "Mussoorie, Uttarakhand",
      city: "Mussoorie",
      state: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      propertyType: "Residential", 
      subType: "Independent House/Villa",
      bedrooms: 3,
      bathrooms: 3,
      balconies: 2,
      carpetArea: "1550 sqft",
      carpetAreaSqft: 1550,
      builtUpArea: "1800 sqft",
      builtUpAreaSqft: 1800,
      plotArea: "2500 sqft",
      floors: "G+1",
      facing: "Mountain View",
      readyToMove: true,
      age: 1,
      price: 45000000,
      pricePerSqft: 25000,
      parking: "2 Cars",
      furnishing: "Fully Furnished",
      amenities: ["Mountain View", "Garden", "Security", "Power Backup", "Water Supply"],
      status: "New"
    },
    {
      id: 4,
      title: "Dehradun Valley Plots",
      developer: "Valley Developers",
      location: "Rajpur Road, Dehradun",
      city: "Dehradun",
      state: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      propertyType: "Residential",
      subType: "Plot/Land", 
      bedrooms: 0,
      bathrooms: 0,
      balconies: 0,
      carpetArea: "2500 sqft",
      carpetAreaSqft: 2500,
      builtUpArea: "2500 sqft",
      builtUpAreaSqft: 2500,
      floors: "Plot",
      facing: "East",
      readyToMove: true,
      price: 12500000,
      pricePerSqft: 5000,
      parking: "Open Land",
      furnishing: "NA",
      amenities: ["Boundary Wall", "Water Connection", "Electricity", "Road Access"],
      status: "New"
    },
    {
      id: 5,
      title: "Godrej Reflections Apartment",
      developer: "Godrej Properties",
      location: "Harlur, Bangalore",
      city: "Bangalore",
      state: "Karnataka",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      propertyType: "Residential",
      subType: "Flat/Apartment", 
      bedrooms: 2,
      bathrooms: 2,
      balconies: 2,
      carpetArea: "1200 sqft",
      carpetAreaSqft: 1200,
      builtUpArea: "1400 sqft",
      builtUpAreaSqft: 1400,
      floors: "8th Floor of 12",
      facing: "West",
      readyToMove: true,
      age: 3,
      price: 45000000,
      pricePerSqft: 32143,
      parking: "1 Car + 1 Bike",
      furnishing: "Semi Furnished",
      amenities: ["Swimming Pool", "Gym", "Club House", "Children's Play Area", "24x7 Security", "Power Backup"],
      status: "Resale"
    },
    {
      id: 6,
      title: "Nainital Lake View Apartments",
      developer: "Hill Station Homes",
      location: "Mall Road, Nainital",
      city: "Nainital", 
      state: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      propertyType: "Residential",
      subType: "Flat/Apartment",
      bedrooms: 2,
      bathrooms: 2,
      balconies: 1,
      carpetArea: "950 sqft",
      carpetAreaSqft: 950,
      builtUpArea: "1100 sqft",
      builtUpAreaSqft: 1100,
      floors: "3rd Floor of 4",
      facing: "Lake View",
      readyToMove: true,
      price: 35000000,
      pricePerSqft: 31818,
      parking: "1 Car",
      furnishing: "Furnished",
      amenities: ["Lake View", "Balcony", "Security", "Water Supply"],
      status: "Resale"
    },
    {
      id: 7,
      title: "Rishikesh Riverside Plots",
      developer: "Ganga Developers",
      location: "Laxman Jhula, Rishikesh",
      city: "Rishikesh",
      state: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      propertyType: "Residential",
      subType: "Plot/Land",
      bedrooms: 0,
      bathrooms: 0,
      balconies: 0,
      carpetArea: "5000 sqft",
      carpetAreaSqft: 5000,
      builtUpArea: "5000 sqft",
      builtUpAreaSqft: 5000,
      floors: "Plot",
      facing: "River View",
      readyToMove: true,
      price: 25000000,
      pricePerSqft: 5000,
      parking: "Open Land",
      furnishing: "NA",
      amenities: ["River View", "Road Access", "Electricity", "Water Connection"],
      status: "New"
    },
    {
      id: 8,
      title: "Haridwar Commercial Complex",
      developer: "Commercial Builders",
      location: "Railway Road, Haridwar",
      city: "Haridwar",
      state: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      propertyType: "Commercial",
      subType: "Office/Shop",
      bedrooms: 0,
      bathrooms: 2,
      balconies: 0,
      carpetArea: "800 sqft",
      carpetAreaSqft: 800,
      builtUpArea: "900 sqft",
      builtUpAreaSqft: 900,
      floors: "Ground Floor",
      facing: "Road Facing",
      readyToMove: true,
      price: 18000000,
      pricePerSqft: 20000,
      parking: "2 Cars",
      furnishing: "Unfurnished",
      amenities: ["Main Road", "Parking", "24x7 Access", "Security"],
      status: "New"
    }
  ];

  // Filter options
  const locationOptions = ['All', ...Array.from(new Set(allPropertyData.map(p => p.city)))];
  const propertyTypeOptions = ['All', 'Flat/Apartment', 'Independent House/Villa', 'Plot/Land', 'Office/Shop'];
  const areaOptions = ['All', 'Under 1000 sqft', '1000-1500 sqft', '1500-2500 sqft', '2500-4000 sqft', 'Above 4000 sqft'];
  const budgetOptions = ['All', 'Under ₹50L', '₹50L-₹1Cr', '₹1-2Cr', '₹2-5Cr', 'Above ₹5Cr'];
  const statusOptions = ['All', 'New', 'Resale', 'Rent'];
  const bedroomOptions = ['All', '1 BHK', '2 BHK', '3 BHK', '4+ BHK', 'Plot/Commercial'];
  const furnishingOptions = ['All', 'Furnished', 'Semi Furnished', 'Unfurnished', 'NA'];

  // Filter logic
  const filteredProperties = useMemo(() => {
    return allPropertyData.filter(property => {
      // Location filter
      if (filters.location !== 'All' && property.city !== filters.location) {
        return false;
      }

      // Property type filter
      if (filters.propertyType !== 'All' && property.subType !== filters.propertyType) {
        return false;
      }

      // Area filter
      if (filters.area !== 'All') {
        const area = property.carpetAreaSqft;
        switch (filters.area) {
          case 'Under 1000 sqft':
            if (area >= 1000) return false;
            break;
          case '1000-1500 sqft':
            if (area < 1000 || area > 1500) return false;
            break;
          case '1500-2500 sqft':
            if (area < 1500 || area > 2500) return false;
            break;
          case '2500-4000 sqft':
            if (area < 2500 || area > 4000) return false;
            break;
          case 'Above 4000 sqft':
            if (area <= 4000) return false;
            break;
        }
      }

      // Budget filter
      if (filters.budget !== 'All') {
        const price = property.price;
        switch (filters.budget) {
          case 'Under ₹50L':
            if (price >= 5000000) return false;
            break;
          case '₹50L-₹1Cr':
            if (price < 5000000 || price > 10000000) return false;
            break;
          case '₹1-2Cr':
            if (price < 10000000 || price > 20000000) return false;
            break;
          case '₹2-5Cr':
            if (price < 20000000 || price > 50000000) return false;
            break;
          case 'Above ₹5Cr':
            if (price <= 50000000) return false;
            break;
        }
      }

      // Status filter
      if (filters.status !== 'All' && property.status !== filters.status) {
        return false;
      }

      // Bedroom filter
      if (filters.bedrooms !== 'All') {
        const bedrooms = property.bedrooms;
        switch (filters.bedrooms) {
          case '1 BHK':
            if (bedrooms !== 1) return false;
            break;
          case '2 BHK':
            if (bedrooms !== 2) return false;
            break;
          case '3 BHK':
            if (bedrooms !== 3) return false;
            break;
          case '4+ BHK':
            if (bedrooms < 4) return false;
            break;
          case 'Plot/Commercial':
            if (bedrooms !== 0) return false;
            break;
        }
      }

      // Furnishing filter
      if (filters.furnishing !== 'All' && property.furnishing !== filters.furnishing) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProperties = filteredProperties.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (filterKey: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterKey]: value }));
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const clearAllFilters = () => {
    setFilters({
      location: 'All',
      propertyType: 'All',
      area: 'All',
      budget: 'All',
      status: 'All',
      bedrooms: 'All',
      furnishing: 'All'
    });
    setCurrentPage(1);
  };

  const activeFiltersCount = Object.values(filters).filter(value => value !== 'All').length;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[45vh] md:h-[70vh] w-full">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&h=1080&fit=crop')" }}
        />
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-heading uppercase mb-4">
              Properties for Sale
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Explore our Residential and Commercial properties with world-class amenities and modern designs
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between mb-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-medium">Ikaaya Realty Featured Properties</h2>
            {/* <p className="text-gray-600 max-w-2xl">
              Discover our selection of premium properties designed for modern living. Each unit offers exceptional quality, prime locations, and luxury amenities.
            </p> */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>📍 Multiple Cities</span>
              <span>🏠 {filteredProperties.length} Properties</span>
              <span>💰 ₹12L - ₹8.5Cr</span>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="mb-8">
          {/* Desktop Filters */}
          <div className="hidden lg:flex flex-wrap gap-3 mb-4">
            <FilterDropdown
              label="Select Location"
              options={locationOptions}
              selectedValue={filters.location}
              onChange={(value) => handleFilterChange('location', value)}
              icon={<span className="text-blue-600">📍</span>}
            />
            <FilterDropdown
              label="Property Type"
              options={propertyTypeOptions}
              selectedValue={filters.propertyType}
              onChange={(value) => handleFilterChange('propertyType', value)}
              icon={<span className="text-green-600">🏠</span>}
            />
            <FilterDropdown
              label="Select Area"
              options={areaOptions}
              selectedValue={filters.area}
              onChange={(value) => handleFilterChange('area', value)}
              icon={<span className="text-purple-600">📐</span>}
            />
            <FilterDropdown
              label="Select Budget"
              options={budgetOptions}
              selectedValue={filters.budget}
              onChange={(value) => handleFilterChange('budget', value)}
              icon={<span className="text-orange-600">💰</span>}
            />
            {/* <FilterDropdown
              label="Select Status"
              options={statusOptions}
              selectedValue={filters.status}
              onChange={(value) => handleFilterChange('status', value)}
              icon={<span className="text-red-600">🏷️</span>}
            /> */}
            {/* <FilterDropdown
              label="Bedrooms"
              options={bedroomOptions}
              selectedValue={filters.bedrooms}
              onChange={(value) => handleFilterChange('bedrooms', value)}
              icon={<span className="text-indigo-600">🛏️</span>}
            /> */}
            <FilterDropdown
              label="Furnishing"
              options={furnishingOptions}
              selectedValue={filters.furnishing}
              onChange={(value) => handleFilterChange('furnishing', value)}
              icon={<span className="text-teal-600">🪑</span>}
            />
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors w-full justify-center"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium ml-2">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Filters Dropdown */}
          {showMobileFilters && (
            <div className="lg:hidden bg-white border border-gray-200 rounded-lg p-4 mb-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <FilterDropdown
                  label="Select Location"
                  options={locationOptions}
                  selectedValue={filters.location}
                  onChange={(value) => handleFilterChange('location', value)}
                  icon={<span className="text-blue-600">📍</span>}
                />
                <FilterDropdown
                  label="Property Type"
                  options={propertyTypeOptions}
                  selectedValue={filters.propertyType}
                  onChange={(value) => handleFilterChange('propertyType', value)}
                  icon={<span className="text-green-600">🏠</span>}
                />
                <FilterDropdown
                  label="Select Area"
                  options={areaOptions}
                  selectedValue={filters.area}
                  onChange={(value) => handleFilterChange('area', value)}
                  icon={<span className="text-purple-600">📐</span>}
                />
                <FilterDropdown
                  label="Select Budget"
                  options={budgetOptions}
                  selectedValue={filters.budget}
                  onChange={(value) => handleFilterChange('budget', value)}
                  icon={<span className="text-orange-600">💰</span>}
                />
                <FilterDropdown
                  label="Select Status"
                  options={statusOptions}
                  selectedValue={filters.status}
                  onChange={(value) => handleFilterChange('status', value)}
                  icon={<span className="text-red-600">🏷️</span>}
                />
                <FilterDropdown
                  label="Bedrooms"
                  options={bedroomOptions}
                  selectedValue={filters.bedrooms}
                  onChange={(value) => handleFilterChange('bedrooms', value)}
                  icon={<span className="text-indigo-600">🛏️</span>}
                />
              </div>
              <FilterDropdown
                label="Furnishing"
                options={furnishingOptions}
                selectedValue={filters.furnishing}
                onChange={(value) => handleFilterChange('furnishing', value)}
                icon={<span className="text-teal-600">🪑</span>}
              />
            </div>
          )}

          {/* Active Filters and Clear All */}
          {activeFiltersCount > 0 && (
            <div className="flex items-center justify-between mb-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Filter className="w-4 h-4 text-blue-600" />
                <span className="text-blue-800 font-medium">
                  {activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} applied
                </span>
                <span className="text-blue-600">•</span>
                <span className="text-blue-600">
                  {filteredProperties.length} properties found
                </span>
              </div>
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-sm text-blue-700 hover:bg-blue-100 transition-colors"
              >
                <X className="w-4 h-4" />
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Results */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">🏠</span>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to see more properties.
            </p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-2.5 bg-black text-white hover:bg-gray-800 transition-colors rounded-lg"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <>
            {/* Properties List */}
            <div className="space-y-8">
              {currentProperties.map((property, index) => (
                <ApartmentCard 
                  key={property.id} 
                  property={property}
                  number={startIndex + index + 1} 
                  isReversed={(startIndex + index) % 2 === 1} 
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-sm text-gray-600">
                  Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProperties.length)} of {filteredProperties.length} properties
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                      currentPage === 1 
                        ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1">
                    {generatePageNumbers().map((page, index) => (
                      <div key={index}>
                        {page === '...' ? (
                          <span className="px-3 py-2 text-gray-400">...</span>
                        ) : (
                          <button
                            onClick={() => handlePageChange(page as number)}
                            className={`px-3 py-2 rounded-lg transition-colors ${
                              currentPage === page
                                ? 'bg-black text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {page}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                      currentPage === totalPages
                        ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-medium mb-4">Looking for Something Specific?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our property experts can help you find the perfect home that matches your requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors rounded-sm">
              Schedule Site Visit
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 text-sm hover:bg-gray-50 transition-colors rounded-sm">
              Download Brochure
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 text-sm hover:bg-gray-50 transition-colors rounded-sm">
              Get Price Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}