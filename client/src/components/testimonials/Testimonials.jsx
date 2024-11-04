/* eslint-disable react/prop-types */
// import React from "react";
import { FcGoogle } from "react-icons/fc";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import azizulImg from "../../assets/images/testimonials/azizul.webp";
import rituImg from "../../assets/images/testimonials/rhitu.webp";
import shararImg from "../../assets/images/testimonials/sharar.webp";
import tanhImg from "../../assets/images/testimonials/tanha.webp";
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
    <div className="pt-10 pb-20 lg:py-20 font-bodyFont text-lightBodyText bg-darkSecondary relative overflow-hidden">
      <div className="w-full h-3/5 bg-accentColor absolute top-0 rounded-b-3xl"></div>
      <div className="flex flex-col gap-10 xl:gap-20 relative">
        <div className="flex flex-col sm:flex-row gap-5 px-5 sm:px-7 lg:px-10 xl:px-20">
          <div className="w-full sm:w-[30%] flex flex-row gap-3 sm:gap-10">
            <div className="uppercase font-semibold text-sm sm:text-lg text-darkSecondary">
              Testimonials
            </div>
            <div className="w-[2px] h-auto bg-lightPrimary"></div>
          </div>
          <div className="w-full sm:w-[70%] uppercase font-titleFont font-bold text-[42px] sm:text-[54px] lg:text-6xl leading-none text-darkPrimary">
            <span className="">Our</span> Happy{" "}
            <span className="text-lightPrimary font-light">Clients</span> Speak
          </div>
        </div>

        <div className="px-5 sm:px-7 lg:px-10 xl:px-20">
          <Slider {...settings}>
            <div className="px-2 sm:px-3">
              <TestimonialCard
                image={shararImg}
                icon={<FcGoogle />}
                feedback="Our business grew faster than we imagined after partnering with this agency. Their strategic guidance and digital solutions boosted our revenue by 50% within months. They don't just deliver services—they help us unlock."
                client="Kazi Fahim Sharar"
                company="Puppetbrush Digital Solution"
                pos="Cheif Executive Officer"
              />
            </div>
            <div className="px-2 sm:px-3">
              <TestimonialCard
                image={tanhImg}
                icon={<FcGoogle />}
                feedback="With their SEO expertise and digital marketing campaigns, we saw a 200% increase in website traffic within the first quarter. They transformed our online presence and positioned us as an authority in our industry."
                client="Sheikh Tanjina"
                company="Sweet Cakes Food Groceries"
                pos="Founder & CEO"
              />
            </div>
            <div className="px-2 sm:px-3">
              <TestimonialCard
                image={rituImg}
                icon={<FcGoogle />}
                feedback="Thanks to their tailored marketing strategies, our customer engagement skyrocketed, and our retention rate improved by 35%. Their team understands our audience perfectly and knows how to keep them engaged."
                client="Dr. Rhituparna Das"
                company="Lexerburg Dental Care"
                pos="Owner"
              />
            </div>
            <div className="px-2 sm:px-3">
              <TestimonialCard
                image={azizulImg}
                icon={<FcGoogle />}
                feedback="We relied on them for software development, and they exceeded expectations with flawless, reliable solutions. Their rigorous testing ensured a smooth launch with zero downtime—simply outstanding and amazing!"
                client="Md. Azizul Haque"
                company="InterAid education care"
                pos="Founder & Head Teacher"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
