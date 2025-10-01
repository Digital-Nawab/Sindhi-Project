import React from "react";
import { BookOpen } from "lucide-react";

function CommunityService() {
  const services = [
    {
      title: "Hinduja Foundation",
      description:
        "Focuses on healthcare, education, water & sanitation, and skill development. Runs hospitals, schools, and rural development programs in India and abroad.",
      badge: "Healthcare & Education",
      founded: "N/A", // Founding year not specified in provided content
      founder: "N/A", // Founder not specified
    },
    {
      title: "Sadhu Vaswani Mission, Pune",
      description:
        "Works in education, animal rights, hospitals, and spiritual upliftment. Runs schools, colleges, hospitals, and the 'Stop All Killing' movement for vegetarianism and compassion.",
      badge: "Since 1931",
      founded: "1931",
      founder: "Sadhu T.L. Vaswani",
    },
    {
      title: "JEEV Sewa Sansthan, Bairagarh & Ajmer",
      description:
        "Provides medical facilities, education, professional training, shelter, and food to the needy.",
      badge: "Since 1994",
      founded: "1994",
      founder: "Sant Hirdaram Sahib of Pushkar",
    },
    {
      title: "Sindh Helpage, Agra",
      description:
        "Founded by 50 members in Agra, provides food, medical facilities, and education to the poor and needy.",
      badge: "Community-Driven",
      founded: "Recently", // Exact year not specified
      founder: "50 Founder Members of Agra",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-[#0A0A0A]">Sewa </span>
            <span className="text-[#E82600]">& Community Service</span>
          </h2>
          <p className="text-[#000000] mt-4 max-w-2xl mx-auto">
            Sindhis have always believed in 'service before self'. Through SEWA
            initiatives, our members contribute to education, healthcare, disaster
            relief, and cultural preservation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F7FAFE] rounded-xl shadow-md p-6 text-center transition transform hover:-translate-y-2 hover:shadow-lg"
              role="region"
              aria-labelledby={`service-title-${index}`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-full bg-[#E82600]">
                <BookOpen
                  className="w-7 h-7 text-white"
                  aria-hidden="true"
                />
              </div>

              {/* Title */}
              <h3
                id={`service-title-${index}`}
                className="font-bold text-xl text-gray-900"
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Additional Info */}
              <p className="text-gray-500 mt-2 text-xs">
                {service.founded !== "N/A" && `Founded: ${service.founded}`}
                {service.founded !== "N/A" && service.founder !== "N/A" && " | "}
                {service.founder !== "N/A" && `Founder: ${service.founder}`}
              </p>

              {/* Badge */}
              <div className="mt-4">
                <span className="inline-block bg-[#FECFB5] text-[#8E1D06] text-sm font-medium px-4 py-1 rounded-md">
                  10,000 + Lives Touched
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