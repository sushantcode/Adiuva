import React, { useState, useEffect } from "react";
import { Button } from "./LogOutBtn";
import { Link } from "react-router-dom";
import Logo from "./adiuva_logo.png";
import app from './utils/fireApp';
import "./MainNavbar.css";


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

  const onClickLogout = () => {
    app.auth().signOut()
        .catch(err => {
            alert(err);
        });
    };

  return (
    <>
      <nav className="welcomeNavbar">
        <div className="welcomeNavbar-container">
          <Link to="/feed" className="navbar-logo" onClick={closeMobileViewMenu}>
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
            
            <li className="Nav-item">
                <input className='searchBar' type='text' placeholder='search for a person...' on={closeMobileViewMenu} />
            </li>

            <li className="Nav-item">
              <Link
                to="/createpost"
                className="nav-links"
                onClick={closeMobileViewMenu}
              >
                <i class="fa fa-plus" aria-hidden="true" />
              </Link>
            </li>
            
            <li className="Nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileViewMenu}
              >
                <i class="far fa-address-card"></i>
              </Link>
            </li>
            <li className="Nav-item">
              <Link
                to="/chat"
                className="nav-links"
                onClick={closeMobileViewMenu}
              >
                <i class="far fa-comments"></i>
              </Link>
            </li>
            <li className="Nav-item">
              <Link
                to="/appointment"
                className="nav-links"
                onClick={closeMobileViewMenu}
              >
                <i class="far fa-calendar-alt"></i>
              </Link>
            </li>

            <li>
                <Link to="/login"
                className="nav-links-mobile"
                onClick={ onClickLogout } >
                LogOut
                </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline" onClick={ onClickLogout }> LogOut </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
