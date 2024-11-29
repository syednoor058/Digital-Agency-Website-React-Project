import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../screens/about/About";
import Contact from "../screens/contact/Contact";
import Home from "../screens/home/Home";
import Projects from "../screens/projects/Projects";
import Services from "../screens/services/Services";

export default function AppRoutes() {
  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/about-us" element={<About />} />
      <Route exact path="/contact-us" element={<Contact />} />
    </Routes>
  );
}
