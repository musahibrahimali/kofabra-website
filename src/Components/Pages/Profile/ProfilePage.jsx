import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { authentication } from '../../../Config/FireBase';
import { useStateValue } from '../../../Provider/StateProvider';
import { Navbar, HeroSection, Button } from '../../exports';
import { homeObjOne, homeObjThree, homeObjFour, homeObjTwo } from './ProfileData';
import './ProfilePage.css';

function ProfilePage() {
    // eslint-disable-next-line no-unused-vars
    const [{ user }, dispatch] = useStateValue();

    const browserHistory = useHistory();

    const handleLogout = async (event) => {
        event.preventDefault();
        authentication.signOut();
        dispatch({
            type: "SET_USER",
            user: null,
        });
        browserHistory.replace('/');
    }

    return (
        <>
            <Navbar />
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
            <HeroSection {...homeObjTwo} />
            <div className="logout__container">
                <Button
                    buttonSize="btn--wide"
                    buttonColor="blue"
                    onClick={handleLogout}
                >
                    Log out
                </Button>

                <Link to="/">
                    <Button buttonSize="btn--wide" buttonColor="blue">
                        Explore More
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default ProfilePage;
