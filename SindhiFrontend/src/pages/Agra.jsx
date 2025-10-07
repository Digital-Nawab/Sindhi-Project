import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Briefcase, Users, Award } from "lucide-react";
import Layout from "../layout/Layout";

const AgraChapterFounders = () => {
  const founders = [
    {
      name: "Leena Moriani",
      position: "Coordinator",
      company: "",
      location: "Agra, India",
      img: "/assets/banner/2.png",
    },
    {
      name: "Heer Moriani",
      position: "Coordinator",
      company: "Agra Chapter Founder Member",
      location: "Agra, India",
      img: "/assets/banner/heer.jpg",
    },
    {
      name: "Chander Daulatani",
      position: "CEO",
      company: "Valentino Shoes",
      location: "Agra, India",
      // img:"/assets/banner/deepak.jpg"
    },
    {
      name: "Kamal Mangwani",
      position: "CEO",
      company: "R.B Hashmat Rai & Company",
      location: "Agra, India",
      img: "/assets/banner/kamal.JPG",
    },
    {
      name: "Vikas Dulhani",
      position: "CEO",
      company: "Kamal Hosiery Works",
      location: "Agra, India",
      img: "/assets/banner/vikas.JPG",
    },
    {
      name: "Manish Aswani",
      position: "Director",
      company: "K C Group",
      location: "Agra, India",
      // img:"/assets/banner/deepak.jpg"
    },
    {
      name: "Rajiv Nagrani",
      position: "CEO",
      company: "Usha Scales",
      location: "Agra, India",
      // img:"/assets/banner/deepak.jpg"
    },
    {
      name: "Deepak Moriani",
      position: "Director",
      company: "Venus Cleaning Products Pvt Ltd.",
      location: "Agra, India",
      img: "/assets/banner/deepak.jpg",
    },
    {
      name: "Deepak Dayalani",
      position: "Financial Advisor",
      company: "",
      location: "Agra, India",
      img: "/assets/banner/deepakD.jpg",
    },
    {
      name: "Himmat ramani",
      company: "Agra Chapter Coordinators",
      location: "Agra, India",
      img: "assets/banner/himmat.JPG", // update with actual image
    },
  ];

  // Function to generate initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  // Function to generate a consistent color based on name
  const getGradientForName = (name) => {
    const gradients = [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    ];
    const index = name.charCodeAt(0) % gradients.length;
    return gradients[index];
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-600 to-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <Award className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Agra Chapter
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Founder Members & Coordinators
              </h2>
              <p className="text-xl text-red-100 max-w-2xl mx-auto">
                Meet the visionary leaders who established and coordinate the
                Agra Chapter of SEW Connect
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 -mt-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  {founders.length}
                </div>
                <div className="text-gray-600">Members</div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">Agra</div>
                <div className="text-gray-600">India</div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <Briefcase className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">Multiple</div>
                <div className="text-gray-600">Industries</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Members Grid */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-0">
                  {/* Image Placeholder with Initials */}
                  {/* Image Placeholder with Name or Image */}
                  <div
                    className="h-64 flex items-center justify-center text-white relative overflow-hidden"
                    style={{ background: getGradientForName(founder.name) }}
                  >
                    {founder.img ? (
                      <img
                        className="h-full w-full object-cover scale-110"
                        src={founder.img}
                        alt={founder.name}
                      />
                    ) : (
                      // If no image, show name initials or full name
                      <span className="text-3xl font-bold uppercase tracking-wide text-center px-4">
                        {getInitials(founder.name)}
                      </span>
                    )}
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {founder.name}
                    </h3>

                    <div className="flex items-start mb-3">
                      <Briefcase className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-semibold">
                          {founder.position}
                        </p>
                        <p className="text-gray-600">{founder.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-2 flex-shrink-0" />
                      <p className="text-gray-600">{founder.location}</p>
                    </div>

                    {/* Badge */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="inline-flex items-center bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                        <Award className="w-4 h-4 mr-1" />
                        Member
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Building a Stronger Business Community
              </h3>
              <p className="text-lg text-red-50 leading-relaxed">
                These members and coordinators laid the foundation for the Agra
                Chapter, creating a vibrant ecosystem where Sindhu entrepreneurs
                can connect, collaborate, and grow together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AgraChapterFounders;
