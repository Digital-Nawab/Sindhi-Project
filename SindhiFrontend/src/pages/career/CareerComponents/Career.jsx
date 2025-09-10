import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const jobsData = [
  {
    title: "Senior Vendor Success Manager",
    location: "Mumbai, Maharashtra",
    experience: "4-6 Years",
    type: "Business",
    salary: "₹8-12 LPA",
    department: "Vendor Relations",
    posted: "2 days ago",
  },
  {
    title: "Full Stack Developer (React/Node)",
    location: "Bangalore, Karnataka",
    experience: "3-5 Years",
    type: "Engineering",
    salary: "₹12-18 LPA",
    department: "Product Engineering",
    posted: "1 week ago",
  },
  {
    title: "Product Designer",
    location: "Delhi NCR",
    experience: "2-4 Years",
    type: "Design",
    salary: "₹8-14 LPA",
    department: "Design",
    posted: "3 days ago",
  },
  {
    title: "Data Analyst - Marketplace Insights",
    location: "Pune, Maharashtra",
    experience: "2-3 Years",
    type: "Analytics",
    salary: "₹6-10 LPA",
    department: "Data Science",
    posted: "5 days ago",
  },
  {
    title: "Customer Experience Lead",
    location: "Hyderabad, Telangana",
    experience: "3-5 Years",
    type: "Operations",
    salary: "₹7-11 LPA",
    department: "Customer Success",
    posted: "1 day ago",
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    experience: "4-6 Years",
    type: "Engineering",
    salary: "₹15-22 LPA",
    department: "Infrastructure",
    posted: "4 days ago",
  },
  {
    title: "Regional Sales Manager",
    location: "Chennai, Tamil Nadu",
    experience: "5-8 Years",
    type: "Sales",
    salary: "₹10-16 LPA",
    department: "Business Development",
    posted: "6 days ago",
  },
  {
    title: "Quality Assurance Engineer",
    location: "Ahmedabad, Gujarat",
    experience: "2-4 Years",
    type: "Engineering",
    salary: "₹5-8 LPA",
    department: "Quality Assurance",
    posted: "3 days ago",
  },
];

const testimonials = [
  {
    name: "Anjali Mehta",
    role: "Senior Product Manager",
    feedback:
      "The pace of learning here is incredible. Every day brings new challenges as we scale our marketplace to serve millions of users and thousands of vendors.",
    tenure: "2.5 years",
    image: "👩‍💼",
  },
  {
    name: "Rohan Gupta",
    role: "Lead Frontend Engineer",
    feedback:
      "Working on a platform that directly impacts small businesses across India gives real meaning to the code I write. The technical challenges keep me engaged.",
    tenure: "3 years",
    image: "👨‍💻",
  },
  {
    name: "Kavya Reddy",
    role: "Vendor Success Manager",
    feedback:
      "Helping vendors grow their business from ₹10k to ₹1L+ monthly revenue through our platform is the most rewarding part of my job.",
    tenure: "1.8 years",
    image: "👩‍🎯",
  },
  {
    name: "Arjun Singh",
    role: "Data Scientist",
    feedback:
      "The amount of marketplace data we work with is fascinating. Building ML models that optimize vendor-customer matching at scale is incredibly challenging.",
    tenure: "2 years",
    image: "👨‍🔬",
  },
];

const faqData = [
  {
    question: "What's the hiring process like?",
    answer:
      "Typically 3-4 rounds: Initial screening, technical/domain assessment, team interaction, and final discussion with leadership. The process takes 1-2 weeks.",
  },
  {
    question: "Do you offer remote work options?",
    answer:
      "Yes! We have hybrid (3 days office), fully remote, and office-first roles depending on the position. Location flexibility is part of our culture.",
  },
  {
    question: "What growth opportunities are available?",
    answer:
      "We promote internally first, offer learning stipends, conference attendance, and have clear career progression paths. Many of our managers started as individual contributors.",
  },
  {
    question: "What benefits do you provide?",
    answer:
      "Health insurance for family, mental health support, flexible leave policy, stock options, performance bonuses, and annual team offsites.",
  },
  {
    question: "How big is the team?",
    answer:
      "We're currently 180+ employees across 8 cities, with plans to reach 250+ by end of year. Still startup culture with growth-stage opportunities.",
  },
];

