import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import { GoArrowRight, GoClock } from "react-icons/go";
import { IoIosPlayCircle } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { RiTaskLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import heroImg1 from "../../assets/images/hero1.png";
import heroImg2 from "../../assets/images/hero2.png";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Hero3() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#landing-hero",
          start: "top 90%",
        },
      });
      heroTimeline
        .from("#bg-second", {
          xPercent: "100",
          delay: 4.4,
          duration: 1,
          ease: "expo.inOut",
        })
        .from(
          ["#hero-title", "#hero-title-2"],
          {
            y: "+=30",
            duration: 0.5,
            ease: "expo.inOut",
            opacity: 0,
            stagger: 0.2,
          },
          "<0.2"
        )
        .from(
          "#hero-desc",
          {
            y: "+=30",
            duration: 0.5,
            ease: "expo.inOut",
            opacity: 0,
          },
          "<0.2"
        )
        .from(
          "#hero-btn-1",
          {
            y: "+=30",
            duration: 0.5,
            ease: "expo.inOut",
            opacity: 0,
          },
          "<0.2"
        )
        .from(
          "#hero-btn-2",
          {
            y: "+=30",
            duration: 0.5,
            ease: "expo.inOut",
            opacity: 0,
          },
          "<0.2"
        )
        .from(
          ["#exp-1", "#exp-2"],
          {
            y: "+=30",
            duration: 0.5,
            ease: "expo.inOut",
            opacity: 0,
            stagger: 0.2,
          },
          "<0.2"
        )
        .from(
          ["#client-1", "#client-2"],
          {
            y: "+=30",
            duration: 0.5,
            ease: "expo.inOut",
            opacity: 0,
            stagger: 0.2,
          },
          "<0.2"
        );

      heroTimeline.add(() => {
        gsap.from("#pro-1", {
          y: "+=30",
          duration: 0.5,
          ease: "expo.inOut",
          opacity: 0,
          rotateX: "-90",
          scrollTrigger: {
            trigger: "#pro-1",
            start: "top bottom",
          },
        });
        gsap.from("#pro-2", {
          y: "+=20",
          duration: 0.5,
          ease: "expo.inOut",
          opacity: 0,
          rotateX: "-90",
          scrollTrigger: {
            trigger: "#pro-2",
            start: "top bottom",
          },
        });
      }, comp.current);
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={comp}
      id="landing-hero"
      className="w-full min-h-screen font-bodyFont text-lightBodyText   bg-darkPrimary relative"
    >
      <div
        id="bg-second"
        className="w-[40%] hidden lg:flex h-full bg-darkSecondary absolute z-[2] right-0"
      ></div>
      <div className="w-full h-full px-5 sm:px-7 lg:px-10 xl:px-20 py-10 lg:pt-24 lg:pb-10 relative z-[5] backdrop-blur-[1px] flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col gap-5 md:gap-7">
          <div className="uppercase font-titleFont font-bold text-[28px] sm:text-5xl leading-none text-center text-lightTitleText">
            <h1 id="hero-title" className="font-light overflow-hidden">
              Transforming Your ideas into
            </h1>
            <h1
              id="hero-title-2"
              className="text-[35px] sm:text-6xl md:text-7xl"
            >
              Digital <span className="text-accentColor">reality</span>
            </h1>
          </div>
          <p id="hero-desc" className="text-center text-sm sm:text-lg">
            Driven by innovation and client-focused solutions, we elevate brands
            with seamless digital experiences. From tailored software design to
            strategic digital marketing, our team brings expertise to every
            phase of your project.
          </p>
          <div className="flex flex-row justify-center items-center gap-5 sm:gap-10">
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
        <div className="w-full flex flex-col lg:flex-row gap-10 xl:gap-16">
          <div className="w-full lg:w-[40%] flex flex-col gap-7 xl:gap-16">
            <div className="flex flex-row gap-7 xl:gap-16 justify-center">
              <div className="w-[50%] flex items-center flex-col gap-2 ">
                <div
                  id="exp-1"
                  className="text-3xl sm:text-5xl font-medium flex gap-2 justify-center items-center"
                >
                  <span className="text-5xl sm:text-6xl text-accentColor">
                    <GoClock />
                  </span>
                  3+
                </div>
                <div id="exp-2" className="text-center text-sm sm:text-base">
                  Years of Experience
                </div>
              </div>
              <div className="w-[50%] items-center flex flex-col gap-2">
                <div
                  id="client-1"
                  className="text-3xl sm:text-5xl font-medium flex gap-2 justify-center items-center"
                >
                  <span className="text-5xl sm:text-6xl text-accentColor">
                    <IoPersonOutline />
                  </span>
                  12
                </div>
                <div
                  id="client-2"
                  className="w-full text-center text-sm sm:text-base"
                >
                  Satisfied Clients All Over the World
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col gap-2 ">
                <div
                  id="pro-1"
                  className="text-3xl sm:text-5xl font-medium flex gap-2 justify-center items-center"
                >
                  <span className="text-5xl sm:text-6xl text-accentColor">
                    <RiTaskLine />
                  </span>
                  20
                </div>
                <div id="pro-2" className="text-center text-sm sm:text-base">
                  Projects Completed Successfully
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[60%] grid grid-cols-2 gap-1 lg:gap-5">
            <div className="flex justify-center items-end">
              <img className="w-full h-auto" src={heroImg1} alt="businessman" />
            </div>
            <div className="flex justify-center items-end">
              <img
                className="w-full h-auto"
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
