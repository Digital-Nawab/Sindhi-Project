import React from "react";
import { Rocket, Globe } from "lucide-react";

function Mission() {
  return (
    <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-red-900/30"></div>

      <div className="container mx-auto px-6 lg:px-32 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-red-400 font-medium mb-4 animate-fade-in">
            Mission & Vision
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-red-300 animate-slide-up">
            Empowering a Bold Future
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto animate-fade-in delay-100">
            Our mission and vision are the cornerstones of our commitment to
            innovation, sustainability, and global impact, driving progress for
            communities and businesses alike.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-10 relative">
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-200"></div>

          {/* Mission Card */}
          <div
            className="relative group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-xl 
                          hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 
                          hover:scale-105 hover:bg-white/10"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-red-500/10 
                            opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl"
            ></div>

            <div className="flex items-center gap-5 mb-6 relative z-10">
              <div className="bg-blue-600 p-3 rounded-full text-white shadow-md group-hover:shadow-lg transition duration-500">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
            </div>

            <p className="text-gray-300 leading-relaxed text-base relative z-10 transition-opacity duration-500 group-hover:opacity-90">
              To deliver innovative, sustainable, and client-focused solutions
              that empower businesses and communities, fostering transformative
              change and enduring value.
            </p>
          </div>

          {/* Vision Card */}
          <div
            className="relative group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-xl 
                          hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 
                          hover:scale-105 hover:bg-white/10"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-blue-500/10 
                            opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl"
            ></div>

            <div className="flex items-center gap-5 mb-6 relative z-10">
              <div className="bg-red-600 p-3 rounded-full text-white shadow-md group-hover:shadow-lg transition duration-500">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
            </div>

            <p className="text-gray-300 leading-relaxed text-base relative z-10 transition-opacity duration-500 group-hover:opacity-90">
              To lead as a global innovator, redefining industries and building
              a sustainable future where opportunities for growth and impact are
              accessible to all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
