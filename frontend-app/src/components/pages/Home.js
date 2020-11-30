import React from "react";
import WelcomeNavbar from '../WelcomeNavbar';
import app from '../utils/fireApp';
import { Link } from "react-router-dom";

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
            <p className="welcome-note">
                <h1> Welcome to Adiuva!!!
                    <br />where, you place your good heart at work!</h1>
                <h2>Please {" "}
                <Link
                    to="/signup"
                    >
                        Sign-Up
                </Link> if you are not already a member!</h2>
                <h3>Already a Member? Please {" "}
                <Link
                    to="/login"
                    >
                        Log In
                </Link></h3>
            </p>
        </div>
    </>
  );

}

export default Home;
