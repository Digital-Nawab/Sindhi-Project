import React, { useState } from "react";

const jobsData = [
  { title: "Frontend Developer", location: "Remote", experience: "2+ Years", type: "Development" },
  { title: "Backend Developer", location: "On-site (Bangalore)", experience: "3+ Years", type: "Development" },
  { title: "UI/UX Designer", location: "Remote", experience: "1+ Years", type: "Design" },
  { title: "Marketing Manager", location: "On-site (Delhi)", experience: "4+ Years", type: "Marketing" },
  { title: "Product Manager", location: "Remote", experience: "3+ Years", type: "Management" },
];

const testimonials = [
  { name: "Rahul Sharma", role: "Frontend Developer", feedback: "Working here has accelerated my career growth and learning." },
  { name: "Priya Singh", role: "UI/UX Designer", feedback: "The company culture is amazing and very collaborative." },
  { name: "Amit Verma", role: "Backend Developer", feedback: "I enjoy solving challenging problems and seeing impact in real time." },
];

const faqData = [
  { question: "How do I apply?", answer: "Click on the 'Apply Now' button on the job card and submit your resume." },
  { question: "What is the interview process?", answer: "Our process includes a technical round followed by HR discussion." },
  { question: "Can I work remotely?", answer: "Yes, several positions are available as remote work." },
];

function Career() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Remote", "On-site", "Design", "Development", "Marketing", "Management"];

  const filteredJobs = jobsData.filter(job => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Remote") return job.location.toLowerCase().includes("remote");
    if (activeFilter === "On-site") return job.location.toLowerCase().includes("on-site");
    return job.type === activeFilter;
  });

  return (
    <section className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="relative w-full min-h-[350px] flex items-center justify-center bg-gradient-to-r from-[#053951] via-[#1e3a8a] to-[#0ea5e9]">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative text-center px-6 text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg md:text-2xl mb-8">
            Empower vendors and users with your skills. Grow your career and make an impact!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#jobs" className="bg-white text-[#053951] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Explore Openings
            </a>
            <a href="/apply" className="bg-[#E31E24] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#053951] mb-16">Why Work With Us</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: "🚀", title: "Growth", desc: "Career advancement, skill development, and mentorship." },
            { icon: "💡", title: "Innovation", desc: "Work on challenging projects where creativity matters." },
            { icon: "🤝", title: "Culture", desc: "Collaborative, inclusive, and vibrant environment." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-xl shadow hover:shadow-2xl transition text-center transform hover:-translate-y-2">
              <div className="text-5xl mb-5">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#053951]">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Openings */}
      <div id="jobs" className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#053951] text-center mb-12">Current Openings</h2>

          {/* Job Filter Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {filters.map((filter, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full shadow transition ${
                  activeFilter === filter ? "bg-[#053951] text-white" : "bg-white hover:bg-[#E31E24] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition flex flex-col justify-between transform hover:-translate-y-2 hover:border-l-4 hover:border-[#E31E24]">
                <div>
                  <h3 className="text-xl font-semibold text-[#053951] mb-2">{job.title}</h3>
                  <p className="text-gray-600"><strong>Location:</strong> {job.location}</p>
                  <p className="text-gray-600"><strong>Experience:</strong> {job.experience}</p>
                </div>
                <a href="/apply" className="mt-6 inline-block bg-[#E31E24] text-white px-5 py-2 rounded-lg font-medium hover:bg-red-700 text-center transition">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#053951] mb-12">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[{ number: "500+", title: "Vendors" }, { number: "1M+", title: "Users" }, { number: "10+", title: "Awards" }].map((stat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-4xl font-bold text-[#E31E24] mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#053951] text-center mb-12">What Our Employees Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition text-center transform hover:-translate-y-2">
              <p className="text-gray-600 mb-4">"{t.feedback}"</p>
              <h4 className="text-lg font-semibold text-[#053951]">{t.name}</h4>
              <p className="text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#053951] text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition">
              <h3 className="font-semibold text-[#053951] mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="bg-[#053951] py-20 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to be part of our platform?</h2>
        <p className="text-gray-200 mb-8">Join our team to help vendors and users connect seamlessly. Apply now and make an impact!</p>
        <a href="/apply" className="inline-block bg-[#E31E24] px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition">
          Apply Now
        </a>
      </div>

    </section>
  );
}

export default Career;
