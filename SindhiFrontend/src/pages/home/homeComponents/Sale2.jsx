import React from 'react';

function Sale2() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 - Laptops Sale */}
          <div className="bg-pink-100 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Laptops Sale</h2>
            <p className="text-sm text-gray-700 mb-4">Demo Content for Sindhi Community</p>
            <img
              src="https://i.pinimg.com/736x/33/c4/e7/33c4e73331025cb9ca54b9d2e3b4b1cb.jpg"
              alt="Laptops Sale"
              className="mx-auto w-40"
            />
          </div>

          {/* Card 2 - Handicraft Items */}
          <div className="bg-pink-200 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Find all Handicraft Items</h2>
            <p className="text-sm text-gray-700 mb-4">Demo Content for Sindhi Community</p>
            <img
              src="https://i.pinimg.com/736x/33/c4/e7/33c4e73331025cb9ca54b9d2e3b4b1cb.jpg" 
              alt="Handicraft Items"
              className="mx-auto w-40"
            />
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Your Favorite Gadget</h2>
            <p className="text-sm text-gray-700 mb-4">Demo Content for Sindhi Community</p>
            <img
              src="https://i.pinimg.com/736x/33/c4/e7/33c4e73331025cb9ca54b9d2e3b4b1cb.jpg"
              alt="Favorite Gadget"
              className="mx-auto w-40"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Sale2;
