import React from "react";
import {
  Podcast,
  TrendingUp,
  Users,
  Globe,
  Award,
  Sparkles,
  Youtube,
  Mic,
  Target,
} from "lucide-react";
import Layout from "../../layout/Layout";

function Jewels() {
  const expectations = [
    {
      icon: TrendingUp,
      title: "Entrepreneurial Journeys",
      description:
        "First-hand stories of challenges, breakthroughs, and successes.",
    },
    {
      icon: Users,
      title: "Leadership Insights",
      description: "Wisdom from community leaders and global professionals.",
    },
    {
      icon: Globe,
      title: "Networking & Growth Tips",
      description:
        "Practical advice on business building, referrals, and global expansion.",
    },
    {
      icon: Award,
      title: "Culture & Legacy",
      description:
        "Exploring the rich Sindhu tradition of trade, unity, and service in a modern context.",
    },
    {
      icon: Sparkles,
      title: "Youth & Future Voices",
      description: "Conversations with the next generation shaping tomorrow.",
    },
  ];

  return (
    <Layout>
      <div className="xl:min-h-screen  bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="relative container mx-auto grid lg:grid-cols-2 gap-6 p-6 overflow-hidden ">
            {/* <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(232,38,0,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(232,38,0,0.3) 0%, transparent 50%)",
              }}
            ></div>
          </div> */}
            <div className="relative flex justify-center items-center overflow-hidden ">
              <video
                src="/assets/banner/jewels.mp4"
                className="rounded-2xl"
                autoPlay
                muted
                loop
              ></video>
            </div>

            <div className="relative container mx-auto p-6  2xl:p-16 flex items-center">
              <div className="text-center">
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-red-500 to-red-700 rounded-full p-3 xl:p-6 shadow-2xl">
                      <Podcast className="xl:w-12 xl:h-12 w-10 h-10 2xl:w-16 2xl:h-16 text-white" />
                    </div>
                  </div>
                </div>

                <h1 className="text-3xl xl:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-4">
                  Jewels of SEW Connect
                </h1>

                <div className="inline-block bg-white bg-opacity-10 backdrop-blur-md px-2 sm:px-4 py-2 sm:py-3 rounded-full mb-4 sm:mb-5 border border-white border-opacity-20 mx-4">
                  <p className="text-base sm:text-md  2xl:text-xl text-gray-700 font-semibold">
                    Stories that Connect, Inspire, and Empower
                  </p>
                </div>

                <p className="text-base 2xl:text-lg text-gray-300 max-w-2xl mx-auto mb-4 sm:mb-5 leading-relaxed px-4">
                  The official podcasting channel of Sindhu Entrepreneurs' World
                  Connect
                </p>

                <a
                  href="https://www.youtube.com/@SEWConnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all transform hover:scale-105 shadow-xl mx-4"
                >
                  <Youtube className="w-6 h-6 sm:w-7 sm:h-7" />
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* About the Podcast Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-red-600 text-xs sm:text-sm font-bold uppercase tracking-widest">
              Discover Our Mission
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-6 sm:mb-8 px-4">
              About the Podcast
            </h2>

            <div className="h-1 w-16 sm:w-20 bg-red-600 mx-auto rounded-full mb-6 sm:mb-8"></div>

            <div className="max-w-5xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 border-l-4 sm:border-l-[5px] border-l-red-600">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-red-50 p-3 sm:p-4 rounded-full">
                  <Mic className="w-6 h-6  xl:w-10 sm:h-10 text-red-600" />
                </div>
              </div>
              <p className="text-base text-md xl:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                <span className="font-bold text-red-600">
                  Jewels of SEW Connect
                </span>{" "}
                is the official podcasting channel of{" "}
                <span className="font-semibold text-gray-900">
                  Sindhu Entrepreneurs' World Connect (SEW Connect)
                </span>
                , dedicated to celebrating the visionaries, trailblazers, and
                changemakers of the Sindhu community across the globe.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Through engaging conversations, inspiring stories, and
                thought-provoking discussions, the podcast shines a spotlight on
                the{" "}
                <span className="font-bold text-red-600">
                  "jewels" of SEW Connect
                </span>{" "}
                — entrepreneurs, professionals, and leaders who embody the
                spirit of innovation, resilience, and collaboration.
              </p>
            </div>
          </div>

          {/* What Listeners Can Expect */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-red-600 text-xs sm:text-sm font-bold uppercase tracking-widest">
                Featured Content
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-3 sm:mb-4 px-4">
                What Listeners Can Expect
              </h2>
              <div className="h-1 w-16 sm:w-20 bg-red-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {expectations.map((item, index) => {
                const Icon = item.icon;
                const gradients = [
                  "from-red-500 to-orange-600",
                  "from-purple-500 to-pink-600",
                  "from-blue-500 to-cyan-600",
                  "from-green-500 to-emerald-600",
                  "from-yellow-500 to-orange-600",
                ];
                const bgPatterns = [
                  "from-red-50 to-orange-50",
                  "from-purple-50 to-pink-50",
                  "from-blue-50 to-cyan-50",
                  "from-green-50 to-emerald-50",
                  "from-yellow-50 to-orange-50",
                ];
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-5 sm:p-6 pb-6 sm:pb-8 overflow-hidden hover:-translate-y-2"
                  >
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${bgPatterns[index]} rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                    ></div>

                    <div className="relative">
                      <div
                        className={`bg-gradient-to-br ${gradients[index]} text-white p-3 sm:p-4 rounded-xl inline-flex mb-4 sm:mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Our Purpose Section */}
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-red-600 text-xs sm:text-sm font-bold uppercase tracking-widest">
                Why We Exist
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-3 sm:mb-4 px-4">
                Our Purpose
              </h2>
              <div className="h-1 w-16 sm:w-20 bg-red-600 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 border-t-4 sm:border-t-[5px] border-t-red-600">
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="bg-red-50 p-4 sm:p-5 rounded-full">
                    <Target className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />
                  </div>
                </div>

                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-4 sm:mb-6 text-center">
                  The podcast serves as both a{" "}
                  <span className="font-bold text-red-600">
                    platform and archive of inspiration
                  </span>
                  , amplifying voices that not only guide entrepreneurs but also
                  strengthen the global Sindhu identity.
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 text-center">
                  It is a place where every episode sparks ideas, builds
                  connections, and creates opportunities.
                </p>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl p-6 sm:p-8 border-l-4 sm:border-l-[5px] border-l-red-600">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                    With{" "}
                    <span className="text-red-600 italic">
                      Jewels of SEW Connect
                    </span>
                    , we aim to unite Sindhu minds worldwide
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 text-center font-medium">
                    — one story, one conversation, and one connection at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Jewels;
