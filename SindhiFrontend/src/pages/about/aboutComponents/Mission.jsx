import React from 'react'

function Mission() {
  return (
     <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-[#053951]">Our Mission & Vision</h2>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are committed to delivering excellence through our mission and vision, 
            guiding everything we do to make a lasting impact.
          </p>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white shadow-md rounded-2xl p-8 border-t-4 border-[#E31E24] hover:shadow-xl transition">
            <div class="flex items-center gap-4 mb-4">
              <div class="bg-[#053951] text-white p-3 rounded-full text-2xl">
                🚀
              </div>
              <h3 class="text-2xl font-semibold text-[#053951]">Our Mission</h3>
            </div>
            <p class="text-gray-600 leading-relaxed">
              Our mission is to empower communities and businesses by providing 
              sustainable, innovative, and customer-focused solutions that 
              improve lives and create positive change.
            </p>
          </div>
          <div class="bg-white shadow-md rounded-2xl p-8 border-t-4 border-[#053951] hover:shadow-xl transition">
            <div class="flex items-center gap-4 mb-4">
              <div class="bg-[#E31E24] text-white p-3 rounded-full text-2xl">
                🌍
              </div>
              <h3 class="text-2xl font-semibold text-[#053951]">Our Vision</h3>
            </div>
            <p class="text-gray-600 leading-relaxed">
              Our vision is to be a global leader recognized for transforming 
              industries, driving innovation, and creating a sustainable 
              future where opportunities are accessible to everyone.
            </p>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Mission