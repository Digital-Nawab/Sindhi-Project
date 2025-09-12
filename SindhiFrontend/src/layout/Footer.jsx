import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-2 rounded-md">
                <img
                src="assets/images/logo.png"
                alt="Logo"
                className="h-12 w-auto"
              />
              </div>
             
              <p className="text-gray-400 text-sm max-w-sm">
                Explore our diverse range of articles, guides, and services
                designed to elevate your well-being and enrich your lifestyle.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link to="" className="hover:text-white">Teams</Link></li>
                  <li><Link to="/career" className="hover:text-white">Careers</Link></li>
                  <li><Link to="/contact-us" className="hover:text-white">Contact</Link></li>
                  <li><Link to="" className="hover:text-white">Site Map</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="" className="hover:text-white">All Products</Link></li>
                  <li><Link to="" className="hover:text-white">News</Link></li>
                  <li><Link to="" className="hover:text-white">Blogs</Link></li>
                  <li><Link to="" className="hover:text-white">Coming Soon</Link></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-8 gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                  <Mail className="text-black w-5 h-5" />
                </span>
                <span>info@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                  <Phone className="text-black w-5 h-5" />
                </span>
                <span>+1 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                  <MapPin className="text-black w-5 h-5" />
                </span>
                <span>
                  Office 322 G4, Town, <br /> City, New York
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4 text-2xl text-center">Get In Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter Your Name..."
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 pt-10 mt-10 border-t border-gray-700">
          <div className="text-gray-500 text-sm">
            Copyright © 2023 – All rights Reserved
          </div>
          <div className="flex gap-4">
            <Link
              to="/facebook"
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-700 transition"
            >
              <Facebook className="text-black w-5 h-5" />
            </Link>
            <Link
              to="/instagram"
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-700 transition"
            >
              <Instagram className="text-black w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
