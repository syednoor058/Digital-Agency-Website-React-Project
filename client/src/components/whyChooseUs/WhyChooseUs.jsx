// import React from 'react'
import {
  FcBusinessman,
  FcInspection,
  FcPositiveDynamic,
  FcSelfie,
} from "react-icons/fc";
import WhyChooseUsCard from "./WhyChooseUsCard";

export default function WhyChooseUs() {
  return (
    <div className="font-bodyFont text-lightBodyText bg-darkPrimary relative overflow-hidden">
      {/* <div className="w-[60%] aspect-square rounded-[100%] bg-darkSecondary p-40 absolute -right-60 xl:-right-80 xl:-top-[400px] opacity-10 xl:opacity-10 z-[1] hidden xl:flex">
        <div className="w-full aspect-square bg-lightPrimary rounded-[100%]"></div>
      </div> */}
      <div className="flex flex-col gap-7 sm:gap-10 lg:gap-20 px-5 sm:px-7 lg:px-10 xl:px-20 relative z-[5]">
        <div className="flex flex-row gap-2 items-center">
          <div className="uppercase font-light pe-3 border-r-[2px] border-accentColor">
            Why Choose Us
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:gap-7 lg:gap-10 xl:gap-20">
          <div className="w-full flex flex-col xl:flex-row gap-5 sm:gap-7 lg:gap-10 xl:justify-between overflow-hidden">
            <div className="flex flex-col gap-2 leading-none text-lightTitleText font-titleFont uppercase">
              <div className="text-[26px] sm:text-5xl lg:text-7xl xl:text-4xl font-light">
                Performance meets
              </div>
              <div className="font-bold text-accentColor text-[50px] sm:text-8xl lg:text-9xl xl:text-7xl">
                Potential
              </div>
            </div>
            <div className="w-full xl:w-[40%] font-light text-sm sm:text-base">
              Our mission is to empower businesses with innovative strategies
              and seamless solutions that drive measurable success. We focus on
              accelerating your growth, building a powerful online presence, and
              enhancing customer engagement to keep your business ahead of the
              competition.
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-7 lg:gap-10 xl:gap-x-36 xl:gap-y-20">
            <WhyChooseUsCard
              icon={<FcPositiveDynamic />}
              title="Grow Your Business 1.5x Faster"
              desc="Our tailored strategies are designed to increase efficiency, boost productivity, and maximize revenue. With a focus on data-driven decision-making, we accelerate your business growth by identifying opportunities that align with your goals."
            />

            <WhyChooseUsCard
              icon={<FcSelfie />}
              title="Stronger Online Presence and Visibility"
              desc="Through cutting-edge SEO, social media marketing, and content strategies, we position your brand where your audience is most active. Watch your business gain visibility, attract more traffic, and rank higher on search engines."
            />

            <WhyChooseUsCard
              icon={<FcBusinessman />}
              title="Enhanced Customer Engagement and Retention"
              desc="We craft personalized experiences that resonate with your customers, fostering loyalty and increasing lifetime value. From targeted campaigns to interactive platforms, we help you build deeper connections and keep customers coming back."
            />

            <WhyChooseUsCard
              icon={<FcInspection />}
              title="Reliable, Seamless Solutions Backed by Testing"
              desc="Our solutions are thoroughly tested to ensure top-tier performance and reliability. Whether it’s software development or website launches, we prioritize quality to deliver seamless experiences that drive confidence and trust."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
