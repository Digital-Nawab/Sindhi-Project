import React from "react";

function Privacy() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#053951] mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we handle
            your personal information when you use our services, interact with
            our website, or communicate with us.
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#053951] mb-3">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are committed to protecting your privacy. This Privacy Policy
            outlines the types of personal information we collect, how we use
            it, and your rights regarding that information. By using our
            services, you agree to the practices described in this policy. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus nunc
            in tortor finibus, sed viverra nunc lacinia.
          </p>
        </div>

        {/* Information Collection */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#053951] mb-3">
            Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Personal identification information (Name, Email, Phone number,
              etc.)
            </li>
            <li>
              Usage data such as IP address, browser type, pages visited, time
              spent, and interactions
            </li>
            <li>
              Cookies and tracking technologies to enhance user experience and
              website performance
            </li>
            <li>
              Payment and transaction details when you purchase or subscribe to
              our services
            </li>
            <li>
              Device information such as operating system, device type, and
              location data (if enabled)
            </li>
          </ul>
        </div>

        {/* How We Use Information */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#053951] mb-3">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The information we collect is used to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>Provide, operate, and improve our services</li>
            <li>Respond to inquiries, feedback, and customer support requests</li>
            <li>Send important updates, security alerts, and promotional offers</li>
            <li>
              Personalize your experience and recommend relevant content or
              products
            </li>
            <li>Ensure compliance with applicable laws and regulations</li>
            <li>
              Prevent fraud, monitor suspicious activities, and maintain the
              security of our systems
            </li>
          </ul>
        </div>

        {/* Data Sharing */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#053951] mb-3">
            Data Sharing and Disclosure
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell your personal data. However, we may share information
            with:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>
              Trusted service providers who assist us in delivering our services
            </li>
            <li>
              Law enforcement or regulatory authorities if required by law
            </li>
            <li>
              Business partners in case of a merger, acquisition, or asset sale
            </li>
          </ul>
        </div>

        {/* Cookies */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#053951] mb-3">
            Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar technologies to improve user experience,
            analyze site traffic, and provide personalized content. You can
            manage or disable cookies through your browser settings, though some
            features may not function properly if cookies are disabled.
          </p>
        </div>

        {/* Data Security */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#053951] mb-3">
            Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access,
            disclosure, or destruction. However, no method of transmission over
            the internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </div>

        {/* User Rights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#053951] mb-3">
            Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>Access, correct, or delete your personal data</li>
            <li>
              Request a copy of the information we hold about you in portable
              format
            </li>
            <li>
              Withdraw consent for marketing communications at any time
            </li>
            <li>
              File a complaint with relevant data protection authorities if you
              believe your rights have been violated
            </li>
          </ul>
        </div>

        {/* Third-Party Links */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#053951] mb-3">
            Third-Party Links
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to external websites. We are not
            responsible for the privacy practices or content of third-party
            sites. We encourage you to read their privacy policies before
            sharing any personal data.
          </p>
        </div>

        {/* Changes to Policy */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#053951] mb-3">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technologies, or legal requirements. Any
            updates will be posted on this page with a revised effective date.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold text-[#053951] mb-3">
            Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy or your personal
            information, please contact us at{" "}
            <span className="text-blue-600">support@example.com</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Privacy;
