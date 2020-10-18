import React, { useState, useEffect } from "react";
import { Button } from "./SignUpButton";
import { Link } from "react-router-dom";
import Logo from "./adiuva_logo.png";
import "./WelcomeNavbar.css";

function Navbar() {
  //Set the state when an element is clicked
  //Reverse the states
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // Set the size of an element on mobile screen
  const handleClick = () => setClick(!click);
  const closeMobileViewMenu = () => setClick(false);

  // the size of button is adjusted for screen width less than 960
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  // Adding event Listener for resizing the button
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="welcomeNavbar">
        <div className="welcomeNavbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileViewMenu}>
            <img src={Logo} alt="LOGO" style={{ aspectRatio: 3 / 2 }} />
          </Link>

          {/* Clicking on menu-icon displays menu item */}
          <div className="menu-icon" onClick={handleClick}>
            {/* Takes to the hamberger menu when clicked else bars */}
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {/* Set navbar sizes on the basis of screen */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* Links to the respected pages both on the browser and mobile view */}
            <li className="welcomeNav-item">
              <Link
                to="/login"
                className="nav-links"
                onClick={closeMobileViewMenu}
              >
                Log In
              </Link>
            </li>
            <li className="welcomeNav-item">
              <Link
                to="/contactus"
                className="nav-links"
                onClick={closeMobileViewMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className="welcomeNav-tem">
              <Link
                to="/survey"
                className="nav-links"
                onClick={closeMobileViewMenu}
              >
                Survey
              </Link>
            </li>

            <li>
              <Link
                to="/signup"
                className="nav-links-mobile"
                onClick={closeMobileViewMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
