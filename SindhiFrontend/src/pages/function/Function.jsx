import React from "react";
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
import Layout from "../../layout/Layout";

function Function() {
  const functionalities = [
    {
      icon: Users,
      title: "City Chapters",
      description:
        "Each city will have its own chapter where members meet regularly, exchange referrals, and build local connections. These chapters will stay linked to the global SEW Connect network.",
    },
    {
      icon: Globe,
      title: "Digital Platform",
      description:
        "Through our online portal and mobile tools, members will showcase their products, services, skills, and job openings, making it easy to connect beyond geographical boundaries.",
    },
    {
      icon: TrendingUp,
      title: "Referrals & Leads",
      description:
        "A simple, transparent system for sharing referrals will help members generate business for each other in a 'Givers Gain' spirit, supported by digital referral slips and automated tracking.",
    },
    {
      icon: Award,
      title: "Committees & Leadership",
      description:
        "Each chapter will have a management committee to ensure smooth operations, guided by clear duties and rights, much like global business networking organizations.",
    },
    {
      icon: Briefcase,
      title: "Special Sections",
      description:
        "The platform will feature Angel Investors, Professionals, and Job Boards to support startups, career seekers, and established entrepreneurs alike.",
    },
    {
      icon: Calendar,
      title: "Events & Summits",
      description:
        "Regular networking meets, global conferences, and training workshops will strengthen relationships, celebrate achievements, and spread knowledge.",
    },
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#09246B] via-[#0a2d7f] to-[#09246B]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(96, 165, 250, 0.4) 0%, transparent 50%)",
            }}
          ></div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
          <div className="animate-bounce" style={{ animationDuration: "3s" }}>
            <Globe className="w-16 h-16 text-blue-300" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 hidden lg:block">
          <div
            className="animate-bounce"
            style={{ animationDuration: "4s", animationDelay: "1s" }}
          >
            <Network className="w-20 h-20 text-blue-300" />
          </div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Top Badge */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 shadow-xl">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
              <span className="text-xs sm:text-sm font-semibold text-blue-100 tracking-wide">
                GLOBAL NETWORKING PLATFORM
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-center text-white leading-tight px-4">
            How SEW Connect
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Will Function
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-4xl mx-auto leading-relaxed text-blue-50/95 px-4 sm:px-6">
            A global networking and business exchange platform built on{" "}
            <span className="font-semibold text-white">trust</span>,{" "}
            <span className="font-semibold text-white">collaboration</span>, and{" "}
            <span className="font-semibold text-white">opportunity sharing</span>
            . Guided by structured city-wise chapters and a strong digital
            backbone.
          </p>

          {/* Bottom Accent Line */}
          <div className="flex justify-center mt-10 sm:mt-12">
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          {/* <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
              fill="rgb(249, 250, 251)"
              fillOpacity="1"
            />
          </svg> */}
        </div>
      </div>

      {/* Core Functionalities */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Functionalities
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A blended ecosystem — part digital platform, part community
            movement — empowering Sindhu entrepreneurs everywhere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {functionalities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

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

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Ready to Connect, Collaborate, and Grow?
          </h2>
          <p className="text-lg mb-8 text-gray-600">
            Join the global Sindhu entrepreneur ecosystem today
          </p>
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Function;