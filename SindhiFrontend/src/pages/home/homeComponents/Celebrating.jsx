import React from "react";
import { Award } from "lucide-react";

function Celebrating() {
  const cards = [
    {
      title: "The Legacy of Sindhi Entrepreneurship",
      description:
        "From the partition of India to building global business empires, Sindhi entrepreneurs have shown remarkable resilience and innovation.",
      img: "assets/images/celebrating1.png",
    },
    {
      title: "Cultural Traditions That Bind Us",
      description:
        "From the partition of India to building global business empires, Sindhi entrepreneurs have shown remarkable resilience and innovation.",
      img: "assets/images/celebrating2.png",
    },
    {
      title: "Global Sindhi Network",
      description:
        "From the partition of India to building global business empires, Sindhi entrepreneurs have shown remarkable resilience and innovation.",
      img: "assets/images/celebrating3.png",
    },
  ];

  return (
    <section className="pt-16 bg-white">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Celebrating Our Heritage
        </h2>
        <p className="mt-4 text-gray-600">
          Discover the rich history, traditions, and success stories that make
          our <br /> community unique
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#FFF3EC] rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="mt-3 text-gray-900 text-md leading-relaxed">
                {card.description}
              </p>

              {/* Fact box */}
              <div className="mt-6 p-4 bg-white rounded-lg border text-sm text-gray-700 flex items-start gap-2">
                <Award className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <p>
                  <span className="font-medium">Did you know?</span> Sindhis make
                  up less than 0.25% of India’s population but contribute
                  significantly to business and trade.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Celebrating;
