// import React from 'react'
import { useEffect } from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import {
  LuGlobe2,
  LuKanbanSquare,
  LuLaptop2,
  LuLayoutGrid,
  LuLineChart,
  LuPlaySquare,
  LuShieldCheck,
  LuWallet2,
} from "react-icons/lu";
import { MdControlPoint } from "react-icons/md";
import { PiArrowSquareUpRightThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import serviceHeroImg from "../../assets/images/services_hero.webp";
import CallToAction from "../../components/callToAction/CallToAction";
import Footer from "../../components/footer/Footer";
import { useAnimation } from "../../context/animationContext/AnimationContextProvider";

export default function Services() {
  const { delayLandingPage, setDelayLandingPage } = useAnimation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.title =
      "Services - Best Service Delivery in Affordable Budget | Devion Ark";
  }, []);
  useEffect(() => {
    if (delayLandingPage !== 0) {
      setDelayLandingPage(0);
    }
  }, []);
  return (
    <div className="pt-14 lg:pt-10 w-full overflow-x-hidden bg-darkPrimary text-lightBodyText font-bodyFont">
      <div className="pt-10 lg:pt-20 flex flex-col  gap-10 sm:gap-14  md:gap-20 lg:gap-28">
        {/* Hero Section */}
        <section className="px-5 sm:px-7 lg:px-10 xl:px-20">
          <div className="flex flex-col lg:flex-row gap-5 sm:gap-7 md:gap-10 lg:gap-20 items-end">
            <div className="w-full lg:w-[60%] flex flex-col gap-5 sm:gap-7 lg:gap-10">
              <div>
                <h1 className="uppercase font-titleFont text-[28px] sm:text-5xl leading-none text-lightTitleText font-light">
                  Our Services,
                </h1>
                <h1 className="uppercase font-titleFont text-[35px] sm:text-6xl md:text-7xl font-bold leading-none text-lightTitleText">
                  Your <span className="text-accentColor">Success</span>
                </h1>
              </div>
              <p className="text-sm sm:text-base xl:text-lg font-light text-start">
                From software development to digital marketing and beyond, our
                services are designed to elevate your business at every step. We
                combine technical expertise with strategic insights to deliver
                solutions that align with your goals, enhance customer
                experiences, and drive lasting growth.
              </p>
              <div className="flex justify-between items-center pe-0 sm:pe-32">
                <div className="flex flex-row hover:flex-row-reverse duration-500 items-center">
                  <Link to="/contact-us">
                    <div className="text-center text-base sm:text-xl px-8 py-2 sm:py-3 rounded-full bg-accentColor text-darkTitleText">
                      Get Started
                    </div>
                  </Link>
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex justify-center items-center bg-accentColor text-darkTitleText text-lg sm:text-xl">
                    <HiMiniArrowUpRight />
                  </div>
                </div>
                <div className="w-fit rounded text-8xl border-lightBodyText rotate-180 opacity-60">
                  <PiArrowSquareUpRightThin />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[40%] overflow-hidden">
              <div className="w-full aspect-[7/8] overflow-hidden">
                <img
                  src={serviceHeroImg}
                  alt="service_home_img"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="px-5 sm:px-7 lg:px-10 xl:px-20">
          <div className="flex flex-col gap-5 sm:gap-7 md:gap-10 lg:gap-20">
            <div className="uppercase font-titleFont font-semibold text-center text-2xl sm:text-4xl text-lightTitleText">
              <span className="text-accentColor">Services</span> we provide
            </div>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-5 lg:gap-y-10 gap-x-5">
                <div className="flex flex-col gap-3 border-b lg:border-b-0 lg:border-r border-lightBodyText border-opacity-40 p-3">
                  <div className="text-5xl sm:text-6xl text-accentColor">
                    <LuLaptop2 />
                  </div>
                  <div className="uppercase font-semibold text-xl sm:text-3xl text-lightTitleText">
                    Software Development
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Custom Software Solutions
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Web & Mobile App Development
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      API Integration
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      UI/UX Optimization
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Maintenance & Support
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 border-b lg:border-b-0 lg:border-none xl:border-solid xl:border-r border-lightBodyText border-opacity-40 p-3">
                  <div className="text-5xl sm:text-6xl text-accentColor">
                    <LuGlobe2 />
                  </div>
                  <div className="uppercase font-semibold text-xl sm:text-3xl text-lightTitleText">
                    Website Design & Development
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Responsive Design
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Content Management Systems (CMS)
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      E-commerce Solutions
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      SEO-Optimized Structure
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Performance & Speed Optimization
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 border-b lg:border-b-0 lg:border-r border-lightBodyText border-opacity-40 p-3 xl:border-none">
                  <div className="text-5xl sm:text-6xl text-accentColor">
                    <LuLineChart />
                  </div>
                  <div className="uppercase font-semibold text-xl sm:text-3xl text-lightTitleText">
                    Digital Marketing
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Social Media Marketing (SMM)
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Email Marketing Campaigns
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Pay-Per-Click (PPC) Advertising
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Content Creation & Marketing
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Analytics & Reporting
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 border-b lg:border-b-0 lg:border-none xl:border-solid xl:border-r border-lightBodyText border-opacity-40 p-3">
                  <div className="text-5xl sm:text-6xl text-accentColor">
                    <LuKanbanSquare />
                  </div>
                  <div className="uppercase font-semibold text-xl sm:text-3xl text-lightTitleText">
                    Search Engine Optimization (SEO)
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      On-Page SEO
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Technical SEO
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Link Building
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Local SEO
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      SEO Audits & Monitoring
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 border-b lg:border-b-0 lg:border-r border-lightBodyText border-opacity-40 p-3">
                  <div className="text-5xl sm:text-6xl text-accentColor">
                    <LuPlaySquare />
                  </div>
                  <div className="uppercase font-semibold text-xl sm:text-3xl text-lightTitleText">
                    Content Creation
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Blog & Article Writing
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Video Production & Editing
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Graphic Design
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Copywriting
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Content Strategy Development
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 border-b lg:border-b-0  border-lightBodyText border-opacity-40 p-3 lg:border-none">
                  <div className="text-5xl sm:text-6xl text-accentColor">
                    <LuLayoutGrid />
                  </div>
                  <div className="uppercase font-semibold text-xl sm:text-3xl text-lightTitleText">
                    Brand Strategy & Identity
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Brand Positioning & Strategy
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Logo & Visual Identity Design
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Voice & Messaging
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Rebranding Services
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Brand Guidelines Creation
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 border-b lg:border-b-0 lg:border-r  border-lightBodyText border-opacity-40 p-3">
                  <div className="text-5xl sm:text-6xl text-accentColor">
                    <LuWallet2 />
                  </div>
                  <div className="uppercase font-semibold text-xl sm:text-3xl text-lightTitleText">
                    Data Analytics & Insights
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Customer Insights Analysis
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Market & Competitor Analysis
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      KPI Tracking & Reporting
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Predictive Analytics
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      A/B Testing
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 border-b lg:border-b-0 lg:border-none border-lightBodyText border-opacity-40 p-3">
                  <div className="text-5xl sm:text-6xl text-accentColor">
                    <LuShieldCheck />
                  </div>
                  <div className="uppercase font-semibold text-xl sm:text-3xl text-lightTitleText">
                    Quality Assurance & Testing
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Automated & Manual Testing
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Functional Testing
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Performance Testing
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Usability Testing
                    </div>
                    <div className="flex flex-row gap-1 font-light items-center">
                      <span>
                        <MdControlPoint />
                      </span>
                      Security Testing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col">
          {/* Call To Action Section */}
          <CallToAction />
          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
