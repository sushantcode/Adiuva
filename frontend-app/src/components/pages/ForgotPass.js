import React from "react";
import WelcomeNavbar from '../WelcomeNavbar';
import app from '../utils/fireApp';

const ForgotPass = ({ history }) => {
  
     // Check if the user is already logged in
     if (app.auth().currentUser && app.auth().currentUser.emailVerified) {
        // Redirecting the user already logged in
        history.push("/feed");
        };
  
    return (
    <><WelcomeNavbar />
    <div className="contact-card">
      FORGOT PASSWORD PAGE
    </div></>
  );
}

export default ForgotPass;