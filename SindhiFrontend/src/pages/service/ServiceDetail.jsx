import React, { useState } from "react";
import {
  Calculator,
  Star,
  MapPin,
  Briefcase,
  Users,
  Mail,
  Phone,
  Clock,
  Award,
  ArrowLeft,
  Share2,
  Heart,
  CheckCircle,
  MessageCircle,
  Globe,
  Shield,
  Download,
  ThumbsUp,
  MoreHorizontal,
  Flag,
} from "lucide-react";
import Layout from "../../layout/Layout";


function ServiceDetail() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Mock service data - in real app this would come from props/API
  const service = {
    id: 1,
    title: "Chartered Accountant Services",
    provider: "CA Rajesh Sharma & Associates",
    category: "Professional Services",
    location: "Jaipur, Rajasthan",
    rating: 4.8,
    reviews: 127,
    totalClients: 450,
    price: "₹2,500/consultation",
    priceRange: "₹1,500 - ₹5,000",
    description:
      "Expert financial consulting, tax planning, and audit services for businesses of all sizes. We provide comprehensive accounting solutions with over 15 years of experience in the industry.",
    longDescription:
      "Our firm specializes in providing comprehensive financial services to businesses ranging from small startups to large enterprises. With a team of experienced chartered accountants, we ensure compliance with all financial regulations while optimizing your tax strategies. Our services include financial auditing, tax planning, GST compliance, company incorporation, and ongoing financial advisory services.",
    badge: "Hand Picked & Verified",
    experience: "15+ years",
    availability: "Available",
    responseTime: "Within 2 hours",
    languages: ["Hindi", "English", "Rajasthani"],
    established: "2008",
    teamSize: "12 professionals",
    specialties: [
      "Tax Planning",
      "Financial Audit",
      "GST Compliance",
      "Company Registration",
      "Financial Advisory",
      "Investment Planning",
    ],
    serviceArea: ["Jaipur", "Udaipur", "Jodhpur", "Online consultations"],
    certifications: [
      "Institute of Chartered Accountants of India",
      "GST Practitioner",
      "ISO 9001:2015 Certified",
    ],
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    portfolio: [
      {
        title: "Annual Financial Audit - Tech Startup",
        description:
          "Complete financial audit and compliance for a growing tech company",
        image:
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        title: "GST Implementation - Retail Chain",
        description: "Seamless GST implementation for a 50+ store retail chain",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        title: "Tax Optimization - Manufacturing Unit",
        description: "Strategic tax planning resulting in 25% savings",
        image:
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
    ],
  };

  const reviews = [
    {
      id: 1,
      name: "Amit Agarwal",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Excellent service! CA Rajesh helped us with our annual audit and GST compliance. Very professional and knowledgeable. Highly recommended!",
      helpful: 12,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 4,
      date: "1 month ago",
      comment:
        "Great experience with tax planning. The team is responsive and provides clear explanations. Good value for money.",
      helpful: 8,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 3,
      name: "Vikash Kumar",
      rating: 5,
      date: "2 months ago",
      comment:
        "Outstanding service for our company incorporation. Everything was handled professionally and completed on time.",
      helpful: 15,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  const packages = [
    {
      name: "Basic Consultation",
      price: "₹1,500",
      duration: "1 hour",
      features: [
        "Tax advice",
        "Basic compliance check",
        "Q&A session",
        "Email follow-up",
      ],
    },
    {
      name: "Complete Audit",
      price: "₹25,000",
      duration: "2-3 weeks",
      features: [
        "Full financial audit",
        "Compliance report",
        "Recommendations",
        "Ongoing support",
        "Documentation",
      ],
      popular: true,
    },
    {
      name: "Annual Retainer",
      price: "₹50,000/year",
      duration: "12 months",
      features: [
        "Monthly consultations",
        "GST filing",
        "Tax planning",
        "Audit support",
        "Priority support",
        "Document management",
      ],
    },
  ];

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
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h1>
                  <p className="text-gray-600">{service.provider}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 rounded-lg transition-colors ${
                    isLiked
                      ? "bg-red-50 text-red-600"
                      : "hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video relative">
                  <img
                    src={service.images[selectedImageIndex]}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold border ${getBadgeColor(
                        service.badge
                      )}`}
                    >
                      <Award className="w-4 h-4 inline mr-1" />
                      {service.badge}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex gap-2 overflow-x-auto">
                  {service.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImageIndex === index
                          ? "border-blue-500"
                          : "border-gray-200"
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start gap-6 mb-8">
                  <div className="p-4 rounded-2xl bg-gray-50">
                    <Calculator className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-4">
                      {service.provider}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="font-semibold text-gray-900">
                          {service.rating}
                        </span>
                        <span className="text-gray-500">
                          ({service.reviews} reviews)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5" />
                        <span>{service.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Briefcase className="w-5 h-5" />
                        <span>{service.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-5 h-5" />
                        <span>{service.totalClients}+ clients</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-8">
                  <nav className="flex space-x-8">
                    {[
                      { id: "overview", label: "Overview" },
                      { id: "portfolio", label: "Portfolio" },
                      { id: "reviews", label: `Reviews (${service.reviews})` },
                      { id: "about", label: "About" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setSelectedTab(tab.id)}
                        className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                          selectedTab === tab.id
                            ? "border-blue-500 text-blue-600"
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
                        Service Description
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.longDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Specialties
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {service.specialties.map((specialty, index) => (
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
                        Service Areas
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.serviceArea.map((area, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {area}
                          </span>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.portfolio.map((project, index) => (
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
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
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
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-4 mb-2">
                                <h4 className="font-semibold text-gray-900">
                                  {review.name}
                                </h4>
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
                              <p className="text-gray-600 mb-3">
                                {review.comment}
                              </p>
                              <div className="flex items-center gap-4 text-sm">
                                <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                                  <ThumbsUp className="w-4 h-4" />
                                  Helpful ({review.helpful})
                                </button>
                                <button className="text-gray-500 hover:text-gray-700">
                                  Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTab === "about" && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Business Info
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Established</span>
                            <span className="font-medium">
                              {service.established}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Team Size</span>
                            <span className="font-medium">
                              {service.teamSize}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Response Time</span>
                            <span className="font-medium text-green-600">
                              {service.responseTime}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.languages.map((language, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                            >
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Certifications
                      </h3>
                      <div className="space-y-3">
                        {service.certifications.map((cert, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                          >
                            <Shield className="w-5 h-5 text-green-600" />
                            <span className="text-green-700 font-medium">
                              {cert}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-white rounded-2xl z-50 shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {service.price}
                  </div>
                  <div className="text-gray-600">Starting price</div>
                  <div className="text-sm text-gray-500">
                    Range: {service.priceRange}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Response time:</span>
                    <span className="font-medium text-green-600">
                      {service.responseTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{service.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Availability:</span>
                    <span className="font-medium text-green-600">
                      {service.availability}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setShowContactForm(!showContactForm)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contact Provider
                  </button>
                  <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Request Call Back
                  </button>
                </div>

                {showContactForm && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold mb-4">Send Message</h4>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <textarea
                        placeholder="Describe your requirements..."
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                        Send Message
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Service Packages */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Service Packages
                </h3>
                <div className="space-y-4">
                  {packages.map((pkg, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border-2 relative ${
                        pkg.popular
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute -top-2 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          Most Popular
                        </span>
                      )}
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {pkg.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {pkg.duration}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-gray-900">
                            {pkg.price}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-1 mb-4">
                        {pkg.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 flex items-center gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                          pkg.popular
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "border border-gray-300 hover:border-blue-600 hover:text-blue-600"
                        }`}
                      >
                        Select Package
                      </button>
                    </div>
                  ))}
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
                    <span>Download Profile</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <Flag className="w-5 h-5 text-gray-500" />
                    <span>Report Profile</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <Globe className="w-5 h-5 text-gray-500" />
                    <span>Visit Website</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServiceDetail;
