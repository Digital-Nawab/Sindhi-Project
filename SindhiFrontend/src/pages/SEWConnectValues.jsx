import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Handshake,
  Users,
  Globe,
  Sparkles,
  TrendingUp,
  Leaf,
} from "lucide-react";
import Layout from "../layout/Layout";

export default function SEWConnectValues() {
  const values = [
    {
      id: 1,
      title: "Trust & Integrity",
      description:
        "SEW Connect is built on a foundation of honesty, reliability, and transparency. Every member is encouraged to uphold these values so that relationships within the network are strong, lasting, and respectful.",
      icon: Handshake,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "Collaboration & Givers Gain",
      description:
        "We believe that true growth comes from helping others succeed. By sharing opportunities, knowledge, and referrals, members create a culture where collaboration fuels prosperity for all.",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: 3,
      title: "Global Sindhu Spirit",
      description:
        "SEW Connect unites Sindhus across the world—celebrating their entrepreneurial legacy while providing a global stage for business, culture, and community.",
      icon: Globe,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 4,
      title: "Excellence & Innovation",
      description:
        "Members are encouraged to think big, innovate, and set high standards in their professional journeys. Excellence is not just a goal—it is a way of life at SEW Connect.",
      icon: Sparkles,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      id: 5,
      title: "Community Empowerment",
      description:
        "Our platform empowers individuals and businesses by opening doors to mentorship, visibility, and connections that spark growth across local and international chapters.",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      id: 6,
      title: "Sustainability & Responsibility",
      description:
        "We stand for ethical entrepreneurship, sustainable practices, and giving back to society. Members are guided to create businesses that are both profitable and purposeful.",
      icon: Leaf,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 text-sm px-4 py-1">Our Foundation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Values of SEW Connect
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Building a global community rooted in trust, collaboration, and
              entrepreneurial excellence
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={value.id}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-slate-300"
                >
                  <CardHeader>
                    <div
                      className={`w-14 h-14 rounded-lg ${value.bgColor} flex items-center justify-center mb-4`}
                    >
                      <IconComponent className={`w-7 h-7 ${value.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Join the SEW Connect Community
              </h2>
              <p className="text-blue-50 text-lg mb-6 max-w-2xl mx-auto">
                Be part of a global network that celebrates collaboration,
                innovation, and the entrepreneurial spirit
              </p>
              <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-md">
                Get Connected
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
