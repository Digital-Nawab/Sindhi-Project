import React from "react";
import {
  Truck,
  Shield,
  Headphones,
  CreditCard,
  Globe,
  Users,
} from "lucide-react";

function FeaturedService() {
  const services = [
    {
      id: 1,
      icon: <Truck className="w-6 h-6 text-red-500" />,
      title: "Logistics & Shipping",
      company: "FastTrack Logistics",
      desc: "Reliable shipping and logistics solutions for your business needs",
    },
    {
      id: 2,
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Business Insurance",
      company: "Secure Guard Insurance",
      desc: "Comprehensive insurance coverage for businesses and products",
    },
    {
      id: 3,
      icon: <Headphones className="w-6 h-6 text-red-500" />,
      title: "Customer Support",
      company: "Support Pro Services",
      desc: "24/7 customer support solutions for your business operations",
    },
    {
      id: 4,
      icon: <CreditCard className="w-6 h-6 text-red-500" />,
      title: "Payment Solutions",
      company: "PayEasy Systems",
      desc: "Secure payment processing and financial transaction services",
    },
    {
      id: 5,
      icon: <Globe className="w-6 h-6 text-red-500" />,
      title: "Digital Marketing",
      company: "WebBoost Marketing",
      desc: "Online marketing and digital presence enhancement services",
    },
    {
      id: 6,
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: "HR Consulting",
      company: "TalentHub Consultancy",
      desc: "Human resources and talent management consulting services",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Services
          </h2>
          <p className="text-gray-600 mt-2">
            Professional services to support and grow your business operations
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col p-6"
            >
              {/* Icon + Text in one row */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 flex items-center justify-center border border-red-500 rounded-lg shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-red-500 font-medium text-sm">
                    {service.company}
                  </p>
                  <p className="text-gray-600 text-sm mt-2 flex-grow">
                    {service.desc}
                  </p>
                  <button className="mt-2 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded">
                    Contact Now
                  </button>
                </div>
              </div>

              {/* Description */}

              {/* Button */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedService;
