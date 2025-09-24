import React from 'react';
import { Users, Globe, Briefcase } from 'lucide-react';

const HowWeAchieveThis = () => {
  return (
    <div className="w-full container mx-auto px-6 my-8 py-16 bg-gray-50 rounded-xl shadow border">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl  font-bold text-gray-900">
          How We Achieve This
        </h1>
      </div>

      {/* Achievement Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Empower Sindhi Youth */}
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex w-20 h-20  rounded-2xl items-center justify-center mb-6" style={{
            background: "linear-gradient(66.31deg, #E82600 10.16%, #381109 97.74%)"

          }}>
            <Users className="w-10 h-10 text-white" />
          </div>
          
          {/* Content */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Empower Sindhi Youth
          </h2>
          <p className="text-gray-900 text-lg  leading-relaxed max-w-sm mx-auto">
            Provide opportunities and mentorship for the next generation
          </p>
        </div>

        {/* Connect Businesses */}
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex w-20 h-20  rounded-2xl items-center justify-center mb-6" style={{
            background: "linear-gradient(66.31deg, #E82600 10.16%, #381109 97.74%)"

          }}>
            <Globe className="w-10 h-10 text-white" />
          </div>
          
          {/* Content */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Connect Businesses
          </h2>
          <p className="text-gray-900 text-lg  leading-relaxed max-w-sm mx-auto">
            Bridge professionals and enterprises across the globe
          </p>
        </div>

        {/* Preserve Traditions */}
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex w-20 h-20  rounded-2xl items-center justify-center mb-6" style={{
            background: "linear-gradient(66.31deg, #E82600 10.16%, #381109 97.74%)"

          }}>
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          
          {/* Content */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Preserve Traditions
          </h2>
          <p className="text-gray-900 text-lg  leading-relaxed max-w-sm mx-auto">
            Keep Sindhi culture alive in the digital era
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeAchieveThis;