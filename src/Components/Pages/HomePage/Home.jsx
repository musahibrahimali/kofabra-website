import React from 'react';
import { HeroSection, Pricing, Navbar } from "../../exports";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './HomeData';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
