import React from "react";
import { BookOpen } from "lucide-react";

function CommunityService() {
  const services = [
    {
      title: "Education Support",
      desc: "Scholarships and educational resources for underprivileged students",
      badge: "500+ Students Supported",
    },
    {
      title: "Healthcare Programs",
      desc: "Medical camps and healthcare assistance for community members",
      badge: "1000+ Lives Touched",
    },
    {
      title: "Disaster Relief",
      desc: "Emergency support and rehabilitation during natural disasters",
      badge: "50+ Families Aided",
    },
    {
      title: "Cultural Preservation",
      desc: "Documenting and preserving Sindhi traditions for future generations",
      badge: "100+ Stories Preserved",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-[#0A0A0A]">SEWA </span>
            <span className="text-[#E82600]">& Community Service</span>
          </h2>
          <p className="text-[#000000] mt-4 max-w-2xl mx-auto">
            Sindhis have always believed in 'service before self'. Through SEWA
            initiatives, our members contribute to education, healthcare,
            disaster relief, and cultural preservation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F7FAFE] rounded-xl shadow-md p-6 text-center transition transform hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-full bg-[#E82600]">
                <BookOpen className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>

              {/* Badge */}
              <div className="mt-4">
                <span className="inline-block bg-[#FECFB5] text-[#8E1D06] text-sm font-medium px-4 py-1 rounded-md">
                  {service.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityService;
