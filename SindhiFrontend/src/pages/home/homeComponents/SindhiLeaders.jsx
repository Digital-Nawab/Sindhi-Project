import React from "react";
import { Play, Headphones } from "lucide-react";

function SindhiLeaders() {
  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center px-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Voices of <span className="text-[#E82600]">Sindhi Leaders</span>
          </h1>
          <p className="text-gray-700 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Listen to inspiring conversations with Sindhi entrepreneurs,
            cultural leaders, and community builders. Stories of success,
            struggle, and vision for the future.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Section - Latest Episode */}
          <div className="lg:col-span-6 flex">
            <div className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col w-full">
              {/* Background Image */}
              <img
                src="public/assets/images/home/sindhiLeader-bg.jpg"
                alt="Latest Episode"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black opacity-70"></div>

              {/* Overlay Content */}
              <div className="relative p-6 sm:p-8 text-white z-10 flex flex-col justify-between h-full">
                <div>
                  {/* Play Button */}
                  <div className="mb-6 sm:mb-8 flex justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#E82600] rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-all duration-200">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white ml-1" />
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6 text-center">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                      Latest Episode
                    </h2>
                    <span className="text-[#E82600] text-sm sm:text-base font-semibold">
                      Episode #47
                    </span>
                  </div>

                  <div className="bg-white/10 p-3 sm:p-4 rounded-lg">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">
                      The Future of Sindhi Youth
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                      A deep conversation about opportunities and challenges
                      facing young Sindhis today.
                    </p>
                    <div className="flex justify-between items-center text-xs sm:text-sm text-gray-300">
                      <span>Guest: Anita Jaisinghani</span>
                      <span>42 min</span>
                    </div>
                  </div>
                </div>

                {/* Listen Now Button */}
                <div className="flex justify-center mt-6 sm:mt-8">
                  <button className="bg-[#E82600] hover:bg-red-600 text-white px-12 sm:px-24 py-3 sm:py-4 rounded-lg font-semibold flex items-center space-x-2 sm:space-x-3 transition-colors text-sm sm:text-base">
                    <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span>Listen Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Recent Episodes */}
          <div className="lg:col-span-6 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">
              Recent
            </h2>

            <div className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
              {/* Episode 1 */}
              <div className="flex items-center space-x-4 sm:space-x-6 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group shadow-sm flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src="assets/images/home/sindhiLeader1.jpg"
                    alt="Building Sindhi Businesses"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-black mb-1 leading-tight">
                    Building Sindhi Businesses Globally
                  </h3>
                  <p className="text-[#E82600] text-xs sm:text-sm font-medium mb-1">
                    Guest: Dr. Kishan Bherumal
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">45 Min</p>
                </div>
                {/* Play Button */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-gray-300 group-hover:text-gray-700 transition-all">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* Episode 2 */}
              <div className="flex items-center space-x-4 sm:space-x-6 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group shadow-sm flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src="assets/images/home/sindhiLeader2.jpg"
                    alt="Preserving Sindhi Culture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-black mb-1 leading-tight">
                    Preserving Sindhi Culture in Modern Times
                  </h3>
                  <p className="text-[#E82600] text-xs sm:text-sm font-medium mb-1">
                    Guest: Dr. Kishan Bherumal
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">45 Min</p>
                </div>
                {/* Play Button */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-gray-300 group-hover:text-gray-700 transition-all">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* Episode 3 */}
              <div className="flex items-center space-x-4 sm:space-x-6 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group shadow-sm flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src="assets/images/home/sindhiLeader3.jpg"
                    alt="Young Sindhi Entrepreneurs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-black mb-1 leading-tight">
                    Young Sindhi Entrepreneurs
                  </h3>
                  <p className="text-[#E82600] text-xs sm:text-sm font-medium mb-1">
                    Guest: Dr. Kishan Bherumal
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">45 Min</p>
                </div>
                {/* Play Button */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-gray-300 group-hover:text-gray-700 transition-all">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-[#E82600] hover:bg-red-600 text-white px-8 sm:px-24 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base flex items-center justify-center space-x-2 sm:space-x-3 mx-auto transition-colors shadow-md">
            <Headphones className="w-5 h-5" />
            <span>View All Podcast</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SindhiLeaders;
