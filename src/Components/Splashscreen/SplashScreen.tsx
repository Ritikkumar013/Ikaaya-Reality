"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../../app/globals.css"; // Import custom CSS for the animation

const SplashScreen: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if splash screen has been shown before
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

    // Disable interaction with the site during the splash screen
    document.body.style.pointerEvents = "none";

    // If it's the user's first visit, show splash screen
    if (!hasVisitedBefore) {
      // Store a flag to indicate the user has visited
      localStorage.setItem("hasVisitedBefore", "true");
    }

    // Always show splash screen for 4 seconds, regardless of previous visit
    setTimeout(() => {
      setShowSplash(false);
      // Enable interaction with the site after the splash screen finishes
      document.body.style.pointerEvents = "auto";
    }, 2800); // 4 seconds duration for splash screen
  }, []);

  return (
    <>
      {/* Splash screen container */}
      {showSplash && (
        <div className="fixed inset-0 bg-[#36454f] flex justify-center items-center z-50">
          <div className="splash-content">
            {/* <img
              src="/logo-splash.png" 
              alt="Logo"
              className="mb-4 animate-fade-in-left max-w-[500px]"
            /> */}
            <Image 
            src="/ikaaya/beige.png"
            alt="Logo"
            width={1000}
            height={240}
            className="mb-4 animate-fade-in-left lg:max-w-[200px] md:max-w-[200px]  "/>
          </div>
        </div>
      )}
    </>
  );
};

export default SplashScreen;
