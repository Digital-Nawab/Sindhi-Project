import React, { useState } from "react";

const jobDetail = {
  id: "senior-fullstack-dev-001",
  title: "Senior Full Stack Developer (React/Node.js)",
  department: "Product Engineering",
  location: "Bangalore, Karnataka",
  type: "Engineering",
  experience: "4-6 Years",
  salary: "₹15-22 LPA",
  posted: "2 days ago",
  applications: "127 applications",
  status: "Actively Hiring",
  workMode: "Hybrid (3 days office)",
  reportingTo: "Engineering Manager - Platform Team",
  teamSize: "12 engineers across frontend, backend, and mobile"
};

const jobDescription = {
  overview: "We're looking for a Senior Full Stack Developer to join our Platform Engineering team. You'll work on high-impact features that directly serve 250,000+ vendors and 5M+ monthly customers across India. This role offers the opportunity to work with modern tech stack, solve complex scalability challenges, and mentor junior developers.",
  
  responsibilities: [
    "Build and maintain scalable web applications using React.js and Node.js",
    "Design and implement RESTful APIs and microservices architecture",
    "Collaborate with product managers and designers to translate requirements into technical solutions",
    "Optimize application performance for high-traffic scenarios (5M+ monthly users)",
    "Mentor junior developers and contribute to engineering best practices",
    "Participate in code reviews and maintain high code quality standards",
    "Work on database design and optimization (MongoDB, PostgreSQL)",
    "Implement automated testing and CI/CD pipelines",
    "Debug production issues and ensure system reliability"
  ],
  
  requirements: [
    "4-6 years of professional software development experience",
    "Strong expertise in React.js, Node.js, and JavaScript/TypeScript",
    "Experience with RESTful API design and implementation",
    "Proficiency in database technologies (MongoDB, PostgreSQL, Redis)",
    "Experience with cloud platforms (AWS, Azure, or GCP)",
    "Knowledge of version control systems (Git) and CI/CD practices",
    "Understanding of software architecture patterns and best practices",
    "Experience with testing frameworks (Jest, Mocha, Cypress)",
    "Strong problem-solving and debugging skills"
  ],
  
  preferred: [
    "Experience in e-commerce or marketplace platforms",
    "Knowledge of microservices architecture",
    "Experience with containerization (Docker, Kubernetes)",
    "Familiarity with monitoring tools (New Relic, DataDog)",
    "Experience mentoring junior developers",
    "Understanding of payment gateway integrations",
    "Knowledge of data structures and algorithms"
  ]
};

