import React from "react";

function SewaInitiative() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Join Our <span className="text-red-600">SEWA Initiatives</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Every contribution matters. Be part of our mission to serve humanity
          and preserve our heritage.
        </p>

        {/* Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#E82600] text-white font-semibold px-24 py-3 rounded-md hover:bg-red-700 transition">
            Volunteer with us
          </button>
          <button className="border border-[#E82600] text-[#E82600] font-semibold px-24 py-3 rounded-md hover:bg-[#E82600] hover:text-white transition">
            Donate to SEWA
          </button>
        </div>
      </div>
    </section>
  );
}

export default SewaInitiative;
