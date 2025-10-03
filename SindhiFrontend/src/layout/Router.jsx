import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Vender from "../pages/vender/Vender";
import VenderDetailPage from "../pages/vender/VenderDetailPage";
import TermConditionPage from "../pages/term.jsx/TermConditionPage";
import PrivacyPolicy from '../pages/privacy/PrivacyPolicy';
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import CareerPage from "../pages/career/CareerPage";
import CareerDetail from "../pages/career/CareerComponents/CareerDetail";
import BecomeVender from "../pages/vender/BecomeVender";
import Product from "../pages/product/Product";
import ProductDetail from "../pages/product/ProductDetail";
import Services from "../pages/service/Services";
import ServiceDetail from "../pages/service/ServiceDetail";
import SEWConnectPage from "../pages/vision/Vision";
import Jewels from "../pages/jewels/Jewels";
import Function from "../pages/function/Function";
import Achieve from "../pages/vision/Achieve";
import ChaptersPage from "../pages/vision/CityChaptersPage";
import DirectoryPage from "../pages/vision/DirectoryPage";
import PodcastPage from "../pages/vision/PodcastPage";
import AgraChapterFounders from "../pages/Agra";
import Offerings from "../pages/Offerings";
import SEWConnectValues from "../pages/SEWConnectValues";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/vendor" element={<Vender />} />
        <Route path="/vendor-detail" element={<VenderDetailPage />} />
        <Route path="/become-vendor" element={<BecomeVender />} />
        <Route path="/term-condition" element={<TermConditionPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/career-detail" element={<CareerDetail />} />
        <Route path="/products" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/vision-mission" element={<SEWConnectPage />} />
        <Route path="/how-we-achieve" element={<Achieve />} />
        <Route path="/jewels" element={<Jewels />} />
        <Route path="/functions" element={<Function />} />
        <Route path="/chapters" element={<ChaptersPage />} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/values" element={<SEWConnectValues />} />
        <Route path="/our-offerings" element={<Offerings />} />
        <Route path="/agra-chapter-founders" element={<AgraChapterFounders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
