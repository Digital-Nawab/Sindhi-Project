import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 pt-14 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 🔹 Left Column: Logo + About + Social */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-2 rounded-md">
                <img
                  src="assets/images/logo.png"
                  alt="Logo"
                  className="h-12 w-auto"
                />
              </div>
              <h2 className="text-lg font-semibold text-white leading-snug">
                Sindhu Entrepreneurs' <br /> World Connect
              </h2>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              SEW Connect empowers Sindhu entrepreneurs by creating a strong,
              connected, and supportive business ecosystem.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-200 transition"
              >
                <Facebook className="text-black w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-200 transition"
              >
                <Instagram className="text-black w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 🔹 Middle Column: Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/functions" className="hover:text-white">
                  How We Function
                </Link>
              </li>
              <li>
                <Link to="/our-offerings" className="hover:text-white">
                  Our Offerings
                </Link>
              </li>
              <li>
                <Link to="/jewels" className="hover:text-white">
                  Jewels of SEW
                </Link>
              </li>
              <li>
                <Link to="/agra-chapter-founders" className="hover:text-white">
                  Agra Chapter
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/become-vendor" className="hover:text-white">
                  Become a Member
                </Link>
              </li>
            </ul>
          </div>

          {/* 🔹 Right Column: Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Contact Us</h3>
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1" />
                <p>
                  SEW Connect Pvt. Ltd. <br />
                  E-199, Kamla Nagar <br />
                  Agra – 282004
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 mt-1" />
                <p>info@sewconnect.in</p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 mt-1" />
                <p>+91 9548152675</p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Bottom Bar */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-6 mt-10">
          © {new Date().getFullYear()} SEW Connect Pvt. Ltd. – All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
