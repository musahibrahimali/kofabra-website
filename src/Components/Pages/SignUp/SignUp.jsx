import React from 'react';
import { HeroSection, Navbar } from "../../exports";
import { homeObjOne, homeObjThree } from './SignUpData';

function SignUp() {
  return (
    <>
      <Navbar />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
