import React from "react";

function VenderList() {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full min-h-[300px] flex items-center justify-center bg-gradient-to-r from-[#053951] via-[#1e3a8a] to-[#0ea5e9]">
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative text-center px-6 text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Become a Vendor
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Partner with <span className="text-[#E31E24] font-semibold">EasyDeals</span>  
            and grow your business by reaching thousands of online customers.
          </p>  
          <button className="bg-[#E31E24] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Vendor Registration Form */}
      <div className="container mx-auto px-6 lg:px-20 py-20">
        <div className="bg-white shadow-2xl rounded-2xl p-10 md:p-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#053951] text-center mb-10">
            Vendor Registration
          </h2>
          <form className="grid md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24] outline-none transition"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24] outline-none transition"
                placeholder="Enter your email"
              />
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Business Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24] outline-none transition"
                placeholder="Enter your business name"
              />
            </div>

            {/* Product Category */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Product Category
              </label>
              <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24] outline-none transition">
                <option>Select a category</option>
                <option>Clothing</option>
                <option>Electronics</option>
                <option>Home & Living</option>
                <option>Beauty</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24] outline-none transition"
                rows="4"
                placeholder="Tell us about your business..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#E31E24] to-red-600 hover:to-red-700 text-white py-4 rounded-lg font-semibold text transition shadow-lg hover:shadow-xl"
              >
                🚀 Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default VenderList;
