import React from "react";
import { Users, Laptop, BarChart3 } from "lucide-react";

function Hero() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="rounded-tl-[40px] rounded-br-[40px] overflow-hidden">
            <img
              src="https://placehold.co/400x500" 
              alt="Man holding credit card"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute bottom-10 left-10 rounded-[25px] overflow-hidden shadow-lg border-8 border-white">
            <img
              src="https://placehold.co/250x200"
              alt="Woman with laptop"
              className="w-full h-auto object-cover"
            />

            
          </div>
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2">
          <p className="text-sm text-[#053951] font-medium mb-2">
            About Company
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            We Are The Best Online <br /> Payment Gateway Agency
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris minim
            veniam.
          </p>

          {/* Features */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <span className="bg-purple-100 text-[#053951] p-3 rounded-full">
                <Users className="w-6 h-6" />
              </span>
              <div>
                <h4 className="font-semibold text-gray-900">Trusted Partner</h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore eius.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <span className="bg-purple-100 text-[#053951] p-3 rounded-full">
                <Laptop className="w-6 h-6" />
              </span>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Fastpace Platform
                </h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore eius.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <span className="bg-purple-100 text-[#053951] p-3 rounded-full">
                <BarChart3 className="w-6 h-6" />
              </span>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Tested Reliability
                </h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
