import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

function Hero() {
  const leftSlides = [
    { id: 1, image: "/assets/banner/1.png", alt: "Sindhi Community Heritage" },
    { id: 2, image: "/assets/banner/2.png", alt: "Business Network" },
    { id: 3, image: "/assets/banner/3.png", alt: "Business Network" },
    { id: 4, image: "/assets/banner/4.png", alt: "Business Network" },
    { id: 5, image: "/assets/banner/5.png", alt: "Business Network" },
  ];

  const serviceCards = [
    {
      id: 1,
      title: "Products",
      description: "Discover authentic Sindhi products from community businesses",
      icon: "/assets/images/product.png",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-l-4 !border-[#053951]",
      iconColor: "text-blue-600",
      hoverColor: "hover:from-blue-100 hover:to-blue-150",
      url: "/products",
    },
    {
      id: 2,
      title: "Jobs",
      description: "Find career opportunities within the Sindhi business network",
      icon: "/assets/images/job.png",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
      borderColor: "border-l-4 border-red-500",
      iconColor: "text-red-600",
      hoverColor: "hover:from-red-100 hover:to-red-150",
      url: "/career",
    },
    {
      id: 3,
      title: "Services",
      description: "Professional services from trusted community members",
      icon: "/assets/images/service.png",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      borderColor: "border-l-4 !border-[#053951]",
      iconColor: "text-purple-600",
      hoverColor: "hover:from-purple-100 hover:to-purple-150",
      url: "/services",
    },
    {
      id: 4,
      title: "Members",
      description: "Connect with Sindhi professionals and entrepreneurs worldwide",
      icon: "/assets/images/member.png",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
      borderColor: "border-l-4 border-red-500",
      iconColor: "text-red-600",
      hoverColor: "hover:from-red-100 hover:to-red-150",
      url: "/vendor",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-8 px-4 md:py-12 md:px-6">
      <div className="container mx-auto">
        {/* Desktop / Tablet Layout */}
        <div className="hidden md:grid grid-cols-12 gap-8 items-stretch">
          <div className="col-span-7 rounded-xl relative h-[500px]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
              }}
              effect="fade"
              className="rounded-xl shadow-lg h-full overflow-hidden"
            >
              {leftSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative w-full h-full">
                    <img
                      src={slide.image}
                      className="w-full h-full object-cover"
                      alt={slide.alt}
                      aria-label={slide.alt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
              
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>

          <div className="col-span-5 grid grid-rows-4 gap-4 h-[500px]">
            {serviceCards.map((card) => (
              <Link to={card.url} key={card.id}>
                <div
                  className={`${card.bgColor} ${card.borderColor} ${card.hoverColor} border-r border-t border-b border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer p-3 flex items-center justify-between group`}
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div
                    className={`${card.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <img src={card.icon} alt={`${card.title} icon`} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          <div className="h-[220px] rounded-xl overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              effect="fade"
              className="w-full h-full"
            >
              {leftSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative w-full h-full">
                    <img
                      src={slide.image}
                      className="w-full h-full object-cover"
                      alt={slide.alt}
                      aria-label={slide.alt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceCards.map((card) => (
              <Link to={card.url} key={card.id}>
                <div
                  className={`${card.bgColor} ${card.borderColor} ${card.hoverColor} border-r border-t border-b border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer p-3 group`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <div
                      className={`${card.iconColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <img src={card.icon} alt={`${card.title} icon`} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;