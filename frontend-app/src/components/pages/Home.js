import React from "react";
import WelcomeNavbar from '../WelcomeNavbar';
import app from '../utils/fireApp';

// Function to process home screen
const Home = ({ history }) => {
    // Check if the user is already logged in
    if (app.auth().currentUser && app.auth().currentUser.emailVerified) {
        // Redirecting the user already logged in
        history.push("/feed");
    };

  return (
    <><WelcomeNavbar />
        <div className="content-box">
                    <h1><p> Welcome to the world of Adiuva!!! </p></h1>
                    <h3><p> where, you place your good heart at work! </p></h3>
            </div>
    </>
  );
}

export default Home;
