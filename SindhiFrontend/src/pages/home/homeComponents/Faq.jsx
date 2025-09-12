import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

function Faq() {
  const faqs = [
    {
      q: "What are your business hours?",
      a: "Our business hours are Monday to Friday, 9am to 6pm.",
    },
    {
      q: "What are your shipping options?",
      a: "We offer standard and express shipping options.",
    },
    {
      q: "Can I get more information about a product?",
      a: "Yes! You can contact our support team or check the product page.",
    },
    {
      q: "How long does shipping take?",
      a: "Shipping usually takes 3-7 business days depending on your location.",
    },
    {
      q: "Are your products covered by a warranty?",
      a: "Yes, all our products come with a 1-year warranty.",
    },
    {
      q: "How do I place an order?",
      a: "You can place an order directly on our website using the 'Add to Cart' button.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900">
          Our Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition hover:shadow-lg"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center px-6 py-5">
                <span className="font-bold text-lg md:text-md text-gray-700">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  height: openIndex === index ? contentRefs.current[index]?.scrollHeight : 0,
                  transition: "height 0.3s ease",
                  overflow: "hidden",
                }}
                className="px-6 text-gray-700"
              >
                <div className="py-2">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
