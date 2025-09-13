import React from "react";
import { Truck, Headphones, Gift, Package, ShieldCheck } from "lucide-react";

function FreeDelivery() {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Delivery",
      desc: "From all orders over $10",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Support 24/7",
      desc: "Shop with an expert",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Gift Voucher",
      desc: "Refer a friend",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Return & Refund",
      desc: "Free return over $200",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Secure Payment",
      desc: "100% Protected",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-32">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#053951]">
            Why Shop With Us
          </h2>
          <p className="text-gray-500 mt-2">
            We make your shopping experience smooth and reliable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 border rounded-2xl bg-white 
                         shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${feature.color} mb-4`}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="font-semibold text-gray-900 text-lg">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FreeDelivery;
