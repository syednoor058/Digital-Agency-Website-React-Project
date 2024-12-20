// import React from 'react'
// import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoLogoYoutube, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiCustomerService2Line, RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import heroCover from "../../assets/images/hero_cover.webp";

export default function Hero() {
  return (
    <div className="font-bodyFont text-darkSecondary px-5 sm:px-7 lg:px-10 xl:px-20 py-10 lg:pt-24 lg:pb-20 bg-lightPrimary">
      <div className="flex flex-col-reverse lg:flex-row gap-5">
        {/* Column 1 */}
        <div className="w-full lg:w-[10%] flex items-center">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            transition={{
              ease: [0.76, 0, 0.24, 1],
              duration: 1,
              delay: 0.1,
            }}
            className="w-full flex flex-row lg:flex-col justify-center lg:justify-normal gap-10 sm:gap-20 lg:gap-10"
          >
            <FaLinkedin className="text-darkSecondary hover:text-accentColor hover:scale-[1.2] duration-500 text-3xl cursor-pointer" />
            <FaFacebookSquare className="text-darkSecondary hover:text-accentColor hover:scale-[1.2] duration-500 text-3xl cursor-pointer" />
            <IoLogoYoutube className="text-darkSecondary hover:text-accentColor hover:scale-[1.2] duration-500 text-3xl cursor-pointer" />
            <RiInstagramFill className="text-darkSecondary hover:text-accentColor hover:scale-[1.2] duration-500 text-3xl cursor-pointer" />
            <FaWhatsappSquare className="text-darkSecondary hover:text-accentColor hover:scale-[1.2] duration-500 text-3xl cursor-pointer" />
          </motion.div>
        </div>
        {/* Column 2 */}
        <div className="w-full lg:w-[90%] flex flex-col gap-10 relative">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-[65%] relative flex flex-col gap-1 leading-none">
              {/* <div className="aspect-square w-[35%] bg-accentColor rounded-[100%]  absolute z-[1] blur-[100px] opacity-75"></div> */}
              <div className="uppercase font-titleFont font-bold text-darkPrimary text-4xl sm:text-6xl lg:text-5xl z-[5] leading-none relative overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 0.8,
                  }}
                  className="inline-block translate-y-full"
                >
                  Transforming
                </motion.span>
              </div>
              <div className="flex flex-row gap-2 z-[5]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 1,
                    delay: 0.3,
                  }}
                  className="w-[120px] h-auto bg-accentColor"
                ></motion.div>
                <div className="text-4xl sm:text-6xl lg:text-5xl text-darkPrimary font-bodyFont uppercase font-extralight leading-none overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: "0" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 0.8,
                    }}
                    className="inline-block translate-y-full"
                  >
                    Ideas Into
                  </motion.span>
                </div>
              </div>
              <div className="flex flex-col z-[5]">
                <div className="font-titleFont text-darkPrimary text-7xl sm:text-9xl lg:text-8xl xl:text-[127px] font-bold tracking-tighter uppercase leading-none -mt-1 sm:-mt-3 overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: "0" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 0.8,
                    }}
                    className="inline-block translate-y-full"
                  >
                    Digital
                  </motion.span>
                </div>
                <div className="font-titleFont text-7xl sm:text-9xl lg:text-8xl xl:text-[127px] text-accentColor font-bold uppercase tracking-tighter leading-none -mt-2 sm:-mt-5 overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: "0" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 0.8,
                    }}
                    className="inline-block translate-y-full"
                  >
                    Reality
                  </motion.span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[35%] flex flex-col gap-8  text-darkPrimary lg:absolute lg:right-10 lg:top-5 z-[5] overflow-hidden">
              <div className="text-base lg:text-sm font-bodyFont text-darkPrimary flex flex-col gap-3">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
                >
                  Crafting seamless digital experiences—where design meets
                  development, and ideas become solutions.
                </motion.div>
                <Link className="sm:w-[40%] lg:w-[70%] xl:w-[60%] flex justify-center items-center hover:bg-accentColor hover:text-darkPrimary hover:border-none hover:scale-[1.1] duration-500 rounded-sm border border-darkPrimary">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 1,
                      delay: 0.1,
                    }}
                    className="w-full uppercase px-3 py-2  text-lg text-center"
                  >
                    Get Started
                  </motion.div>
                </Link>
              </div>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0" }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
                className="bg-accentColor justify-center p-5 sm:p-5 md:p-8 flex flex-row lg:flex-col gap-6 lg:gap-4 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 items-center ">
                  <div className=" text-lightPrimary text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
                    <FaRegClock />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="text-center text-lightPrimary text-2xl sm:text-5xl font-titleFont font-bold">
                      3+
                    </div>
                    <div className="text-center leading-none text-xs sm:text-base">
                      Years of Experience
                    </div>
                  </div>
                </div>
                <div className="h-auto lg:h-[2px] lg:w-full bg-lightPrimary px-[0.5px] sm:px-[1px] lg:px-0"></div>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 items-center">
                  <div className=" text-lightPrimary text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
                    <RiCustomerService2Line />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="text-center text-lightPrimary text-2xl sm:text-5xl font-titleFont font-bold">
                      12
                    </div>
                    <div className="text-center leading-none text-xs sm:text-base">
                      Clients Served
                    </div>
                  </div>
                </div>
                <div className="h-auto lg:h-[2px] lg:w-full bg-lightPrimary px-[0.5px] sm:px-[1px] lg:px-0"></div>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 items-center">
                  <div className=" text-lightPrimary text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
                    <IoMdCheckmarkCircleOutline />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="text-center text-lightPrimary text-2xl sm:text-5xl font-titleFont font-bold">
                      21
                    </div>
                    <div className="text-center leading-none text-xs sm:text-base">
                      Projects Completed
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="w-full relative aspect-[16/5] overflow-hidden">
            <motion.img
              initial={{ x: "-100%" }}
              animate={{ x: "0" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.1 }}
              className="w-full h-full object-cover"
              src={heroCover}
              alt="hero_cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
