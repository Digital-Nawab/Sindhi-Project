import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="assets/images/logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-[#E31E24] transition">
            Home
          </a>
          <a href="/career" className="hover:text-[#E31E24] transition">
            Careers
          </a>
          <a href="/about" className="hover:text-[#E31E24] transition">
            About
          </a>
          <a href="/contact" className="hover:text-[#E31E24] transition">
            Contact
          </a>
           <a href="/privacy-policy" className="hover:text-[#E31E24]">
              Privacy Policy
            </a>
            <a href="/term-condition" className="hover:text-[#E31E24]">
              Term and Condition
            </a>
            <a href="/vender" className="hover:text-[#E31E24]">
              Become a Vendor
            </a>
            <a href="/login" className="hover:text-[#E31E24]">
              Login
            </a>
            <a href="/registration" className="hover:text-[#E31E24]">
              Registration
            </a>
        </nav>

        {/* CTA Button (Desktop) */}
        <a
          href="/get-started"
          className="hidden md:inline-block bg-[#E31E24] text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
        >
          Get Started
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col space-y-4 p-6 text-gray-700 font-medium">
            <a href="/" className="hover:text-[#E31E24]">
              Home
            </a>
            <a href="/career" className="hover:text-[#E31E24]">
              Careers
            </a>
            <a href="/about" className="hover:text-[#E31E24]">
              About
            </a>
            <a href="/contact" className="hover:text-[#E31E24]">
              Contact
            </a>
            <a href="/privacy-policy" className="hover:text-[#E31E24]">
              Privacy Policy
            </a>
            <a href="/term-conditio" className="hover:text-[#E31E24]">
              Term and Condition
            </a>
            <a
              href="/get-started"
              className="bg-[#E31E24] text-white px-4 py-2 rounded-full text-center hover:bg-red-700"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
