import React from "react";
import { MapPin, Phone, Mail } from "lucide-react"; 

function FormMap() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#053951]">
            Get in Touch
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question, feedback, or
            just want to say hello – drop us a message or find us at our office.
          </p>
        </div>
         <div className="grid md:grid-cols-3 gap-6 mb-16">
      {/* Address */}
      <div className="relative bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition flex flex-col">
        {/* Icon Tab */}
        <div className="absolute -top-5 left-6 bg-[#E31E24] p-2 rounded-md">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#053951] mb-2">
            Visit Our Office
          </h3>
          <p className="text-gray-700 text-sm">
            123 Business Street <br />
            New Delhi, India
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="relative bg-[#053951] shadow-md rounded-xl p-6 hover:shadow-lg transition flex flex-col text-white">
        {/* Icon Tab */}
        <div className="absolute -top-5 left-6 bg-[#E31E24] p-2 rounded-md">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Send Email</h3>
          <p className="text-sm">
            Sales: support@mailus.com <br />
            Service: sendmail@company.com
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="relative bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition flex flex-col">
        {/* Icon Tab */}
        <div className="absolute -top-5 left-6 bg-[#E31E24] p-2 rounded-md">
          <Phone className="w-6 h-6 text-white" />
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#053951] mb-2">
            Make a Call
          </h3>
          <p className="text-gray-700 text-sm">
            Sales: +233 456 789 01 & 789 02 <br />
            Service: +1 555-7890-123
          </p>
        </div>
      </div>
         </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <iframe
              title="company-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8176517557686!2d77.2090213149164!3d28.61393908242412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4c5d9a4df7%3A0x8b19f6c2ef98a329!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1632822345678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="bg-white shadow-md rounded-xl p-8">
      <h3 className="text-2xl font-semibold text-[#053951] mb-6">
        Send us a Message
      </h3>
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#053951] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#053951] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Type your message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#053951] focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#053951] text-white font-medium py-2 rounded-lg hover:bg-[#032d40] transition"
        >
          Send Message
        </button>
      </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FormMap;
