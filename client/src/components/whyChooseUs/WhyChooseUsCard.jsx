/* eslint-disable react/prop-types */
// import React from 'react'

export default function WhyChooseUsCard(props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-6xl">{props.icon}</div>
      <div className="flex flex-col gap-1">
        <div className="text-xl font-semibold font-titleFont text-darkTitleText">
          {props.title}
        </div>
        <div className="text-xs">{props.desc}</div>
      </div>
    </div>
  );
}
