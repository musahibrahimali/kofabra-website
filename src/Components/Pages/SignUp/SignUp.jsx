import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../../Provider/StateProvider';
import { HeroSection, Navbar } from "../../exports";
import { homeObjOne, homeObjThree } from './SignUpData';

function SignUp() {

  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();
  const browserHistory = useHistory();
  return (
    <>
      {
        !user ?
          <div>
            <Navbar />
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
          </div> :
          browserHistory.push('/request-page')
      }
    </>
  );
}

export default SignUp;
