import React, { useState, useCallback } from 'react';
import WelcomeNavbar from '../WelcomeNavbar';
import { db } from '../utils/fireApp';
import "./Page.css";
import app from '../utils/fireApp';
import { rgbToHex } from '@material-ui/core';

const Contact = ({ history }) => {
    
    // Check if the user is already logged in
    if (app.auth().currentUser && app.auth().currentUser.emailVerified) {
        // Redirecting the user already logged in
        history.push("/feed");
    };

    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const onSubmitHandler = useCallback(
        async event => {
            event.preventDefault();
            const { name, email, message } = event.target.elements;
            if (email.value == "") {
                setError("Email cannot be blank.");
                setSuccessMsg("");
            }
            else if (message.value == "") {
                setError("Message cannot be blank.")
                setSuccessMsg("");
            }
            else {
                // Using firebase auth to login and catching error at same time 
                try {
                    const newContact = {
                        Name: name.value,
                        Email: email.value,
                        Message: message.value
                    };
                    // Pushing the user information once user is signed up successfully to database
                    db.collection("contact").add(newContact);
                    setError("");
                    setSuccessMsg("Thank you for contacting us. We will get you back as soon as possible!!!");
                    setName("");
                    setEmail("")
                    setMsg("");
                } catch (err) {
                    setError(err.message);
                    setSuccessMsg("");
                }
            }
        },
        [history]
    );

  return (
    <><WelcomeNavbar />
    <div className="contact-card">
      <div className="content-box">
          <h1> Contact Us</h1>
          <p>We'd ❤️ to hear from you</p>
          <div className="content-mild">
            <form className=" form-cardbox" onSubmit={onSubmitHandler}>
              <div className="form-input">
                  <input
                    id="name"
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Full name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="form-input"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                    <input
                      id="message"
                      type="text"
                      name="message"
                      className="form-in"
                      placeholder="Message"
                      value={msg}
                      onChange={e => setMsg(e.target.value)}
                    />
            <h4 style={{color: "red"}}> {error} </h4>
                <h3 style={{color: "magenta"}}> {successMsg} </h3>
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
