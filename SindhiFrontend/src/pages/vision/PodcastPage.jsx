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

const PodcastPage = () => (
  <Layout>
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Podcast className="w-20 h-20 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Jewels of SEW Connect
          </h1>
          <p className="text-xl text-gray-600 italic max-w-3xl mx-auto">
            "Stories that Connect, Inspire, and Empower"
          </p>
        </div>

        <Card className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-2xl">About the Podcast</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Jewels of SEW Connect is the official podcasting channel of Sindhu
              Entrepreneurs' World Connect (SEW Connect), dedicated to
              celebrating the visionaries, trailblazers, and changemakers of the
              Sindhu community across the globe.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through engaging conversations, inspiring stories, and
              thought-provoking discussions, the podcast shines a spotlight on
              the "jewels" of SEW Connect — entrepreneurs, professionals, and
              leaders who embody the spirit of innovation, resilience, and
              collaboration.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What Listeners Can Expect
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
              <CardHeader>
                <CardTitle className="text-purple-700">
                  Entrepreneurial Journeys
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  First-hand stories of challenges, breakthroughs, and successes
                  from entrepreneurs who have made their mark.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-blue-700">
                  Leadership Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Wisdom from community leaders and global professionals sharing
                  their experiences and perspectives.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="text-green-700">
                  Networking & Growth Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Practical advice on business building, referrals, and global
                  expansion strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-600">
              <CardHeader>
                <CardTitle className="text-orange-700">
                  Culture & Legacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Exploring the rich Sindhu tradition of trade, unity, and
                  service in a modern context.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-pink-600 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-pink-700">
                  Youth & Future Voices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conversations with the next generation of leaders who are
                  shaping tomorrow's world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mb-8 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Our Purpose</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white text-lg leading-relaxed mb-4">
              The podcast serves as both a platform and archive of inspiration,
              amplifying voices that not only guide entrepreneurs but also
              strengthen the global Sindhu identity. It is a place where every
              episode sparks ideas, builds connections, and creates
              opportunities.
            </p>
            <p className="text-white text-lg leading-relaxed font-semibold">
              With Jewels of SEW Connect, we aim to unite Sindhu minds worldwide
              — one story, one conversation, and one connection at a time.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6"
            onClick={() =>
              window.open("https://www.youtube.com/@SEWConnect", "_blank")
            }
          >
            <Podcast className="w-6 h-6 mr-2" />
            Visit Our YouTube Channel
          </Button>
        </div>
      </div>
    </div>
  </Layout>
);
export default PodcastPage;
