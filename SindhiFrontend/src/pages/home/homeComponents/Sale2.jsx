import React from "react";

function Sale2() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#FEE1DC] p-6 rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Laptops Sale</h2>
              <p className="text-sm text-gray-700">
                Demo Content for Sindhi Community
              </p>
            </div>
            <img
              src="assets/images/1.png"
              alt="Laptops Sale"
              className="w-40 h-auto object-contain"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-[#FFE2E7] via-[#FAD0D9] via-[#FADAE0] to-[#F8D9DF] p-6 rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Find all Handicraft Items
              </h2>
              <p className="text-sm text-gray-700">
                Demo Content for Sindhi Community
              </p>
            </div>
            <img
              src="assets/images/2.png"
              alt="Handicraft Items"
              className="w-40 h-auto object-contain"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-[#FEE8BF] p-6 rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Your Favorite Gadget
              </h2>
              <p className="text-sm text-gray-700">
                Demo Content for Sindhi Community
              </p>
            </div>
            <img
              src="assets/images/3.png"
              alt="Favorite Gadget"
              className="w-40 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale2;
