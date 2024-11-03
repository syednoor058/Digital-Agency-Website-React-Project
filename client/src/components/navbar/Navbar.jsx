// import React from 'react'
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import lightLogo from "../../assets/logo/dark_mode_logo.png";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-full font-titleFont capitalize text-lightBodyText bg-darkPrimary">
      <div className="w-full h-16 px-3 md:px-8 lg:px-8 xl:px-20 hidden lg:flex flex-row gap-10 items-center justify-between">
        <div className="w-[15%]">
          <img className="w-full h-auto" src={lightLogo} alt="light_logo" />
        </div>
        <div className="w-full flex flex-row gap-20 justify-end items-center">
          <div className="flex flex-row gap-5 justify-center items-center text-base lg:text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " duration-300 group text-accentColor overflow-hidden"
                  : "flex flex-col justify-center items-center overflow-hidden group"
              }
            >
              Home
              <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-accentColor duration-[400ms]"></div>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? " duration-300 group text-accentColor overflow-hidden"
                  : "flex flex-col justify-center items-center overflow-hidden group"
              }
            >
              Services
              <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-accentColor duration-[400ms]"></div>
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? " duration-300 group text-accentColor overflow-hidden"
                  : "flex flex-col justify-center items-center overflow-hidden group"
              }
            >
              Projects
              <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-accentColor duration-[400ms]"></div>
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? " duration-300 group text-accentColor overflow-hidden"
                  : "flex flex-col justify-center items-center overflow-hidden group"
              }
            >
              Pricing
              <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-accentColor duration-[400ms]"></div>
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? " duration-300 group text-accentColor overflow-hidden"
                  : "flex flex-col justify-center items-center overflow-hidden group"
              }
            >
              About
              <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-accentColor duration-[400ms]"></div>
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? " duration-300 group text-accentColor overflow-hidden"
                  : "flex flex-col justify-center items-center overflow-hidden group"
              }
            >
              Contact
              <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-accentColor duration-[400ms]"></div>
            </NavLink>
          </div>
          <div className="w-[15%] px-3 py-2 border border-accentColor rounded-full flex justify-center items-center lg:text-sm">
            Free trial
          </div>
        </div>
      </div>
      <div className="w-full h-14 px-3 md:px-8 lg:px-8 xl:px-20 text-xs sm:text-sm  flex lg:hidden items-center">
        <div className="w-full flex flex-row gap-10 items-center justify-between  text-lightTitleText">
          <div className="">
            <img className="w-auto h-14" src={lightLogo} alt="light_logo" />
          </div>
          <div className="flex flex-row gap-2 sm:gap-3 justify-end items-center">
            <div className="px-3 py-2 border border-accentColor rounded-full flex justify-center items-center ">
              Free trial
            </div>
            <div
              className="p-3 rounded border cursor-pointer"
              onClick={toggleMenu}
            >
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-[60%] bg-accentColor h-screen overflow-y-auto ${
          toggle ? "translate-x-0" : "-translate-x-[105%]"
        } duration-700 fixed z-[999]`}
      >
        <div className="flex flex-col justify-center items-start lg:text-sm xl:text-base text-lightTitleText pt-10 divide-darkPrimary">
          <div className="w-full" onClick={toggleMenu}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "w-full bg-darkPrimary  duration-300 group text-lightPrimary overflow-hidden flex flex-col justify-center gap-3"
                  : "flex flex-col justify-center overflow-hidden group gap-3 border-b-[0.5px] border-darkSecondary border-opacity-30"
              }
            >
              <div className="w-full px-5 md:px-7 py-3">Home</div>
            </NavLink>
          </div>
          <div className="w-full" onClick={toggleMenu}>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "w-full bg-darkPrimary  duration-300 group text-lightPrimary overflow-hidden flex flex-col justify-center gap-3"
                  : "flex flex-col justify-center overflow-hidden group gap-3 border-b-[0.5px] border-darkSecondary border-opacity-30"
              }
            >
              <div className="w-full px-5 md:px-7 py-3">Services</div>
            </NavLink>
          </div>
          <div className="w-full" onClick={toggleMenu}>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "w-full bg-darkPrimary  duration-300 group text-lightPrimary overflow-hidden flex flex-col justify-center gap-3"
                  : "flex flex-col justify-center overflow-hidden group gap-3 border-b-[0.5px] border-darkSecondary border-opacity-30"
              }
            >
              <div className="w-full px-5 md:px-7 py-3">Projects</div>
            </NavLink>
          </div>
          <div className="w-full" onClick={toggleMenu}>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? "w-full bg-darkPrimary  duration-300 group text-lightPrimary overflow-hidden flex flex-col justify-center gap-3"
                  : "flex flex-col justify-center overflow-hidden group gap-3 border-b-[0.5px] border-darkSecondary border-opacity-30"
              }
            >
              <div className="w-full px-5 md:px-7 py-3">Pricing</div>
            </NavLink>
          </div>
          <div className="w-full" onClick={toggleMenu}>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "w-full bg-darkPrimary  duration-300 group text-lightPrimary overflow-hidden flex flex-col justify-center gap-3"
                  : "flex flex-col justify-center overflow-hidden group gap-3 border-b-[0.5px] border-darkSecondary border-opacity-30"
              }
            >
              <div className="w-full px-5 md:px-7 py-3">About</div>
            </NavLink>
          </div>
          <div className="w-full" onClick={toggleMenu}>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "w-full bg-darkPrimary  duration-300 group text-lightPrimary overflow-hidden flex flex-col justify-center gap-3"
                  : "flex flex-col justify-center overflow-hidden group gap-3 border-b-[0.5px] border-darkSecondary border-opacity-30"
              }
            >
              <div className="w-full px-5 md:px-7 py-3">Contact</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
