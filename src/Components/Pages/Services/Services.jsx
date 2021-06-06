import React from 'react';
import { HeroSection } from "../../exports";
import { homeObjOne, homeObjThree } from './ServiceData';
import { Pricing, Navbar } from "../../exports";

function Services() {
  return (
    <>
      <Navbar />
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;
