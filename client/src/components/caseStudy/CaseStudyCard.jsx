/* eslint-disable react/prop-types */
// import React from 'react'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function CaseStudyCard(props) {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full aspect-[6/4]">
        <img className="w-full h-auto" src={props.image} alt={props.title} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-5">
          <div className="w-[90%] uppercase text-lightPrimary font-light font-titleFont text-lg">
            {props.title}
          </div>
          <div className="w-[10%]">
            <Link
              to={props.to}
              className="w-full text-accentColor hover:text-lightPrimary hover:scale-[1.1] duration-500 text-4xl cursor-pointer flex justify-end"
            >
              <BsFillArrowUpRightCircleFill />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-sm font-extralight">{props.desc}</div>
      <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-center">
        {props.tags.map((tag, index) => (
          <div
            key={index}
            className="px-3 py-1 sm:py-2 border border-accentColor rounded-xl"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
