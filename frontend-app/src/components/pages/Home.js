import React from "react";
import WelcomeNavbar from '../WelcomeNavbar';
// import BackgroundSlideShow from "react-background";

function Home() {
  return (
    <><WelcomeNavbar />
    <div className="main-container">
      <div className="container">
        <h1><p> Welcome to the world of Adiuva!!! </p></h1>
        <p> Place your good heart at work! </p>
      </div>
    </div></>
  );
}

export default Home;
