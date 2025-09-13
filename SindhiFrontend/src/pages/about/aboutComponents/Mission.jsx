import React from "react";
import { Rocket, Globe } from "lucide-react";

function Mission() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        {/* Vision & Mission Badge */}
        <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md mb-8 group hover:shadow-lg transition-all duration-300">
          <div className="w-3 h-3 bg-[#E31E24] rounded-full group-hover:scale-110 transition-transform"></div>
          <span className="text-gray-700 text-sm font-semibold">
            Mission & Vision
          </span>
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          role="region"
          aria-labelledby="mission-vision-heading"
        >
          {/* Left Column - Heading and Description */}
          <div className="space-y-6">
            <h1
              className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight"
              id="mission-vision-heading"
            >
              Empowering a Bold Future
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              Our mission and vision are the cornerstones of our commitment to
              innovation, sustainability, and global impact, driving progress for
              communities and businesses alike.
            </p>
          </div>

          {/* Right Column - Vision and Mission Cards */}
          <div className="space-y-6">
            {/* Vision Card */}
            <div
              className="bg-[#053951] rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#053951] hover:to-[#0A6B8C] focus:ring-2 focus:ring-[#053951] focus:outline-none"
              tabIndex={0}
            >
              <div className="flex justify-between items-start relative">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Our Vision
                  </h2>
                  <p className="text-gray-100 text-base leading-7 pr-4">
                    To lead as a global innovator, redefining industries and
                    building a sustainable future where opportunities for growth
                    and impact are accessible to all.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#E31E24] rounded-2xl flex items-center justify-center group-hover:bg-[#E31E24]/80 transition-colors duration-300">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div
              className="bg-[#E31E24] rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#E31E24] hover:to-[#FF4D4F] focus:ring-2 focus:ring-[#E31E24] focus:outline-none"
              tabIndex={0}
            >
              <div className="flex justify-between items-start relative">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Our Mission
                  </h2>
                  <p className="text-gray-100 text-base leading-7 pr-4">
                    To deliver innovative, sustainable, and client-focused
                    solutions that empower businesses and communities, fostering
                    transformative change and enduring value.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#053951] rounded-2xl flex items-center justify-center group-hover:bg-[#053951]/80 transition-colors duration-300">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;