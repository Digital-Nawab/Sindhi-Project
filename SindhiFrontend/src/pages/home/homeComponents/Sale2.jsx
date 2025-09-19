import React from 'react';

function Sale2() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#FEE1DC] px-6 pt-6 rounded-lg flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl font-bold mb-2 text-left">Laptops Sale</h2>
              <p className="text-sm text-gray-700 text-left">Demo Content for <br />Sindhi Community</p>
            </div>
            <div className="flex justify-end mt-4">
              <img
                src="assets/images/1.png"
                alt="Laptops Sale"
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FADADD] px-6 py-6 rounded-lg flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl font-bold mb-2 text-center">Find all <br/>Handicraft Items</h2>
             
            </div>
            <div className="flex justify-center mt-4">
              <img
                src="assets/images/2.png"
                alt="Handicraft Items"
                className="w-48 h-auto object-contain"
              />
            </div>
            <div className="">
               <p className="text-sm text-gray-700 text-center">Demo Content for <br/> Sindhi Community</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FEE8BF] px-6 pt-6 rounded-lg flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl font-bold mb-2 text-left">Your Favorite Gadget</h2>
              <p className="text-sm text-gray-700 text-left">Demo Content for <br/> Sindhi Community</p>
            </div>
            <div className="flex justify-end mt-4">
              <img
                src="assets/images/3.png"
                alt="Favorite Gadget"
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Sale2;
