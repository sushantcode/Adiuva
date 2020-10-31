import React from "react";
import Navbar from "../../MainNavbar";
import app from '../../utils/fireApp';

const Appointment = ({ history }) => {
  // Check if the user is logged in
  if (!(app.auth().currentUser)) {
    // Redirecting the user to log-in if logged out
    history.push("/login");
    };
    return (
    <><Navbar />
    <div className="contact-card">
    <p>Appointment Page 
        See all you appointment here..
    </p>
    </div>
    </>
  );
}

export default Appointment;
