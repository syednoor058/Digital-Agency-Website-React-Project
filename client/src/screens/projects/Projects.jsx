// import React from 'react'
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { LuMouse } from "react-icons/lu";
import { Link } from "react-router-dom";
import projectPageHeroImg from "../../assets/images/project_page_hero.webp";
import portfolioImg from "../../assets/images/projects/2.webp";
import kickOffImg from "../../assets/images/projects/3.webp";
import carsPredImg from "../../assets/images/projects/4.webp";
import expressImg from "../../assets/images/technologies/express.png";
import fastapiImg from "../../assets/images/technologies/fastapi.png";
import framermotionImg from "../../assets/images/technologies/framermotion.png";
import gsapImg from "../../assets/images/technologies/gsap.png";
import javaImg from "../../assets/images/technologies/java.png";
import javascriptImg from "../../assets/images/technologies/javascript.png";
import junitImg from "../../assets/images/technologies/junit.png";
import mongodbImg from "../../assets/images/technologies/mongodb.png";
import nodeImg from "../../assets/images/technologies/node.png";
import numpyImg from "../../assets/images/technologies/numpy.png";
import pandasImg from "../../assets/images/technologies/pandas.png";
import playwrightImg from "../../assets/images/technologies/playwright.png";
import postmanImg from "../../assets/images/technologies/postman.png";
import pythonImg from "../../assets/images/technologies/python.png";
import reactImg from "../../assets/images/technologies/react.png";
import seabornImg from "../../assets/images/technologies/seaborn.png";
import seleniumImg from "../../assets/images/technologies/selenium.png";
import semrushImg from "../../assets/images/technologies/semrush.png";
import tailwindImg from "../../assets/images/technologies/tailwind.png";
import testngImg from "../../assets/images/technologies/testng.png";
import wordpressImg from "../../assets/images/technologies/wordpress.png";
import CallToAction from "../../components/callToAction/CallToAction";
import CaseStudyCard from "../../components/caseStudy/CaseStudyCard";
import Footer from "../../components/footer/Footer";
import { useAnimation } from "../../context/animationContext/AnimationContextProvider";
export default function Projects() {
  const { delayLandingPage, setDelayLandingPage } = useAnimation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.title =
      "Case Studies - Best Agency in Affordable Budget | Devion Ark";
  }, []);
  useEffect(() => {
    if (delayLandingPage !== 0) {
      setDelayLandingPage(0);
    }
  }, []);
  return (
    <div className="pt-14 lg:pt-10 w-full font-bodyFont overflow-x-hidden bg-darkPrimary text-lightBodyText">
      <div className="pt-10 lg:pt-20 flex flex-col gap-14  md:gap-20 lg:gap-28">
        <section className="w-full h-full lg:min-h-screen px-5 sm:px-7 lg:px-10 xl:px-20 flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-[70%] flex flex-col-reverse justify-end gap-5">
              <div className="flex items-center">
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
              </div>
              <div className="flex flex-col lg:flex-col-reverse gap-5">
                <div className="font-titleFont text-lightTitleText font-bold text-[34px] sm:text-6xl lg:text-7xl uppercase leading-none">
                  Proven Results{" "}
                  <span className="text-accentColor">Unveiled</span>
                </div>
                <div className="w-full lg:w-[60%] font-extralight sm:text-base sm:font-normal text-sm lg:text-base">
                  Behind every project lies a journey of exploration,
                  creativity, and measurable success. Our case studies go beyond
                  the surface to reveal the innovative processes and tangible
                  outcomes that set our work apart.
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[30%]">
              <div className="w-full">
                <img
                  className="w-full h-auto object cover"
                  src={projectPageHeroImg}
                  alt="project-page-hero-img"
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
        <section className="flex flex-col gap-5 sm:gap-10 lg:-mt-20">
          <div className="flex flex-col gap-1 leading-none font-titleFont font-semibold text-lightPrimary text-[23px] sm:text-5xl uppercase text-center px-5 sm:px-7 lg:px-10 xl:px-20">
            <div>
              We use <span className="text-accentColor">technologies</span>
            </div>
            <div>that drive Innovation</div>
          </div>
          <div className="pt-7 md:pt-10">
            <Marquee
              autoFill={true}
              speed={100}
              direction="left"
              className="hover:cursor-pointer opacity-70"
            >
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={wordpressImg}
                  alt="wordpress-logo"
                />
              </div>
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={reactImg}
                  alt="react-logo"
                />
              </div>
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={expressImg}
                  alt="expressjs-logo"
                />
              </div>

              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={mongodbImg}
                  alt="mongodb-logo"
                />
              </div>

              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={javaImg}
                  alt="java-logo"
                />
              </div>

              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={nodeImg}
                  alt="node-logo"
                />
              </div>

              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={tailwindImg}
                  alt="tailwind-logo"
                />
              </div>
            </Marquee>
          </div>
          <div className="">
            <Marquee
              autoFill={true}
              speed={100}
              direction="right"
              className="hover:cursor-pointer opacity-70"
            >
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={gsapImg}
                  alt="gsap-logo"
                />
              </div>

              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={javascriptImg}
                  alt="javascript-logo"
                />
              </div>
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={fastapiImg}
                  alt="fastapi-logo"
                />
              </div>
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={numpyImg}
                  alt="numpy-logo"
                />
              </div>
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={pythonImg}
                  alt="python-logo"
                />
              </div>
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={pandasImg}
                  alt="pandas-logo"
                />
              </div>
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={framermotionImg}
                  alt="framer-motion-logo"
                />
              </div>
            </Marquee>
          </div>
          <div className="">
            <Marquee
              autoFill={true}
              speed={140}
              direction="left"
              className="hover:cursor-pointer opacity-70"
            >
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={seleniumImg}
                  alt="selenium-logo"
                />
              </div>
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={playwrightImg}
                  alt="playwright-logo"
                />
              </div>
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={testngImg}
                  alt="testng-logo"
                />
              </div>
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={junitImg}
                  alt="junit-logo"
                />
              </div>
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={semrushImg}
                  alt="semrush-logo"
                />
              </div>
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={seabornImg}
                  alt="seaborn-logo"
                />
              </div>
              <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
                <img
                  className="h-[40px] md:h-[70px] w-auto"
                  src={postmanImg}
                  alt="postman-logo"
                />
              </div>
            </Marquee>
          </div>
        </section>
        <section className="w-full px-5 sm:px-7 lg:px-10 xl:px-20 pt-7 flex flex-col gap-10 lg:gap-16 xl:gap-20">
          <div className="font-titleFont font-semibold text-lightPrimary text-[23px] sm:text-5xl uppercase text-center leading-none">
            Innovating <span className="text-accentColor">Real-World</span>{" "}
            Solutions
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-10 xl:gap-16">
            <CaseStudyCard
              image={kickOffImg}
              title="Sportswear E-commerce Web Application"
              desc="Developed a house price prediction model using machine
                  learning algorithms. Built a user-friendly website with
                  React.js and FastAPI for the backend."
              tags={[
                "React",
                "Tailwind",
                "Framer-Motion",
                "Node",
                "Marquee",
                "MongoDB",
                "Vercel",
              ]}
              to="/"
            />
            <CaseStudyCard
              image={portfolioImg}
              title="Personal Portfolio Website with Material UI"
              desc="Built a personal portfolio website using React and Tailwind CSS. Showcases work, skills, and experiences in a clean, modern design, reflecting proficiency in front-end development."
              tags={["React", "Tailwind", "Framer-Motion", "Figma", "Marquee"]}
              to="/"
            />
            <CaseStudyCard
              image={carsPredImg}
              title="Pre-owned Vehicle Price Prediction System"
              desc="Developed a pre-owned car price prediction model with machine learning. Built a responsive website using React.js, FastAPI, and Tailwind CSS, allowing users to estimate car prices accurately."
              tags={[
                "Machine Learning",
                "Python",
                "NumPy",
                "Data Science",
                "Pandas",
                "Seaborn",
                "Scikit Learn",
                "React",
                "FastAPI",
              ]}
              to="/"
            />
          </div>
        </section>
        <section className="flex flex-col">
          {/* Call To Action Section */}
          <CallToAction />
          {/* Footer Section */}
          <Footer />
        </section>
      </div>
    </div>
  );
}
