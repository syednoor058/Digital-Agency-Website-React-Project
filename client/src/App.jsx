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
      t1.from("#intro-end-shutter", {
        yPercent: "-100",
        duration: 1,
        ease: "expo.inOut",
        delay: 0.5,
      })
        .from(
          [
            "#intro-title",
            "#intro-title1",
            "#intro-title2",
            "#intro-title3",
            "#intro-title4",
          ],
          {
            opacity: 0,
            y: "+=30",
            duration: 0.3,
            stagger: 0.1,
          }
        )
        .to(
          [
            "#intro-title",
            "#intro-title1",
            "#intro-title2",
            "#intro-title3",
            "#intro-title4",
          ],
          {
            opacity: 0,
            y: "-=30",
            delay: 0.5,
            duration: 0.3,
            stagger: 0.1,
          }
        )
        .to(
          "#intro-end-shutter",
          {
            yPercent: "100",
            duration: 1,
            ease: "expo.inOut",
          },
          "<0.5"
        )
        .to(
          "#intro-end",
          {
            yPercent: "100",
            duration: 0.5,
            ease: "expo.inOut",
          },
          "<0.7"
        );
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <BrowserRouter>
      <div className="relative bg-darkPrimary" ref={comp}>
        <div
          id="intro-end-shutter"
          className="w-full h-screen bg-darkPrimary fixed z-[1900] px-5 flex  justify-center items-center overflow-hidden text-center top-0 left-0 text-lightPrimary uppercase font-bold text-[4vw] leading-none"
        >
          <div className="flex flex-row gap-5 justify-center items-center">
            <div id="intro-title">Envision</div>
            <div
              id="intro-title1"
              className="w-[1vw] h-[1vw] bg-accentColor"
            ></div>
            <div id="intro-title2">Elevate</div>
            <div
              id="intro-title3"
              className="w-[1vw] h-[1vw] bg-accentColor"
            ></div>
            <div id="intro-title4">Empower</div>
          </div>
        </div>
        <div
          id="intro-end"
          className="w-full min-h-screen bg-accentColor fixed top-0 left-0 z-[1800]"
        ></div>
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
