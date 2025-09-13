import React, { useState } from "react";
import { MapPin, Phone, SlidersHorizontal, Grid, List, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
function VendorsListing() {
  const vendors = [
    {
      name: "Futur",
      category: "Computers & Laptop",
      image: "assets/images/p1.png",
      products: 360,
      since: "2012",
      address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
      phone: "(+91) - 540-025-124553",
      rating: 4.8,
      reviews: 124,
      badges: ["Tech Solutions", "Hardware Expert", "Premium Service"],
    },
    {
      name: "Elmado Property Projects",
      category: "Fashion & Beauty",
      image: "assets/images/p2.png",
      products: 210,
      since: "2016",
      address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
      phone: "(+91) - 540-025-124553",
      rating: 4.6,
      reviews: 89,
      badges: ["Fashion Forward", "Beauty Expert", "Trendy Styles"],
    },
    {
      name: "CostCtrl",
      category: "Sports and Outdoors",
      image: "assets/images/p3.png",
      products: 410,
      since: "2018",
      address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
      phone: "(+91) - 540-025-124553",
      rating: 4.9,
      reviews: 156,
      badges: ["Sports Gear", "Outdoor Adventure", "Quality Equipment"]
    },
    {
      name: "Fasfox",
      category: "Book, Office supplies",
      image: "assets/images/p4.png",
      products: 150,
      since: "2020",
      address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
      phone: "(+91) - 540-025-124553",
      rating: 4.7,
      reviews: 73,
      badges: ["Office Solutions", "Book Collection", "Stationery Expert"]
    },
  ];

  const categories = [
    { name: "All", count: vendors.length },
    { name: "Computers & Laptop", count: 9 },
    { name: "Electric accessories", count: 12 },
    { name: "Fashion & Beauty", count: 24 },
    { name: "Furniture & Appliances", count: 34 },
    { name: "Sports and Outdoors", count: 65 },
    { name: "Food, condiments", count: 15 },
    { name: "Book, Office supplies", count: 76 },
    { name: "Children and mothers", count: 89 },
    { name: "Cars, motorbikes", count: 23 },
    { name: "Other", count: 98 },
  ];

  const tags = [
    "Health",
    "Beauty",
    "Technology",
    "Sports",
    "Kids",
    "Furniture",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Latest added");
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const [viewMode, setViewMode] = useState("grid");

  const filteredVendors =
    selectedCategory === "All"
      ? vendors
      : vendors.filter((vendor) => vendor.category === selectedCategory);

  const sortedVendors = [...filteredVendors].sort((a, b) => {
    if (sortOption === "Name A-Z") return a.name.localeCompare(b.name);
    if (sortOption === "Name Z-A") return b.name.localeCompare(a.name);
    if (sortOption === "Oldest") return a.since.localeCompare(b.since);
    return b.since.localeCompare(a.since);
  });

  return (
    <section className="bg-gray-50 min-h-screen py-10 px-6">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Vendors Listing</h1>
        <p className="text-gray-600">
          We have <span className="font-semibold">{sortedVendors.length}</span>{" "}
          vendors now
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-6">
          {/* Vendor by Industry */}
          <aside className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
              Vendor by Industry
            </h2>
            <ul className="space-y-3">
              {categories.map((cat, i) => (
                <li
                  key={i}
                  className={`flex justify-between items-center cursor-pointer transition ${
                    selectedCategory === cat.name
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  <span>{cat.name}</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-sm text-gray-600">
                    {cat.count}
                  </span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Vendor by Tags */}
          <aside className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
              Vendor by Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded cursor-pointer hover:bg-blue-100 hover:text-blue-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </aside>
          
          {/* Make Money With Us */}
          <aside className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
              Make Money With Us
            </h2>
            <ul className="space-y-3">
              <li className="cursor-pointer text-gray-700 hover:text-blue-600 transition">
                Sell on Our Platform
              </li>
              <li className="cursor-pointer text-gray-700 hover:text-blue-600 transition">
                Become an Affiliate
              </li>
              <li className="cursor-pointer text-gray-700 hover:text-blue-600 transition">
                Advertise Your Products
              </li>
              <li className="cursor-pointer text-gray-700 hover:text-blue-600 transition">
                Vendor Resources
              </li>
            </ul>
          </aside>
        </div>

        {/* Vendor Cards Section */}
        <div className="md:col-span-3">
          {/* Filter + Sort Bar */}
          <div className="bg-white shadow-md rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 mb-6 border">
            {/* All Filters */}
            <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
              <SlidersHorizontal className="w-5 h-5" />
              All Filters
            </button>

            {/* Showing results */}
            <div className="text-gray-600 text-sm">
              Showing <span className="font-semibold">1</span>–
              <span className="font-semibold">
                {Math.min(itemsPerPage, sortedVendors.length)}
              </span>{" "}
              of <span className="font-semibold">{sortedVendors.length}</span>{" "}
              results
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Sort by:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border rounded-md px-2 py-1 text-sm text-gray-700"
              >
                <option>Latest added</option>
                <option>Oldest</option>
                <option>Name A-Z</option>
                <option>Name Z-A</option>
              </select>
            </div>

            {/* Show Items */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Show</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border rounded-md px-2 py-1 text-sm text-gray-700"
              >
                <option value={10}>10 items</option>
                <option value={20}>20 items</option>
                <option value={30}>30 items</option>
                <option value={50}>50 items</option>
              </select>
            </div>

            {/* Grid/List Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 border rounded-md ${
                  viewMode === "grid"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 border rounded-md ${
                  viewMode === "list"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Vendor Cards */}
          {viewMode === "grid" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedVendors.slice(0, itemsPerPage).map((vendor, i) => (
                <div key={i} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  {/* Image Section */}
                  <div className="relative">
                    <img
                      src={vendor.image}
                      alt={vendor.name}
                      className="w-full h-48 object-cover"
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                      <Heart className="w-4 h-4 text-gray-400 hover:text-[#E82600]" />
                    </button>
                    <div className="absolute top-3 left-3 bg-[#053951] text-white px-2 py-1 rounded text-xs font-semibold">
                      ★
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{vendor.name}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm font-semibold text-gray-800">{vendor.rating}</span>
                        <span className="ml-1 text-xs text-gray-500">({vendor.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{vendor.address.substring(0, 30)}...</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {vendor.badges.slice(0, 2).map((badge, idx) => (
                        <span key={idx} className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-700 truncate">
                          {badge.length > 15 ? badge.substring(0, 15) + '...' : badge}
                        </span>
                      ))}
                    </div>

                     <Link
                        to={`/vendor-detail`}
                        className="block w-full text-center bg-[#053951] text-white py-2 rounded-lg hover:bg-[#E31E24] transition-colors text-sm font-medium"
                      >
                        View Details
                      </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedVendors.slice(0, itemsPerPage).map((vendor, i) => (
                <div key={i} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-6">
                    {/* Image Section */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={vendor.image}
                        alt={vendor.name}
                        className="w-48 h-32 object-cover rounded-lg"
                      />
                      <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                        <Heart className="w-4 h-4 text-gray-400 hover:text-[#E82600]" />
                      </button>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{vendor.name}</h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-[#053951] fill-current" />
                          <span className="ml-1 font-semibold text-gray-800">{vendor.rating}</span>
                          <span className="ml-1 text-gray-500">({vendor.reviews} reviews)</span>
                        </div>
                      </div>

                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{vendor.address}</span>
                      </div>

                      <div className="flex items-center text-gray-600 mb-3">
                        <Phone className="w-4 h-4 mr-1" />
                        <span className="text-sm">{vendor.phone}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {vendor.badges.slice(0, 2).map((badge, idx) => (
                          <span key={idx} className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-700">
                            {badge}
                          </span>
                        ))}
                        <span className="text-xs text-gray-500">+{vendor.badges.length - 2} more</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          {vendor.products} Products • Since {vendor.since}
                        </div>
                        <Link
                          to={`/vendor-detail`} 
                          className="bg-[#053951] text-white px-6 py-2 rounded-lg hover:bg-[#E31E24] transition-colors">
                             View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default VendorsListing;