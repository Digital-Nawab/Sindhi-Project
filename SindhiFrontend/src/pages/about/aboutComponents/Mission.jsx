import React from "react";
import { Rocket, Globe } from "lucide-react";

function Mission() {
  return (
    <section className="bg-[#053951] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-wide text-cyan-300 mb-4">
            Mission & Vision
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Empowering a Bold Future
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-100 leading-7 max-w-3xl mx-auto">
            Our mission and vision are the cornerstones of our commitment to
            innovation, sustainability, and global impact, driving progress for
            communities and businesses alike.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
          role="region"
          aria-labelledby="mission-vision-heading"
        >
          {/* Mission Card */}
          <div
            className="bg-[#053951] rounded-xl p-6 border border-gray-500 shadow-md hover:bg-teal-500/10 transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none animate-fade-in"
            tabIndex={0}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-cyan-500 p-2 rounded-full text-white">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-100 leading-7">
              To deliver innovative, sustainable, and client-focused solutions
              that empower businesses and communities, fostering transformative
              change and enduring value.
            </p>
          </div>

          {/* Vision Card */}
          <div
            className="bg-[#053951] rounded-xl p-6 border border-gray-500 shadow-md hover:bg-teal-500/10 transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none animate-fade-in"
            tabIndex={0}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-cyan-500 p-2 rounded-full text-white">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-100 leading-7">
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