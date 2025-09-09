import React from "react";
import { MapPin, Phone, Star } from "lucide-react";
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
      id: 1,
      name: "Fasfox",
      image: "assets/images/p1.png",
      rating: 4.7,
      reviews: 73,
      address: "5171 W Campbell Ave, undefined, AZ",
      tags: ["Office Solution", "Book Collection"],
      featured: true,
    },
    {
      id: 2,
      name: "SmartX",
      image: "assets/images/p2.png",
      rating: 4.5,
      reviews: 41,
      address: "123 Main Street, NY",
      tags: ["Gadgets", "Wearables"],
      featured: false,
    },
    {
      id: 3,
      name: "ElectroHub",
      image: "assets/images/p3.png",
      rating: 4.8,
      reviews: 58,
      address: "45 Park Avenue, LA",
      tags: ["Electronics", "Smart Devices"],
      featured: true,
    },
    {
      id: 3,
      name: "ElectroHub",
      image: "assets/images/p3.png",
      rating: 4.8,
      reviews: 58,
      address: "45 Park Avenue, LA",
      tags: ["Electronics", "Smart Devices"],
      featured: true,
    },
    {
      id: 3,
      name: "ElectroHub",
      image: "assets/images/p3.png",
      rating: 4.8,
      reviews: 58,
      address: "45 Park Avenue, LA",
      tags: ["Electronics", "Smart Devices"],
      featured: true,
    },
  ];
 
   const highlights = [
    {
      icon: Plane,
      title: "Free Delivery",
      desc: "From all orders over $10",
    },
    {
      icon: MessageCircle,
      title: "Support 24/7",
      desc: "Shop with an expert",
    },
    {
      icon: RotateCcw,
      title: "Return & Refund",
      desc: "Free return over $200",
    },
    {
      icon: Shield,
      title: "Secure payment",
      desc: "100% Protected",
    },
  ];
  return (
    <section className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Vendor Header */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Banner + Vendor Info */}
            <div className="lg:col-span-3 relative">
              <img
                src={vendor.banner}
                alt={vendor.name}
                className="w-full h-64 object-cover"
              />
              {/* Vendor Info */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="left-4 rounded-xl flex items-center">
                  <img 
                    src={vendor.logo}
                    alt=""
                    className="w-16 h-16 object-contain mr-3 rounded-lg"
                  />
                  <div>
                    <span className="text-sm bg-[#053951] text-white px-3 py-1 rounded font-medium">
                      {vendor.products} Products
                    </span>
                  </div>
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
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
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
            <div className="space-y-6 p-6 bg-gray-50 rounded-r-xl">
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

        {/* Products Section (Unchanged) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {venderCard.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition">
                  ❤️
                </button>
                {item.featured && (
                  <div className="absolute top-3 left-3 bg-[#053951] text-white px-2 py-1 rounded text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
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
                  <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                  <span className="text-sm truncate">{item.address}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/product/${item.id}`}
                  className="block w-full text-center bg-[#053951] text-white py-2 rounded-lg hover:bg-[#E31E24] transition text-sm font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VendorDetail;