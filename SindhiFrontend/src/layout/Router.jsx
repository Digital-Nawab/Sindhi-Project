import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Contact from "../pages/contact/Contact"
import Vender from "../pages/vender/Vender"
import VenderDetailPage from '../pages/vender/VenderDetailPage';
import TermConditionPage from '../pages/term.jsx/TermConditionPage';
import PrivacyPolicy from '../pages/privacy/PrivacyPolicy';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import CareerPage from '../pages/career/CareerPage';
import CareerDetail from '../pages/career/CareerComponents/CareerDetail';
import BecomeVender from '../pages/vender/BecomeVender';
function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vendor" element={<Vender />} />
        <Route path="/vendor-detail" element={<VenderDetailPage />} />
        <Route path="/become-vendor" element={<BecomeVender />} />
        <Route path="/term-condition" element={<TermConditionPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/career-detail" element={<CareerDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router