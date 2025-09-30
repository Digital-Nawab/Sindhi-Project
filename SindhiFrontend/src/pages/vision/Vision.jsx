import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Package,
  Briefcase,
  Users,
  TrendingUp,
} from "lucide-react";
import Layout from "../../layout/Layout";

const SEWConnectPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chaptersOpen, setChaptersOpen] = useState(false);

  const offerings = [
    {
      icon: Package,
      title: "Products",
      description:
        "Discover Products Supplied By Handpicked & Verified SEW Connect Members",
      gradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: Briefcase,
      title: "Services",
      description:
        "Discover Services By Handpicked & SEW Connect Professionals",
      gradient: "from-purple-50 to-pink-50",
    },
    {
      icon: Users,
      title: "Hiring",
      description:
        "Check for jobs Offered by SEW Connect Members in Their Organisations",
      gradient: "from-green-50 to-emerald-50",
    },
    {
      icon: TrendingUp,
      title: "Angel Investors",
      description:
        "Get your startup funded by SEW Connect Pool of Angel Investors",
      gradient: "from-orange-50 to-amber-50",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Navigation */}

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission Section - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* Mission Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">
                  Our Mission
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p>
                    At Sindhu Entrepreneurs' World Connect (SEW Connect), our
                    mission is to empower Sindhu entrepreneurs, professionals,
                    and leaders worldwide by creating a trusted platform for
                    meaningful connections, collaboration, and growth.
                  </p>
                  <p>
                    We believe that business success is built on relationships,
                    shared opportunities, and the spirit of "Givers Gain." SEW
                    Connect brings together members of the global Sindhu
                    community to:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        <strong>Network Globally, Grow Locally</strong> – build
                        strong city chapters while staying connected to a
                        worldwide community.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        <strong>Promote Entrepreneurship & Innovation</strong> –
                        showcase products, services, skills, and ideas across
                        borders.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        <strong>Foster Collaboration & Support</strong> – open
                        doors to partnerships, mentorship, investments, and job
                        opportunities.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        <strong>Preserve and Advance Sindhu Legacy</strong> –
                        honor our roots in trade and entrepreneurship while
                        embracing a modern, global business ecosystem.
                      </span>
                    </li>
                  </ul>
                  <p>
                    SEW Connect is more than a platform – it is a movement to
                    unite, uplift, and inspire Sindhu entrepreneurs everywhere
                    to achieve collective prosperity.
                  </p>
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-6 text-center mt-6">
                    <p className="text-2xl font-bold">
                      "जब जुड़ेगा सिंधु, तभी बढ़ेगा सिंधु"
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">
                  Our Vision
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p>
                    To become the world's most trusted and vibrant Sindhu
                    entrepreneurial ecosystem, where every entrepreneur,
                    professional, and leader feels connected, supported, and
                    inspired to achieve their fullest potential.
                  </p>
                  <p>We envision a future where:</p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        <strong>Global Sindhus are seamlessly united</strong>{" "}
                        through a powerful digital and physical network of
                        chapters across continents.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        <strong>Entrepreneurs thrive together</strong> by
                        exchanging opportunities, referrals, and mentorship in a
                        spirit of collaboration.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        <strong>Innovation and tradition blend</strong>,
                        carrying forward the Sindhu community's legacy of trade
                        and enterprise into the modern global marketplace.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        <strong>Collective prosperity uplifts society</strong>,
                        as business success translates into community
                        development, social impact, and generational wealth.
                      </span>
                    </li>
                  </ul>
                  <p>
                    SEW Connect aspires to be recognized worldwide as the go-to
                    platform for Sindhu entrepreneurship, enabling members to
                    not only grow their businesses but also create a legacy of
                    unity, trust, and progress.
                  </p>
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-6 text-center mt-6">
                    <p className="text-2xl font-bold">
                      "सशक्त सिंधु, समृद्ध सिंधु"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Offerings Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                  SEWConnect Offerings
                </h3>
                <div className="space-y-4">
                  {offerings.map((offering, index) => {
                    const Icon = offering.icon;
                    return (
                      <div
                        key={index}
                        className={`bg-gradient-to-br ${offering.gradient} rounded-xl p-5 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg`}
                      >
                        <div className="flex items-center mb-3">
                          <div className="bg-blue-600 text-white rounded-lg p-2 mr-3">
                            <Icon className="w-6 h-6" />
                          </div>
                          <h4 className="text-lg font-bold text-gray-800">
                            {offering.title}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {offering.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg mb-2">Contact Us</p>
            <p className="text-blue-200">sewconnect@gmail.com</p>
            <p className="mt-4 text-sm text-blue-300">
              © 2025 SEW Connect. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default SEWConnectPage;
