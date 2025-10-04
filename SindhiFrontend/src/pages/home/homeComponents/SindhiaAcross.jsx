import React from "react";

function SindhiaAcross() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-[#E82600] via-[#E51ED1] via-[#D41CE7] to-[#0250DF] rounded-lg text-center py-8 sm:py-10 lg:py-8 px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16">
          <p className="text-3xl sm:text-4xl lg:text-5xl text-white font-light mb-3 sm:mb-4">
            “
          </p>

          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-2 leading-snug">
           जय सिंध, जय सिंध, जाम-ए-मुहब्बत पिये सिंध
          </h2>

          {/* <p className="text-base sm:text-xl lg:text-2xl font-semibold text-white mb-2 leading-relaxed">
            "Unite together, build the Sindhi community"
          </p> */}

          <p className="text-xs sm:text-sm lg:text-base text-white">
            — Hyder Bux Jatoi
          </p>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Sindhi <span className="text-[#E82600]">Community Across</span> the
            Globe
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Each city chapter organizes events, meetups, and cultural programs.
            <br />
            Join your local Sindhi chapter today!
          </p>
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* New Delhi */}
          <div className="relative rounded-lg overflow-hidden shadow-md lg:col-span-2">
            <img
              src="assets/images/home/delhi.jpg"
              alt="New Delhi"
              className="w-full h-60 lg:h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg">MUMBAI + THANE</h3>
              <p className="text-gray-200 text-sm">7,00,000++ Members</p>
            </div>
          </div>

          {/* Mumbai */}
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <img
              src="assets/images/home/mumbai.jpg"
              alt="Mumbai"
              className="w-full h-60 lg:h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg">Ahemdabad + Gandhinagar</h3>
              <p className="text-gray-200 text-sm">3,00,000++ Members</p>
            </div>
          </div>

          {/* Goa - Tall */}
          <div className="relative rounded-lg overflow-hidden shadow-md lg:row-span-2">
            <img
              src="assets/images/home/goa.jpg"
              alt="Goa"
              className="w-full h-80 lg:h-[600px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg">Spain</h3>
              <p className="text-gray-200 text-sm">50,000+ Members</p>
            </div>
          </div>

          {/* Haryana */}
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <img
              src="assets/images/home/haryana.jpg"
              alt="Haryana"
              className="w-full h-60 lg:h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg">Rajasthan</h3>
              <p className="text-gray-200 text-sm">1,20,000+ Members</p>
            </div>
          </div>

          {/* Uttar Pradesh */}
          <div className="relative rounded-lg overflow-hidden shadow-md lg:col-span-2">
            <img
              src="assets/images/home/up.jpg"
              alt="Uttar Pradesh"
              className="w-full h-60 lg:h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg">
                Madhya Pradesh
              </h3>
              <p className="text-gray-200 text-sm">1,20,000+ Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SindhiaAcross;
