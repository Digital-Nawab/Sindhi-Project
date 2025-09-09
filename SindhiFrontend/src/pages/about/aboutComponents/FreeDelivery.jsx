import React from 'react'

function FreeDelivery() {
  return (
    <section class="bg-white py-10">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        
        <div class="flex items-center gap-3 border rounded-lg p-5 hover:shadow-md transition">
          <div class="text-blue-700 text-3xl">
            ✈️
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Free Delivery</h3>
            <p class="text-sm text-gray-500">From all orders over $10</p>
          </div>
        </div>
        <div class="flex items-center gap-3 border rounded-lg p-5 hover:shadow-md transition">
          <div class="text-blue-700 text-3xl">
            🎧
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Support 24/7</h3>
            <p class="text-sm text-gray-500">Shop with an expert</p>
          </div>
        </div>
        <div class="flex items-center gap-3 border rounded-lg p-5 hover:shadow-md transition">
          <div class="text-blue-700 text-3xl">
            🎁
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Gift voucher</h3>
            <p class="text-sm text-gray-500">Refer a friend</p>
          </div>
        </div>
        <div class="flex items-center gap-3 border rounded-lg p-5 hover:shadow-md transition">
          <div class="text-blue-700 text-3xl">
            📦
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Return & Refund</h3>
            <p class="text-sm text-gray-500">Free return over $200</p>
          </div>
        </div>
        <div class="flex items-center gap-3 border rounded-lg p-5 hover:shadow-md transition">
          <div class="text-blue-700 text-3xl">
            🔒
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Secure payment</h3>
            <p class="text-sm text-gray-500">100% Protected</p>
          </div>
        </div>

      </div>
    </section>

  )
}

export default FreeDelivery