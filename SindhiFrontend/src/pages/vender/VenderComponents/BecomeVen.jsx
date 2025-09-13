import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Building2,
  FileText,
  MapPin,
  User,
  ClipboardList,
  Star,
  Users,
  TrendingUp,
  Shield,
  Phone,
  Mail,
  Award,
} from "lucide-react";

function BecomeVen() {
  const [agree, setAgree] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community First",
      desc: "Join 8,500+ Sindhi businesses already thriving on our platform",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Business Growth",
      desc: "Average 250% revenue increase within first year",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trusted Platform",
      desc: "Secure payments with 24x7 Sindhi language support",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Priority Listing",
      desc: "Featured placement in community-preferred categories",
    },
  ];

  const testimonials = [
    {
      name: "Ramesh Maharchandani",
      business: "Maharchandani Electronics, Ulhasnagar",
      quote:
        "My monthly sales increased by 300% in just 6 months! Getting the trust of the Sindhi community is the biggest achievement.",
      revenue: "₹2.5L/month",
    },
    {
      name: "Sunita Khubchandani",
      business: "Khubchandani Fashion Boutique, Mumbai",
      quote:
        "The community support here is incredible. Now my clothes sell all across India.",
      revenue: "₹4L/month",
    },
    {
      name: "Ashok Panjwani",
      business: "Panjwani Grocery Store, Pune",
      quote:
        "Finally found a platform that understands our business needs and culture.",
      revenue: "₹1.8L/month",
    },
  ];

  const stats = [
    {
      number: "8,500+",
      title: "Sindhi Vendors",
      subtitle: "Active Sindhi Vendors",
    },
    { number: "₹450 Crores", title: "Annual Sales", subtitle: "Annual GMV" },
    {
      number: "15 Lakh+",
      title: "Happy Customers",
      subtitle: "Happy Customers",
    },
    { number: "85%", title: "Success Rate", subtitle: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-red-50 to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-1/4 -left-20 w-60 h-60 bg-red-200 rounded-full opacity-15 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-25 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-900 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-bounce"></div>
          <div
            className="absolute top-32 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div
          className={`relative container mx-auto px-6 py-16 text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-pulse">
            <span className="text-sm font-medium text-black">
              🎯 Exclusively for Sindhi Community
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            New Business Opportunity
            <span className="block text-blue-300 animate-pulse">
              for Sindhi Community
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join India's fastest growing marketplace designed exclusively for
            the Sindhi business community. Connect with customers who value our
            heritage and quality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 text-blue-100 mb-8">
            <div className="flex items-center gap-2 bg-white bg-opacity-10 rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-blue-900" />
              <span className="font-medium text-black">8,500+ Sindhi Vendors</span>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-10 rounded-full px-4 py-2">
              <TrendingUp className="w-5 h-5 text-blue-900" />
              <span className="font-medium text-black">₹450+ Crores Annual Sales</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-400 text-red-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-300 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Register Now 🚀
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Learn More 📖
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-gray-600 text-lg">
              Numbers that show the level you'll be working at
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`text-center transform hover:scale-105 transition-all duration-300 ${
                  isVisible ? "animate-fadeInUp" : ""
                }`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-6 hover:shadow-lg border border-blue-100">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                    {stat.number}
                  </h3>
                  <p className="font-semibold text-gray-900 mb-1 text-sm md:text-base">
                    {stat.title}
                  </p>
                  <p className="text-xs text-gray-600">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-gray-600 text-lg">
              Built with deep understanding of Sindhi business culture and needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border-l-4 border-blue-500 hover:border-red-500 transition-all duration-300 hover:scale-105 transform ${
                  isVisible ? "animate-slideInUp" : ""
                }`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Community Success Stories
            </h2>
            <p className="text-gray-600 text-lg">
              See how Sindhi entrepreneurs are succeeding with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm hover:shadow-lg border-l-4 border-blue-500 transition-all duration-300 hover:scale-105 transform ${
                  isVisible ? "animate-slideInUp" : ""
                }`}
                style={{ animationDelay: `${idx * 250}ms` }}
              >
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-blue-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 text-sm mb-1">
                    {testimonial.business}
                  </p>
                  <div className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {testimonial.revenue}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Registration Form */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className=" mx-auto">
            <div
              className={`bg-white rounded-2xl shadow-xl border border-blue-100 p-8 md:p-12 transition-all duration-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  🚀 Register Your Business
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Fill out the form below to join our exclusive Sindhi vendor
                  network. Our team will contact you within 24 hours.
                </p>
              </div>

              {/* Important Terms */}
              <div className="bg-gradient-to-r from-blue-100 to-red-100 border-l-4 border-blue-500 p-6 rounded-lg mb-8 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Special Terms for Sindhi Community
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-blue-700 text-sm">
                  <ul className="space-y-2">
                    <li>
                      • <strong>Commission:</strong> Only 2-4% per transaction
                      (lowest in industry)
                    </li>
                    <li>
                      • <strong>Setup Fee:</strong> Completely free for first 6
                      months
                    </li>
                    <li>
                      • <strong>Dedicated Support:</strong> Sindhi Community
                      Manager
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Priority:</strong> Top listing in relevant
                      categories
                    </li>
                    <li>
                      • <strong>Training:</strong> Digital marketing in
                      Hindi/Sindhi
                    </li>
                    <li>
                      • <strong>Quick Payments:</strong> Money in account within
                      24 hours
                    </li>
                  </ul>
                </div>
              </div>

              {/* Registration Form */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400 group-hover:text-blue-600 transition-colors" />
                      <input
                        type="text"
                        placeholder="Enter your business name"
                        className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 transition-all duration-300 hover:shadow-md hover:border-blue-300"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GST Number - Optional
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400 group-hover:text-blue-600 transition-colors" />
                      <input
                        type="text"
                        placeholder="Enter GST number (if available)"
                        className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 transition-all duration-300 hover:shadow-md hover:border-blue-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Complete Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-blue-400 group-hover:text-blue-600 transition-colors" />
                    <textarea
                      rows="3"
                      placeholder="Enter complete address with city and pin code"
                      className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 transition-all duration-300 hover:shadow-md hover:border-blue-300 resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Owner Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400 group-hover:text-blue-600 transition-colors" />
                    <input
                      type="text"
                      placeholder="Enter owner's full name"
                      className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 transition-all duration-300 hover:shadow-md hover:border-blue-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Type *
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 transition-all duration-300 hover:shadow-md hover:border-blue-300 appearance-none">
                        <option value="">Select company type</option>
                        <option value="sole">Sole Proprietorship</option>
                        <option value="partnership">Partnership</option>
                        <option value="pvtltd">Private Limited</option>
                        <option value="llp">
                          Limited Liability Partnership (LLP)
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Category *
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 transition-all duration-300 hover:shadow-md hover:border-blue-300 appearance-none">
                        <option value="">Select main category</option>
                        <option value="electronics">
                          Electronics and Mobile
                        </option>
                        <option value="fashion">Fashion and Clothing</option>
                        <option value="grocery">Grocery and Food Items</option>
                        <option value="home">Home and Living</option>
                        <option value="jewelry">Jewelry and Accessories</option>
                        <option value="books">Books and Stationery</option>
                        <option value="health">Health and Beauty</option>
                        <option value="automotive">Automotive</option>
                        <option value="handicrafts">
                          Handicrafts and Artwork
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your business
                  </label>
                  <div className="relative">
                    <ClipboardList className="absolute left-3 top-3 w-5 h-5 text-blue-400 group-hover:text-blue-600 transition-colors" />
                    <textarea
                      rows="5"
                      placeholder="Tell us about your business, products, experience..."
                      className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 transition-all duration-300 hover:shadow-md hover:border-blue-300 resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={agree}
                      onChange={() => setAgree(!agree)}
                      className="mt-1 h-5 w-5 border-blue-300 rounded text-blue-600 focus:ring-blue-500 transition-all duration-300"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-gray-700 leading-relaxed"
                    >
                      I accept that I have read the{" "}
                        <Link
                          to="/term-condition"
                          className="text-blue-600 font-medium hover:underline transition-colors"
                        >
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/privacy-policy"
                          className="text-blue-600 font-medium hover:underline transition-colors"
                        >
                          Privacy Policy
                        </Link>
                      and agree to them. I understand that this platform is
                      designed exclusively for the Sindhi community.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  disabled={!agree}
                  className={`w-full py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 transform ${
                    agree
                      ? "bg-gradient-to-r from-blue-600 to-blue-900 text-white hover:from-blue-700 hover:to-red-700 hover:scale-[1.02] active:scale-[0.98] shadow-blue-300"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {agree
                    ? "🚀 Submit Registration"
                    : "Please accept terms first"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default BecomeVen;
