/* eslint-disable react/prop-types */
// import React from 'react'
import { IoIosAdd } from "react-icons/io";

export default function DoCard(props) {
  return (
    <div className=" p-5 sm:p-7 lg:p-8 xl:p-10 lg:border-r-[0.5px]  border-darkSecondary border-opacity-30 ">
      <div className="flex flex-col gap-5 lg:gap-8">
        <div className="text-5xl lg:text-7xl">{props.logo}</div>
        <div className="flex flex-col gap-3">
          <div className="text-2xl uppercase font-bold">{props.title}</div>
          <div className="w-full flex flex-col gap-1">
            {props.features.map((feature, index) => (
              <div
                key={index}
                className="w-full flex flex-row gap-2 items-center"
              >
                <span className="text-xl">
                  <IoIosAdd />
                </span>{" "}
                {feature}
              </div>
            ))}
          </div>
          <div className="text-sm sm:text-base">{props.desc}</div>
        </div>
      </div>
    </div>
  );
}
