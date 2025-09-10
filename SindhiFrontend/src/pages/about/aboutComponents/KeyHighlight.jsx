import React from "react";

function KeyHighlight() {
  const highlights = [
    { title: "Lorem ipsum dolor sit amet:", desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Ut enim ad minim veniam:", desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { title: "Duis aute irure dolor in reprehenderit:", desc: "In voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { title: "Excepteur sint occaecat cupidatat:", desc: "Non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { title: "Sed ut perspiciatis unde omnis:", desc: "Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." },
    { title: "Nemo enim ipsam voluptatem:", desc: "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos." },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#053951] mb-8">
          Key Highlights
        </h2>

        {/* Highlights List */}
        <ul className="space-y-3 list-disc list-inside">
          {highlights.map((item, index) => (
            <li
              key={index}
              className="text-base md:text-lg leading-relaxed text-gray-700"
            >
              <span className="font-semibold text-[#053951]">{item.title}</span>{" "}
              {item.desc}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default KeyHighlight;
