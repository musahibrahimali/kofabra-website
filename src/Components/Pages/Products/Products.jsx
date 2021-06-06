import React from 'react';
import { HeroSection, Navbar } from "../../exports";
import { homeObjOne, homeObjTwo } from './ProductData';

function Products() {
  return (
    <>
      <Navbar />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;
