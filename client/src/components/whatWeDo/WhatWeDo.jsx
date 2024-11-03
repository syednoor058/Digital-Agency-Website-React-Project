// import React from 'react'
import { FaChartSimple, FaHandshake, FaUserGroup } from "react-icons/fa6";

import DoCard from "./DoCard";

export default function WhatWeDo() {
  return (
    <div className=" pt-10 lg:pt-20 font-bodyFont text-darkPrimary bg-accentColor">
      <div className="flex flex-col gap-7 sm:gap-10 lg:gap-20">
        <div className="flex flex-col sm:flex-row gap-5 px-5 sm:px-7 lg:px-10 xl:px-20">
          <div className="w-full sm:w-[30%] flex flex-row gap-3 sm:gap-10">
            <div className="uppercase font-semibold text-sm sm:text-lg text-darkPrimary">
              What we do
            </div>
            <div className="w-[2px] h-auto bg-lightPrimary"></div>
          </div>
          <div className="w-full sm:w-[70%] uppercase font-titleFont font-bold text-[42px] sm:text-[54px] lg:text-6xl leading-none text-darkPrimary">
            <span className="">Solution</span> that drive{" "}
            <span className="text-lightTitleText font-light">your success</span>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-start px-5 sm:px-7 lg:px-10 xl:px-20 gap-7">
          <div className="w-full sm:w-[60%] xl:w-[40%] text-sm lg:text-base">
            We specialize in building solutions that help your business thrive
            in a digital world. From intuitive software and stunning websites to
            strategic marketing and seamless testing, we align technology with
            your goals. Our multidisciplinary approach ensures every project we
            undertake drives growth, enhances visibility, and creates lasting
            value.
          </div>
          <div className="w-full sm:w-[40%] lg:w-[60%] flex flex-row gap-5 items-center justify-end">
            <div className="text-9xl sm:text-7xl lg:text-9xl xl:text-[200px] leading-none font-thin text-lightTitleText ">
              1.5
              <span className="text-7xl sm:text-5xl lg:text-7xl xl:text-9xl font-medium">
                X
              </span>
            </div>
            <div className="uppercase">Growth rate</div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <DoCard
            logo={<FaChartSimple />}
            title="Accelerated Business Growth"
            desc="Our solutions help scale your business up to 1.5x faster by streamlining operations and improving digital efficiency."
          />
          <DoCard
            logo={<FaUserGroup />}
            title="Improved Customer Engagement"
            desc="Our design and marketing strategies foster meaningful interactions, increasing customer retention and brand loyalty."
          />
          <DoCard
            logo={<FaHandshake />}
            title="End-to-End Partnership"
            desc="From idea to execution, we’re with you at every step, delivering personalized support to help you meet your goals."
          />
        </div>
      </div>
    </div>
  );
}
