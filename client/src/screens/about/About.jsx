// import React from 'react'
import {
  FaFacebookSquare,
  FaGlobeAmericas,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import syedNoorImg from "../../assets/images/team/syed_noor.png";
import CallToAction from "../../components/callToAction/CallToAction";
import Footer from "../../components/footer/Footer";
export default function About() {
  return (
    <div className="pt-14 lg:pt-10 w-full min-h-screen font-bodyFont overflow-x-hidden bg-darkPrimary text-lightBodyText">
      <div className="pt-10 lg:pt-0 flex flex-col gap-14 md:gap-20 lg:gap-28">
        <section className="w-full h-full lg:min-h-screen flex flex-col gap-10">
          <div className="w-full h-full lg:h-[450px] flex flex-col lg:flex-row gap-5 sm:gap-7 lg:gap-10 px-5 sm:px-7 lg:px-10 xl:px-20">
            <div className="w-full lg:w-[75%] h-auto flex flex-col-reverse lg:flex-col justify-end gap-5 sm:gap-7 lg:gap-10 leading-none">
              <div className="w-full lg:w-[60%] text-base lg:text-lg">
                Where Vision Meets Innovation, and Every Challenge is
                Transformed Into a Tailored Solution That Drives Progress and
                Redefines Possibilities.
              </div>
              <div className="flex flex-col uppercase font-titleFont font-bold text-lightPrimary">
                <div className="text-[32px] sm:text-5xl md:text-6xl xl:text-7xl">
                  The story behind
                </div>
                <div className="text-5xl sm:text-[86px] md:text-8xl xl:text-9xl">
                  <span className="text-accentColor">Devion</span> Ark
                </div>
              </div>
            </div>
            <div className="w-[40%] lg:w-[25%] flex justify-start lg:justify-center items-center">
              <div className="w-[50%] aspect-square text-darkTitleText bg-accentColor text-[10vw] flex justify-center items-center">
                <LuArrowUpRight />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full h-[1px] bg-lightSecondary"></div>
            <div className="flex flex-row justify-between px-5 sm:px-7 lg:px-10 xl:px-20">
              <div>&copy; Copyright 2024</div>
              <div>Scroll To Explore</div>
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row gap-5 sm:gap-7 lg:gap-10 px-5 sm:px-7 lg:px-10 xl:px-20 lg:-mt-20">
          <div className="w-full lg:w-[20%]">
            <div className="flex flex-row gap-2">
              <div className="uppercase font-light">About Us</div>
              <div className="w-[2px] h-auto bg-accentColor"></div>
            </div>
          </div>
          <div className="w-full lg:w-[80%] flex flex-col gap-5 text-base md:text-lg">
            <div>
              At{" "}
              <span className="text-lightPrimary">
                Devion Ark Digital Solutions
              </span>
              , we are more than just a digital agency. We are a passionate team
              of creators, innovators, and problem-solvers dedicated to helping
              businesses navigate the complexities of the digital landscape.
              With a blend of technical expertise and a deep understanding of
              client needs, we bridge the gap between your ideas and reality.
            </div>
            <div>
              Our mission is to empower businesses with transformative digital
              solutions that elevate their potential. We believe in building
              meaningful partnerships and delivering exceptional outcomes that
              leave a lasting impact.
            </div>
            <div>
              From humble beginnings to becoming a trusted name in digital
              innovation, Devion Ark’s journey has been one of continuous growth
              and evolution. We thrive on challenges, pushing boundaries, and
              staying ahead of the curve with cutting-edge technologies and
              creative solutions.
            </div>
          </div>
        </section>
        <section className="px-5 sm:px-7 lg:px-10 xl:px-20 flex flex-col gap-5 sm:gap-7 lg:gap-10 xl:gap-20">
          <div className="font-titleFont font-bold text-4xl md:text-5xl text-center text-lightPrimary uppercase">
            Meet the <span className="text-accentColor">Team</span>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="flex flex-col gap-3">
              <div className="w-full h-auto">
                <img
                  className="w-full h-auto object-cover"
                  src={syedNoorImg}
                  alt="syed-noor"
                />
              </div>
              <div className="flex flex-col font-light leading-none text-xs sm:text-base">
                <div className="uppercase text-lg font-semibold text-lightPrimary leading-none">
                  Syed Shaeduzzaman Noor
                </div>
                <div className="pt-2">
                  <div>Founder & CEO</div>
                  <div>Software Engineer</div>
                </div>
              </div>
              <div className="flex flex-row gap-5 text-lg sm:text-xl">
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaLinkedin />
                <FaGlobeAmericas />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-full h-auto">
                <img
                  className="w-full h-auto object-cover"
                  src={syedNoorImg}
                  alt="syed-noor"
                />
              </div>
              <div className="flex flex-col font-light leading-none text-xs sm:text-base">
                <div className="uppercase text-lg font-semibold text-lightPrimary leading-none">
                  Kazi Sharar
                </div>
                <div className="pt-2">
                  <div>Co-founder & CEO</div>
                  <div>SEO Specialist</div>
                </div>
              </div>
              <div className="flex flex-row gap-5 text-lg sm:text-xl">
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaLinkedin />
                <FaGlobeAmericas />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col pt-10">
          {/* Call To Action Section */}
          <CallToAction />
          {/* Footer Section */}
          <Footer />
        </section>
      </div>
    </div>
  );
}
