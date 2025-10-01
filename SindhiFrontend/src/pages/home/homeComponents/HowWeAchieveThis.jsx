import React from 'react';
import { Building2, BookOpen, Podcast, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowWeAchieveThis = () => {
  return (
    <div className="w-full container mx-auto px-6 my-8 py-16 bg-gray-50 rounded-xl shadow border">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900">
          How SEW Connect Achieve Its Goals
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Three powerful initiatives connecting Sindhu entrepreneurs worldwide
        </p>
      </div>

      {/* Achievement Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* City-Based Chapters */}
        <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
          {/* Icon */}
          <div className="inline-flex w-20 h-20 rounded-2xl items-center justify-center mb-6" style={{
            background: "linear-gradient(66.31deg, #E82600 10.16%, #381109 97.74%)"
          }}>
            <Building2 className="w-10 h-10 text-white" />
          </div>
          
          {/* Content */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            City-Based Chapters
          </h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-sm mx-auto mb-6">
            Local hubs bringing entrepreneurs together through regular meetings, 
            networking events, and leadership committees. Each chapter connects 
            diverse businesses while linking to our global ecosystem.
          </p>
          
          {/* Learn More Link */}
          <Link 
            to="/chapters" 
            className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group-hover:underline transition-all"
          >
            Learn More 
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Sindhu Connect Directory */}
        <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
          {/* Icon */}
          <div className="inline-flex w-20 h-20 rounded-2xl items-center justify-center mb-6" style={{
            background: "linear-gradient(66.31deg, #E82600 10.16%, #381109 97.74%)"
          }}>
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          
          {/* Content */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sindhu Connect Directory
          </h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-sm mx-auto mb-6">
            A global business listing platform with verified entrepreneurs and 
            professionals. Discover businesses by category, city, or industry 
            with advanced SEO for worldwide visibility and growth.
          </p>
          
          {/* Learn More Link */}
          <Link 
            to="/directory" 
            className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group-hover:underline transition-all"
          >
            Explore Directory 
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Jewels of SEW Connect Podcast */}
        <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
          {/* Icon */}
          <div className="inline-flex w-20 h-20 rounded-2xl items-center justify-center mb-6" style={{
            background: "linear-gradient(66.31deg, #E82600 10.16%, #381109 97.74%)"
          }}>
            <Podcast className="w-10 h-10 text-white" />
          </div>
          
          {/* Content */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Jewels of SEW Connect
          </h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-sm mx-auto mb-6">
            Our official podcast celebrating visionaries and changemakers through 
            inspiring stories, leadership insights, and entrepreneurial journeys. 
            Stories that connect, inspire, and empower our community.
          </p>
          
          {/* Learn More Link */}
          <Link 
            to="/podcast" 
            className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group-hover:underline transition-all"
          >
            Listen Now 
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowWeAchieveThis;