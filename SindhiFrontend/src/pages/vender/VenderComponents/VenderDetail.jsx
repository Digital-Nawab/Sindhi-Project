import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Star,
  SlidersHorizontal,
  Grid,
  List,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Plane, MessageCircle, RotateCcw, Shield } from "lucide-react";

function VendorDetail() {
  const vendor = {
    name: "Fasfox Coporation",
    products: 360,
    since: "2012",
    rating: 4.5,
    reviews: 65,
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    phone1: "(+91) - 540-025-124553",
    phone2: "(+91) - 540-025-235688",
    banner: "/assets/images/vender-detail.png",
    logo: "/assets/images/p4.png",
  };

  const venderCard = [
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
      badges: ["Sports Gear", "Outdoor Adventure", "Quality Equipment"],
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
      badges: ["Office Solutions", "Book Collection", "Stationery Expert"],
    },
  ];

  const highlights = [
    { icon: Plane, title: "Free Delivery", desc: "From all orders over $10" },
    { icon: MessageCircle, title: "Support 24/7", desc: "Shop with an expert" },
    { icon: RotateCcw, title: "Return & Refund", desc: "Free return over $200" },
    { icon: Shield, title: "Secure payment", desc: "100% Protected" },
  ];

  // State
  const [sortOption, setSortOption] = useState("Latest added");
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const [viewMode, setViewMode] = useState("grid");

  const sortedVendors = [...venderCard].sort((a, b) => {
    if (sortOption === "Name A-Z") return a.name.localeCompare(b.name);
    if (sortOption === "Name Z-A") return b.name.localeCompare(a.name);
    if (sortOption === "Oldest") return a.since.localeCompare(b.since);
    return b.since.localeCompare(a.since);
  });

  return (
    <section className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Banner & Highlights */}
        <div className="shadow-md rounded-xl overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Banner */}
            <div className="lg:col-span-3 relative bg-white rounded-l-xl">
              <img
                src={vendor.banner}
                alt={vendor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-3 grid grid-cols-1 md:grid-cols-4 gap-6 items-center mt-4 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={vendor.logo}
                    alt={vendor.name}
                    className="w-16 h-16 object-contain mr-3 rounded-lg"
                  />
                  <span className="text-sm bg-[#053951] text-white px-3 py-1 rounded font-medium">
                    {vendor.products} Products
                  </span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#4A90A4] mb-1">
                    {vendor.name}
                  </h1>
                  <p className="text-sm text-gray-500 mb-1">
                    Member since {vendor.since}
                  </p>
                  <div className="flex items-center">
                    <div className="flex text-orange-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= Math.round(vendor.rating)
                              ? "fill-current"
                              : ""
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-700 ml-1">
                      ({vendor.reviews})
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{vendor.address}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">{vendor.phone1}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">{vendor.phone2}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-8 p-6 bg-gray-100 rounded-r-xl">
              {highlights.map((highlight, idx) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-base">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {highlight.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white shadow-md rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 mb-6 border">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
            <SlidersHorizontal className="w-5 h-5" />
            All Filters
          </button>

          <div className="text-gray-600 text-sm">
            Showing <span className="font-semibold">1</span>–
            <span className="font-semibold">
              {Math.min(itemsPerPage, sortedVendors.length)}
            </span>{" "}
            of <span className="font-semibold">{sortedVendors.length}</span>{" "}
            results
          </div>

          {/* Sort */}
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

          {/* Show */}
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

          {/* View Mode */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 border rounded-md ${
                viewMode === "grid" ? "bg-blue-600 text-white" : "text-gray-600"
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 border rounded-md ${
                viewMode === "list" ? "bg-blue-600 text-white" : "text-gray-600"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products */}
        {viewMode === "grid" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedVendors.slice(0, itemsPerPage).map((item, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                    <Heart className="w-4 h-4 text-gray-400 hover:text-[#E82600]" />
                  </button>
                  <div className="absolute top-3 left-3 bg-[#053951] text-white px-2 py-1 rounded text-xs font-semibold">
                      ★
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                      {item.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-semibold text-gray-800">
                        {item.rating}
                      </span>
                      <span className="ml-1 text-xs text-gray-500">
                        ({item.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">
                      {item.address.substring(0, 30)}...
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.badges.slice(0, 2).map((badge, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-700 truncate"
                      >
                        {badge.length > 15
                          ? badge.substring(0, 15) + "..."
                          : badge}
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
            {sortedVendors.slice(0, itemsPerPage).map((item, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-6">
                  {/* Image Section */}
                  <div className="relative flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-48 h-32 object-cover rounded-lg"
                    />
                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                      <Heart className="w-4 h-4 text-gray-400 hover:text-[#E82600]" />
                    </button>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-[#053951] fill-current" />
                        <span className="ml-1 font-semibold text-gray-800">
                          {item.rating}
                        </span>
                        <span className="ml-1 text-gray-500">
                          ({item.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{item.address}</span>
                    </div>

                    <div className="flex items-center text-gray-600 mb-3">
                      <Phone className="w-4 h-4 mr-1" />
                      <span className="text-sm">{item.phone}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.badges.slice(0, 2).map((badge, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-700"
                        >
                          {badge}
                        </span>
                      ))}
                      {item.badges.length > 2 && (
                        <span className="text-xs text-gray-500">
                          +{item.badges.length - 2} more
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        {item.products} Products • Since {item.since}
                      </div>
                      <Link
                        to={`/vendor-detail`}
                        className="bg-[#053951] text-white px-6 py-2 rounded-lg hover:bg-[#E31E24] transition-colors"
                      >
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
    </section>
  );
}

export default VendorDetail;
