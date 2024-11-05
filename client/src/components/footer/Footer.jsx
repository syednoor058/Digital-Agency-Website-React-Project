// import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  return (
    <div className="mt-7 pt-10 lg:pt-20 font-bodyFont text-lightSecondary bg-darkPrimary">
      <div className="flex flex-col gap-10 px-5 sm:px-7 lg:px-10 xl:px-20">
        <div className="w-full flex flex-col lg:flex-row gap-10 xl:gap-20">
          <div className="w-full sm:w-[65%] lg:w-[45%] flex flex-col gap-3">
            <div className="uppercase font-titleFont text-lightPrimary text-2xl sm:text-3xl font-semibold">
              Ready to transform your business?
            </div>
            <div>Sign up for counsiling, latest update, and offers!</div>
            <input
              className="w-full rounded-sm bg-lightPrimary border-none outline-none px-3 py-2 text-darkPrimary"
              placeholder="Enter Email Address"
            />
            <button className="w-full px-3 py-2 uppercase text-center text-lightPrimary border rounded-sm border-lightPrimary hover:bg-lightPrimary hover:text-darkPrimary duration-300">
              Let&apos;s start a conversation!
            </button>
            <div className="text-xs">
              By signing up, you understand and agree that your data will be
              collected and used subject to our{" "}
              <span className="underline">Privacy Policy</span> and{" "}
              <span className="underline">Terms of Use</span>.
            </div>
            <div>*Required Information</div>
            <div className="w-full flex flex-wrap gap-5 text-3xl">
              <FaFacebookSquare />
              <FaLinkedin />
              <FaWhatsappSquare />
              <IoLogoYoutube />
            </div>
          </div>
          <div className="w-full lg:w-[55%] flex flex-wrap gap-10 sm:justify-between pt-10 lg:pt-0">
            <div className="flex flex-col gap-5">
              <div className="uppercase font-bold text-lightPrimary">
                Company
              </div>
              <div className="flex flex-col gap-3">
                <div>Home</div>
                <div>Services</div>
                <div>Projects</div>
                <div>Pricing</div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="uppercase font-bold text-lightPrimary">
                Explore
              </div>
              <div className="flex flex-col gap-3">
                <div>Software Development</div>
                <div>Digital Marketing</div>
                <div>Machine Learning</div>
                <div>Terms & Conditions</div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="uppercase font-bold text-lightPrimary">
                Customer
              </div>
              <div className="flex flex-col gap-3">
                <div>Contact</div>
                <div>About</div>
                <div>Get a Quote</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 pb-5">
          <div className="w-full h-[0.5px] bg-lightSecondary"></div>
          <div className="w-full text-center text-xs sm:text-sm">
            © 2024. All rights reserved by Syed Shaeduzzaman Noor
          </div>
        </div>
      </div>
    </div>
  );
}
