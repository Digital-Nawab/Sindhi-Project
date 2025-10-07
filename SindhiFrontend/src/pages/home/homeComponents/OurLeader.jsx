import React from "react";

// Utility: get initials if no image
const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

// Utility: consistent gradient color per name
const getGradientForName = (name) => {
  const gradients = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  ];
  const index = name.charCodeAt(0) % gradients.length;
  return gradients[index];
};

function OurLeader() {
  const leaders = [
    {
      name: "Co-Chairman , Hinduja Group",
      title: " Gopichand Hinduja",
      message: "Business must be with a purpose beyond profit.",
      img: "/assets/banner/gopichand.jpg",
    },
    {
      name: "Niranjan Hiranandani",
      title: "Founder, Hiranandani Group",
      message:
        "Entrepreneurship is not about taking risk — it’s about managing risk.",
      img: "/assets/banner/Hiranandani.jpg",
    },
    {
      name: "Didi Krishna Kumari",
      title: "Head, Sadhu Vaswani Mission",
      message:
        "Spirituality is not a retreat from life — it’s a way to live life beautifully.",
      img: "/assets/banner/krishna.jpg",
    },
    {
      name: "Dr. Ram Buxani",
      title: "Chairman, ITL Cosmos Group, Dubai",
      message:
        "Success comes not from luck, but from loyalty — loyalty to your work, to your people, and to your values.",
      img: "/assets/banner/ram.jpg",
    },
    {
      name: "Ritesh Sidhwani",
      title: "Co-Founder, Excel Entertainment",
      message:
        "We started not knowing what the future held — only that we wanted to tell stories that inspire.",
      img: "",
    },
    {
      name: "Ranveer Singh Bhavnani",
      title: "Actor, Producer",
      message: "Don’t be afraid to stand out — that’s what makes you shine.",
      img: "/assets/banner/ranvir.jpg",
    },
    {
      name: "Dada J.P. Vaswani",
      title: "Spiritual Leader, Sadhu Vaswani Mission",
      message:
        "Happiness is not having what you like, but liking what you have.",
      img: "/assets/banner/dada.jpg",
    },
  ];

  return (
    <section className="bg-[#09246B]/80 py-16 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Messages from Our Leaders
          </h2>
          <p className="text-gray-200 mt-3 max-w-lg mx-auto">
            Inspiring words from Sindhi leaders worldwide about our community's
            vision and values.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF]/20 rounded-xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center mb-4">
                {leader.img ? (
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                ) : (
                  <div
                    className="w-12 h-12 rounded flex items-center justify-center text-white font-bold text-lg"
                    style={{ background: getGradientForName(leader.name) }}
                  >
                    {getInitials(leader.name)}
                  </div>
                )}

                <div className="ml-3">
                  <h3 className="font-semibold">{leader.name}</h3>
                  <p className="text-sm text-gray-200">{leader.title}</p>
                </div>
              </div>
              <p className="text-gray-100 italic">“{leader.message}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurLeader;
