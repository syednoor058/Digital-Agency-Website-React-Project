// import React from 'react'
import Clients from "../../components/clients/Clients";
import Hero from "../../components/hero/Hero";
import WhatWeDo from "../../components/whatWeDo/WhatWeDo";
import WhoWeAre from "../../components/whoWeAre/WhoWeAre";

export default function Home() {
  return (
    <div className="pt-10">
      <Hero />
      <Clients />
      <WhoWeAre />
      <WhatWeDo />
    </div>
  );
}
