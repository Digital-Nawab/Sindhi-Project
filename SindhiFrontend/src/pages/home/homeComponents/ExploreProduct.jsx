import React from "react";

const categories = [
  { name: "Plastics & Rubber", image: "assets/images/explore/1.png" },
  { name: "Textiles & Fashion", image: "assets/images/explore/2.jpg" },
  { name: "Footwear-Export", image: "assets/images/explore/3.jpg" },
  { name: "Agriculture & Grains", image: "assets/images/explore/4.jpg" },
  { name: "Jewelry & Accessories", image: "assets/images/explore/5.jpg" },
  { name: "Electronics & Technology", image: "assets/images/explore/6.jpg" },
  { name: "Chemicals", image: "assets/images/explore/7.png" },
  { name: "Construction & Infra", image: "assets/images/explore/8.jpg" },
  { name: "Food & Beverages", image: "assets/images/explore/9.jpg" },
  { name: "Home & Decor", image: "assets/images/explore/10.jpg" },
  { name: "Health & Beauty", image: "assets/images/explore/11.png" },
  { name: "Health & Beauty", image: "assets/images/explore/12.png" },
];

function ExploreProduct() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore Sindhi Community Products
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Discover authentic products from trusted Sindhi businesses across various industries
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-36 object-cover"
              />
              <div className="py-3">
                <h3 className="text-sm font-medium text-gray-800">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="px-20 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExploreProduct;