const techStack = [
  { category: "Frontend", tools: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Next.js"] },
  { category: "Backend", tools: ["Node.js", "Express.js", "NestJS", "GraphQL", "REST APIs"] },
  { category: "Database", tools: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"] },
  { category: "Cloud & DevOps", tools: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"] },
  { category: "Monitoring", tools: ["New Relic", "DataDog", "Sentry", "CloudWatch"] }
];

const benefits = [
  { icon: "💰", title: "Competitive Package", desc: "₹15-22 LPA + performance bonus + ESOP" },
  { icon: "🏥", title: "Health Coverage", desc: "Complete medical insurance for you and family" },
  { icon: "📚", title: "Learning Budget", desc: "₹75,000 annual budget for courses, conferences, books" },
  { icon: "🏠", title: "Flexible Work", desc: "Hybrid model with 2 days WFH + co-working allowance" },
  { icon: "🚀", title: "Career Growth", desc: "Fast-track promotion opportunities + internal mobility" },
  { icon: "🎉", title: "Team Culture", desc: "Quarterly offsites + hackathons + team bonding activities" }
];

const hiringProcess = [
  { step: 1, title: "Application Review", desc: "Resume screening and initial assessment", duration: "2-3 days" },
  { step: 2, title: "Technical Assessment", desc: "Coding challenge or take-home assignment", duration: "3-4 days" },
  { step: 3, title: "Technical Interview", desc: "System design and problem-solving discussion", duration: "1 hour" },
  { step: 4, title: "Team Interaction", desc: "Meet your potential team members and manager", duration: "45 mins" },
  { step: 5, title: "Final Discussion", desc: "Culture fit and offer discussion with leadership", duration: "30 mins" }
];

const teamMembers = [
  { name: "Priya Sharma", role: "Engineering Manager", image: "👩‍💼", desc: "10+ years at Google, Meta. Leads platform architecture." },
  { name: "Rahul Kumar", role: "Senior Backend Engineer", image: "👨‍💻", desc: "Ex-Flipkart. Expert in microservices and scalability." },
  { name: "Sneha Patel", role: "Frontend Lead", image: "👩‍💻", desc: "Design systems expert. Loves building delightful UX." },
  { name: "Amit Gupta", role: "DevOps Engineer", image: "👨‍🔧", desc: "Cloud infrastructure guru. Ensures 99.9% uptime." }
];

const faqs = [
  { q: "What's the work culture like in the engineering team?", a: "We follow agile methodologies with 2-week sprints, daily standups, and retrospectives. The culture emphasizes ownership, continuous learning, and work-life balance. We have dedicated time for technical debt and innovation projects." },
  { q: "What growth opportunities are available?", a: "Clear career progression from Senior to Staff to Principal Engineer. We also offer lateral moves to product management, technical writing, or team leadership. 70% of our engineering managers were promoted internally." },
  { q: "How do you handle on-call and production support?", a: "We have a fair rotation system where each engineer does on-call once every 6-8 weeks. We provide on-call compensation and ensure proper documentation and monitoring to minimize incidents." },
  { q: "What's the typical day-to-day work?", a: "Mix of feature development, code reviews, technical discussions, and collaboration with product/design teams. You'll spend 60% time coding, 20% in meetings, and 20% on planning and code reviews." }
];

function CareerDetail() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const tabs = [
    { id: "overview", label: "Job Overview" },
    { id: "requirements", label: "Requirements" },
    { id: "team", label: "Meet the Team" },
    { id: "process", label: "Hiring Process" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-3">
          <nav className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span> 
            <span>Careers</span> <span className="mx-2">/</span> 
            <span className="text-blue-600">Senior Full Stack Developer</span>
          </nav>
        </div>
      </div>

      {/* Job Header */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {jobDetail.status}
                </span>
                <span className="text-gray-500 text-sm">{jobDetail.applications}</span>
                <span className="text-gray-500 text-sm">•</span>
                <span className="text-gray-500 text-sm">Posted {jobDetail.posted}</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{jobDetail.title}</h1>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <span className="w-4 h-4 mr-2">🏢</span>
                    <span className="text-sm font-medium">Department</span>
                  </div>
                  <span className="text-gray-900 font-semibold">{jobDetail.department}</span>
                </div>
                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <span className="w-4 h-4 mr-2">📍</span>
                    <span className="text-sm font-medium">Location</span>
                  </div>
                  <span className="text-gray-900 font-semibold">{jobDetail.location}</span>
                </div>
                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <span className="w-4 h-4 mr-2">💼</span>
                    <span className="text-sm font-medium">Experience</span>
                  </div>
                  <span className="text-gray-900 font-semibold">{jobDetail.experience}</span>
                </div>
                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <span className="w-4 h-4 mr-2">💰</span>
                    <span className="text-sm font-medium">Salary</span>
                  </div>
                  <span className="text-gray-900 font-semibold">{jobDetail.salary}</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-blue-900 font-medium mb-2">Quick Info:</p>
                <div className="text-sm text-blue-800 space-y-1">
                  <div>• Work Mode: {jobDetail.workMode}</div>
                  <div>• Team Size: {jobDetail.teamSize}</div>
                  <div>• Reports to: {jobDetail.reportingTo}</div>
                </div>
              </div>
            </div>

            <div className="lg:w-80">
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                <p className="text-blue-100 mb-6 text-sm">Join 180+ talented individuals building India's future of commerce.</p>
                <button 
                  onClick={() => setShowApplicationModal(true)}
                  className="w-full bg-yellow-400 text-blue-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors mb-3"
                >
                  Apply for this Role
                </button>
                <button className="w-full border-2 border-white text-white py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-colors">
                  Share this Job
                </button>
              </div>

              {/* Quick Benefits */}
              {/* <div className="mt-6 bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">Why You'll Love It Here</h4>
                <div className="space-y-3">
                  {benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <span className="text-lg">{benefit.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{benefit.title}</div>
                        <div className="text-gray-600 text-xs">{benefit.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="text-blue-600 text-sm font-medium mt-4 hover:underline">
                  View all benefits →
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id 
                    ? "border-blue-600 text-blue-600" 
                    : "border-transparent text-gray-600 hover:text-blue-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Role</h2>
                  <p className="text-gray-700 leading-relaxed">{jobDescription.overview}</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h3>
                  <ul className="space-y-3">
                    {jobDescription.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Tech Stack</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {techStack.map((stack, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-gray-900 mb-3">{stack.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {stack.tools.map((tool, toolIdx) => (
                            <span key={toolIdx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "requirements" && (
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Qualifications</h2>
                  <ul className="space-y-3">
                    {jobDescription.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Preferred Qualifications</h3>
                  <ul className="space-y-3">
                    {jobDescription.preferred.map((pref, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{pref}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">💡 Not sure if you meet all requirements?</h3>
                  <p className="text-gray-700 text-sm">We encourage you to apply anyway! We value diverse perspectives and are happy to train motivated candidates who show potential.</p>
                </div>
              </div>
            )}

            {activeTab === "team" && (
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet Your Future Colleagues</h2>
                  <p className="text-gray-600 mb-6">You'll be working closely with this amazing team of engineers, product managers, and designers.</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {teamMembers.map((member, idx) => (
                      <div key={idx} className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">{member.image}</div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{member.name}</h4>
                            <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                            <p className="text-gray-600 text-sm">{member.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Team Culture & Values</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl mb-2">🚀</div>
                      <h4 className="font-medium text-gray-900 mb-2">Innovation First</h4>
                      <p className="text-gray-600 text-sm">We encourage experimentation and learning from failures</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl mb-2">🤝</div>
                      <h4 className="font-medium text-gray-900 mb-2">Collaboration</h4>
                      <p className="text-gray-600 text-sm">Cross-functional teamwork and knowledge sharing</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl mb-2">⚡</div>
                      <h4 className="font-medium text-gray-900 mb-2">Impact Driven</h4>
                      <p className="text-gray-600 text-sm">Focus on features that move business metrics</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "process" && (
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
                  <p className="text-gray-600 mb-6">We've designed our process to be efficient and transparent. The entire process typically takes 1-2 weeks.</p>
                  
                  <div className="space-y-6">
                    {hiringProcess.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-900">{step.title}</h4>
                            <span className="text-sm text-gray-500">{step.duration}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">📋 Interview Preparation Tips</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Review system design concepts (scalability, databases, caching)</li>
                    <li>• Practice coding problems on LeetCode or HackerRank</li>
                    <li>• Be ready to discuss your past projects and technical decisions</li>
                    <li>• Prepare questions about our tech stack and engineering culture</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "faq" && (
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                        <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Still have questions?</h3>
                  <p className="text-gray-600 text-sm mb-4">We're happy to answer any questions about this role or working at our company.</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Contact Hiring Team
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Job Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Job ID:</span>
                  <span className="font-medium">{jobDetail.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Department:</span>
                  <span className="font-medium">{jobDetail.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Job Type:</span>
                  <span className="font-medium">Full-time</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Work Mode:</span>
                  <span className="font-medium">{jobDetail.workMode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Applications:</span>
                  <span className="font-medium">{jobDetail.applications}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Similar Roles</h3>
              <div className="space-y-3">
                <div className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
                  <div className="font-medium text-gray-900 text-sm">Frontend Engineer</div>
                  <div className="text-gray-600 text-xs">React.js • 3-5 years • Bangalore</div>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
                  <div className="font-medium text-gray-900 text-sm">Backend Engineer</div>
                  <div className="text-gray-600 text-xs">Node.js • 4-6 years • Mumbai</div>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
                  <div className="font-medium text-gray-900 text-sm">DevOps Engineer</div>
                  <div className="text-gray-600 text-xs">AWS • 4-6 years • Remote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Apply for this Role</h3>
              <button 
                onClick={() => setShowApplicationModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 mb-6">We'll redirect you to our application portal where you can upload your resume and complete the application.</p>
            <div className="flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Continue to Apply
              </button>
              <button 
                onClick={() => setShowApplicationModal(false)}
                className="px-6 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CareerDetail;