const companyStats = [
  {
    number: "2,50,000+",
    title: "Active Vendors",
    desc: "Growing by 1000+ monthly",
  },
  { number: "5.2M+", title: "Monthly Orders", desc: "Across 500+ cities" },
  { number: "₹850 Cr", title: "Annual GMV", desc: "Growing 3x year-over-year" },
  { number: "180+", title: "Team Members", desc: "Across India" },
];

const benefits = [
  {
    icon: "🏥",
    title: "Health & Wellness",
    desc: "Complete health coverage + mental health support + gym membership",
  },
  {
    icon: "📈",
    title: "Growth & Learning",
    desc: "₹50k annual learning budget + conference tickets + internal mobility",
  },
  {
    icon: "💰",
    title: "Financial Security",
    desc: "Competitive salary + performance bonus + ESOP participation",
  },
  {
    icon: "⏰",
    title: "Work-Life Balance",
    desc: "Flexible hours + unlimited sick leave + 25 days annual leave",
  },
  {
    icon: "🏠",
    title: "Work From Anywhere",
    desc: "Hybrid model + remote options + co-working allowance",
  },
  {
    icon: "🎉",
    title: "Culture & Community",
    desc: "Team offsites + hackathons + employee resource groups",
  },
];

function Career() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Engineering",
    "Business",
    "Design",
    "Sales",
    "Analytics",
    "Operations",
  ];

  const filteredJobs = jobsData.filter((job) => {
    if (activeFilter === "All") return true;
    return job.type === activeFilter;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-3">
          <nav className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>{" "}
            <span className="text-blue-600">Careers</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
              We're hiring across India! 🚀
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Build the Future of
              <span className="block text-yellow-400">Commerce in India</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Join India's fastest growing multi-vendor marketplace. Help
              250,000+ vendors reach millions of customers across 500+ cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#jobs"
                className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105"
              >
                View Open Positions
              </a>
              <a
                href="#culture"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all"
              >
                Learn About Our Culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact Across India
            </h2>
            <p className="text-gray-600 text-lg">
              Numbers that show the scale of what you'll be working on
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-3xl font-bold text-blue-900 mb-2">
                    {stat.number}
                  </h3>
                  <p className="font-semibold text-gray-900 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-sm text-gray-600">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="jobs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 text-lg">
              Find your next career opportunity with us
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {filters.map((filter, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-blue-900 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-900 shadow"
                }`}
              >
                {filter}{" "}
                {filter === "All"
                  ? `(${jobsData.length})`
                  : `(${jobsData.filter((job) => job.type === filter).length})`}
              </button>
            ))}
          </div>

          {/* Job Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredJobs.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mb-2">
                        {job.department}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                    </div>
                    <span className="text-xs text-gray-500">{job.posted}</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <span className="w-4 h-4 mr-3">📍</span>
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <span className="w-4 h-4 mr-3">💼</span>
                      <span>{job.experience} experience</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <span className="w-4 h-4 mr-3">💰</span>
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        job.type === "Engineering"
                          ? "bg-green-100 text-green-800"
                          : job.type === "Design"
                          ? "bg-purple-100 text-purple-800"
                          : job.type === "Business"
                          ? "bg-orange-100 text-orange-800"
                          : job.type === "Sales"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {job.type}
                    </span>
                    <NavLink to='/career-detail'>
                      <button className="bg-blue-900 cursor-pointer text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition-all">
                        Apply Now
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join Our Team?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We believe in taking care of our people. Here's how we support
              your professional and personal growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:border-blue-200"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section
        id="culture"
        className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hear From Our Team
            </h2>
            <p className="text-gray-600 text-lg">
              Real stories from the people building India's marketplace
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      "{testimonial.feedback}"
                    </p>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600 text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {testimonial.tenure} at company
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to common questions about working with us
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:border-blue-200 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Mark?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join a team that's transforming how India shops and how businesses
            grow. Your next big opportunity awaits.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#jobs"
              className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all"
            >
              Browse All Positions
            </a>
            <a
              href="mailto:careers@company.com"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all"
            >
              Send Us Your Resume
            </a>
          </div>
          <div className="mt-8 text-blue-200 text-sm">
            <p>
              Questions? Email us at{" "}
              <a href="mailto:careers@company.com" className="underline">
                careers@company.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Career;
