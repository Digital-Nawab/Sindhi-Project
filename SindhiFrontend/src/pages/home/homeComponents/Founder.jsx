import React from "react";
import { MapPin } from "lucide-react";
const founders = [
  {
    name: "Ramesh Keswani",
    role: "CEO, Global Sindhi Group",
    location: "Mumbai, Maharashtra",
    img: "assets/images/home/founder1.png",
  },
  {
    name: "Priya Shahani",
    role: "Founder, Tech Innovations",
    location: "Mumbai, Maharashtra",
    img: "assets/images/home/founder2.png",
  },
  {
    name: "Anil Manwani",
    role: "Investment Banking Director",
    location: "Mumbai, Maharashtra",
    img: "assets/images/home/founder3.jpg",
  },
  {
    name: "Sunita Daryanani",
    role: "Social Entrepreneur",
    location: "Mumbai, Maharashtra",
    img: "assets/images/home/founder4.png",
  },
];
function Founder() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold">
          Founder <span className="text-[#E82600]">Members Spotlight</span>
        </h2>
        <p className="mt-4 text-[#000000] font-semibold max-w-2xl mx-auto">
          Our founder envisioned a platform where every Sindhi – whether in
          India or abroad – could connect, collaborate, and contribute. This
          community website is not just a directory, but a movement to empower
          Sindhis worldwide.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-lg shadow-sm overflow-hidden text-left hover:shadow-lg transition-shadow duration-300"
            >
                <img
                src={founder.img}
                alt="Founder"
                className="w-full h-80 object-cover"
                />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#000000]">{founder.name}</h3>
                <p className="text-[#000000] mt-1">{founder.role}</p>
                <div className="flex items-center justify-start text-gray-500 mt-3 text-sm text-left">
                  <MapPin className="w-4 h-4 mr-1" /> {founder.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Founder;
