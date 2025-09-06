import React, { useState } from 'react';
import Image from 'next/image';
import { Search, ChevronDown, MapPin, Home, Building2, TreePine, Briefcase, ShoppingBag } from 'lucide-react';

const BannerWithSearch = () => {
  const [activeTab] = useState('buy');
  const [selectedPropertyType, setSelectedPropertyType] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const propertyTypes = [
    { value: 'All', label: 'All', icon: Home },
    { value: 'Villas', label: 'Villas', icon: Home },
    { value: 'Apartments', label: 'Apartments', icon: Building2 },
    { value: 'Plots', label: 'Plots', icon: MapPin },
    { value: 'Farmlands', label: 'Farmlands', icon: TreePine },
    { value: 'Office Spaces', label: 'Office Spaces', icon: Briefcase },
    { value: 'Retail', label: 'Retail', icon: ShoppingBag },
  ];

  const handleSearch = () => {
    console.log('Searching for:', { activeTab, selectedPropertyType, searchQuery });
    // Add your search logic here
  };

  return (
    <div
      className="min-h-[120vh] relative w-full lg:h-screen h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/ikaaya/banner.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-white flex flex-col items-center justify-center h-full gap-8 px-4">
        {/* Main Heading */}
        <div className="text-center">
          <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold font-heading mb-4">
            Ikaaya Realty
          </h1>
          <p className="font-serif text-center text-lg md:text-xl opacity-90">
            INTRODUCING NEW WAYS TO SHOWCASE PROPERTIES
          </p>
        </div>

        {/* Search Section */}
        <div className="w-full max-w-4xl mx-auto">
          {/* Property Type Tabs */}
          
          {/* <div className="flex justify-center mt-16 mb-6">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
              <button
                onClick={() => setActiveTab('buy')}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'buy'
                    ? 'bg-white text-gray-800 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Properties to Buy
              </button>
              <button
                onClick={() => setActiveTab('rent')}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'rent'
                    ? 'bg-white text-gray-800 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Properties to Rent
              </button>
            </div>
          </div> */}

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-2 mt-24 shadow-2xl border border-white/20">
            <div className="flex flex-col md:flex-row gap-2">
              {/* Property Type Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 px-4 py-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 min-w-[200px] group"
                >
                  {(() => {
                    const selectedType = propertyTypes.find(type => type.value === selectedPropertyType);
                    const IconComponent = selectedType?.icon;
                    return IconComponent ? (
                      <IconComponent 
                        size={20} 
                        className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200" 
                      />
                    ) : null;
                  })()}
                  <span className="text-gray-800 font-medium flex-1 text-left">
                    {selectedPropertyType}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-gray-500 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-80 overflow-y-auto">
                    {propertyTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <button
                          key={type.value}
                          onClick={() => {
                            setSelectedPropertyType(type.value);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 group"
                        >
                          <IconComponent size={18} className="text-gray-500 group-hover:text-blue-600" />
                          <span className="text-gray-800 group-hover:text-blue-600">
                            {type.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Search Input */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search Properties"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-4 bg-gray-50 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <MapPin size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="px-8 py-4 bg-black/80 hover:bg-black/90 rounded-xl text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 min-w-[140px] justify-center"
              >
                <Search size={18} />
                Search Now
              </button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {['Popular Areas', 'New Projects', 'Ready to Move', 'Under Construction'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Arrow Button */}
        <div className="lg:absolute lg:bottom-6 mt-8 lg:mt-0">
          <Image
            src="/arrow-btn-vertical.png"
            width={70}
            height={200}
            alt="Scroll down arrow"
            className="w-10 animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerWithSearch;