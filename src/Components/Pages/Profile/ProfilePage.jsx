import React from 'react';
import { Navbar, HeroSection } from '../../exports';
import { homeObjOne, homeObjThree, homeObjFour } from './ProfileData';

function ProfilePage() {
    return (
        <>
            <Navbar />
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default ProfilePage;
