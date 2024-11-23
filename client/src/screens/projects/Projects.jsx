// import React from 'react'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import CallToAction from "../../components/callToAction/CallToAction";
import Footer from "../../components/footer/Footer";
export default function Projects() {
  return (
    <div className="pt-14 lg:pt-10 w-full min-h-screen font-bodyFont overflow-x-hidden bg-darkPrimary text-lightBodyText">
      <div className="pt-10 lg:pt-20 flex flex-col  gap-10 sm:gap-14  md:gap-20 lg:gap-28">
        <section className="px-5 sm:px-7 lg:px-10 xl:px-20 flex flex-col gap-5 sm:gap-10">
          <div className="text-start sm:text-center font-titleFont text-lightTitleText font-bold text-[34px] sm:text-7xl uppercase leading-none">
            Proven Results <span className="text-accentColor">Unveiled</span>
          </div>
          <div className="text-start sm:text-center text-sm font-extralight sm:text-base sm:font-normal">
            Behind every project lies a journey of exploration, creativity, and
            measurable success. Our case studies go beyond the surface to reveal
            the innovative processes and tangible outcomes that set our work
            apart. From overcoming unique challenges to crafting impactful
            solutions, these stories reflect our dedication to empowering
            businesses. Discover how we turned ideas into transformative digital
            realities, and see firsthand the value we bring to the table. Let
            these real-world examples speak for our expertise and inspire what's
            possible for your next project!
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-row hover:flex-row-reverse duration-500 items-center">
              <Link to="/pricing">
                <div className="text-center text-base sm:text-xl px-8 py-2 sm:py-3 rounded-full bg-accentColor text-darkTitleText">
                  Get Started
                </div>
              </Link>
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex justify-center items-center bg-accentColor text-darkTitleText text-lg sm:text-xl">
                <HiMiniArrowUpRight />
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
