import React, { useState } from "react";
import {
  Calculator,
  FileText,
  Scale,
  GraduationCap,
  Building2,
  Stethoscope,
  PenTool,
  Store,
  Package,
  Truck,
  Users,
  MapPin,
  Star,
  Search,
  Filter,
  ChevronDown,
  Mail,
  Phone,
  Clock,
  Award,
  Briefcase,
} from "lucide-react";
import Layout from "../../layout/Layout";

function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [searchTerm, setSearchTerm] = useState("");

  const serviceCategories = [
    "All Services",
    "Professional Services",
    "Business Services",
    "Educational Services",
    "Healthcare Services",
    "Trading & Distribution",
  ];

  const locations = [
    "All Locations",
    "Agra",
    "Udaipur",
    "Ajmer",
    "Gwalior",
    "Jaipur",
    "Indore",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
  ];

  const services = [
    {
      id: 1,
      title: "Chartered Accountant Services",
      provider: "CA Rajesh Sharma & Associates",
      category: "Professional Services",
      location: "Jaipur",
      rating: 4.8,
      reviews: 127,
      price: "₹2,500/consultation",
      description:
        "Expert financial consulting, tax planning, and audit services for businesses of all sizes",
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      badge: "Hand Picked & Verified",
      experience: "15+ years",
      availability: "Available",
      specialties: ["Tax Planning", "Financial Audit", "GST Compliance"],
    },
    {
      id: 2,
      title: "Company Secretary Services",
      provider: "Legal Corporate Solutions",
      category: "Professional Services",
      location: "Mumbai",
      rating: 4.9,
      reviews: 89,
      price: "₹5,000/month",
      description:
        "Complete corporate compliance, company incorporation, and legal documentation services",
      icon: <FileText className="w-8 h-8 text-green-600" />,
      badge: "Management Member",
      experience: "12+ years",
      availability: "Available",
      specialties: ["Company Law", "Board Meetings", "Compliance"],
    },
    {
      id: 3,
      title: "Tax Consultant",
      provider: "TaxPro Consultancy",
      category: "Professional Services",
      location: "Delhi",
      rating: 4.7,
      reviews: 156,
      price: "₹1,800/hour",
      description:
        "Specialized tax consultation for individuals and businesses, GST and income tax filing",
      icon: <Calculator className="w-8 h-8 text-purple-600" />,
      badge: "Category Rep",
      experience: "10+ years",
      availability: "Busy",
      specialties: ["Income Tax", "GST", "Tax Saving"],
    },
    {
      id: 4,
      title: "Legal Services (Civil & Criminal)",
      provider: "Advocate Priya Mehta",
      category: "Professional Services",
      location: "Indore",
      rating: 4.6,
      reviews: 94,
      price: "₹3,000/case",
      description:
        "Comprehensive legal services covering civil disputes, criminal cases, and legal documentation",
      icon: <Scale className="w-8 h-8 text-red-600" />,
      badge: "Associate Member",
      experience: "8+ years",
      availability: "Available",
      specialties: ["Civil Law", "Criminal Law", "Property Disputes"],
    },
    {
      id: 5,
      title: "Educational Services - Tutoring",
      provider: "EduExcellence Institute",
      category: "Educational Services",
      location: "Agra",
      rating: 4.9,
      reviews: 203,
      price: "₹800/hour",
      description:
        "Professional tutoring services for competitive exams, school curriculum and skill development",
      icon: <GraduationCap className="w-8 h-8 text-orange-600" />,
      badge: "Hand Picked & Verified",
      experience: "20+ years",
      availability: "Available",
      specialties: ["JEE/NEET", "Board Exams", "Skill Development"],
    },
    {
      id: 6,
      title: "Architecture & Design Services",
      provider: "Creative Spaces Architects",
      category: "Professional Services",
      location: "Udaipur",
      rating: 4.8,
      reviews: 67,
      price: "₹150/sq ft",
      description:
        "Innovative architectural design, interior planning, and construction supervision services",
      icon: <PenTool className="w-8 h-8 text-teal-600" />,
      badge: "Management Member",
      experience: "14+ years",
      availability: "Available",
      specialties: [
        "Residential Design",
        "Commercial Spaces",
        "Interior Design",
      ],
    },
    {
      id: 7,
      title: "Medical Practice & Surgery",
      provider: "Dr. Anil Kumar Clinic",
      category: "Healthcare Services",
      location: "Jaipur",
      rating: 4.9,
      reviews: 312,
      price: "₹500/consultation",
      description:
        "Expert medical consultation, surgical procedures, and comprehensive healthcare services",
      icon: <Stethoscope className="w-8 h-8 text-pink-600" />,
      badge: "Hand Picked & Verified",
      experience: "18+ years",
      availability: "Available",
      specialties: ["General Surgery", "Cardiology", "Preventive Care"],
    },
    {
      id: 8,
      title: "Wholesale Distribution",
      provider: "Global Trade Solutions",
      category: "Trading & Distribution",
      location: "Gwalior",
      rating: 4.7,
      reviews: 145,
      price: "Contact for pricing",
      description:
        "Large-scale wholesale distribution services across multiple product categories and regions",
      icon: <Package className="w-8 h-8 text-indigo-600" />,
      badge: "Category Rep",
      experience: "12+ years",
      availability: "Available",
      specialties: ["Bulk Trading", "Supply Chain", "Logistics"],
    },
    {
      id: 9,
      title: "C&F Agent Services",
      provider: "FastForward Logistics",
      category: "Trading & Distribution",
      location: "Mumbai",
      rating: 4.6,
      reviews: 98,
      price: "2.5% commission",
      description:
        "Carrying and forwarding agent services for efficient goods distribution and warehousing",
      icon: <Truck className="w-8 h-8 text-yellow-600" />,
      badge: "Associate Member",
      experience: "9+ years",
      availability: "Available",
      specialties: ["Warehousing", "Transportation", "Inventory Management"],
    },
    {
      id: 10,
      title: "Administrative Services",
      provider: "BizSupport Solutions",
      category: "Business Services",
      location: "Indore",
      rating: 4.8,
      reviews: 176,
      price: "₹15,000/month",
      description:
        "Complete administrative support, documentation, and business process management services",
      icon: <Briefcase className="w-8 h-8 text-gray-600" />,
      badge: "General Member",
      experience: "7+ years",
      availability: "Available",
      specialties: ["Documentation", "Process Management", "Virtual Assistant"],
    },
  ];

  const filteredServices = services.filter((service) => {
    const categoryMatch =
      selectedCategory === "All Services" ||
      service.category === selectedCategory;
    const locationMatch =
      selectedLocation === "All Locations" ||
      service.location === selectedLocation;
    const searchMatch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && locationMatch && searchMatch;
  });

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Hand Picked & Verified":
        return "bg-green-100 text-green-800 border-green-200";
      case "Management Member":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Category Rep":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Associate Member":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Professional Services
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {" "}
                  Marketplace
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Connect with verified professionals and grow your business with
                expert services
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-2xl mx-auto">
                <div className="flex items-center">
                  <Search className="w-6 h-6 text-gray-400 ml-4" />
                  <input
                    type="text"
                    placeholder="Search for services, professionals, or expertise..."
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

        {/* Filters Section */}
        <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Filter by:</span>
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {serviceCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-600 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Location Filter */}
              <div className="relative">
                <select
                  className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-600 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="ml-auto text-sm text-gray-600">
                {filteredServices.length} services found
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                >
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 font-medium">
                            {service.provider}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Badge and Status */}
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeColor(
                          service.badge
                        )}`}
                      >
                        <Award className="w-3 h-3 inline mr-1" />
                        {service.badge}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          service.availability === "Available"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        <Clock className="w-3 h-3 inline mr-1" />
                        {service.availability}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Specialties */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-semibold text-gray-900">
                          {service.rating}
                        </span>
                        <span className="text-gray-500">
                          ({service.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{service.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Briefcase className="w-4 h-4" />
                        <span>{service.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-sm text-gray-600">
                          Starting from
                        </span>
                        <div className="text-xl font-bold text-gray-900">
                          {service.price}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4" />
                        Contact Now
                      </button>
                      <button className="p-3 border border-gray-300 hover:border-blue-600 hover:text-blue-600 rounded-xl transition-colors">
                        <Phone className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {filteredServices.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-xl transition-colors">
                  Load More Services
                </button>
              </div>
            )}

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No services found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your filters or search terms to find what
                    you're looking for.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Services;
