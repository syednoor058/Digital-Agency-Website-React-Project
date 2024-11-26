/* eslint-disable react/prop-types */
// import React from 'react'

export default function WhyChooseUsCard(props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-6xl xl:text-8xl">{props.icon}</div>
      <div className="flex flex-col gap-2 xl:gap-5">
        <div className="text-xl xl:text-2xl font-semibold font-titleFont text-lightTitleText">
          {props.title}
        </div>
        <div className="text-xs lg:text-sm xl:text-base font-light">
          {props.desc}
        </div>
      </div>
    </div>
  );
}
