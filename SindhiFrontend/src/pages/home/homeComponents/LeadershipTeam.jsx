import React from "react";
import { Youtube, Facebook, Linkedin } from "lucide-react";

const LeadershipTeam = () => {
  return (
    <div className="w-full bg-[#053951] text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership <span className="text-red-500">Team</span>
          </h1>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto">
            Meet the visionary leaders driving our community forward
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Founder Card */}
          <div className="bg-white rounded-3xl p-8 border-4 border-red-500">
            {/* Profile Image */}
            <div className="text-center mb-6">
              <div className="inline-block relative">
                <img
                  src="/assets/images/home/founder.png"
                  alt="Amit Hirwani"
                  className="w-48 h-48 rounded-2xl object-cover mx-auto mb-4"
                />
                <div className="inline-block bg-[#CCDEFF] text-[#0250DF] px-4 py-2 rounded-full text-sm font-medium">
                  Founder & Chairman
                </div>
              </div>
            </div>

            {/* Name */}
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
              Amit Hirwani
            </h2>

            {/* Description */}
            <p className="text-gray-900 text-lg  text-center leading-relaxed mb-8">
              Serial entrepreneur with 25+ years of experience in building
              global businesses. Passionate advocate for Sindhi culture and
              community development worldwide.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6">
              <button className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Founder's Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-8">Our Founder's Story</h2>

            <p className="text-slate-100 leading-relaxed text-lg">
              Born in a traditional Sindhi family in Mumbai, Amit witnessed the
              challenges faced by the Sindhi community in preserving their
              cultural identity while adapting to modern times.
            </p>

            <p className="text-slate-100 leading-relaxed text-lg">
              After building successful businesses across continents, he
              realized the immense potential of connecting Sindhi entrepreneurs
              and professionals globally. This vision led to the creation of
              this platform.
            </p>

            <p className="text-slate-100 leading-relaxed text-lg">
              His mission is to ensure that future generations remain connected
              to their roots while thriving in the global economy.
            </p>

            {/* Quote Box */}
            <div className="bg-white rounded-2xl p-6 border-l-4 border-red-500 mt-8">
              <p className="text-slate-900 text-lg italic leading-relaxed mb-4">
                "Our strength lies in unity, our future in preserving our
                heritage while embracing innovation."
              </p>
              <p className="text-slate-900 font-medium">
                – Amit Hirwani, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;
