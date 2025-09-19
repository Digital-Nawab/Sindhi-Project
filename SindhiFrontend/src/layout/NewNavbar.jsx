import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // 👇 Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow-md relative w-full">
      {/* 🔹 Top Info Bar */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 text-sm text-gray-600">
          <div className="flex flex-col items-center md:hidden space-y-2 text-center">
            <span className="flex items-center space-x-1">
              <span className="text-pink-500">📞</span>
              <span>
                Call For More Info:{" "}
                <strong className="text-gray-800">+91 9837054501</strong>
              </span>
            </span>
            <span className="flex items-center space-x-1">
              <span>📧</span>
              <span>
                Mail:{" "}
                <strong className="text-gray-800">testing@gmail.com</strong>
              </span>
            </span>
          </div>

          <div className="hidden md:flex justify-between items-center">
            <span>
              📞 Call: <strong className="text-gray-800">+91 9837054501</strong>
            </span>
            <img
              src="assets/images/logo.png"
              alt="Logo"
              className="h-8 md:h-10"
            />
            <span>
              📧 Mail:{" "}
              <strong className="text-gray-800">testing@gmail.com</strong>
            </span>
          </div>
        </div>
      </div>

      {/* 🔹 Red Banner Section */}
      <div className="text-center py-2 bg-[#2f2f2f]">
        <h1 className="text-xl md:text-2xl font-bold text-white">
          Sindhi Entrepreneurs' World Connect
        </h1>
      </div>

      {/* 🔹 Main Navbar */}
      <div
        className={`w-full  flex items-center transition-all duration-500 ease-in-out ${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-white shadow-lg z-50 animate-slideDown justify-between"
            : "max-w-7xl mx-auto justify-between"
        }`}
      >
        <div
          className={`w-full px-6 py-3 flex items-center transition-all duration-500 ease-in-out ${
            isSticky
              ? " bg-white shadow-lg z-50 animate-slideDown justify-between"
              : "max-w-7xl mx-auto justify-between"
          }`}
        >
          {/* 👇 Sticky: Logo on left */}
          {isSticky && (
            <div className="flex items-center">
              <img
                src="assets/images/logo.png"
                alt="Logo"
                className="h-8 md:h-10"
              />
            </div>
          )}

          {/* Menu (Desktop) */}
          <div
            className={`hidden md:flex items-center space-x-6 font-medium text-gray-700 transition-all ${
              isSticky ? "mx-auto " : ""
            }`}
          >
            <div className="relative">
              <button
                className="flex items-center text-md font-bold space-x-1 hover:text-[#E82600] focus:outline-none"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                <span>About Us</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {aboutOpen && (
                <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-md rounded-md">
                  <a
                    href="#mission"
                    className="block px-4 py-2 hover:bg-blue-50 text-sm"
                  >
                    Mission
                  </a>
                  <a
                    href="#vision"
                    className="block px-4 py-2 hover:bg-blue-50 text-sm"
                  >
                    Vision
                  </a>
                </div>
              )}
            </div>

            <a
              href="#functions"
              className="text-md font-bold hover:text-[#E82600]"
            >
              Functions
            </a>
            <a
              href="#offerings"
              className="text-md font-bold hover:text-[#E82600]"
            >
              Offerings
            </a>
            <a
              href="#jewels"
              className="text-md font-bold hover:text-[#E82600]"
            >
              Jewels
            </a>
            <a
              href="#contact"
              className="text-md font-bold hover:text-[#E82600]"
            >
              Contact
            </a>
          </div>

          {/* CTA Button (Right) */}
          <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
            <a
              href="#membership"
              className="inline-block px-6 py-2 bg-[#053951] text-white font-semibold rounded-lg shadow-md hover:bg-[#E82600] hover:shadow-lg transition duration-300"
            >
              Become A Member
            </a>
          </div>
        </div>

        {/* Mobile Logo + Menu Button */}
        <div className="flex md:hidden justify-between items-center w-full">
          <img src="assets/images/logo.png" alt="Logo" className="h-8" />
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-6 pb-4 font-medium text-gray-700 border-t bg-white">
          <button
            className="flex justify-between items-center hover:text-[#E82600]"
            onClick={() => setAboutOpen(!aboutOpen)}
          >
            <span>About Us</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                aboutOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {aboutOpen && (
            <div className="ml-4 flex flex-col space-y-1">
              <a href="#mission" className="hover:text-[#E82600] text-sm">
                Mission
              </a>
              <a href="#vision" className="hover:text-[#E82600] text-sm">
                Vision
              </a>
            </div>
          )}

          <a href="#functions" className="hover:text-[#E82600]">
            Functions
          </a>
          <a href="#offerings" className="hover:text-[#E82600]">
            Offerings
          </a>
          <a href="#jewels" className="hover:text-[#E82600]">
            Jewels
          </a>
          <a href="#contact" className="hover:text-[#E82600]">
            Contact
          </a>

          <a
            href="#membership"
            className="mt-3 inline-block px-6 py-3 bg-[#053951] text-white font-semibold rounded-lg shadow-md hover:bg-[#E82600] hover:shadow-lg transition duration-300 text-center"
          >
            Become A Member
          </a>
        </div>
      )}
    </nav>
  );
}

export default NewNavbar;
