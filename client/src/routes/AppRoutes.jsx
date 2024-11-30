import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PageTransition from "../components/pageTransition/PageTransition";
import About from "../screens/about/About";
import Contact from "../screens/contact/Contact";
import Home from "../screens/home/Home";
import Projects from "../screens/projects/Projects";
import Services from "../screens/services/Services";

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* Shutter Down Animation */}
      <PageTransition key={location.key} />

      {/* Page Content */}
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/contact-us" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
