import React from 'react';
import './Footer.css';
import { Button } from "../../exports";
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about-page'>About Kofabra</Link>
            <Link to='/about-page'>Testimonials</Link>
            <Link to='/about-page'>Investors</Link>
            <Link to='/terms-page'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/help-page'>Contact</Link>
            <Link to='/help-page'>Support</Link>
            <Link to='/help-page'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Others</h2>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influence</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={'//www.facebook.com/kofabra.com'}> Instagram </Link>
            <Link to={'//www.facebook.com/kofabra.com'}> Facebook </Link>
            <Link to={'//www.facebook.com/kofabra.com'}> Youtube </Link>
            <Link to={'//www.facebook.com/kofabra.com'}> Twitter </Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              KO<span className="logo-f-text">F</span>ABRA
            </Link>
          </div>
          <small className='website-rights'>
            KO<span className="logo-f-text">F</span>ABRA © {new Date().getFullYear()}
          </small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={'//www.facebook.com/kofabra.com'}
              target='_blank'
              aria-label='Facebook'
            >
              <FacebookIcon />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.facebook.com/kofabra.com'}
              target='_blank'
              aria-label='Instagram'
            >
              <InstagramIcon />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.facebook.com/kofabra.com'}
              target='_blank'
              aria-label='Youtube'
            >
              <YouTubeIcon />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.facebook.com/kofabra'}
              target='_blank'
              aria-label='Twitter'
            >
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
