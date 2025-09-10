import React from "react";

function TermCondition() {
  return (
    <section className="bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="max-w-7xl w-full p-6 md:p-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Terms of Service
          </h1>
          <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By
            accessing or using our website, you agree to be bound by these Terms
            of Service. If you do not agree, you may not use our services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
          {/* Introduction */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              1. Introduction
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis, velit nec luctus dictum, sem metus fermentum felis, ac
              tincidunt arcu nisi at purus. Sed at sapien vel arcu viverra
              feugiat. Proin et semper neque, at convallis orci. Pellentesque
              vitae velit id erat posuere laoreet.
            </p>
          </div>

          {/* User Responsibilities */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              2. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                You agree not to misuse our services or attempt to access them
                in ways other than the interface we provide.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                vehicula ligula vel eros fermentum, eget consequat elit
                hendrerit.
              </li>
              <li>
                Donec vulputate odio ut sapien egestas, at efficitur ligula
                pretium. Integer id elit nec dui tristique convallis.
              </li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              3. Intellectual Property
            </h2>
            <p>
              All content provided on this site, including but not limited to
              text, graphics, logos, images, and software, is the property of
              our company or its licensors. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aenean commodo erat euismod sapien
              volutpat, sit amet vestibulum nibh egestas.
            </p>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              4. Termination
            </h2>
            <p>
              We may suspend or terminate your access at any time without prior
              notice if you violate these terms. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque nec nisl id urna eleifend
              tristique a nec massa. Integer et purus at nisi faucibus varius.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              In no event shall we be liable for indirect, incidental, or
              consequential damages arising from your use of our services.
              Vestibulum ac nisi eget sapien lacinia malesuada. Vivamus eget
              facilisis nulla. Etiam porta nunc et orci porta venenatis.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              6. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of your jurisdiction. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Fusce sed massa lacus. Suspendisse
              potenti.
            </p>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-center gap-3 mt-10">
          <button className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm md:text-base">
            Not right now
          </button>
          <button className="px-5 py-2.5 rounded-lg bg-[#053951] text-white hover:bg-[#032d40] transition text-sm md:text-base">
            I agree with terms
          </button>
        </div>
      </div>
    </section>
  );
}

export default TermCondition;
