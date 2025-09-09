import React from "react";

function CareerDetail() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#053951] to-[#0ea5e9] text-white rounded-xl shadow-lg p-10 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Frontend Developer
            </h1>
            <p className="text-lg md:text-xl mb-4">
              Remote | 2+ Years | Full-Time | Development
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <span className="px-4 py-1 bg-[#E31E24] rounded-full text-white font-medium">
                Full-Time
              </span>
              <span className="px-4 py-1 bg-[#053951] rounded-full text-white font-medium">
                Remote
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Job Overview */}
            <div className="bg-white rounded-xl shadow p-8 grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#053951] mb-2">
                  Experience
                </h3>
                <p className="text-gray-600">2+ Years</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#053951] mb-2">
                  Location
                </h3>
                <p className="text-gray-600">Remote</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#053951] mb-2">
                  Department
                </h3>
                <p className="text-gray-600">Development</p>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-xl shadow p-8">
              <h2 className="text-2xl font-semibold text-[#053951] mb-4">
                About the Role
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are looking for a passionate Frontend Developer to join our
                team. You will collaborate with designers and backend developers
                to build modern, responsive, and interactive web applications
                that deliver excellent user experiences. This role requires
                creativity, problem-solving, and attention to detail.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-xl shadow p-8">
              <h2 className="text-2xl font-semibold text-[#053951] mb-4">
                Key Responsibilities
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Develop new user-facing features using React.js</li>
                <li>Build reusable components and libraries</li>
                <li>Ensure technical feasibility of UI/UX designs</li>
                <li>Optimize apps for speed & scalability</li>
                <li>Work closely with backend engineers & designers</li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl shadow p-8">
              <h2 className="text-2xl font-semibold text-[#053951] mb-4">
                Requirements
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Strong proficiency in JavaScript & React.js</li>
                <li>Experience with Tailwind CSS, HTML5, CSS3</li>
                <li>Knowledge of RESTful APIs</li>
                <li>Understanding of responsive design principles</li>
                <li>Excellent communication & teamwork skills</li>
              </ul>
            </div>

            {/* Hiring Process */}
            <div className="bg-white rounded-xl shadow p-8">
              <h2 className="text-2xl font-semibold text-[#053951] mb-4">
                Hiring Process
              </h2>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Application Review</li>
                <li>Technical Assignment</li>
                <li>Interview with Team</li>
                <li>Final HR Round</li>
                <li>Offer & Onboarding</li>
              </ol>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-xl shadow p-8">
              <h2 className="text-2xl font-semibold text-[#053951] mb-4">
                FAQs
              </h2>
              <div className="space-y-4">
                <details className="bg-gray-100 rounded p-4">
                  <summary className="font-medium cursor-pointer">
                    Is this position remote?
                  </summary>
                  <p className="text-gray-600 mt-2">
                    Yes, this is a 100% remote role with flexible hours.
                  </p>
                </details>
                <details className="bg-gray-100 rounded p-4">
                  <summary className="font-medium cursor-pointer">
                    Do you offer training?
                  </summary>
                  <p className="text-gray-600 mt-2">
                    Yes, we provide onboarding sessions and learning resources.
                  </p>
                </details>
              </div>
            </div>

            {/* Apply Section */}
            <div className="bg-[#053951] rounded-xl p-10 text-center shadow-lg">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Apply?
              </h2>
              <p className="text-gray-200 mb-6">
                Join us and help shape the future of our platform.
              </p>
              <a
                href="/apply"
                className="inline-block bg-[#E31E24] hover:bg-red-700 text-white px-10 py-3 rounded-full font-semibold transition"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Benefits */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-[#053951] mb-4">
                Perks & Benefits
              </h3>
              <ul className="text-gray-600 space-y-2 list-disc list-inside">
                <li>Flexible working hours</li>
                <li>Health and wellness benefits</li>
                <li>Professional growth & training</li>
                <li>Collaborative team environment</li>
              </ul>
            </div>

            {/* About Company */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-[#053951] mb-4">
                About Us
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are a fast-growing company dedicated to innovation and
                customer satisfaction. Our mission is to empower businesses with
                digital solutions and create opportunities for growth worldwide.
              </p>
            </div>

            {/* Related Jobs */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-[#053951] mb-4">
                Related Jobs
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li className="hover:text-[#E31E24] cursor-pointer">
                  Backend Developer
                </li>
                <li className="hover:text-[#E31E24] cursor-pointer">
                  UI/UX Designer
                </li>
                <li className="hover:text-[#E31E24] cursor-pointer">
                  Marketing Manager
                </li>
                <li className="hover:text-[#E31E24] cursor-pointer">
                  Product Manager
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerDetail;
