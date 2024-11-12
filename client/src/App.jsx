// import React from "react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { useLayoutEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./screens/about/About";
import Contact from "./screens/contact/Contact";
import Home from "./screens/home/Home";
import Pricing from "./screens/pricing/Pricing";
import Projects from "./screens/projects/Projects";
import Services from "./screens/services/Services";

export default function App() {
  const comp = useRef(null);
  const locomotiveScroll = new LocomotiveScroll();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        yPercent: "-100",
        duration: 1,
        delay: 0.3,
        ease: "expoScale(0.5,7,none)",
      })
        .from(["#title1", "#title2", "#title3", "#title4", "#title5"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.3,
        })
        .to(["#title1", "#title2", "#title3", "#title4", "#title5"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.3,
        })
        .to("#intro-slider", {
          yPercent: "100",
          duration: 1,
          ease: "expoScale(0.5,7,none)",
        })
        .from("#main-container", {
          opacity: 0,
          duration: 1,
          delay: 0.1,
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <BrowserRouter>
      <div className="relative bg-darkPrimary" ref={comp}>
        <div
          id="intro-slider"
          className="w-full h-screen flex  justify-center items-center bg-accentColor fixed top-0 z-[200000] overflow-hidden"
        >
          <div className="flex flex-col gap-5 mx-5 text-3xl sm:text-[10vh] md:text-[8vh] lg:text-[10vh] xl:text-[13vh] text-darkTitleText font-bodyFont uppercase leading-none font-extrabold">
            <h1 id="title1">Software Development</h1>
            <h1 id="title2">Digital Marketing</h1>
            <h1 id="title3">Search Engine Optimization</h1>
            <h1 id="title4">Data Analytics & Insights</h1>
            <h1 id="title5">Quality Assurance</h1>
          </div>
        </div>
        <div id="main-container">
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
        </div>
      </div>
    </BrowserRouter>
  );
}
