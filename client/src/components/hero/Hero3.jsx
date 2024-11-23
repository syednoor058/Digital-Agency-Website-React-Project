import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaRegFolderOpen } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { IoIosPlayCircle } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import heroImg1 from "../../assets/images/hero1.png";
import heroImg2 from "../../assets/images/hero2.png";
import { useAnimation } from "../../context/animationContext/AnimationContextProvider";

// Register ScrollTrigger with GSAP
// gsap.registerPlugin(ScrollTrigger);

export default function Hero3() {
  const { delayLandingPage, setDelayLandingPage } = useAnimation();
  const comp = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(["#hero-title", "#hero-title-2"], {
        translateY: "100%",
        duration: 1.5,
        ease: "power2.inOut",
        opacity: 0,
        delay: delayLandingPage,

        stagger: 0.2,
      });
      gsap.from("#hero-desc", {
        translateY: "100%",
        duration: 1,
        ease: "power2.inOut",
        delay: delayLandingPage,
        opacity: 0,
      });
      gsap.from("#hero-btn-1", {
        translateY: "100%",
        duration: 1,
        ease: "power2.inOut",
        opacity: 0,
        delay: delayLandingPage,
      });
      gsap.from("#hero-btn-2", {
        translateY: "100%",
        duration: 1,
        ease: "power2.inOut",
        opacity: 0,
        delay: delayLandingPage,
      });
      gsap.from("#hero-img-1-cover", {
        translateX: "0",
        duration: 1.5,
        ease: "expo.inOut",
        delay: delayLandingPage,
      });
      gsap.from("#hero-img-1", {
        scale: 1,
        duration: 1.5,
        ease: "expo.inOut",
        delay: delayLandingPage,
      });
      gsap.from("#hero-img-2-cover", {
        translateX: "0",
        duration: 1.5,
        ease: "expo.inOut",
        delay: delayLandingPage,
      });
      gsap.from("#hero-img-2", {
        scale: 1,
        duration: 1.5,
        ease: "expo.inOut",
        delay: delayLandingPage,
      });
      gsap.from("#satisfied-clients", {
        translateY: "100%",
        duration: 1.5,
        ease: "power2.inOut",
        delay: delayLandingPage,
      });
      gsap.from("#completed-projects", {
        translateY: "100%",
        duration: 1.5,
        ease: "power2.inOut",
        delay: delayLandingPage,
      });
    }, comp);

    return () => ctx.revert();
  }, []);
  useEffect(() => {
    if (delayLandingPage !== 0) {
      setDelayLandingPage(0);
    }
  }, []);
  return (
    <div
      ref={comp}
      data-scroll-container
      id="landing-hero"
      className="w-full h-full lg:min-h-screen font-bodyFont text-lightBodyText   bg-darkPrimary overflow-hidden relative"
    >
      <div className="w-full px-5 sm:px-7 lg:px-10 xl:px-20 py-10 lg:pt-24 lg:pb-10 relative z-[5] backdrop-blur-[1px] flex flex-col lg:flex-row gap-10 md:gap-16">
        <div className="w-full lg:w-[50%] flex flex-col gap-5 md:gap-7">
          <div className="uppercase font-titleFont font-bold text-[28px] sm:text-5xl lg:text-[30px] leading-none text-center lg:text-start text-lightTitleText">
            <h1 className="font-light overflow-hidden">
              <span id="hero-title" className="inline-block">
                Transforming Your ideas into
              </span>
            </h1>
            <h1 className="text-[35px] sm:text-6xl md:text-7xl lg:text-6xl overflow-hidden">
              <span id="hero-title-2" className="inline-block">
                Digital <span className="text-accentColor">reality</span>
              </span>
            </h1>
          </div>
          <p className="text-center lg:text-start text-sm sm:text-lg lg:text-base overflow-hidden">
            <span id="hero-desc" className="inline-block">
              Driven by innovation and client-focused solutions, we elevate
              brands with seamless digital experiences. From tailored software
              design to strategic digital marketing, our team brings expertise
              to every phase of your project.
            </span>
          </p>
          <div className="flex flex-row justify-center lg:justify-start items-center gap-5 sm:gap-10 overflow-hidden">
            <div
              id="hero-btn-1"
              className="bg-accentColor text-darkBodyText rounded-full text-base sm:text-xl group overflow-hidden relative"
            >
              <Link to="/pricing" className="w-full h-full ">
                <span className="w-full h-full rounded-full bg-lightPrimary absolute top-0 left-0 translate-x-[-100%] group-hover:translate-x-0 duration-500 ease-in-out"></span>
                <span className="flex justify-center items-center relative px-3 sm:px-5 py-2">
                  Get Started{" "}
                  <span className="ps-1">
                    <GoArrowRight />
                  </span>
                </span>
              </Link>
            </div>
            <div
              id="hero-btn-2"
              className="border border-lightPrimary text-lightBodyText rounded-full text-base sm:text-xl group overflow-hidden relative"
            >
              <Link to="/pricing" className="w-full h-full ">
                <span className="w-full h-full rounded-full bg-lightPrimary absolute top-0 left-0 translate-x-[-100%] group-hover:translate-x-0 duration-500"></span>
                <span className="flex justify-center items-center relative px-3 sm:px-5 py-2 group-hover:text-darkTitleText duration-500">
                  Watch Video{" "}
                  <span className="ps-1">
                    <IoIosPlayCircle />
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div>
            <div className="w-full grid grid-cols-2 gap-10 pt-5 overflow-hidden">
              <div
                id="satisfied-clients"
                className="flex flex-col gap-1 leading-none"
              >
                <div className="font-medium text-3xl">
                  <span className="flex flex-row gap-2 items-center">
                    <span className="text-accentColor">
                      <IoPersonCircle />
                    </span>{" "}
                    12+
                  </span>
                </div>
                <div className="font-extralight capitalize text-sm sm:text-base">
                  Satisfied clients all over the world.
                </div>
              </div>
              <div
                id="completed-projects"
                className="flex flex-col gap-1 leading-none"
              >
                <div className="font-medium text-3xl">
                  <span className="flex flex-row gap-2 items-center">
                    <span className="text-accentColor">
                      <FaRegFolderOpen />
                    </span>{" "}
                    20
                  </span>
                </div>
                <div className="font-extralight capitalize text-sm sm:text-base">
                  Projects completed successfully.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex flex-col-reverse lg:flex-row-reverse gap-3 lg:gap-7">
          <div className="w-full grid grid-cols-2 gap-1 lg:gap-5">
            <div className="flex justify-center items-start relative overflow-hidden">
              <div
                id="hero-img-1-cover"
                className="w-full h-full bg-darkPrimary absolute top-0 left-0 z-[5] translate-x-[100%]"
              ></div>
              <img
                id="hero-img-1"
                className="w-full h-auto z-[2]"
                src={heroImg1}
                alt="businessman"
              />
            </div>
            <div className="flex justify-center items-end relative overflow-hidden ">
              <div
                id="hero-img-2-cover"
                className="w-full h-full bg-darkPrimary absolute top-0 left-0 z-[5] translate-x-[100%]"
              ></div>
              <img
                id="hero-img-2"
                className="w-full h-auto z-[2] object-cover"
                src={heroImg2}
                alt="google_review"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
