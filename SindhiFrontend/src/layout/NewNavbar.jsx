import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Target, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink } from "react-router-dom";

function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Detect scroll
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
    <nav className="relative w-full">
      {/* 🔹 Top Info Bar */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 text-sm text-gray-600">
          {/* Mobile Info */}
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

          {/* Desktop Info */}
          <div className="hidden md:flex justify-between items-center">
            <span>
              📞 Call: <strong className="text-gray-800">+91 9837054501</strong>
            </span>
            <NavLink to="/">
              <img
                src="assets/images/logo2.png"
                alt="Logo"
                className="h-8 md:h-10"
              />
            </NavLink>
            <span>
              📧 Mail:{" "}
              <strong className="text-gray-800">testing@gmail.com</strong>
            </span>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div
        className={`w-full transition-all duration-500 ease-in-out ${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-white text-gray-800 shadow-lg z-50 animate-slideDown"
            : "bg-[#2f2f2f] text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Sticky Logo */}
          {isSticky && (
            <div className="hidden md:flex items-center">
              <img
                src="assets/images/logo.png"
                alt="Logo"
                className="h-8 md:h-10"
              />
            </div>
          )}

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center space-x-6 font-medium transition-all ${
              isSticky ? "mx-auto" : ""
            }`}
          >
            {/* ✅ Shadcn Dropdown with Icons */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center font-bold hover:text-[#E82600] focus:outline-none">
                About Us <ChevronDown size={16} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 mt-2 rounded-lg shadow-lg bg-white text-gray-800 border"
                align="start"
              >
                <DropdownMenuItem asChild>
                  <a
                    href="#mission"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md transition"
                  >
                    <Target size={16} className="text-red-500" />
                    Mission
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="#vision"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md transition"
                  >
                    <Eye size={16} className="text-blue-500" />
                    Vision
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#functions" className="font-bold hover:text-[#E82600]">
              How We Function
            </a>
            <a href="#offerings" className="font-bold hover:text-[#E82600]">
              Our Offerings
            </a>
            <a href="#jewels" className="font-bold hover:text-[#E82600]">
              Jewels of SEW
            </a>
            <a href="#contact" className="font-bold hover:text-[#E82600]">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-6 font-medium">
            <a
              href="/become-vendor"
              className={`inline-block px-6 py-2 font-semibold rounded-lg shadow-md transition duration-300 ${
                isSticky
                  ? "bg-[#053951] text-white hover:bg-[#E82600]"
                  : "bg-white text-[#2f2f2f] hover:bg-[#E82600] hover:text-white"
              }`}
            >
              Become A Member
            </a>
          </div>

          {/* Mobile Logo + Menu Button */}
          <div className="flex md:hidden justify-between items-center w-full">
            <img src="assets/images/logo2.png" alt="Logo" className="h-8" />
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-6 pb-4 font-medium border-t bg-white text-gray-800">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex justify-between items-center hover:text-[#E82600]">
              About Us <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-48 mt-2 rounded-lg shadow-lg bg-white text-gray-800 border"
              align="start"
            >
              <DropdownMenuItem asChild>
                <a
                  href="#mission"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md transition"
                >
                  <Target size={16} className="text-red-500" />
                  Mission
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="#vision"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md transition"
                >
                  <Eye size={16} className="text-blue-500" />
                  Vision
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
            href="/become-vendor"
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
