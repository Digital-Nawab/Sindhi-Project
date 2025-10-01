import React from 'react'
import Layout from '../layout/Layout'
import {
    Users,
    Globe,
    TrendingUp,
    Award,
    Briefcase,
    Lightbulb,
    DollarSign,
    Calendar,
    Network,
  } from "lucide-react";

const Offerings = () => {

  const offerings = [
    {
      icon: Users,
      title: "Business Networking & Referrals",
      points: [
        "City-wise chapters for regular networking meets",
        "Structured referral system to generate business leads",
        "'Givers Gain' culture where members help each other grow",
      ],
    },
    {
      icon: Globe,
      title: "Digital Visibility & Branding",
      points: [
        "Online platform to list products, services, and expertise",
        "Dedicated member profiles with verified business details",
        "City & global directory to showcase your brand worldwide",
      ],
    },
    {
      icon: Lightbulb,
      title: "Knowledge & Skill Development",
      points: [
        "Training workshops, expert talks, and webinars",
        "Access to mentors, industry experts, and thought leaders",
        "Sharing best practices from successful entrepreneurs",
      ],
    },
    {
      icon: DollarSign,
      title: "Funding & Investment Opportunities",
      points: [
        "Angel investor section for startups and growing businesses",
        "Pitch opportunities at SEW Connect events",
        "Networking with financial experts for growth capital",
      ],
    },
    {
      icon: Briefcase,
      title: "Career & Job Support",
      points: [
        "Job board for posting openings across member companies",
        "Internship opportunities for youth in the Sindhu community",
        "Talent exchange platform for professionals and businesses",
      ],
    },
    {
      icon: Calendar,
      title: "Events & Summits",
      points: [
        "Global and regional networking conferences",
        "Business exhibitions to showcase products/services",
        "Recognition awards to celebrate community success stories",
      ],
    },
    {
      icon: Award,
      title: "Community & Culture",
      points: [
        "Building unity among Sindhu entrepreneurs worldwide",
        "Promoting Sindhu legacy of trade and entrepreneurship",
        "Social initiatives aligned with community growth",
      ],
    },
  ];
  return (
    <Layout>
         {/* SEW Connect Offerings */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SEW Connect Offerings
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              More than just networking — a 360° growth ecosystem for Sindhu
              entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 border-l-[5px] border-l-red-600"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 pt-2">
                      {offering.title}
                    </h3>
                  </div>
                  <ul className="space-y-3 ml-16">
                    {offering.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Offerings