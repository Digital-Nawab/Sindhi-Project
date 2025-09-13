import React from "react";
import { MapPin, Clock, IndianRupee } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Sales Manager",
    company: "Sindhi Textiles Ltd.",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹8-12 LPA",
    skills: ["Sales Strategy", "Team Leadership"],
  },
  {
    id: 2,
    title: "Sales Manager",
    company: "Sindhi Textiles Ltd.",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹8-12 LPA",
    skills: ["Sales Strategy", "Team Leadership"],
  },
  {
    id: 3,
    title: "Sales Manager",
    company: "Sindhi Textiles Ltd.",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹8-12 LPA",
    skills: ["Sales Strategy", "Team Leadership"],
  },
  {
    id: 4,
    title: "Sales Manager",
    company: "Sindhi Textiles Ltd.",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹8-12 LPA",
    skills: ["Sales Strategy", "Team Leadership"],
  },
  {
    id: 5,
    title: "Sales Manager",
    company: "Sindhi Textiles Ltd.",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹8-12 LPA",
    skills: ["Sales Strategy", "Team Leadership"],
  },
  {
    id: 6,
    title: "Sales Manager",
    company: "Sindhi Textiles Ltd.",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹8-12 LPA",
    skills: ["Sales Strategy", "Team Leadership"],
  },
];

function WeAreHiring() {
  return (
    <section className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">We Are Hiring</h1>
          <p className="mt-2 text-[#8C8C8C]">
            Join the Sindhi business community and advance your career
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-[#FFF3EC99]/60 border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 relative"
            >
              <button className="absolute top-4 right-4 bg-[#E82600] hover:bg-[#E82600] text-white px-4 py-2 rounded-md text-sm shadow-md">
                Apply Now
              </button>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {job.title}
                </h3>
                <p className="text-[#E82600] mb-4">{job.company}</p>
                <p className="text-[#8C8C8C] text-sm flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gray-400" /> {job.location}
                </p>
                <p className="text-[#8C8C8C] text-sm flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-gray-400" /> {job.type} •{" "}
                  {job.experience}
                </p>
                <p className="text-[#8C8C8C] text-sm flex items-center gap-2 mb-4">
                  <IndianRupee className="w-4 h-4 text-gray-400" /> {job.salary}
                </p>
                <p className="text-gray-800 font-medium mb-2">
                  Required Skills:
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 border border-[#E82600] text-[#E82600] text-sm rounded-md font-bold bg-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WeAreHiring;
