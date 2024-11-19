// import React from 'react'

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { MdExtension, MdFindInPage, MdInsertChart } from "react-icons/md";
import DoCard from "./DoCard";

export default function WhatWeDo() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#what-we-do-bar", {
        translateY: "-100%",
        duration: 1,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#what-we-do-bar",
          start: "top 90%",
          end: "top 80%",
          scrub: 2,
        },
      });
      gsap.from("#what-we-do-title", {
        translateY: "100%",
        duration: 1,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#what-we-do-title",
          start: "top 95%",
          end: "top 90%",
          scrub: 2,
        },
      });
      gsap.from("#what-we-do-desc", {
        // translateY: "100%",
        rotateY: "-90",
        duration: 0.6,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#what-we-do-desc",
          start: "top 90%",
          end: "top 80%",
          scrub: 2,
        },
      });
      gsap.from("#growth-rate", {
        translateY: "100%",
        duration: 0.6,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#growth-rate",
          start: "top 90%",
          end: "top 80%",
          scrub: 2,
        },
      });
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={comp}
      className=" pt-10 lg:pt-20 font-bodyFont text-darkBodyText bg-accentColor"
    >
      <div className="flex flex-col gap-7 sm:gap-10 lg:gap-20">
        <div className="flex flex-col sm:flex-row gap-5 px-5 sm:px-7 lg:px-10 xl:px-20">
          <div className="w-full sm:w-[30%] flex flex-row gap-3 sm:gap-10 overflow-hidden">
            <div className="uppercase font-semibold text-sm sm:text-lg text-darkBodyText">
              What we do
            </div>
            <div
              id="what-we-do-bar"
              className="w-[2px] h-auto bg-lightPrimary"
            ></div>
          </div>
          <div className="w-full sm:w-[70%] uppercase font-titleFont font-bold text-[42px] sm:text-[54px] lg:text-6xl leading-none text-darkTitleText overflow-hidden">
            <span id="what-we-do-title" className="inline-block">
              <span className="">Solution</span> that drive{" "}
              <span className="text-lightTitleText font-light">
                your success
              </span>
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-start px-5 sm:px-7 lg:px-10 xl:px-20 gap-7">
          <div className="w-full sm:w-[60%] xl:w-[40%] text-sm lg:text-base font-light overflow-hidden">
            <span
              id="what-we-do-desc"
              className="inline-block align-text-bottom overflow-hidden"
            >
              We specialize in building solutions that help your business thrive
              in a digital world. From intuitive software and stunning websites
              to strategic marketing and seamless testing, we align technology
              with your goals. Our multidisciplinary approach ensures every
              project we undertake drives growth, enhances visibility, and
              creates lasting value.
            </span>
          </div>
          <div className="w-full sm:w-[40%] lg:w-[60%] flex flex-row gap-5 items-center justify-end">
            <div className="text-9xl sm:text-7xl lg:text-9xl xl:text-[200px] leading-none font-thin text-lightTitleText overflow-hidden">
              <span id="growth-rate" className="inline-block">
                1.5
                <span className="text-7xl sm:text-5xl lg:text-7xl xl:text-9xl font-medium">
                  X
                </span>
              </span>
            </div>
            <div className="uppercase">Average Growth rate</div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
          <DoCard
            logo={<MdExtension />}
            title="Software Development"
            features={[
              "Mobile & Web Design",
              "System Design",
              "UX Research & Plan",
            ]}
            desc="We craft custom software solutions tailored to meet your unique business needs, ensuring high-quality, scalable, and efficient digital products that drive growth and efficiency."
          />
          <DoCard
            logo={<MdInsertChart />}
            title="Digital Marketing"
            features={[
              "Social Media Marketing",
              "Search Engine Marketing",
              "Email Marketing",
            ]}
            desc="Our data-driven digital marketing strategies help you reach and engage your target audience effectively, using techniques that boost brand visibility and customer engagement across online platforms."
          />
          <DoCard
            logo={<MdFindInPage />}
            title="Search Engine Optimization (SEO)"
            features={["On-Page SEO", "Off-Page SEO", "Technical SEO"]}
            desc="With expert SEO practices, we enhance your online presence, improve search engine rankings, and drive organic traffic to your website, making it easier for customers to find you."
          />
          {/* <DoCard
            logo={<FaHandshake />}
            title="Content Creation"
            features={["Image Content", "Video Content", "Event Shooting"]}
            desc="We develop impactful and engaging content tailored to your brand, from blogs and social media posts to visuals and videos, to establish a powerful connection with your audience and build brand authority.."
          /> */}
        </div>
      </div>
    </div>
  );
}
