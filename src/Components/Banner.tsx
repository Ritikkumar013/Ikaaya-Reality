'use client';

import React from 'react';

const  IkaayaRealityBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 L 0 0 0 60' fill='none' stroke='white' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white rounded-full opacity-60 animate-bounce`}
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* City Skyline */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <div className="flex items-end justify-around h-full px-8">
          {[80, 100, 65, 90, 75, 85].map((height, i) => (
            <div
              key={i}
              className={`bg-white bg-opacity-10 border border-white border-opacity-20 backdrop-blur-sm animate-pulse`}
              style={{
                width: `${40 + i * 5}px`,
                height: `${height}px`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '4s',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        {/* Company Logo */}
        <h1 className="mb-4 text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
          IKAAYA REALITY
        </h1>

        {/* Tagline */}
        <p className="mb-8 text-xl md:text-2xl font-light opacity-90 drop-shadow-md">
          Building Dreams, Creating Futures
        </p>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {[
            { icon: '🏠', title: 'Premium Properties' },
            { icon: '⭐', title: 'Trusted Service' },
            { icon: '🔑', title: 'Dream Homes' }
          ].map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <span className="text-sm md:text-base font-medium">
                {feature.title}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="mt-8 px-8 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 border border-white border-opacity-30 rounded-full font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Explore Properties
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-white bg-opacity-5 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-white bg-opacity-5 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 from-0% via-transparent via-50% to-transparent opacity-30" />
    </div>
  );
};

export default IkaayaRealityBanner;