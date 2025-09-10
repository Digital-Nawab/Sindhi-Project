import React, { useState } from "react";
import { Building2, FileText, MapPin, User, ClipboardList } from "lucide-react";

function BecomeVen() {
  const [agree, setAgree] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow p-8 md:p-12 transform transition-all hover:shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-[#053951] tracking-tight">
            Join Our Vendor Network 🌟
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            Register your business with us to unlock exciting opportunities and grow your reach!
          </p>
        </div>
        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name
              </label>
              <div className="relative group">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Enter your business name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GST Number
              </label>
              <div className="relative group">
                <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Enter GST number"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 transition-all duration-300"
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address (City with Pin Code)
            </label>
            <div className="relative group">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Enter city and pin code"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 transition-all duration-300"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Owner Name
            </label>
            <div className="relative group">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Enter owner name"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 transition-all duration-300"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Type
              </label>
              <div className="relative group">
                <select className="w-full pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 transition-all duration-300 appearance-none pl-4">
                  <option value="">Select company type</option>
                  <option value="pvtltd">Private Limited</option>
                  <option value="partnership">Partnership</option>
                  <option value="sole">Sole Proprietorship</option>
                  <option value="llp">LLP</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Categories
              </label>
              <div className="relative group">
                <select className="w-full pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 transition-all duration-300 appearance-none pl-4">
                  <option value="">Select category</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="grocery">Grocery</option>
                  <option value="home">Home & Living</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <div className="relative group">
              <ClipboardList className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              <textarea
                rows="5"
                placeholder="Tell us about your business..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 transition-all duration-300 resize-none"
              ></textarea>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <input
              id="terms"
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="mt-1 h-5 w-5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 transition-all duration-300"
            />
            <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
              I agree to the{" "}
              <a
                href="/terms"
                className="text-blue-600 font-medium hover:underline transition-colors"
              >
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-blue-600 font-medium hover:underline transition-colors"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>
          <button
            type="button"
            disabled={!agree}
            className={`w-full py-3.5 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 transform ${
              agree
                ? "bg-[#053951] text-white hover:bg-[#E31E24] hover:scale-[1.02] active:scale-[0.98]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Submit Registration
          </button>
        </form>
      </div>
    </section>
  );
}

export default BecomeVen;