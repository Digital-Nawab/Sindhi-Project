import React from "react";
import { Star, MapPin, Clock } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Cotton Textiles",
    description: "High-quality cotton fabrics for wholesale distribution",
    price: "₹120-150/piece",
    moq: "500 pieces",
    delivery: "7-10 days",
    rating: 4.8,
    vendor: "Sindhi Textiles Co.",
    location: "Mumbai, Maharashtra",
    image: "assets/images/products/1.jpg",
  },
  {
    id: 2,
    name: "Handicraft Items",
    description: "Traditional Sindhi handicrafts and decorative items",
    price: "₹120-150/piece",
    moq: "500 pieces",
    delivery: "7-10 days",
    rating: 4.7,
    vendor: "Sindhi Textiles Co.",
    location: "Mumbai, Maharashtra",
    image: "assets/images/products/2.jpg",
  },
  {
    id: 3,
    name: "Premium Cotton Textiles",
    description: "High-quality cotton fabrics for wholesale distribution",
    price: "₹120-150/piece",
    moq: "500 pieces",
    delivery: "7-10 days",
    rating: 4.6,
    vendor: "Sindhi Textiles Co.",
    location: "Mumbai, Maharashtra",
    image: "assets/images/products/3.jpg",
  },
  {
    id: 4,
    name: "Premium Cotton Textiles",
    description: "High-quality cotton fabrics for wholesale distribution",
    price: "₹120-150/piece",
    moq: "500 pieces",
    delivery: "7-10 days",
    rating: 4.9,
    vendor: "Sindhi Textiles Co.",
    location: "Mumbai, Maharashtra",
    image: "assets/images/products/4.jpg",
  },
];

function CommunityProducts() {
  return (
    <section className="bg-white pt-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Sindhi Community Products
          </h2>
          <p className="text-gray-600 mt-2">
            Discover quality products from trusted vendors in our community
            network
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Top Products</h3>
          </div>
          <button className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2 bg-white border rounded-lg shadow hover:bg-gray-100 transition duration-300">
            View All Products →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-white px-2 py-1 text-xs rounded shadow flex items-center gap-1">
                  <Star className="w-4 h-4 text-[#FFCD29] fill-[#FFCD29]" />
                  {product.rating}
                </span>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h4 className="font-semibold text-lg text-gray-900">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {product.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <span className="px-3 py-1 text-xs bg-[#E48F07] text-white rounded-full">
                    MOQ: {product.moq}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-600 border px-3 py-1 rounded-lg">
                    <Clock className="w-4 h-4" /> {product.delivery}
                  </span>
                </div>

                <p className="text-red-600 font-semibold text-2xl mt-3">
                  {product.price}
                </p>
                <p className="text-sm text-gray-800 py-2 font-semibold">
                  {product.vendor}
                </p>

                <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <MapPin className="w-4 h-4" /> {product.location}
                </p>

                <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition duration-300">
                  Enquire Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityProducts;
