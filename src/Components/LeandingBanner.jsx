// Import necessary modules and components
import React from "react";

/**
 * LandingBanner Component
 *
 * This component displays a visually appealing hero section with a background image,
 * a prominent heading, descriptive text, and a call-to-action button. It is designed
 * to be fully responsive across various device sizes.
 */
const LandingBanner = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/14823611/pexels-photo-14823611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      {/* Overlay to enhance text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="hero-content text-center text-neutral-content relative z-10 px-4">
        <div className="max-w-4xl">
          {/* Heading */}
          <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase">
            Flood Management System
          </h1>

          {/* Description */}
          <p className="mb-5 text-base sm:text-lg md:text-xl text-white">
            Welcome to the Flood Management System. Here you can track real-time
            updates on flood-affected areas, collaborate with government
            agencies, NGOs, and weather services, and access support for your
            area.
          </p>

          {/* Call-to-Action Button */}
          <button className="btn btn-primary px-8 sm:px-10 md:px-12 border-2 font-bold border-white text-white z-10 opacity-100 hover:bg-primary-focus transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
