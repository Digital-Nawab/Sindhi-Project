import React from "react";
import { Eye, Target, Heart } from "lucide-react";

const OurPurpose = () => {
  return (
    <div className="w-full container mx-auto px-6 py-16 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
           Purpose of SEW Connect
         </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Guided by our shared heritage and common goals
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Vision Card */}
        <div className="relative shadow-xl bg-blue-100 rounded-2xl p-8 overflow-hidden">
          {/* Background decorative circle */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gray-100/10 border-8 border-black rounded-full opacity-30"></div>

          {/* Icon */}
          <div className="relative z-10 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
            <Eye className="w-8 h-8 text-white" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-900 text-lg  leading-relaxed">
              To create the largest global network of Sindhis, fostering
              connections that transcend borders and generations.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="relative bg-[#FFE7E2] rounded-2xl p-8 overflow-hidden shadow-xl">
          {/* Background decorative circle */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gray-100/10 border-8 border-black/60 rounded-full opacity-30"></div>

          {/* Icon */}
          <div className="relative z-10 w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-900 text-lg  leading-relaxed">
              Empowering Sindhis worldwide through business opportunities,
              cultural preservation, and community support.
            </p>
          </div>
        </div>

        {/* Values Card */}
        <div className="relative shadow-xl bg-yellow-50 rounded-2xl p-8 overflow-hidden">
          {/* Background decorative circle */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gray-100/10 border-8 border-black rounded-full opacity-30"></div>

          {/* Icon */}
          <div className="relative z-10 w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-900 text-lg  leading-relaxed">
              Unity, integrity, and cultural pride guide everything we do. We
              believe in collective growth and mutual support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPurpose;
