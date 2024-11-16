import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const comp = useRef(null);
  const locomotiveScroll = new LocomotiveScroll();
  useLayoutEffect(() => {
    let gsapContext = gsap.context(() => {
      const introTimeline = gsap.timeline();

      introTimeline
        .from("#intro-end-shutter", {
          yPercent: "-100",
          duration: 1,
          delay: 0.6,
          ease: "expo.inOut",
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
            translateY: "100%",
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",

            stagger: 0.2,
          },
          "<0.6"
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
            translateY: "-100%",
            opacity: 0,
            delay: 0.1,
            duration: 1,
            ease: "expo.inOut",

            stagger: 0.2,
          }
        )
        .to("#intro-end-shutter", {
          yPercent: "100",
          duration: 0.7,
          ease: "expo.inOut",
        })
        .to(
          "#intro-end",
          {
            yPercent: "100",
            duration: 0.8,
            ease: "expo.inOut",
          },
          "<0.5"
        );
    }, comp);

    return () => gsapContext.revert();
  }, []);
  return (
    <BrowserRouter>
      <div className="relative bg-darkPrimary" ref={comp}>
        <div
          id="intro-end-shutter"
          className="w-full h-screen bg-darkPrimary fixed z-[1900] px-5 flex justify-center items-center overflow-hidden text-center top-0 left-0 text-lightPrimary uppercase font-bold text-[4vw] leading-none"
        >
          <div className="flex flex-row gap-5 justify-center items-center">
            <div className="overflow-hidden">
              <span id="intro-title" className="inline-block">
                Envision
              </span>
            </div>
            <div className="overflow-hidden">
              <div
                id="intro-title1"
                className="w-[1vw] h-[1vw] bg-accentColor"
              ></div>
            </div>
            <div className="overflow-hidden">
              <span id="intro-title2" className="inline-block">
                Elevate
              </span>
            </div>
            <div className="overflow-hidden">
              <div
                id="intro-title3"
                className="w-[1vw] h-[1vw] bg-accentColor"
              ></div>
            </div>
            <div className="overflow-hidden">
              <span className="inline-block" id="intro-title4">
                Empower
              </span>
            </div>
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
