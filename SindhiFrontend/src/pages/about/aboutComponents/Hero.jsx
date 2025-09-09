import React from "react";

function Hero() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <p className="text-sm text-[#E31E24] font-medium mb-2">About us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#053951] mb-6">
            Global Leading Online Shop
          </h2>
          <p className="text-[#053951] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <p className="text-[#053951] mb-4">
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <p className="text-[#053951] mb-6">
            Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "We provide qualified & expert",
              "Modern tools & technology use",
              "Neat & cleaning top Services",
              "We Develop Digital Future",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="bg-[#053951] p-2 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-medium text-[#053951]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <img
            src="https://placehold.co/600x400"
            alt="Team working together"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
