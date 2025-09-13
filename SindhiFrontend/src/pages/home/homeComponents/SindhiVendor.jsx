import React from "react";
import { MapPin, Calendar, Package } from "lucide-react";

const vendors = [
  {
    id: 1,
    name: "Sindhi Textiles Ltd.",
    category: "Textiles & Fabrics",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    years: 25,
    products: "150+",
    description:
      "Leading manufacturer of premium quality cotton and silk fabrics for global markets.",
    image:
      "assets/images/vendor/1.jpg",
  },
  {
    id: 2,
    name: "TechnoSind Solutions",
    category: "Electronics & Technology",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    years: 25,
    products: "150+",
    description:
      "Leading manufacturer of premium quality cotton and silk fabrics for global markets.",
    image:
      "assets/images/vendor/2.jpg",
  },
  {
    id: 3,
    name: "Spice World Exports",
    category: "Food & Beverages",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    years: 25,
    products: "150+",
    description:
      "Leading manufacturer of premium quality cotton and silk fabrics for global markets.",
    image:
      "assets/images/vendor/3.jpg",
  },
  {
    id: 4,
    name: "Leather Craft Masters",
    category: "Textiles & Fabrics",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    years: 25,
    products: "150+",
    description:
      "Leading manufacturer of premium quality cotton and silk fabrics for global markets.",
    image:
      "assets/images/vendor/4.jpg",
  },
  {
    id: 5,
    name: "Golden Jewels House",
    category: "Electronics & Technology",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    years: 25,
    products: "150+",
    description:
      "Leading manufacturer of premium quality cotton and silk fabrics for global markets.",
    image:
      "assets/images/vendor/5.jpg",
  },
  {
    id: 6,
    name: "MedSupply Corporation",
    category: "Food & Beverages",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    years: 25,
    products: "150+",
    description:
      "Leading manufacturer of premium quality cotton and silk fabrics for global markets.",
    image:
      "assets/images/vendor/6.jpg",
  },
];

function SindhiVendor() {
  return (
    <section className="bg-white pt-16 px-6">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trusted Sindhi Vendors
        </h2>
        <p className="mt-3 text-gray-900 text-lg font-semibold">
          Connect with established Sindhi business owners and grow your network
        </p>

        {/* Vendor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col"
            >
              <div className="flex items-start gap-4">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-32 h-24 object-cover rounded-lg"
                />
                <div className="flex-1 text-start">
                  <h3 className="text-xl font-bold text-[#000000]">
                    {vendor.name}
                  </h3>
                  <p className="text-[#E82600] font-medium py-1">
                    {vendor.category}
                  </p>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <MapPin className="text-gray-400 w-4 h-4" />
                    {vendor.location}
                  </p>
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-[#FFCD29] text-lg ${
                          i < Math.floor(vendor.rating) ? "" : "opacity-40"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {vendor.rating} ratings
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-[#000000] text-sm mt-4 text-left">
                {vendor.description}
              </p>
              <div className="flex items-center justify-between mt-5">
                <div className="flex flex-col items-center bg-[#F2F6FB] p-3 rounded-lg w-1/2 mx-1">
                  <Calendar className="w-6 h-6 text-[#E82600]" />
                  <p className="font-semibold">{vendor.years}</p>
                  <p className="text-xs text-[#8C8C8C]">Years in Business</p>
                </div>
                <div className="flex flex-col items-center bg-[#F2F6FB] p-3 rounded-lg w-1/2 mx-1">
                  <Package className="w-6 h-6 text-[#E82600]" />
                  <p className="font-semibold">{vendor.products}</p>
                  <p className="text-xs text-[#8C8C8C]">Products</p>
                </div>
              </div>
              <button className="mt-6 w-full border border-[#E82600] text-[#E82600] hover:bg-[#E82600] hover:text-white py-2 rounded-lg font-medium transition">
                View Store →
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <button className="px-20 py-4 bg-[#E82600] hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition">
            Explore All Vendors
          </button>
        </div>
      </div>
    </section>
  );
}

export default SindhiVendor;
