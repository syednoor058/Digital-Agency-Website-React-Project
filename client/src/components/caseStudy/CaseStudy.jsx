// import React from 'react'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import portfolioImg from "../../assets/images/projects/2.webp";
import kickOffImg from "../../assets/images/projects/3.webp";
import carsPredImg from "../../assets/images/projects/4.webp";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudy() {
  return (
    <div className="py-10 lg:py-20 font-bodyFont text-lightSecondary bg-darkPrimary">
      <div className="flex flex-col gap-7 sm:gap-10 lg:gap-16 px-5 sm:px-7 lg:px-10 xl:px-20">
        <div className="flex flex-row gap-2 items-center">
          <div className="uppercase font-semibold text-sm sm:text-lg pe-3 border-r-[2px] border-accentColor whitespace-nowrap">
            Case Studies
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-7 xl:gap-10 items-end">
          <div className="w-full lg:w-[55%] xl:w-[45%] text-sm lg:text-base font-light">
            See how we’ve turned challenges into opportunities and ideas into
            impactful solutions. Our case studies showcase real-world examples
            of how we’ve helped businesses grow, optimize operations, and
            achieve their goals. Each story reflects our commitment to
            innovation, collaboration, and delivering measurable results.
          </div>
          <div className="w-full lg:w-[45%] xl:w-[55%] flex flex-col gap-2 lg:gap-5  text-left lg:text-right uppercase font-titleFont text-lightPrimary">
            <div className="font-extralight text-[44px] sm:text-7xl lg:text-6xl xl:text-7xl leading-none">
              Our works
            </div>
            <div className="font-semibold text-[56px] sm:text-8xl lg:text-7xl xl:text-8xl leading-none">
              In <span className="text-accentColor">Action</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10 lg:items-end">
          <div className="w-full lg:w-[50%] aspect-[6/4]">
            <img
              className="w-full h-auto"
              src={kickOffImg}
              alt="kick-off-project"
            />
          </div>
          <div className="w-full lg:w-[50%] flex flex-row gap-3">
            <div className="w-[90%] flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="uppercase text-lightPrimary font-light text-lg">
                  Sportswear E-commerce Web Application
                </div>
                <div className="text-sm font-extralight">
                  Developed a house price prediction model using machine
                  learning algorithms. Built a user-friendly website with
                  React.js and FastAPI for the backend.
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-center">
                <div className="px-3 py-1 sm:py-2 border border-accentColor rounded-xl">
                  React
                </div>
                <div className="px-3 py-1 sm:py-2 border border-accentColor rounded-xl">
                  Tailwind
                </div>
                <div className="px-3 py-1 sm:py-2 border border-accentColor rounded-xl">
                  Node
                </div>
                <div className="px-3 py-1 sm:py-2 border border-accentColor rounded-xl">
                  Express
                </div>
                <div className="px-3 py-1 sm:py-2 border border-accentColor rounded-xl">
                  MongoDB
                </div>
                <div className="px-3 py-1 sm:py-2 border border-accentColor rounded-xl">
                  Vercel
                </div>
              </div>
            </div>
            <div className="w-[10%]">
              <Link
                to="/"
                className="w-full text-accentColor hover:text-lightPrimary hover:scale-[1.1] duration-300 text-4xl cursor-pointer flex justify-end"
              >
                <BsFillArrowUpRightCircleFill />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-10 xl:gap-16">
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
        <div className="w-ful flex justify-center pt-5 lg:pt-10">
          <Link to="/projects">
            <div className="w-auto flex flex-row items-center text-darkPrimary">
              <span className="px-6 py-2 capitalize text-center bg-lightTitleText rounded-full">
                Discover More Case Studies
              </span>
              <div className="w-[38px] aspect-square rounded-full bg-lightPrimary flex justify-center items-center">
                <HiMiniArrowUpRight />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
