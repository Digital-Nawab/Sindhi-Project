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
      "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
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
      "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
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
      "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
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
      "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
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
      "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
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
      "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
  },
];

function SindhiVendor() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trusted Sindhi Vendors
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
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
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <div className="flex-1 text-start">
                  <h3 className="text-lg font-bold text-gray-900">
                    {vendor.name}
                  </h3>
                  <p className="text-red-500 font-medium py-1">
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
                        className={`text-yellow-400 text-lg ${
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
              <p className="text-gray-600 text-sm mt-4 text-left">
                {vendor.description}
              </p>
              <div className="flex items-center justify-between mt-5">
                <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg w-1/2 mx-1">
                  <Calendar className="w-6 h-6 text-red-500" />
                  <p className="font-semibold">{vendor.years}</p>
                  <p className="text-xs text-gray-500">Years in Business</p>
                </div>
                <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg w-1/2 mx-1">
                  <Package className="w-6 h-6 text-red-500" />
                  <p className="font-semibold">{vendor.products}</p>
                  <p className="text-xs text-gray-500">Products</p>
                </div>
              </div>
              <button className="mt-6 w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 rounded-lg font-medium transition">
                View Store →
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <button className="px-20 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition">
            Explore All Vendors
          </button>
        </div>
      </div>
    </section>
  );
}

export default SindhiVendor;
