import React from 'react';
import {Button} from '../exports';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import FlareIcon from '@material-ui/icons/Flare';
import { Link } from 'react-router-dom';
import './Pricing.css';

function Pricing() {
  return (
      <>
        <div className='pricing__section'>
          <div className='pricing__wrapper'>
            <h1 className='pricing__heading'>Packages</h1>
            <div className='pricing__container'>
              <Link to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <WhatshotIcon fontSize='large'/>
                  </div>
                  <h3>CUSTOMER</h3>
                  <h4>Patronize</h4>
                  <p>your favorite products from the comfort of your home</p>
                  <ul className='pricing__container-features'>
                    <li>Unlimited Transactions</li>
                    <li>30% Discount</li>
                  </ul>
                  <Button buttonSize='btn--wide' buttonColor='primary'>
                    Get Started
                  </Button>
                </div>
              </Link>
              <Link to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <DataUsageIcon fontSize='large'/>
                  </div>
                  <h3>COURIER</h3>
                  <h4>$29.99</h4>
                  <p>per month</p>
                  <ul className='pricing__container-features'>
                    <li>Unlimited Transactions</li>
                    <li>$100,000 Limit</li>
                  </ul>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    Get Started
                  </Button>
                </div>
              </Link>
              <Link to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <FlareIcon fontSize='large'/>
                  </div>
                  <h3>VENDOR</h3>
                  <h4>$99.99</h4>
                  <p>per month</p>
                  <ul className='pricing__container-features'>
                    <li>Unlimited Transactions</li>
                    <li>Unlimited Spending</li>
                  </ul>
                  <Button buttonSize='btn--wide' buttonColor='primary'>
                    Get Started
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
  );
}
export default Pricing;
