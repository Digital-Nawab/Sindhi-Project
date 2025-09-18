import React from 'react';

const AboutSindhiSection = () => {
  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            About <span className="text-red-500">Sindhi Community</span>
          </h2>
          <p className="text-gray-900 font-semibold text-lg max-w-2xl mx-auto">
            Meet the visionary leaders driving our community forward
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">
                Sindhi Community
              </h3>
              <p className="text-gray-900 font-semibold text-lg leading-relaxed mb-6">
                The Sindhi community is one of the world's oldest trading and entrepreneurial 
                communities, known for resilience, adaptability, and global presence.
              </p>
              <p className="text-gray-900 font-semibold text-lg leading-relaxed mb-6">
                From the Indus Valley Civilization to modern business empires, Sindhis have carried 
                forward a legacy of hard work, innovation, and cultural richness.
              </p>
              <p className="text-gray-900 font-semibold text-lg leading-relaxed">
                <span className="text-red-500 font-semibold">Cheti Chand, Ajrak, Sindhi Sweets,</span> and centuries of traditions remind us of 
                who we are – while our businesses, startups, and professionals shape the future.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-black mb-2">5000+</div>
                <div className="text-gray-600 font-medium">Years of Heritage</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-black mb-2">50+</div>
                <div className="text-gray-600 font-medium">Countries Worldwide</div>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative h-full">
           <img src="/assets/images/home/about.jpg" alt="" className='object-cover h-full w-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSindhiSection;