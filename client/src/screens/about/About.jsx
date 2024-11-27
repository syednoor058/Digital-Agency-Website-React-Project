// import React from 'react'
import { useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaGlobeAmericas, FaLinkedin } from "react-icons/fa";
import { LuArrowUpRight, LuMouse } from "react-icons/lu";
import fahimImg from "../../assets/images/team/fahim_sharar.png";
import fuadImg from "../../assets/images/team/farhan_fuad.png";
import naimImg from "../../assets/images/team/naim_rahman.png";
import syedNoorImg from "../../assets/images/team/syed_noor.png";
import CallToAction from "../../components/callToAction/CallToAction";
import Footer from "../../components/footer/Footer";
import WhyChooseUs from "./../../components/whyChooseUs/WhyChooseUs";
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.title = "About Us - Best Agency in Affordable Budget | Devion Ark";
  }, []);
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
          <div className="w-full hidden lg:flex flex-col gap-4 px-5 sm:px-7 lg:px-10 xl:px-20">
            <div className="w-full h-[1px] bg-lightSecondary"></div>
            <div className="flex flex-row justify-between px-5 sm:px-7 lg:px-10 xl:px-20">
              <div>Copyright &copy; 2024</div>
              <div className="flex flex-row gap-1 items-center">
                <span>
                  {" "}
                  <LuMouse />
                </span>
                Scroll To Explore
              </div>
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
        <section className="">
          <WhyChooseUs />
        </section>
        <section className="flex flex-col gap-5 sm:gap-7 lg:gap-10 xl:gap-20">
          <div className="px-5 sm:px-7 lg:px-10 xl:px-20 font-titleFont font-bold text-4xl md:text-5xl text-center text-lightPrimary uppercase">
            Meet the <span className="text-accentColor">Team</span>
          </div>
          <div className="px-5 sm:px-0 w-full grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-[40%] aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-contain"
                  src={syedNoorImg}
                  alt="syed-shaeduzzaman-noor"
                />
              </div>
              <div className="w-full sm:w-[60%] bg-accentColor p-7 text-darkBodyText flex  justify-center">
                <div className="flex flex-col gap-3 justify-between">
                  <div className="flex flex-col gap-3 font-light leading-none text-base">
                    <div className="uppercase text-2xl text-darkTitleText leading-none font-medium">
                      Syed Shaeduzzaman Noor
                    </div>

                    <div className="flex flex-col gap-1 leading-none text-sm font-normal">
                      <div>Founder & Cheif Technology Officer (CTO)</div>
                      <div>Senior Software Engineer</div>
                    </div>
                    <div className="text-xs opacity-70">
                      The mind behind the concept and the driving force of
                      innovation, Syed Shaeduzzaman Noor blends technical
                      expertise with a passion for problem-solving.
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 text-2xl">
                    <FaFacebookSquare />
                    <AiFillInstagram />
                    <FaLinkedin />
                    <FaGlobeAmericas />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-[40%] aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-contain"
                  src={fahimImg}
                  alt="fahim-sharar"
                />
              </div>
              <div className="w-full sm:w-[60%] bg-lightPrimary p-7 text-darkBodyText flex  justify-center">
                <div className="flex flex-col gap-3 justify-between">
                  <div className="flex flex-col gap-3 font-light leading-none text-base">
                    <div className="uppercase text-2xl text-darkTitleText leading-none font-medium">
                      Kazi Fahim Sharar
                    </div>

                    <div className="flex flex-col gap-1 leading-none text-sm font-normal">
                      <div>Co-Founder & Head of SEO Strategies</div>
                      <div>Search Engine Optimization Specialist</div>
                    </div>
                    <div className="text-xs opacity-70">
                      The expert in making businesses shine online, Kazi Sharar
                      specializes in search engine optimization. His strategies
                      ensure your brand not only gets discovered but thrives in
                      the digital landscape.
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 text-2xl">
                    <FaFacebookSquare />
                    <AiFillInstagram />
                    <FaLinkedin />
                    <FaGlobeAmericas />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row-reverse">
              <div className="w-full sm:w-[40%] aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-contain"
                  src={fuadImg}
                  alt="farhan-fuad"
                />
              </div>
              <div className="w-full sm:w-[60%] bg-lightPrimary p-7 text-darkBodyText flex  justify-center sm:text-end">
                <div className="flex flex-col gap-3 justify-between">
                  <div className="flex flex-col gap-3 font-light leading-none text-base">
                    <div className="uppercase text-2xl text-darkTitleText leading-none font-medium">
                      Farhan Fuad
                    </div>

                    <div className="flex flex-col gap-1 leading-none text-sm font-normal">
                      <div>Co-Founder & Head of Marketing Campaigns</div>
                      <div>Digital Marketing Specialist</div>
                    </div>
                    <div className="text-xs opacity-70">
                      Creative and results-driven, Farhan Fuad excels at
                      crafting campaigns that resonate with audiences. They
                      bring an analytical edge to every campaign, turning
                      insights into impactful outcomes.
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 text-2xl sm:justify-end">
                    <FaFacebookSquare />
                    <AiFillInstagram />
                    <FaLinkedin />
                    <FaGlobeAmericas />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row-reverse">
              <div className="w-full sm:w-[40%] aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-contain"
                  src={naimImg}
                  alt="naim-rahman"
                />
              </div>
              <div className="w-full sm:w-[60%] bg-accentColor p-7 text-darkBodyText flex  justify-center sm:text-end">
                <div className="flex flex-col gap-3 justify-between">
                  <div className="flex flex-col gap-3 font-light leading-none text-base">
                    <div className="uppercase text-2xl text-darkTitleText leading-none font-medium">
                      Naim Rahman
                    </div>

                    <div className="flex flex-col gap-1 leading-none text-sm font-normal">
                      <div>Co-Founder & Head of Marketing Operations</div>
                      <div>Digital Marketing Specialist</div>
                    </div>
                    <div className="text-xs opacity-70">
                      A storyteller at heart, Naim Rahman uses his digital
                      marketing prowess to connect brands with their customers.
                      His expertise lies in designing strategies that build
                      relationships.
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 text-2xl sm:justify-end">
                    <FaFacebookSquare />
                    <AiFillInstagram />
                    <FaLinkedin />
                    <FaGlobeAmericas />
                  </div>
                </div>
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
