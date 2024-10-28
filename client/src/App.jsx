// import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./screens/about/About";
import Contact from "./screens/contact/Contact";
import Home from "./screens/home/Home";
import Pricing from "./screens/pricing/Pricing";
import Projects from "./screens/projects/Projects";
import Services from "./screens/services/Services";

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <BrowserRouter>
      <div className="w-full fixed top-0 z-[1000] bg-lightPrimary bg-opacity-90 backdrop-blur-[6px]">
        <Navbar />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
