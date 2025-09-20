import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

function Hero() {
  // Left slider data
  const leftSlides = [
    { id: 1, image: "/assets/images/slider/left.png", alt: "Left slide 1" },
    { id: 2, image: "/assets/images/slider/left.png", alt: "Left slide 2" },
    { id: 3, image: "/assets/images/slider/left.png", alt: "Left slide 3" },
  ];

  // Top right slider data
  const topRightSlides = [
    { id: 1, image: "/assets/images/slider/right1.png", alt: "Top right slide 1" },
    { id: 2, image: "/assets/images/slider/right2.png", alt: "Top right slide 2" },
    { id: 3, image: "/assets/images/slider/right1.png", alt: "Top right slide 3" },
  ];

  // Bottom right slider data
  const bottomRightSlides = [
    { id: 1, image: "/assets/images/slider/right2.png", alt: "Bottom right slide 1" },
    { id: 2, image: "/assets/images/slider/right1.png", alt: "Bottom right slide 2" },
  ];

  return (
    <div className="w-full bg-white py-8 px-4 md:py-16 md:px-6 overflow-hidden shadow-2xl border">
      <div className="container mx-auto">
        {/* Desktop / Tablet Layout */}
        <div className="hidden md:grid grid-cols-5 gap-6 mb-15">
          {/* Left Column - Main Slider */}
          <div className="col-span-3 rounded-lg relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="rounded-lg shadow-lg h-full"
            >
              {leftSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <img
                    src={slide.image}
                    className="w-full h-full object-cover rounded-lg"
                    alt={slide.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Column */}
          <div className="col-span-2 flex flex-col justify-between gap-2 h-full">
            {/* Top Right Slider */}
            <div className="flex-1 relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".top-right-swiper-pagination",
                  clickable: true,
                  type: "bullets",
                }}
                className="rounded-lg shadow-lg h-full"
              >
                {topRightSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <img
                      src={slide.image}
                      className="w-full h-full object-cover rounded-lg"
                      alt={slide.alt}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Bottom Right Slider */}
            <div className="flex-1 relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".bottom-right-swiper-pagination",
                  clickable: true,
                  type: "bullets",
                }}
                className="rounded-lg shadow-lg h-full"
              >
                {bottomRightSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <img
                      src={slide.image}
                      className="w-full h-full object-cover rounded-lg"
                      alt={slide.alt}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Mobile Layout (only Left Slider, 50vh) */}
        <div className="md:hidden h-[35vh]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="rounded-lg shadow-lg w-full h-full"
          >
            {leftSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img
                  src={slide.image}
                  className="w-full h-full object-cover rounded-lg"
                  alt={slide.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Hero;
