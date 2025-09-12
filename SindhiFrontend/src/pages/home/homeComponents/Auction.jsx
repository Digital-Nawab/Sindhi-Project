import React from "react";

function Auction() {
  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">
              Auction Products
            </h2>
            <a href="#" className="text-black font-semibold hover:underline">
              View All
            </a>
          </div>

          <div className="bg-red-100 flex flex-col md:flex-row items-center justify-between p-6 rounded-lg">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src="https://placehold.co/400"
                alt=""
                className="w-full max-w-sm mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-xl font-medium mb-2">
                The Best Value Available
              </h3>
              <h2 className="text-3xl font-bold mb-4">AUCTION</h2>
              <p className="text-sm text-gray-700 mb-1">Now Ongoing</p>
              <p className="text-base font-semibold">EEMOTE CMS</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Auction;
