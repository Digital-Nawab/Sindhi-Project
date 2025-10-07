import React from "react";
import { Users, Clock, Briefcase } from "lucide-react";

function AdvisoryBoard() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto bg-white shadow-lg rounded-2xl p-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Advisory Board
          </h2>
          <p className="text-gray-600 mt-3 max-w-4xl mx-auto">
            Sindhi Community Across the Globe Sindhus are spread across the
            globe. Few cities with highest population are shown underneath.
            SEWConnect aspires to open city chapter in all these cities so that
            it can organize, events, meetups, and cultural programs.Till the
            time we open a chapter in your city you can become our virtual
            member free of cost. Join your local Sindhi chapter today!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Business Leaders */}
          <div className="flex flex-col items-center">
            <div className="bg-[#D5E4FF] p-4 rounded-lg mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              Business Leaders
            </h3>
            <p className="text-gray-600 mt-2">
              Industry experts guiding entrepreneurial <br /> initiatives
            </p>
          </div>

          {/* Cultural Icons */}
          <div className="flex flex-col items-center">
            <div className="bg-[#EBD5FF] p-4 rounded-lg mb-4">
              <Clock className="w-8 h-8 text-[#D41CE7]" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              Cultural Icons
            </h3>
            <p className="text-gray-600 mt-2">
              Preserving and promoting Sindhi <br />
              heritage
            </p>
          </div>

          {/* Social Workers */}
          <div className="flex flex-col items-center">
            <div className="bg-[#FFF6D7] p-4 rounded-lg mb-4">
              <Briefcase className="w-8 h-8 text-[#A27E07]" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              Social Workers
            </h3>
            <p className="text-gray-600 mt-2">
              Driving community service and welfare <br /> programs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvisoryBoard;
