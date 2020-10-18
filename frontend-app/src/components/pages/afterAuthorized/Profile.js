import React from "react";
import Navbar from "../../MainNavbar";
import app from '../../utils/fireApp';

function Profile() {
    const logoutHandler = () => {
        app.auth().signOut()
            .catch(err => {
                alert(err);
            });
    };
    return (
    <><Navbar />
    <div className="contact-card">
      <p>Profile Page
      See your details here</p>
        <button className="logout" onClick={logoutHandler}>
            Log-Out
        </button>
    </div>
    </>
  );
};

export default Profile;
