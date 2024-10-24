// import React from 'react'
import CaseStudy from "../../components/caseStudy/CaseStudy";
import Clients from "../../components/clients/Clients";
import Hero from "../../components/hero/Hero";
import HowWeWork from "../../components/howWeWork/HowWeWork";
import Testimonials from "../../components/testimonials/Testimonials";
import WhatWeDo from "../../components/whatWeDo/WhatWeDo";
import WhoWeAre from "../../components/whoWeAre/WhoWeAre";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="pt-10">
      <Hero />
      <Clients />
      <WhoWeAre />
      <WhatWeDo />
      <HowWeWork />
      <CaseStudy />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
