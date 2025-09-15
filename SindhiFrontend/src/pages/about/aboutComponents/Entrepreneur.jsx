import React from "react";
import { ArrowRight, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

function SindhiEntrepreneur() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-6"
      style={{
        backgroundImage: "url('assets/images/bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#09246BCC]"></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Are you a <span className="text-[#E82600]">Sindhi Entrepreneur?</span>
        </h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-12">
          Join 1000+ verified vendors and grow your business with us. Connect
          with customers across India and build your digital presence.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#6F5445] text-[#E82600] mb-4">
              <ArrowRight className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Boost Sales</h3>
            <p className="text-gray-300 text-sm">
              Increase your revenue with our <br /> targeted customer base
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#6F5445] text-[#E82600] mb-4">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Community Network</h3>
            <p className="text-gray-300 text-sm">
              Connect with like-minded Sindhi <br /> entrepreneurs
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#6F5445] text-[#E82600] mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Verified Badge</h3>
            <p className="text-gray-300 text-sm">
              Build trust with our verification <br /> system
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mb-12">
          <Link to="/become-vendor">
            <button className="bg-[#E82600] hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-md">
              Register As Seller
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
            Learn More
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="border-t-2 border-gray-500 pt-6 mt-6">
          <p className="text-gray-300 mb-4 text-xl">
            Trusted by leading Sindhi businesses
          </p>
          <div className="flex flex-wrap justify-center gap-10 text-xl text-gray-200">
            <span>Mumbai Traders</span>
            <span>Pune Jewelers</span>
            <span>Delhi Services</span>
            <span>Bangalore Tech</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SindhiEntrepreneur;
