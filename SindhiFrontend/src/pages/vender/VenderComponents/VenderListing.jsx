import React, { useState } from "react";
import {
  MapPin,
  Phone,
  SlidersHorizontal,
  Grid,
  List,
  Heart,
  Star,
  Calendar,
  Package,
  Search,
  Filter,
  ChevronDown,
  Award,
  Users,
  Globe,
  Mail
} from "lucide-react";

function VendorListing() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [sortOption, setSortOption] = useState("Latest added");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState(new Set());

  const vendors = [
    {
      id: 1,
      name: "Sindhi Textiles Ltd.",
      category: "Textiles & Fabrics",
      location: "Mumbai, Maharashtra",
      phone: "(+91) 98765-43210",
      email: "contact@sindhitextiles.com",
      website: "www.sindhitextiles.com",
      rating: 4.8,
      reviews: 156,
      years: 25,
      products: 150,
      employees: "50-100",
      description: "Leading manufacturer of premium quality cotton and silk fabrics for global markets with international certifications.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badges: ["ISO Certified", "Export Excellence", "Premium Quality"],
      specialties: ["Cotton Fabrics", "Silk Production", "Custom Designs"],
      established: "1998",
      verified: true
    },
    {
      id: 2,
      name: "TechnoSind Solutions",
      category: "Electronics & Technology",
      location: "Bangalore, Karnataka",
      phone: "(+91) 98765-43211",
      email: "info@technosind.com",
      website: "www.technosind.com",
      rating: 4.9,
      reviews: 203,
      years: 15,
      products: 85,
      employees: "100-200",
      description: "Innovation-driven technology solutions provider specializing in software development and IT consulting services.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badges: ["Tech Leader", "Innovation Award", "Client Satisfaction"],
      specialties: ["Software Development", "Cloud Solutions", "AI/ML"],
      established: "2008",
      verified: true
    },
    {
      id: 3,
      name: "Spice World Exports",
      category: "Food & Beverages",
      location: "Delhi, NCR",
      phone: "(+91) 98765-43212",
      email: "exports@spiceworld.com",
      website: "www.spiceworldexports.com",
      rating: 4.7,
      reviews: 134,
      years: 20,
      products: 200,
      employees: "25-50",
      description: "Premium spice exporters with organic certification, serving international markets for two decades.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badges: ["Organic Certified", "Export Quality", "Global Reach"],
      specialties: ["Organic Spices", "International Trade", "Quality Assurance"],
      established: "2003",
      verified: true
    },
    {
      id: 4,
      name: "Leather Craft Masters",
      category: "Fashion & Accessories",
      location: "Kanpur, Uttar Pradesh",
      phone: "(+91) 98765-43213",
      email: "info@leathercraftmasters.com",
      website: "www.leathercraftmasters.com",
      rating: 4.6,
      reviews: 98,
      years: 30,
      products: 120,
      employees: "30-50",
      description: "Artisan leather goods manufacturer with traditional craftsmanship and modern design aesthetics.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badges: ["Handcrafted", "Premium Leather", "Export Ready"],
      specialties: ["Leather Bags", "Footwear", "Custom Design"],
      established: "1993",
      verified: false
    },
    {
      id: 5,
      name: "Golden Jewels House",
      category: "Jewelry & Gems",
      location: "Jaipur, Rajasthan",
      phone: "(+91) 98765-43214",
      email: "contact@goldenjewels.com",
      website: "www.goldenjewelshouse.com",
      rating: 4.9,
      reviews: 267,
      years: 35,
      products: 500,
      employees: "75-100",
      description: "Traditional jewelry makers specializing in gold, silver, and precious stone jewelry with modern designs.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badges: ["Heritage Brand", "Precious Stones", "Custom Jewelry"],
      specialties: ["Gold Jewelry", "Precious Stones", "Wedding Collection"],
      established: "1988",
      verified: true
    },
    {
      id: 6,
      name: "MedSupply Corporation",
      category: "Healthcare & Medical",
      location: "Chennai, Tamil Nadu",
      phone: "(+91) 98765-43215",
      email: "info@medsupplycorp.com",
      website: "www.medsupplycorp.com",
      rating: 4.8,
      reviews: 189,
      years: 18,
      products: 300,
      employees: "100-150",
      description: "Medical equipment and supplies distributor serving healthcare facilities across South India.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badges: ["FDA Approved", "Medical Grade", "Reliable Supply"],
      specialties: ["Medical Equipment", "Surgical Supplies", "Diagnostic Tools"],
      established: "2005",
      verified: true
    }
  ];

  const categories = [
    { name: "All", count: vendors.length },
    { name: "Textiles & Fabrics", count: 1 },
    { name: "Electronics & Technology", count: 1 },
    { name: "Food & Beverages", count: 1 },
    { name: "Fashion & Accessories", count: 1 },
    { name: "Jewelry & Gems", count: 1 },
    { name: "Healthcare & Medical", count: 1 }
  ];

  const locations = [
    "All Locations",
    "Mumbai, Maharashtra",
    "Bangalore, Karnataka",
    "Delhi, NCR",
    "Kanpur, Uttar Pradesh",
    "Jaipur, Rajasthan",
    "Chennai, Tamil Nadu"
  ];

  const toggleFavorite = (vendorId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(vendorId)) {
        newFavorites.delete(vendorId);
      } else {
        newFavorites.add(vendorId);
      }
      return newFavorites;
    });
  };

  const filteredVendors = vendors.filter(vendor => {
    const categoryMatch = selectedCategory === "All" || vendor.category === selectedCategory;
    const locationMatch = selectedLocation === "All Locations" || vendor.location === selectedLocation;
    const searchMatch = 
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && locationMatch && searchMatch;
  });

  const sortedVendors = [...filteredVendors].sort((a, b) => {
    switch (sortOption) {
      case "Name A-Z":
        return a.name.localeCompare(b.name);
      case "Name Z-A":
        return b.name.localeCompare(a.name);
      case "Highest Rated":
        return b.rating - a.rating;
      case "Most Experienced":
        return b.years - a.years;
      default:
        return b.established.localeCompare(a.established);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Vendor Directory
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Connect with verified vendors and grow your business network
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-2xl mx-auto">
              <div className="flex items-center">
                <Search className="w-6 h-6 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search vendors, categories, or locations..."
                  className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none rounded-l-xl"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filter Vendors
              </h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">By Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex justify-between items-center p-2 rounded-lg transition-colors text-left ${
                        selectedCategory === category.name
                          ? "bg-blue-100 text-blue-700 font-medium"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">By Location</h4>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Vendors</span>
                  <span className="font-bold text-blue-600">{vendors.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Verified</span>
                  <span className="font-bold text-green-600">
                    {vendors.filter(v => v.verified).length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Categories</span>
                  <span className="font-bold text-purple-600">{categories.length - 1}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Controls Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-gray-600">
                  Showing <span className="font-semibold">{Math.min(itemsPerPage, sortedVendors.length)}</span> of{" "}
                  <span className="font-semibold">{sortedVendors.length}</span> vendors
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort Options */}
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Sort by:</span>
                    <select
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Latest added</option>
                      <option>Name A-Z</option>
                      <option>Name Z-A</option>
                      <option>Highest Rated</option>
                      <option>Most Experienced</option>
                    </select>
                  </div>

                  {/* View Toggle */}
                  <div className="flex items-center gap-1 border border-gray-300 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded transition-colors ${
                        viewMode === "grid"
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded transition-colors ${
                        viewMode === "list"
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Vendor Cards */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedVendors.slice(0, itemsPerPage).map((vendor) => (
                  <div
                    key={vendor.id}
                    className="bg-white border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={vendor.image}
                        alt={vendor.name}
                        className="w-full h-48 object-cover"
                      />
                      <button
                        onClick={() => toggleFavorite(vendor.id)}
                        className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            favorites.has(vendor.id)
                              ? "text-red-500 fill-current"
                              : "text-gray-400"
                          }`}
                        />
                      </button>
                      {vendor.verified && (
                        <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Verified
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{vendor.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-semibold text-gray-900">{vendor.rating}</span>
                        </div>
                      </div>

                      <p className="text-red-600 font-medium mb-2">{vendor.category}</p>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{vendor.location}</span>
                      </div>

                      <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                        {vendor.description}
                      </p>

                      <div className="flex justify-between mb-4">
                        <div className="text-center bg-gray-50 rounded-lg p-2 flex-1 mx-1">
                          <Calendar className="w-5 h-5 text-red-600 mx-auto mb-1" />
                          <p className="font-semibold text-sm">{vendor.years}</p>
                          <p className="text-xs text-gray-600">Years</p>
                        </div>
                        <div className="text-center bg-gray-50 rounded-lg p-2 flex-1 mx-1">
                          <Package className="w-5 h-5 text-red-600 mx-auto mb-1" />
                          <p className="font-semibold text-sm">{vendor.products}</p>
                          <p className="text-xs text-gray-600">Products</p>
                        </div>
                        <div className="text-center bg-gray-50 rounded-lg p-2 flex-1 mx-1">
                          <Users className="w-5 h-5 text-red-600 mx-auto mb-1" />
                          <p className="font-semibold text-sm">{vendor.employees}</p>
                          <p className="text-xs text-gray-600">Team</p>
                        </div>
                      </div>

                      <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors">
                        View Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedVendors.slice(0, itemsPerPage).map((vendor) => (
                  <div
                    key={vendor.id}
                    className="bg-white border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                  >
                    <div className="flex gap-6">
                      <div className="relative flex-shrink-0">
                        <img
                          src={vendor.image}
                          alt={vendor.name}
                          className="w-32 h-24 object-cover rounded-lg"
                        />
                        {vendor.verified && (
                          <div className="absolute -top-2 -right-2 bg-green-600 text-white p-1 rounded-full">
                            <Award className="w-3 h-3" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{vendor.name}</h3>
                            <p className="text-red-600 font-medium">{vendor.category}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-semibold">{vendor.rating}</span>
                              <span className="text-gray-500">({vendor.reviews})</span>
                            </div>
                            <button
                              onClick={() => toggleFavorite(vendor.id)}
                              className="p-1"
                            >
                              <Heart
                                className={`w-4 h-4 ${
                                  favorites.has(vendor.id)
                                    ? "text-red-500 fill-current"
                                    : "text-gray-400"
                                }`}
                              />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{vendor.location}</span>
                        </div>

                        <div className="flex items-center text-gray-600 mb-3">
                          <Phone className="w-4 h-4 mr-1" />
                          <span className="text-sm">{vendor.phone}</span>
                        </div>

                        <p className="text-gray-700 text-sm mb-4">{vendor.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{vendor.years} years experience</span>
                            <span>{vendor.products} products</span>
                            <span>{vendor.employees} employees</span>
                          </div>
                          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                            View Details →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More */}
            {sortedVendors.length > itemsPerPage && (
              <div className="text-center">
                <button
                  onClick={() => setItemsPerPage(prev => prev + 12)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
                >
                  Load More Vendors
                </button>
              </div>
            )}

            {/* No Results */}
            {sortedVendors.length === 0 && (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No vendors found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your filters or search terms to find vendors.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorListing;