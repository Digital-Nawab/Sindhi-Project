import React from "react";

function OurLeader() {
  const leaders = [
    {
      name: "Ramesh Advani",
      title: "Business Leader, Dubai",
      message:
        "Service to humanity is service to God. Our community's strength lies in our unity.",
      img: "assets/images/home/ourLeader1.jpg",
    },
    {
      name: "Dr. Kamala Vaswani",
      title: "Philanthropist, Mumbai",
      message:
        "Education is the greatest gift we can give to our youth. Let's build a brighter future.",
      img: "assets/images/home/ourLeader2.jpg",
    },
    {
      name: "Arjun Khemani",
      title: "Arjun Khemani",
      message: "Innovation and tradition can coexist beautifully. We're proof of that.",
      img: "assets/images/home/ourLeader3.jpg",
    },
  ];

  return (
    <section className="bg-[#09246B]/80 py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Messages from Our Leaders
          </h2>
          <p className="text-gray-200 mt-3 max-w-lg mx-auto">
            Inspiring words from Sindhi leaders worldwide about our community's
            vision and values.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF]/20 rounded-xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-12 h-12 rounded object-cover "
                />
                <div className="ml-3">
                  <h3 className="font-semibold">{leader.name}</h3>
                  <p className="text-sm text-gray-200">{leader.title}</p>
                </div>
              </div>
              <p className=" text-gray-100">"{leader.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurLeader;
