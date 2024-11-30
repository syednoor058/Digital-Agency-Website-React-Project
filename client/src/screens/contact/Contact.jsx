// import React from 'react'
import { useEffect, useState } from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { LuMouse } from "react-icons/lu";
import { Link } from "react-router-dom";
import contactFormImg from "../../assets/images/contact_form.webp";
import contactHeroImg from "../../assets/images/contact_hero.webp";
import LightFooter from "../../components/footer/LightFooter";
import { useAnimation } from "../../context/animationContext/AnimationContextProvider";

export default function Contact() {
  const { delayLandingPage, setDelayLandingPage } = useAnimation();
  const [interest, setInterest] = useState("");
  const [budgetState, setBudgetState] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.title =
      "Contact Us - Best Agency in Affordable Budget | Devion Ark";
  }, []);
  useEffect(() => {
    if (delayLandingPage !== 0) {
      setDelayLandingPage(0);
    }
  }, []);
  return (
    <div className="pt-14 lg:pt-10 w-full min-h-screen font-bodyFont overflow-x-hidden bg-darkPrimary text-lightBodyText">
      <div className="pt-10 lg:pt-0 flex flex-col gap-14 md:gap-20 lg:gap-28">
        <section className="w-full h-full lg:min-h-screen flex flex-col gap-10 px-5  sm:px-7 lg:px-10 xl:px-20">
          <div className="w-full h-full lg:h-[450px] flex flex-col lg:flex-row gap-5 sm:gap-7 lg:gap-10">
            <div className="w-full lg:w-[65%] h-auto flex flex-col-reverse lg:flex-col justify-end gap-5 sm:gap-7 lg:gap-10 leading-none">
              <div className="w-full lg:w-[60%] text-base lg:text-lg">
                Whether you have a question, need a custom solution, or just
                want to say hello, our team is ready to assist you. Let’s create
                something amazing together. Reach out today—we’d love to hear
                from you!
              </div>
              <div className="flex flex-col uppercase font-titleFont font-bold text-lightPrimary">
                <div className="text-[32px] sm:text-5xl md:text-6xl xl:text-7xl">
                  Get In Touch
                </div>
                <div className="text-5xl sm:text-[86px] md:text-8xl xl:text-9xl">
                  With <span className="text-accentColor">Us</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[35%] flex justify-start lg:justify-center items-end">
              <div className="w-full aspect-square flex justify-center items-center">
                <img
                  className="w-full object-cover"
                  src={contactHeroImg}
                  alt="contact-hero-image"
                />
              </div>
            </div>
          </div>
          <div className="w-full hidden lg:flex flex-col gap-4">
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
        <section className="flex flex-col lg:flex-row gap-10 px-5 sm:px-7 lg:px-10 xl:px-20">
          <div className="w-[40%] hidden lg:flex">
            <div className="w-full aspect-square">
              <img
                className="w-full object-cover"
                src={contactFormImg}
                alt="contact-form-image"
              />
            </div>
          </div>
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col gap-7 md:gap-10">
              <div className="flex flex-col gap-5">
                <div className="text-lightTitleText text-xl sm:text-2xl md:text-3xl font-semibold">
                  I am interested in...
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Software Development",
                    "System Design",
                    "Website Development",
                    "Mobile Application",
                    "Software QA",
                    "Digital Marketing",
                    "Social Media Marketing",
                    "Search Engine Marketing",
                    "Lead Generation",
                    "Search Engine Optimization",
                    "Blog Writing",
                    "Content Creation",
                  ].map((item) => (
                    <div
                      className={`px-3 md:px-5 py-2 rounded-full border-accentColor ${
                        interest === item
                          ? "bg-accentColor text-darkBodyText font-normal"
                          : "border text-lightBodyText"
                      } text-xs sm:text-base md:text-lg text-center capitalize font-light text-nowrap cursor-pointer`}
                      onClick={() => setInterest(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 md:gap-5">
                <div>
                  <input
                    className="w-full rounded-full bg-lightPrimary border-none outline-none px-6 py-2 text-darkPrimary"
                    placeholder="Enter Your full Name"
                  />
                </div>
                <div>
                  <input
                    className="w-full rounded-full bg-lightPrimary border-none outline-none px-6 py-2 text-darkPrimary"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <div>
                  <input
                    className="w-full rounded-full bg-lightPrimary border-none outline-none px-6 py-2 text-darkPrimary"
                    placeholder="Tell Us About Your Project"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-lightTitleText text-xl sm:text-2xl md:text-3xl font-semibold">
                    Project Budget (USD)
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "<$100",
                      "$101-300",
                      "$301-600",
                      "$601-1000",
                      "$1000+",
                    ].map((budget) => (
                      <div
                        className={`px-3 md:px-5 py-2 rounded-full border-accentColor ${
                          budgetState === budget
                            ? "bg-accentColor text-darkBodyText font-normal"
                            : "border text-lightBodyText"
                        } text-xs sm:text-base md:text-lg text-center capitalize font-light text-nowrap cursor-pointer`}
                        onClick={() => setBudgetState(budget)}
                      >
                        {budget}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-xs md:text-sm">
                By signing up, you understand and agree that your data will be
                collected and used subject to our{" "}
                <span className="underline underline-offset-2">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="underline underline-offset-2">
                  Terms of Use
                </span>
                .
              </div>
              <div className="flex justify-center">
                <Link to="/" className="w-full">
                  <div className="w-auto flex flex-row items-center text-darkPrimary text-lg md:text-xl">
                    <span className="px-7 md:px-10 py-2 capitalize text-center bg-accentColor rounded-full">
                      Send Enquiry
                    </span>
                    <div className="w-[38px] aspect-square rounded-full bg-accentColor flex justify-center items-center">
                      <HiMiniArrowUpRight />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col">
          {/* Footer Section */}
          <LightFooter />
        </section>
      </div>
    </div>
  );
}
