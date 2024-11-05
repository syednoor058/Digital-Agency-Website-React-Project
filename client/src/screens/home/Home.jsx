// import React from 'react'
// import CallToAction from "../../components/callToAction/CallToAction";
import CaseStudy from "../../components/caseStudy/CaseStudy";
import Clients from "../../components/clients/Clients";
import FAQ from "../../components/faq/FAQ";
import Footer from "../../components/footer/Footer";
import Hero3 from "../../components/hero/Hero3";
import HowWeWork2 from "../../components/howWeWork/HowWeWork2";
import Testimonials from "../../components/testimonials/Testimonials";
import WhatWeDo from "../../components/whatWeDo/WhatWeDo";
import WhoWeAre from "../../components/whoWeAre/WhoWeAre";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="pt-14 lg:pt-10 w-full h-full overflow-x-hidden bg-darkPrimary">
      <Hero3 />
      <Clients />
      <WhoWeAre />
      <WhatWeDo />
      <HowWeWork2 />
      <CaseStudy />
      <WhyChooseUs />
      <Testimonials />
      {/* <CallToAction /> */}
      <FAQ />
      <Footer />
    </div>
  );
}
