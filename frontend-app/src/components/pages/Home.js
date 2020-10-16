import React from "react";
import WelcomeNavbar from '../WelcomeNavbar';
// import BackgroundSlideShow from "react-background";
// import image1 from "./2pic.jpg";
// import image2 from "./6pic.jpg";
// import image3 from "./8.png";
// import image4 from "./7pic.jpg";

function Home() {
  return (
    <><WelcomeNavbar />
    <div className="main-container">
      <div className="container">
        {/* <BackgroundSlideShow images={[image1, image2, image3, image4]} /> */}
      </div>
    </div></>
  );
}

export default Home;
