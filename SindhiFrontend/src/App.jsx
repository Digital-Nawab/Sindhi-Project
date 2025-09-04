import { useEffect } from "react";
import Router from "./layout/Router";

const App = () => {
   useEffect(() => {
    const scripts = [
      "/assets/js/vendors/modernizr-3.6.0.min.js",
      "/assets/js/vendors/jquery-3.6.0.min.js",
      "/assets/js/vendors/jquery-migrate-3.3.0.min.js",
      "/assets/js/vendors/bootstrap.bundle.min.js",
      "/assets/js/vendors/waypoints.js",
      "/assets/js/vendors/wow.js",
      "/assets/js/vendors/magnific-popup.js",
      "/assets/js/vendors/perfect-scrollbar.min.js",
      "/assets/js/vendors/select2.min.js",
      "/assets/js/vendors/isotope.js",
      "/assets/js/vendors/scrollup.js",
      "/assets/js/vendors/swiper-bundle.min.js",
      "/assets/js/vendors/noUISlider.js",
      "/assets/js/vendors/slider.js",
      "/assets/js/vendors/counterup.js",
      "/assets/js/vendors/jquery.countdown.min.js",
      "/assets/js/vendors/jquery.elevatezoom.js",
      "/assets/js/vendors/slick.js",
      "/assets/js/main.js?v=3.0.0",
      "/assets/js/shop.js?v=1.2.1"
    ];

    scripts.forEach(src => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false; // load in order
      document.body.appendChild(script);
    });

    // cleanup when component unmounts
    return () => {
      scripts.forEach(src => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) document.body.removeChild(script);
      });
    };
  }, []);
  return (
    <Router />
  );
};

export default App;
