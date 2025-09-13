import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Star,
  Heart,
  Share2,
  Calendar,
  Package,
  Users,
  Award,
  ArrowLeft,
  CheckCircle,
  Building,
  Target,
  Truck,
  Shield,
  Clock,
  MessageCircle,
  Download,
  Flag,
  MoreHorizontal,
  Camera,
  Play,
  ThumbsUp,
  ChevronRight,
  Factory,
  TrendingUp,
  FileText,
  Plane,
  RotateCcw,
} from "lucide-react";

function VendorDetail() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const vendor2 = {
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
  // Mock vendor data - in real app this would come from props/API
  const vendor = {
    id: 1,
    name: "Sindhi Textiles Ltd.",
    category: "Textiles & Fabrics",
    location: "Mumbai, Maharashtra, India",
    address: "Plot No. 45, Industrial Area, Andheri East, Mumbai - 400069",
    phone: "(+91) 98765-43210",
    email: "contact@sindhitextiles.com",
    website: "www.sindhitextiles.com",
    rating: 4.8,
    reviews: 156,
    years: 25,
    products: 150,
    employees: "50-100",
    established: "1998",
    verified: true,
    responseTime: "Within 4 hours",
    description:
      "Leading manufacturer of premium quality cotton and silk fabrics for global markets with international certifications.",
    longDescription:
      "Sindhi Textiles Ltd. has been at the forefront of textile manufacturing for over 25 years, combining traditional craftsmanship with modern technology. We specialize in premium cotton and silk fabrics, serving both domestic and international markets. Our state-of-the-art facility spans 50,000 sq ft and employs skilled artisans and modern machinery to ensure consistent quality. We are ISO certified and have received multiple awards for export excellence.",

    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586281010691-07d1bde3d1a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],

    badges: [
      "ISO Certified",
      "Export Excellence",
      "Premium Quality",
      "Eco-Friendly",
    ],
    specialties: [
      "Cotton Fabrics",
      "Silk Production",
      "Custom Designs",
      "Bulk Manufacturing",
      "International Export",
    ],
    certifications: [
      "ISO 9001:2015",
      "OEKO-TEX Standard 100",
      "GOTS Certified",
      "Export License",
    ],

    services: [
      "Custom Fabric Manufacturing",
      "Bulk Production",
      "Quality Testing",
      "International Shipping",
      "Design Consultation",
      "Sample Development",
    ],

    portfolio: [
      {
        title: "Premium Cotton Collection",
        description:
          "High-quality cotton fabrics for international fashion brands",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        title: "Silk Heritage Series",
        description: "Traditional silk fabrics with contemporary designs",
        image:
          "https://images.unsplash.com/photo-1586281010691-07d1bde3d1a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        title: "Custom Textile Solutions",
        description: "Bespoke fabric solutions for luxury brands",
        image:
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
    ],

    companyStats: {
      totalOrders: "2,500+",
      countries: "15+",
      capacity: "100,000 meters/month",
      clientRetention: "95%",
    },

    keyPersonnel: [
      {
        name: "Rajesh Sindhi",
        position: "Managing Director",
        experience: "25+ years",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      },
      {
        name: "Priya Sharma",
        position: "Head of Production",
        experience: "15+ years",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b5c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      },
    ],
  };
  const highlights = [
    { icon: Plane, title: "Free Delivery", desc: "From all orders over $10" },
    { icon: MessageCircle, title: "Support 24/7", desc: "Shop with an expert" },
    {
      icon: RotateCcw,
      title: "Return & Refund",
      desc: "Free return over $200",
    },
    { icon: Shield, title: "Secure payment", desc: "100% Protected" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Global Fashion Co.",
      type: "International Client",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Exceptional quality and timely delivery. We've been working with Sindhi Textiles for 3 years and they never disappoint. Highly professional team.",
      helpful: 24,
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      verified: true,
    },
    {
      id: 2,
      name: "Textile Importers LLC",
      type: "Regular Client",
      rating: 5,
      date: "1 month ago",
      comment:
        "Outstanding fabric quality and excellent customer service. Their silk collection is particularly impressive. Competitive pricing too.",
      helpful: 18,
      avatar:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      verified: true,
    },
    {
      id: 3,
      name: "Fashion House Mumbai",
      type: "Domestic Client",
      rating: 4,
      date: "2 months ago",
      comment:
        "Great experience overall. Quick response time and flexible with custom requirements. Will definitely order again.",
      helpful: 12,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      verified: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-gray-900">
                    {vendor.name}
                  </h1>
                  {vendor.verified && (
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      Verified
                    </div>
                  )}
                </div>
                <p className="text-gray-600">{vendor.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className={`p-2 rounded-lg transition-colors ${
                  isFavorited
                    ? "bg-red-50 text-red-600"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`}
                />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreHorizontal className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="shadow-md rounded-xl overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Banner */}
            <div className="lg:col-span-2 relative bg-white rounded-l-xl">
              <img
                src={vendor2.banner}
                alt={vendor2.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-3 grid grid-cols-1 md:grid-cols-4 gap-6 items-center mt-4 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={vendor2.logo}
                    alt={vendor2.name}
                    className="w-16 h-16 object-contain mr-3 rounded-lg"
                  />
                  <span className="text-sm bg-[#053951] text-white px-3 py-1 rounded font-medium">
                    {vendor2.products} Products
                  </span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#4A90A4] mb-1">
                    {vendor2.name}
                  </h1>
                  <p className="text-sm text-gray-500 mb-1">
                    Member since {vendor2.since}
                  </p>
                  <div className="flex items-center">
                    <div className="flex text-orange-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= Math.round(vendor2.rating)
                              ? "fill-current"
                              : ""
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-700 ml-1">
                      ({vendor2.reviews})
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{vendor2.address}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">{vendor2.phone1}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">{vendor2.phone2}</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
           

            {/* Company Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 rounded-2xl bg-red-50">
                  <Factory className="w-12 h-12 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {vendor.name}
                  </h2>
                  <p className="text-xl text-red-600 font-medium mb-4">
                    {vendor.category}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-semibold text-gray-900">
                        {vendor.rating}
                      </span>
                      <span className="text-gray-500">
                        ({vendor.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span>{vendor.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span>Since {vendor.established}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5" />
                      <span>{vendor.employees} employees</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center bg-blue-50 rounded-xl p-4">
                  <Target className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-lg text-gray-900">
                    {vendor.companyStats.totalOrders}
                  </div>
                  <div className="text-sm text-gray-600">Orders Completed</div>
                </div>
                <div className="text-center bg-green-50 rounded-xl p-4">
                  <Globe className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-lg text-gray-900">
                    {vendor.companyStats.countries}
                  </div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center bg-purple-50 rounded-xl p-4">
                  <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-lg text-gray-900">
                    {vendor.companyStats.capacity}
                  </div>
                  <div className="text-sm text-gray-600">Monthly Capacity</div>
                </div>
                <div className="text-center bg-orange-50 rounded-xl p-4">
                  <Award className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="font-bold text-lg text-gray-900">
                    {vendor.companyStats.clientRetention}
                  </div>
                  <div className="text-sm text-gray-600">Client Retention</div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="flex space-x-8">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "products", label: "Products & Services" },
                    { id: "portfolio", label: "Portfolio" },
                    { id: "reviews", label: `Reviews (${vendor.reviews})` },
                    { id: "company", label: "Company Info" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        selectedTab === tab.id
                          ? "border-red-500 text-red-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              {selectedTab === "overview" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      About Company
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {vendor.longDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Specializations
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {vendor.specialties.map((specialty, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                          <span className="text-blue-700 font-medium">
                            {specialty}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Key Personnel
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {vendor.keyPersonnel.map((person, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                        >
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {person.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {person.position}
                            </p>
                            <p className="text-xs text-gray-500">
                              {person.experience} experience
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === "products" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Products & Services
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {vendor.services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-gray-900">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Certifications
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {vendor.certifications.map((cert, index) => (
                        <div
                          key={index}
                          className="text-center p-4 bg-green-50 rounded-lg"
                        >
                          <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                          <span className="text-sm font-medium text-green-700">
                            {cert}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === "portfolio" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Recent Projects
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vendor.portfolio.map((project, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-xl overflow-hidden"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {project.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTab === "reviews" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">
                      Customer Reviews
                    </h3>
                    <button className="text-red-600 hover:text-red-700 font-medium">
                      Write Review
                    </button>
                  </div>

                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-gray-200 pb-6 last:border-b-0"
                      >
                        <div className="flex items-start gap-4">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                              <div>
                                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                                  {review.name}
                                  {review.verified && (
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                  )}
                                </h4>
                                <p className="text-sm text-gray-500">
                                  {review.type}
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? "text-yellow-500 fill-current"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-gray-500 text-sm">
                                {review.date}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-3">
                              {review.comment}
                            </p>
                            <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700 text-sm">
                              <ThumbsUp className="w-4 h-4" />
                              Helpful ({review.helpful})
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTab === "company" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Company Information
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Established</span>
                          <span className="font-medium">
                            {vendor.established}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Team Size</span>
                          <span className="font-medium">
                            {vendor.employees}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Response Time</span>
                          <span className="font-medium text-green-600">
                            {vendor.responseTime}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Product Range</span>
                          <span className="font-medium">
                            {vendor.products}+ items
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Contact Details
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">
                            {vendor.address}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">
                            {vendor.phone}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">
                            {vendor.email}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Globe className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">
                            {vendor.website}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 ">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  Get Quote
                </div>
                <div className="text-gray-600">
                  Request pricing and availability
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">Response time:</span>
                  <span className="font-medium text-green-600">
                    {vendor.responseTime}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{vendor.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Truck className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">Worldwide</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setShowContactForm(!showContactForm)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact Vendor
                </button>
                <button className="w-full border border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Request Call Back
                </button>
              </div>

              {showContactForm && (
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold mb-4">Send Inquiry</h4>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="text"
                      placeholder="Product/Service Required"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <textarea
                      placeholder="Detailed requirements..."
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      Send Inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Experience</span>
                  <span className="font-bold text-blue-600">
                    {vendor.years} years
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Products</span>
                  <span className="font-bold text-green-600">
                    {vendor.products}+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-bold text-yellow-600">
                    {vendor.rating}/5
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Reviews</span>
                  <span className="font-bold text-purple-600">
                    {vendor.reviews}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-gray-500" />
                  <span>Download Company Profile</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <FileText className="w-5 h-5 text-gray-500" />
                  <span>Request Catalog</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Globe className="w-5 h-5 text-gray-500" />
                  <span>Visit Website</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Flag className="w-5 h-5 text-gray-500" />
                  <span>Report Vendor</span>
                </button>
              </div>
            </div>

            {/* Similar Vendors */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Similar Vendors
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Premium Fabrics Ltd.",
                    category: "Textiles",
                    rating: 4.6,
                    image:
                      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                  },
                  {
                    name: "Global Textile House",
                    category: "Textiles",
                    rating: 4.7,
                    image:
                      "https://images.unsplash.com/photo-1586281010691-07d1bde3d1a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                  },
                  {
                    name: "Silk Masters Co.",
                    category: "Textiles",
                    rating: 4.5,
                    image:
                      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                  },
                ].map((similarVendor, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <img
                      src={similarVendor.image}
                      alt={similarVendor.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">
                        {similarVendor.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {similarVendor.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium">
                        {similarVendor.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-red-600 hover:text-red-700 font-medium text-sm">
                View All Similar Vendors
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorDetail;
