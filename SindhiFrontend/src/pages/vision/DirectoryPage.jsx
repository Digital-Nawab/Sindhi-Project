import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  BookOpen,
  Podcast,
  Users,
  Globe,
  TrendingUp,
  MapPin,
  Search,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import Layout from "../../layout/Layout";

const DirectoryPage = () => (
  <Layout>
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sindhu Connect Directory
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A global business and professional listing platform uniting
            entrepreneurs, companies, and service providers from the Sindhu
            community worldwide
          </p>
        </div>

        <Card className="mb-8 bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200">
          <CardHeader>
            <CardTitle className="text-2xl">
              What is the Sindhu Connect Directory?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Sindhu Connect Directory is a trusted digital marketplace,
              enabling members to showcase their products, services, skills, and
              expertise while making it easier for others to discover and
              connect with them.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>Verified Listings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Authenticated listings of Sindhu entrepreneurs, professionals,
                  and organizations ensuring trust and credibility.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Search className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>Search & Discover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Find businesses easily by category, city, or industry with
                  advanced search and filtering capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-10 h-10 text-purple-600 mb-2" />
                <CardTitle>Global Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced SEO optimization ensuring top ranking on Google and
                  other search engines for worldwide reach.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-10 h-10 text-orange-600 mb-2" />
                <CardTitle>Networking Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Direct connections, referrals, and collaborations with
                  verified community members worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow md:col-span-2">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-red-600 mb-2" />
                <CardTitle>Community Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Promoting Sindhu entrepreneurship and generating new
                  opportunities through strategic partnerships and visibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4 text-center">
            More Than Just a Listing
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">
            The Sindhu Connect Directory is a gateway to global recognition,
            credibility, and growth. With a dedicated SEO strategy, the
            directory will be boosted on Google rankings, ensuring that Sindhu
            businesses are not only visible locally but also easily discoverable
            worldwide by customers, partners, and investors.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default DirectoryPage;
