import React from "react";

function Faq() {
  return (
    <div className="mt-16 max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-[#053951] mb-6 text-center">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        <details className="p-4 border rounded-lg">
          <summary className="font-medium cursor-pointer">
            How can I reach your support team?
          </summary>
          <p className="mt-2 text-gray-600">
            You can email us at support@mailus.com or call our helpline.
          </p>
        </details>
        <details className="p-4 border rounded-lg">
          <summary className="font-medium cursor-pointer">
            What are your working hours?
          </summary>
          <p className="mt-2 text-gray-600">
            Monday to Friday, 9:00 AM to 6:00 PM.
          </p>
        </details>
        <details className="p-4 border rounded-lg">
          <summary className="font-medium cursor-pointer">
            What are your working hours?
          </summary>
          <p className="mt-2 text-gray-600">
            Monday to Friday, 9:00 AM to 6:00 PM.
          </p>
        </details>
        <details className="p-4 border rounded-lg">
          <summary className="font-medium cursor-pointer">
            What are your working hours?
          </summary>
          <p className="mt-2 text-gray-600">
            Monday to Friday, 9:00 AM to 6:00 PM.
          </p>
        </details>
      </div>
    </div>
  );
}

export default Faq;
