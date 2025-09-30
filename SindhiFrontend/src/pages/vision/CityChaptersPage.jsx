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

const ChaptersPage = () => (
  <Layout>
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            City-Based Chapters
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Local hubs bringing entrepreneurs and professionals together in
            their own cities while staying connected to the global network
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 text-blue-600 mb-2" />
              <CardTitle>Local Networking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Regular in-person or virtual meetings where members exchange
                referrals, share opportunities, and build trusted relationships.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-blue-600 mb-2" />
              <CardTitle>Leadership & Committees</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Every chapter is guided by a management committee (President,
                Secretary, Treasurer) responsible for smooth functioning and
                events.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Building2 className="w-12 h-12 text-blue-600 mb-2" />
              <CardTitle>Membership Base</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Members represent diverse businesses and professions within the
                city, ensuring variety and cross-industry collaboration.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Globe className="w-12 h-12 text-blue-600 mb-2" />
              <CardTitle>Global Link</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                While focusing on local growth, chapters remain connected to the
                global SEW Connect ecosystem for worldwide opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <MapPin className="w-12 h-12 text-blue-600 mb-2" />
              <CardTitle>Events & Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Training sessions, exhibitions, cultural programs, and community
                service projects tailored to the local environment.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CheckCircle className="w-12 h-12 text-blue-600 mb-2" />
              <CardTitle>Accountability & Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Structured referral tracking, attendance systems, and leadership
                rotations ensure transparency and continuous improvement.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl">Types of Membership</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Category Representative Members
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Associate Members</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Verified Members</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">General Members</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center bg-blue-600 text-white rounded-lg p-8">
          <p className="text-xl font-semibold">
            Each city chapter acts as a mini-SEW Connect community — empowering
            members locally while linking them to Sindhu entrepreneurs
            worldwide.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default ChaptersPage;
