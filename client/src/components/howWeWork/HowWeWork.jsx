// import React from 'react'
import firstImg from "../../assets/images/howWeDo/1.png";
import secondImg from "../../assets/images/howWeDo/2.png";
import thirdImg from "../../assets/images/howWeDo/3.png";
import forthImg from "../../assets/images/howWeDo/4.png";
import WorkCard from "./WorkCard";
import WorkCard2 from "./WorkCard2";

export default function HowWeWork() {
  return (
    <div className=" py-10 lg:py-20 font-bodyFont text-darkSecondary bg-lightPrimary">
      <div className="flex flex-col gap-7 sm:gap-10 lg:gap-20 px-5 sm:px-7 lg:px-10 xl:px-20">
        <div className="flex flex-row gap-2 items-center">
          <div className="uppercase font-semibold text-sm sm:text-lg">
            How We Work
          </div>
          <div className="w-20 h-[2px] bg-accentColor"></div>
        </div>
        <div className="w-full flex flex-col gap-7">
          <WorkCard
            number="01"
            title="Discover"
            desc="We dive deep into your business needs and objectives, gathering insights to shape the right solutions. This is where ideas take root and strategies align with your goals."
            image={firstImg}
            quote="Together, we uncover opportunities to help your business grow and evolve."
          />
          <WorkCard2
            number="02"
            title="Design"
            desc="Our creative team translates ideas into user-friendly designs, balancing aesthetics with functionality. We ensure your vision is brought to life with clarity and precision."
            image={secondImg}
            quote="Every element is crafted to enhance engagement and reflect your brand identity."
          />
          <WorkCard
            number="03"
            title="Develop"
            desc="Using the latest technologies, we bring your vision to life with precision and scalability. Our solutions are optimized for seamless performance across platforms."
            image={thirdImg}
            quote="We focus on building reliable systems that adapt to your future needs."
          />
          <WorkCard2
            number="04"
            title="Deliver"
            desc="We ensure a smooth launch, followed by ongoing support to keep your project running flawlessly. Delivery isn’t the end—it’s the beginning of your growth journey."
            image={forthImg}
            quote="Your success is our priority, and we stay with you every step of the way."
          />
        </div>
      </div>
    </div>
  );
}
