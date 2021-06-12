import React, { useState, useEffect, useCallback } from "react";
import { Button } from "../exports";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from '@material-ui/core/Avatar';
import { useStateValue } from "../../Provider/StateProvider";
import "./Navbar.css";

function Navbar() {

  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const removeEventListener = () => {
    return window.removeEventListener("resize", showButton);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    useCallback(() => {
      showButton();
      window.addEventListener("resize", showButton);
      removeEventListener();
      console.log("Usr----", user);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            KO<span className="logo-f-text">F</span>ABRA
            {/*<img src={Logo} alt="brand identity"/>*/}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to={!user ? "/sign-up" : "/profile-page"} className="btn-link">
                  {
                    !user ?
                      <Button buttonStyle="btn--outline">SIGN UP</Button> :
                      <Avatar />
                  }
                </Link>
              ) : (
                <Link to="/sign-up" className="btn-link">
                  <Button
                    buttonStyle="btn--outline"
                    buttonSize="btn--mobile"
                    onClick={closeMobileMenu}
                  >
                    SIGN UP
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
