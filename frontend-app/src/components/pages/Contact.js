import React from "react";
import WelcomeNavbar from '../WelcomeNavbar';
import "./Page.css";
import app from '../utils/fireApp';

const Contact = ({ history }) => {
    
    // Check if the user is already logged in
    if (app.auth().currentUser && app.auth().currentUser.emailVerified) {
        // Redirecting the user already logged in
        history.push("/feed");
    };

  return (
    <><WelcomeNavbar />
    <div className="contact-card">
      <div className="content-box">
          <h1> Contact</h1>
          <p>We'd ❤️ to hear from you</p>
          <div className="content-mild">
            <form className=" form-cardbox">
              <div className="form-input">
                  <input
                    id="username"
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Full name"
                  />
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="form-input"
                    placeholder="Email"
                  />
                    <input
                      id="message"
                      type="text"
                      name="message"
                      className="form-in"
                      placeholder="Message"
                    />
              <button className="form-btn" type="submit">
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
    </div></>
  );
}

export default Contact;
