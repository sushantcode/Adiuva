import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Logo from "./adiuva_logo.png";
import "./WelcomeNavbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileViewMenu = () => setClick(false);

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

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="welcomeNavbar">
        <div className="welcomeNavbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileViewMenu}>
            <img src={Logo} alt="LOGO" style={{ aspectRatio: 3 / 2 }} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="welcomeNav-item">
              <Link
                to="/login"
                className="nav-links"
                onClick={closeMobileViewMenu}
              >
                Log-In
              </Link>
            </li>
            <li className="welcomeNav-item">
              <Link
                to="/contactus"
                className="nav-links"
                onClick={closeMobileViewMenu}
              >
                Contact-us
              </Link>
            </li>
            <li className="welcomeNav-tem">
              <Link
                to="/survey"
                className="nav-links"
                onClick={closeMobileViewMenu}
              >
                Survey-Feedbacks
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
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
