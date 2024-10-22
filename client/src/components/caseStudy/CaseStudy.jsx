// import React from 'react'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import kickOffImg from "../../assets/images/projects/3.png";

export default function CaseStudy() {
  return (
    <div className=" py-10 lg:py-20 font-bodyFont text-lightSecondary bg-darkPrimary">
      <div className="flex flex-col gap-7 sm:gap-10 lg:gap-20 px-5 sm:px-7 lg:px-10 xl:px-20">
        <div className="flex flex-row gap-2 items-center">
          <div className="uppercase font-semibold text-sm sm:text-lg">
            Case Studies
          </div>
          <div className="w-20 h-[2px] bg-accentColor"></div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="w-[35%] flex flex-col gap-3">
            <div className="text-6xl text-lightPrimary font-extralight uppercase">
              Our Work
            </div>
            <div className="text-7xl text-lightPrimary font-semibold uppercase">
              in <span className="font-extrabold text-accentColor">Action</span>
            </div>
          </div>
          <div className="w-[65%] flex flex-row gap-5 items-start">
            <div className="w-[40%] aspect-[6/4]">
              <img
                className="w-full h-auto"
                src={kickOffImg}
                alt="kick-off-project"
              />
            </div>
            <div className="w-[60%] flex flex-row gap-3">
              <div className="w-[90%] flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="uppercase text-lightPrimary font-light text-lg">
                    Sportwear E-commerce Web Application
                  </div>
                  <div className="text-sm">
                    Developed a house price prediction model using machine
                    learning algorithms. Built a user-friendly website with
                    React.js and FastAPI for the backend.
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm text-center">
                  <div className="px-2 py-1 border border-accentColor rounded-md">
                    React
                  </div>
                  <div className="px-2 py-1 border border-accentColor rounded-md">
                    Tailwind
                  </div>
                  <div className="px-2 py-1 border border-accentColor rounded-md">
                    Node
                  </div>
                  <div className="px-2 py-1 border border-accentColor rounded-md">
                    Express
                  </div>
                  <div className="px-2 py-1 border border-accentColor rounded-md">
                    MongoDB
                  </div>
                  <div className="px-2 py-1 border border-accentColor rounded-md">
                    Vecel
                  </div>
                </div>
              </div>
              <div className="w-[10%]">
                <div className="w-full text-accentColor hover:text-lightPrimary hover:scale-[1.1] duration-300 text-4xl">
                  <BsFillArrowUpRightCircleFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
