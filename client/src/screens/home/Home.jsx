// import React from 'react'
// import CallToAction from "../../components/callToAction/CallToAction";
import CaseStudy from "../../components/caseStudy/CaseStudy";
import Clients from "../../components/clients/Clients";
import Footer from "../../components/footer/Footer";
import Hero3 from "../../components/hero/Hero3";
import HowWeWork from "../../components/howWeWork/HowWeWork";
import Testimonials from "../../components/testimonials/Testimonials";
import WhatWeDo from "../../components/whatWeDo/WhatWeDo";
import WhoWeAre from "../../components/whoWeAre/WhoWeAre";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="pt-10 w-full h-full overflow-x-hidden">
      <Hero3 />
      <Clients />
      <WhoWeAre />
      <WhatWeDo />
      <HowWeWork />
      <CaseStudy />
      <WhyChooseUs />
      <Testimonials />
      {/* <CallToAction /> */}
      <Footer />
    </div>
  );
}
