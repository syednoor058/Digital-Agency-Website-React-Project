// import React from 'react'
import { useEffect } from "react";
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
import serviceHeroImg from "../../assets/images/services_hero.png";
import CallToAction from "../../components/callToAction/CallToAction";
import Footer from "../../components/footer/Footer";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    document.title =
      "Services - Best Service Delivery in Affordable Budget | Devion Ark";
  }, []);
  return (
    <div className="pt-14 lg:pt-10 w-full overflow-x-hidden bg-darkPrimary text-lightBodyText font-bodyFont">
      <div className="pt-10 lg:pt-20 flex flex-col  gap-10 sm:gap-14  md:gap-20 lg:gap-28">
        {/* Hero Section */}
        <div className="px-5 sm:px-7 lg:px-10 xl:px-20">
          <div className="flex flex-col lg:flex-row gap-5 sm:gap-7 md:gap-10 lg:gap-20">
            <div className="w-full lg:w-[60%] flex flex-col gap-5 sm:gap-7 lg:gap-10">
              <div>
                <h1 className="uppercase font-titleFont text-[28px] sm:text-5xl leading-none text-lightTitleText font-light">
                  Our Services,
                </h1>
                <h1 className="uppercase font-titleFont text-[35px] sm:text-6xl md:text-7xl font-bold leading-none text-lightTitleText">
                  Your <span className="text-accentColor">Success</span>
                </h1>
              </div>
              <p className="text-sm sm:text-base text-start lg:text-end">
                From software development to digital marketing and beyond, our
                services are designed to elevate your business at every step. We
                combine technical expertise with strategic insights to deliver
                solutions that align with your goals, enhance customer
                experiences, and drive lasting growth.
              </p>
              <div className="flex justify-end pe-10 sm:pe-32 opacity-60">
                <div className="w-fit rounded text-8xl border-lightBodyText rotate-180">
                  <PiArrowSquareUpRightThin />
                </div>
              </div>
              <div className="w-60 h-60 hidden rounded-[100%] bg-accentColor xl:flex justify-center items-center">
                <div className="flex flex-col uppercase font-bold text-4xl text-darkBodyText">
                  <div>Explore</div>
                  <div>More</div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <img
                src={serviceHeroImg}
                alt="service_home_img"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        {/* Services Section */}
        <div className="px-5 sm:px-7 lg:px-10 xl:px-20">
          <div className="flex flex-col gap-5 sm:gap-7 md:gap-10 lg:gap-20">
            <div className="w-full lg:w-[70%] uppercase font-titleFont text-lightPrimary text-[28px] sm:text-5xl font-semibold leading-none">
              Crafting Solutions that Drive Results
            </div>
            <div className="flex justify-end">
              <div className="w-full lg:w-[60%] xl:w-[40%] text-sm sm:text-base text-start lg:text-end">
                Our range of services is built to propel your business forward
                with precision and impact. From innovative software development
                to data-driven digital marketing, each service is tailored to
                meet your unique needs.{" "}
              </div>
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
        </div>

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
