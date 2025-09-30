import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ShoppingBag, Briefcase, Users, UserCheck } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

function Hero() {
  // Left slider data
  const leftSlides = [
    {
      id: 1,
      image: "/assets/images/slider/left.png",
      alt: "Sindhi Community Heritage",
    },
    { id: 2, image: "/assets/images/slider/left.png", alt: "Business Network" },
    {
      id: 3,
      image: "/assets/images/slider/left.png",
      alt: "Cultural Traditions",
    },
  ];

  // Service cards data matching your website's sections
  const serviceCards = [
    {
      id: 1,
      title: "Products",
      description:
        "Discover authentic Sindhi products from community businesses",
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
      description:
        "Find career opportunities within the Sindhi business network",
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
      description:
        "Connect with Sindhi professionals and entrepreneurs worldwide",
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
      <div className="container mx-auto ">
        {/* Desktop / Tablet Layout */}
        <div className="hidden md:grid grid-cols-12 gap-8 items-stretch">
          {/* Left Column - Main Slider */}
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
              // navigation={{
              //   nextEl: '.swiper-button-next',
              //   prevEl: '.swiper-button-prev',
              // }}
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
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Custom Navigation */}
              {/* <div className="swiper-button-next after:text-white after:text-2xl after:font-bold"></div>
              <div className="swiper-button-prev after:text-white after:text-2xl after:font-bold"></div>
              <div className="swiper-pagination"></div> */}
            </Swiper>
          </div>

          {/* Right Column - Service Cards */}
          <div className="col-span-5 grid grid-rows-4 gap-4 h-[500px]">
            {serviceCards.map((card) => (
              <Link to={card.url} key={card.id}>
                <div
                  className={`${card.bgColor} ${card.borderColor} ${card.hoverColor} border-r border-t border-b border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer p-6 flex items-center justify-between group`}
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
                    <img src={card.icon} alt="" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Mobile Slider */}
          <div className="h-[300px] rounded-xl overflow-hidden">
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
              className="w-full h-full"
            >
              {leftSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative w-full h-full">
                    <img
                      src={slide.image}
                      className="w-full h-full object-cover"
                      alt={slide.alt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Mobile Service Cards - 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceCards.map((card) => (
              <Link to={card.url} key={card.id}>
                <div
                  className={`${card.bgColor} ${card.borderColor} ${card.hoverColor} border-r border-t border-b border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer p-3 group`}
                >
                  <div className="flex items-center justify-between ">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <div
                      className={`${card.iconColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <img src={card.icon} alt="" />
                    </div>
                  </div>
                  {/* <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p> */}
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



// import React, { useState } from "react";

// function Hero() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const leftSlides = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
//       alt: "Sindhi Community Heritage",
//     },
//     { 
//       id: 2, 
//       image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop", 
//       alt: "Business Network" 
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
//       alt: "Cultural Traditions",
//     },
//   ];

//   const serviceCards = [
//     {
//       id: 1,
//       title: "Products",
//       description: "Discover authentic Sindhi products from community businesses",
//       icon: "🛍️",
//       bgColor: "#e7f9e7",
//       url: "/products",
//     },
//     {
//       id: 2,
//       title: "Services",
//       description: "Professional services from trusted community members",
//       icon: "⚙️",
//       bgColor: "#f5d2d2",
//       url: "/services",
//     },
//     {
//       id: 3,
//       title: "Special Offer",
//       description: "Exclusive deals and offers for community members",
//       icon: "🎁",
//       bgColor: "#fbdbae",
//       url: "/offers",
//     },
//     {
//       id: 4,
//       title: "Jobs",
//       description: "Find career opportunities within the Sindhi business network",
//       icon: "💼",
//       bgColor: "#d4e7f7",
//       url: "/career",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % leftSlides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + leftSlides.length) % leftSlides.length);
//   };

//   return (
//     <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 md:py-12 md:px-6">
//       <style>{`
//         .circle-container {
//           position: relative;
//           border: 2px solid #e0e0e0;
//           padding: 0;
//           margin: 0 auto;
//           width: 500px;
//           height: 500px;
//           border-radius: 50%;
//           list-style: none;
//           overflow: hidden;
//           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
//         }
        
//         .circle-container li {
//           overflow: hidden;
//           position: absolute;
//           top: 0;
//           right: 0;
//           width: 50%;
//           height: 50%;
//           transform-origin: 0% 100%;
//           transition: all 0.4s ease;
//         }
        
//         .circle-container li:hover {
//           transform: scale(1.05);
//           z-index: 5;
//         }
        
//         .circle-container .slice {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//         }
        
//         .circle-container .text-content {
//           position: absolute;
//           top: 50%;
//           text-align: center;
//           width: 100%;
//           padding: 0 20px;
//         }
        
//         .circle-container .text-content.tl {
//           right: 15%;
//           transform: rotate(90deg);
//         }
        
//         .circle-container .text-content.tr {
//           top: 58%;
//           transform: rotate(0deg);
//         }
        
//         .circle-container .text-content.bl {
//           top: 58%;
//           transform: rotate(180deg);
//         }
        
//         .circle-container .text-content.br {
//           right: 15%;
//           transform: rotate(270deg);
//         }
        
//         .circle-container li:first-child {
//           transform: rotate(0deg) skewY(0deg);
//         }
        
//         .circle-container li:nth-child(2) {
//           transform: rotate(90deg) skewY(0deg);
//         }
        
//         .circle-container li:nth-child(3) {
//           transform: rotate(180deg) skewY(0deg);
//         }
        
//         .circle-container li:nth-child(4) {
//           transform: rotate(270deg) skewY(0deg);
//         }
        
//         .circle-container li:first-child .slice {
//           background: ${serviceCards[0].bgColor};
//         }
        
//         .circle-container li:nth-child(2) .slice {
//           background: ${serviceCards[1].bgColor};
//         }
        
//         .circle-container li:nth-child(3) .slice {
//           background: ${serviceCards[2].bgColor};
//         }
        
//         .circle-container li:nth-child(4) .slice {
//           background: ${serviceCards[3].bgColor};
//         }
        
//         .center-circle {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 140px;
//           height: 140px;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 10;
//           box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
//           border: 5px solid white;
//         }
        
//         .divider-line-h {
//           position: absolute;
//           top: 50%;
//           left: 0;
//           width: 100%;
//           height: 2px;
//           background: linear-gradient(90deg, transparent, #ccc, transparent);
//           transform: translateY(-50%);
//           z-index: 1;
//         }
        
//         .divider-line-v {
//           position: absolute;
//           top: 0;
//           left: 50%;
//           width: 2px;
//           height: 100%;
//           background: linear-gradient(180deg, transparent, #ccc, transparent);
//           transform: translateX(-50%);
//           z-index: 1;
//         }

//         .icon-large {
//           font-size: 2.5rem;
//           margin-bottom: 0.5rem;
//           filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
//         }

//         .title-text {
//           font-size: 1.25rem;
//           font-weight: 700;
//           color: #2d3748;
//           margin-bottom: 0.25rem;
//         }

//         .desc-text {
//           font-size: 0.75rem;
//           color: #4a5568;
//           line-height: 1.4;
//           max-width: 140px;
//           margin: 0 auto;
//         }
//       `}</style>

//       <div className="container mx-auto">
//         {/* Desktop / Tablet Layout */}
//         <div className="hidden md:grid grid-cols-12 gap-8 items-center">
//           {/* Left Column - Main Slider */}
//           <div className="col-span-6 rounded-xl relative h-[600px]">
//             <div className="rounded-xl shadow-2xl h-full overflow-hidden relative">
//               {leftSlides.map((slide, index) => (
//                 <div
//                   key={slide.id}
//                   className={`absolute inset-0 transition-opacity duration-700 ${
//                     index === currentSlide ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 >
//                   <img
//                     src={slide.image}
//                     className="w-full h-full object-cover"
//                     alt={slide.alt}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//                 </div>
//               ))}

//               <button
//                 onClick={prevSlide}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all z-10"
//               >
//                 ←
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all z-10"
//               >
//                 →
//               </button>

//               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
//                 {leftSlides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all ${
//                       index === currentSlide 
//                         ? 'bg-white w-8' 
//                         : 'bg-white/50 hover:bg-white/75'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Circular Globe Design */}
//           <div className="col-span-6 flex items-center justify-center">
//             <div className="relative" style={{ width: '500px', height: '500px' }}>
//               <ul className="circle-container">
//                 {serviceCards.map((card, index) => (
//                   <li
//                     key={card.id}
//                     onMouseEnter={() => setHoveredCard(card.id)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <a href={card.url}>
//                       <div className="slice">
//                         <div className={`text-content ${
//                           index === 0 ? 'tr' : 
//                           index === 1 ? 'br' : 
//                           index === 2 ? 'bl' : 'tl'
//                         }`}>
//                           <div className="icon-large">{card.icon}</div>
//                           <div className="title-text">{card.title}</div>
//                           <div className="desc-text">{card.description.substring(0, 50)}...</div>
//                         </div>
//                       </div>
//                     </a>
//                   </li>
//                 ))}
//               </ul>

//               {/* Divider Lines */}
//               <div className="divider-line-h"></div>
//               <div className="divider-line-v"></div>

//               {/* Center Circle with Logo */}
//               <div className="center-circle">
//                 <div className="text-center">
//                   <div className="text-white font-bold text-sm">SPECIAL</div>
//                   <div className="text-white font-bold text-xl">OFFER</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Layout */}
//         <div className="md:hidden space-y-6">
//           <div className="h-[300px] rounded-xl overflow-hidden relative shadow-xl">
//             {leftSlides.map((slide, index) => (
//               <div
//                 key={slide.id}
//                 className={`absolute inset-0 transition-opacity duration-700 ${
//                   index === currentSlide ? 'opacity-100' : 'opacity-0'
//                 }`}
//               >
//                 <img
//                   src={slide.image}
//                   className="w-full h-full object-cover"
//                   alt={slide.alt}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//               </div>
//             ))}

//             <button
//               onClick={prevSlide}
//               className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full p-2 text-sm z-10"
//             >
//               ←
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full p-2 text-sm z-10"
//             >
//               →
//             </button>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             {serviceCards.map((card) => (
//               <a href={card.url} key={card.id}>
//                 <div 
//                   className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer p-4 min-h-[120px] flex flex-col justify-between"
//                   style={{ backgroundColor: card.bgColor }}
//                 >
//                   <div className="text-3xl mb-2">{card.icon}</div>
//                   <h3 className="text-lg font-bold text-gray-800">
//                     {card.title}
//                   </h3>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;