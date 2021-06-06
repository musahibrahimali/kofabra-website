import React from 'react';
import { homeObjFive, homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./AboutData";
import { HeroSection, Navbar } from "../../exports";

function AboutUs() {
    return (
        <>
            <Navbar />
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
            <HeroSection {...homeObjFive} />
        </>
    );
}

export default AboutUs;