import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center text-[#00FFFF] transition-opacity duration-700">
      {/* Title or Logo */}
      <h1 className="text-3xl font-semibold tracking-wide mb-6 animate-pulse">
        Hello! Visitor
      </h1>

      {/* Minimal Spinner */}
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />

      {/* Optional tagline */}
      <p className="mt-6 text-sm text-gray-500">
        Sharpening the digital brush...
      </p>
    </div>
  );
};

export default Preloader;
