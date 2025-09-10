import React from "react";

function VenderBanner() {
  return (
    <div className="relative w-full min-h-[300px] flex items-center justify-center bg-gradient-to-r from-[#053951] via-[#1e3a8a] to-[#0ea5e9]">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative text-center px-6 text-white max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Become a Vendor</h1>
        <p className="text-lg md:text-2xl mb-8">
          Partner with{" "}
          <span className="text-[#E31E24] font-semibold">EasyDeals</span>
          and grow your business by reaching thousands of online customers.
        </p>
        <button className="bg-[#E31E24] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default VenderBanner;
