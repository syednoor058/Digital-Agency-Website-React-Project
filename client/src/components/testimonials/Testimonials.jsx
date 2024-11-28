/* eslint-disable react/prop-types */
// import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import azizulImg from "../../assets/images/testimonials/azizul.webp";
import farhanMasumImg from "../../assets/images/testimonials/farhan_masum.webp";
import mehediImg from "../../assets/images/testimonials/mehedi.webp";
import rakibImg from "../../assets/images/testimonials/rakib.webp";
import TestimonialCard from "./TestimonialCard";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="text-lightPrimary text-5xl absolute top-[50%] -right-10 cursor-pointer hidden xl:flex"
      onClick={onClick}
      // data-aos="zoom-in"
    >
      <MdOutlineKeyboardArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="text-lightPrimary text-5xl absolute top-[50%] -left-10 cursor-pointer hidden xl:flex"
      onClick={onClick}
      // data-aos="zoom-in"
    >
      <MdOutlineKeyboardArrowLeft />
    </div>
  );
}

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <div className="py-10 lg:py-20 font-bodyFont text-lightBodyText bg-darkPrimary relative overflow-hidden">
      <div className="w-full h-4/6 bg-accentColor absolute top-0 rounded-b"></div>
      <div className="flex flex-col gap-7 md:gap-10 xl:gap-14 relative">
        <div className="flex flex-col sm:flex-row gap-5 px-5 sm:px-7 lg:px-10 xl:px-20">
          <div className="w-full sm:w-[40%] flex flex-row gap-2 sm:gap-10">
            <div className="uppercase font-semibold text-sm sm:text-lg text-darkSecondary">
              Testimonials
            </div>
            <div className="w-[2px] h-auto bg-lightPrimary"></div>
          </div>
          <div className="w-full sm:w-[60%] uppercase font-titleFont font-bold text-[42px] sm:text-[54px] lg:text-6xl leading-none text-darkPrimary">
            <span className="">Our</span> Happy{" "}
            <span className="text-lightPrimary font-light">Clients</span> Speak
          </div>
        </div>
        <div className="w-full lg:w-[50%] text-sm sm:text-base text-darkBodyText px-5 sm:px-7 lg:px-10 xl:px-20">
          We pride ourselves on building lasting partnerships with our clients.
          Our commitment to excellence and innovation has transformed the way
          they do business. Here's what some of them have to say about their
          experience with us-
        </div>
        <div className="px-5 sm:px-7 lg:px-10 xl:px-20">
          <Slider {...settings}>
            <div className="px-2 sm:px-3">
              <TestimonialCard
                image={farhanMasumImg}
                icon={<FcGoogle />}
                feedback="Our business grew faster than we imagined after partnering with this agency. They showed obedient behavior and a work friendly attitude. They were always willing to offer their assistance. I wish them every success in their future endeavors."
                client="Kazi Farhan Masum"
                company="Puppetbrush Digital Solution"
                pos="Cheif Executive Officer"
              />
            </div>
            <div className="px-2 sm:px-3">
              <TestimonialCard
                image={mehediImg}
                icon={<FcGoogle />}
                feedback="With their SEO expertise and digital marketing campaigns, we saw a 200% increase in website traffic within the first quarter. They transformed our online presence and positioned us as an authority in our industry."
                client="Syed Mustafa Mehedi"
                company="Qahaf"
                pos="Founder & CEO"
              />
            </div>
            <div className="px-2 sm:px-3">
              <TestimonialCard
                image={rakibImg}
                icon={
                  <div className="text-[#1877F2]">
                    <FaFacebookSquare />
                  </div>
                }
                feedback="They developed an E-commerce web application for my jersey business! The most loveble thing is they actually can understand what clients want and their requirments! Totally satisfied with their works! Their services are highly recommended!"
                client="Rakib Shikdar"
                company="Kick-off the Jersey Galleria"
                pos="Owner"
              />
            </div>
            <div className="px-2 sm:px-3">
              <TestimonialCard
                image={azizulImg}
                icon={<FcGoogle />}
                feedback="We relied on them for software development, and they exceeded expectations with flawless, reliable solutions. Their rigorous testing ensured a smooth launch with zero downtime—simply outstanding and amazing!"
                client="Md. Azizul Haque"
                company="InterAid Education Care"
                pos="Founder & CEO"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
