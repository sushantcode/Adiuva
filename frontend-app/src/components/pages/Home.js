import React from "react";
import WelcomeNavbar from '../WelcomeNavbar';
// import BackgroundSlideShow from "react-background";

function Home() {
  return (
    <><WelcomeNavbar />
    <div className="main-container">
    <div className="contact-card">
        <div className="content-box">
        <div className="content">
                    <h1><p> Welcome to the world of Adiuva!!! </p></h1>
                    <h3><p> Please, place your good heart at work! </p></h3>
            </div>
            </div>
      </div>
    </div></>
  );
}

export default Home;
