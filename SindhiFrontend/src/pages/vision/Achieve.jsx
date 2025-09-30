import React, { useState } from 'react';
import { Building2, Users, BookOpen, Mic, Globe, Target, ChevronDown, ChevronUp, Award, TrendingUp, Network, Sparkles, Rocket, Map } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Achieve() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const initiatives = [
    {
      id: 'chapters',
      icon: 'Building2',
      title: 'City-Based Chapters',
      subtitle: 'Local Hubs, Global Network',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500',
      description: 'City-based chapters are the local hubs of SEW Connect, designed to bring entrepreneurs and professionals together in their own cities while staying connected to the global network.',
      features: [
        {
          icon: 'Users',
          title: 'Local Networking',
          desc: 'Regular in-person or virtual meetings where members exchange referrals, share opportunities, and build trusted relationships.'
        },
        {
          icon: 'Award',
          title: 'Leadership & Committees',
          desc: 'Every chapter is guided by a management committee (President, Secretary, Treasurer, etc.) responsible for smooth functioning and member engagement.'
        },
        {
          icon: 'Network',
          title: 'Membership Base',
          desc: 'Members represent diverse businesses and professions within their city, ensuring variety and cross-industry collaboration.'
        },
        {
          icon: 'Globe',
          title: 'Global Link',
          desc: 'Chapters remain connected to the global SEW Connect ecosystem — enabling members to access opportunities beyond their city.'
        },
        {
          icon: 'Target',
          title: 'Events & Activities',
          desc: 'Chapters organize training sessions, exhibitions, cultural programs, and community service projects tailored to their local environment.'
        },
        {
          icon: 'TrendingUp',
          title: 'Accountability & Growth',
          desc: 'Structured referral tracking, attendance systems, and leadership rotations ensure transparency and continuous improvement.'
        }
      ],
      membershipTypes: 'Category Representative Members, Associate Members, Verified Members, General Members'
    },
    {
      id: 'directory',
      icon: 'BookOpen',
      title: 'Sindhu Connect Directory',
      subtitle: 'Your Global Business Marketplace',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500',
      description: 'The Sindhu Connect Directory is a global business and professional listing platform that unites entrepreneurs, companies, and service providers from the Sindhu community across the world.',
      features: [
        {
          icon: 'Sparkles',
          title: 'Verified Listings',
          desc: 'Authenticated profiles of Sindhu entrepreneurs, professionals, and organizations.'
        },
        {
          icon: 'Target',
          title: 'Search & Discover',
          desc: 'Find businesses by category, city, or industry with advanced filtering.'
        },
        {
          icon: 'Globe',
          title: 'Global Visibility',
          desc: 'Advanced SEO optimization ensuring top ranking on Google and other search engines.'
        },
        {
          icon: 'Network',
          title: 'Networking Opportunities',
          desc: 'Direct connections, referrals, and collaborations made easy.'
        },
        {
          icon: 'TrendingUp',
          title: 'Community Growth',
          desc: 'Promoting Sindhu entrepreneurship and generating new opportunities worldwide.'
        }
      ],
      tagline: 'More than just a listing — a gateway to global recognition, credibility, and growth.'
    },
    {
      id: 'podcast',
      icon: 'Mic',
      title: 'Jewels of SEW Connect',
      subtitle: 'Stories that Connect, Inspire, and Empower',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500',
      description: 'The official podcasting channel of Sindhu Entrepreneurs\' World Connect, celebrating the visionaries, trailblazers, and changemakers of the Sindhu community across the globe.',
      content: [
        {
          icon: 'Rocket',
          title: 'Entrepreneurial Journeys',
          desc: 'First-hand stories of challenges, breakthroughs, and successes from community leaders.'
        },
        {
          icon: 'Award',
          title: 'Leadership Insights',
          desc: 'Wisdom from global professionals and community leaders shaping the future.'
        },
        {
          icon: 'TrendingUp',
          title: 'Networking & Growth Tips',
          desc: 'Practical advice on business building, referrals, and global expansion strategies.'
        },
        {
          icon: 'Sparkles',
          title: 'Culture & Legacy',
          desc: 'Exploring the rich Sindhu tradition of trade, unity, and service in a modern context.'
        },
        {
          icon: 'Users',
          title: 'Youth & Future Voices',
          desc: 'Conversations with the next generation shaping tomorrow\'s business landscape.'
        }
      ],
      purpose: 'The podcast serves as both a platform and archive of inspiration, amplifying voices that strengthen the global Sindhu identity and create opportunities.'
    }
  ];

  const IconComponent = ({ name, className }) => {
    const icons = {
      Building2, Users, BookOpen, Mic, Globe, Target, ChevronDown, 
      ChevronUp, Award, TrendingUp, Network, Sparkles, Rocket, Map
    };
    const Icon = icons[name];
    return Icon ? <Icon className={className} /> : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-lg bg-white bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Network className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SEW Connect
                </h1>
                <p className="text-xs text-gray-600">Sindhu Entrepreneurs' World Connect</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#chapters" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Chapters</a>
              <a href="#directory" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Directory</a>
              <a href="#podcast" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Podcast</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 mb-6 px-5 py-2.5 bg-white shadow-lg rounded-full text-sm font-semibold text-blue-600 border border-blue-200">
            <Target className="w-4 h-4" />
            <span>How We Achieve Our Goals</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Building a Global Network
            <span className="block mt-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              One Connection at a Time
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering Sindhu entrepreneurs worldwide through local chapters, global directories, and inspiring stories.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-10">
          {initiatives.map((initiative, idx) => {
            const isExpanded = expandedSection === initiative.id;
            
            return (
              <div
                key={initiative.id}
                id={initiative.id}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  {/* Card Header with Gradient */}
                  <div className={`bg-gradient-to-r ${initiative.color} p-8 text-white relative`}>
                    <div className="absolute inset-0 bg-black opacity-5"></div>
                    <div className="flex items-start justify-between relative z-10">
                      <div className="flex items-center space-x-5">
                        <div className="p-4 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm shadow-lg">
                          <IconComponent name={initiative.icon} className="w-10 h-10" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold mb-1">{initiative.title}</h3>
                          <p className="text-white text-opacity-95 text-lg">{initiative.subtitle}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleSection(initiative.id)}
                        className="p-3 hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-300 hover:scale-110"
                        aria-label={isExpanded ? "Collapse section" : "Expand section"}
                      >
                        {isExpanded ? <ChevronUp className="w-7 h-7" /> : <ChevronDown className="w-7 h-7" />}
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-8">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {initiative.description}
                    </p>

                    {isExpanded && (
                      <div className="space-y-6">
                        {/* Features Grid */}
                        {initiative.features && (
                          <div className="grid md:grid-cols-2 gap-5 mt-8">
                            {initiative.features.map((feature, featureIdx) => (
                              <div
                                key={featureIdx}
                                className="group/card p-5 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                              >
                                <div className="flex items-start space-x-4">
                                  <div className={`p-3 bg-gradient-to-r ${initiative.color} rounded-xl shadow-md group-hover/card:scale-110 transition-transform duration-300`}>
                                    <IconComponent name={feature.icon} className="w-6 h-6 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Podcast Content */}
                        {initiative.content && (
                          <div className="space-y-4 mt-8">
                            {initiative.content.map((item, itemIdx) => (
                              <div
                                key={itemIdx}
                                className="group/content p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-l-4 border-orange-500 hover:border-orange-600 hover:shadow-md transition-all duration-300"
                              >
                                <div className="flex items-start space-x-4">
                                  <div className="p-2.5 bg-orange-500 rounded-lg shadow-md group-hover/content:scale-110 transition-transform duration-300">
                                    <IconComponent name={item.icon} className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 mb-1.5 text-lg">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Additional Info */}
                        {initiative.membershipTypes && (
                          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200 shadow-md">
                            <div className="flex items-start space-x-3">
                              <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-bold text-blue-900 mb-2 text-lg">Membership Types</h4>
                                <p className="text-blue-700">{initiative.membershipTypes}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {initiative.tagline && (
                          <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 shadow-md">
                            <div className="flex items-center space-x-3">
                              <Sparkles className="w-6 h-6 text-purple-600" />
                              <p className="text-purple-900 font-semibold text-lg italic">{initiative.tagline}</p>
                            </div>
                          </div>
                        )}

                        {initiative.purpose && (
                          <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border-2 border-orange-200 shadow-md">
                            <div className="flex items-start space-x-3">
                              <Target className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-bold text-orange-900 mb-2 text-lg">Our Purpose</h4>
                                <p className="text-orange-800 leading-relaxed">{initiative.purpose}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {initiative.id === 'chapters' && (
                          <div className="mt-8 p-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white shadow-xl">
                            <div className="flex items-center justify-center space-x-3 mb-3">
                              <Globe className="w-8 h-8" />
                              <Sparkles className="w-6 h-6" />
                            </div>
                            <p className="text-xl font-semibold text-center leading-relaxed">
                              Each city chapter acts as a mini-SEW Connect community — empowering members locally while linking them to Sindhu entrepreneurs worldwide.
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {!isExpanded && (
                      <button
                        onClick={() => toggleSection(initiative.id)}
                        className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                      >
                        <span>Explore More</span>
                        <ChevronDown className="w-5 h-5" />
                      </button>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
              <Globe className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Unite Sindhu Minds Worldwide
          </h3>
          <p className="text-2xl text-white text-opacity-95 mb-10 leading-relaxed max-w-3xl mx-auto">
            One story, one conversation, and one connection at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="group px-10 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2">
              <Building2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Join a Chapter</span>
            </button>
            <button className="group px-10 py-4 bg-transparent border-3 border-white text-white rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2">
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Explore Directory</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SEW Connect</span>
            </div>
            <p className="text-sm text-center">© 2025 SEW Connect - Sindhu Entrepreneurs' World Connect</p>
            <p className="text-xs text-gray-500 text-center max-w-md">
              Empowering entrepreneurs, building communities, creating opportunities
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}