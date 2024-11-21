import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoIosPlayCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import heroImg1 from "../../assets/images/hero1.png";
import heroImg2 from "../../assets/images/hero2.png";

// Register ScrollTrigger with GSAP
// gsap.registerPlugin(ScrollTrigger);

export default function Hero3() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(["#hero-title", "#hero-title-2"], {
        translateY: "100%",
        duration: 1.5,
        ease: "power2.inOut",
        opacity: 0,
        delay: 5,

        stagger: 0.2,
      });
      gsap.from("#hero-desc", {
        translateY: "100%",
        duration: 1,
        ease: "power2.inOut",
        delay: 5,
        opacity: 0,
      });
      gsap.from("#hero-btn-1", {
        translateY: "100%",
        duration: 1,
        ease: "power2.inOut",
        opacity: 0,
        delay: 5,
      });
      gsap.from("#hero-btn-2", {
        translateY: "100%",
        duration: 1,
        ease: "power2.inOut",
        opacity: 0,
        delay: 5,
      });
      gsap.from(["#exp-1", "#exp-2"], {
        translateY: "100%",
        duration: 1.8,
        ease: "power2.inOut",
        opacity: 0,
        stagger: 0.2,
        delay: 5,
      });
      gsap.from(["#client-1", "#client-2"], {
        translateY: "100%",
        delay: 5,
        duration: 1.8,
        ease: "power2.inOut",
        opacity: 0,
        stagger: 0.2,
      });
      gsap.from("#pro-1", {
        translateY: "100%",
        duration: 1.1,
        ease: "power2.inOut",
        opacity: 0,
        delay: 5,
      });
      gsap.from("#pro-2", {
        translateY: "100%",
        duration: 1.1,
        ease: "power2.inOut",
        opacity: 0,
        delay: 5.2,
      });
      gsap.to("#hero-img-1-cover", {
        xPercent: "100",
        duration: 1,
        ease: "expo.inOut",
        delay: 5,
      });
      gsap.from("#hero-img-1", {
        scale: 1,
        duration: 1,
        ease: "expo.inOut",
        delay: 5,
      });
      gsap.to("#hero-img-2-cover", {
        xPercent: "100",
        duration: 1,
        ease: "expo.inOut",
        delay: 5.3,
      });
      gsap.from("#hero-img-2", {
        scale: 1,
        duration: 1,
        ease: "expo.inOut",
        delay: 5.3,
      });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={comp}
      data-scroll-container
      id="landing-hero"
      className="w-full font-bodyFont text-lightBodyText   bg-darkPrimary overflow-hidden relative"
    >
      {/* <div
        id="bg-second"
        className="w-[40%] hidden lg:flex h-full bg-darkSecondary absolute z-[2] left-0"
      ></div> */}
      <div className="w-full h-full px-5 sm:px-7 lg:px-10 xl:px-20 py-10 lg:pt-24 lg:pb-10 relative z-[5] backdrop-blur-[1px] flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col gap-5 md:gap-7">
          <div className="uppercase font-titleFont font-bold text-[28px] sm:text-5xl leading-none text-center text-lightTitleText">
            <h1 className="font-light overflow-hidden">
              <span id="hero-title" className="inline-block">
                Transforming Your ideas into
              </span>
            </h1>
            <h1 className="text-[35px] sm:text-6xl md:text-7xl overflow-hidden">
              <span id="hero-title-2" className="inline-block">
                Digital <span className="text-accentColor">reality</span>
              </span>
            </h1>
          </div>
          <p className="text-center text-sm sm:text-lg overflow-hidden">
            <span id="hero-desc" className="inline-block">
              Driven by innovation and client-focused solutions, we elevate
              brands with seamless digital experiences. From tailored software
              design to strategic digital marketing, our team brings expertise
              to every phase of your project.
            </span>
          </p>
          <div className="flex flex-row justify-center items-center gap-5 sm:gap-10 overflow-hidden">
            <Link
              id="hero-btn-1"
              className="px-3 sm:px-5 py-2 bg-accentColor text-darkBodyText rounded-full text-base sm:text-xl flex justify-center items-center"
            >
              Get Started{" "}
              <span className="ps-1">
                <GoArrowRight />
              </span>
            </Link>
            <div
              id="hero-btn-2"
              className="flex justify-center items-center text-base sm:text-xl border border-accentColor rounded-full px-3 sm:px-5 py-2"
            >
              Watch Video{" "}
              <span className="ps-1">
                <IoIosPlayCircle />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-3 lg:gap-7">
          <div className="w-full lg:w-[40%] rounded-xl">
            <div className="flex flex-col gap-3 lg:gap-10  justify-center">
              <div className="w-full aspect-[16/7] bg-accentColor rounded-xl"></div>
              <div className="w-full aspect-[16/7] bg-accentColor rounded-xl"></div>
            </div>
          </div>
          <div className="w-full lg:w-[60%] grid grid-cols-2 gap-1 lg:gap-5">
            <div className="flex justify-center items-end relative overflow-hidden">
              <div
                id="hero-img-1-cover"
                className="w-full h-full bg-darkPrimary absolute top-0 left-0 z-[5]"
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
                className="w-full h-full bg-darkPrimary absolute top-0 left-0 z-[5]"
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
