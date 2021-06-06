import React from 'react';
import {HeroSection} from "../../exports";
import { homeObjOne, homeObjThree } from './SignUpData';

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
