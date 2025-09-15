import React from "react";

function Hero() {
  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-6 mb-15">
          <div className="col-span-1 flex flex-col gap-2">
            <img
              src="https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg"
              alt="product"
              className="w-full h-1/2 object-cover rounded-lg"
            />
            <img
              src="https://thumbs.dreamstime.com/b/indian-hand-made-crafts-colorful-craft-show-35743379.jpg"
              alt="product"
              className="w-full h-1/2 object-cover rounded-lg"
            />
          </div>
          <div className="col-span-2 bg-[#5A2C1E] flex flex-col justify-center px-10 py-8 text-white rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              EXPLORE SINDHI PRODUCTS <br /> — FROM TEXTILES
            </h2>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-5">
                <span className="bg-[#E4B98D] text-[#2c1d14] font-semibold px-4 py-2 inline-block rounded">
                  Sindhi Products Showcase
                </span>
              </div>
              <div className="col-span-7">
                <p className="text-sm leading-relaxed opacity-90">
                  Plastics, Textiles, Footwear, Food, Jewellery, Agriculture —
                  Discover a diverse range of quality products today!
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <img
              src="https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg"
              alt="product"
              className="w-full h-1/2 object-cover rounded-lg"
            />
            <img
              src="https://thumbs.dreamstime.com/b/indian-hand-made-crafts-colorful-craft-show-35743379.jpg"
              alt="product"
              className="w-full h-1/2 object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="container mx-auto px-6 relative z-10 -mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F6F6F6] shadow-lg rounded-lg p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-4xl md:text-5xl font-semibold text-[#5C483F] mb-4">
                  HOME INTERIOR DESIGN
                </h3>
                <p className="text-[#5C483F] mb-6 max-w-md font-medium">
                  Elevate Your Space, Elevate Your Life: Discover the Art of Home
                  Design!
                </p>
                <div className="text-[#5C483F] font-medium space-y-2">
                  <p>123456789</p>
                  <p>www.test@gmail.com</p>
                  <p>123 Anywhere City, Lucknow</p>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button className="bg-[#5A2C1E] text-white font-semibold px-6 py-2 rounded-lg">
                  BOOK NOW
                </button>
              </div>
              <div className="mt-4 flex gap-2">
                <img
                  src="https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg"
                  alt="preview"
                  className="w-1/3 h-20 object-cover rounded-lg"
                />
                <img
                  src="https://thumbs.dreamstime.com/b/indian-hand-made-crafts-colorful-craft-show-35743379.jpg"
                  alt="preview"
                  className="w-1/3 h-20 object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-[#1289C7] text-white shadow-lg rounded-lg p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  SAFE SKILLED SUPPORTIVE
                </h2>
                <p className="mb-6">Everything You Need for a Healthier Tomorrow</p>
                <h3 className="font-semibold mb-2">OUR SERVICES</h3>
                <ul className="mb-6 list-disc list-inside">
                  <li>General Check-Up Program</li>
                  <li>Heart Health Screening</li>
                  <li>Men’s Health Program</li>
                </ul>
              </div>
              <div className="flex justify-between items-end">
                <a
                  href="#"
                  className="bg-white text-blue-600 font-semibold px-6 py-2 rounded shadow"
                >
                  MORE INFO
                </a>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/050/817/819/small_2x/happy-smiling-male-doctor-with-hand-present-something-empty-space-standing-isolate-on-transparent-background-png.png"
                  alt="doctor"
                  className="w-1/3 h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;