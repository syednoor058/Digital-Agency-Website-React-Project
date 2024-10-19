// import React from 'react'
import Clients from "../../components/clients/Clients";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import WhoWeAre from "../../components/whoWeAre/WhoWeAre";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
      <WhoWeAre />
    </div>
  );
}
