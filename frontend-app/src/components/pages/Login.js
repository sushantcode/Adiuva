import React from "react";
import "./Page.css";

function Contact() {
  return (
    <div className="contact-card">
      <div className="content-box">
        <div className="content-subbox">
          <h1>Login</h1>
            <form className=" form-cardbox">
            <div className="form-input">
            Username:
              <label htmlFor="email" classNAme="form-label">
                <input
                  id="email"
                  type="text"
                  name="email"
                  className="form-input"
                  placeholder="Email"
                />
              </label>
            </div>
            <div className="form-in">
              <label htmlFor="password" classNAme="form-label">
                <input
                  id="password"
                  type="text"
                  name="message"
                  className="form-input"
                  placeholder="Enter your password"
                />
              </label>
            </div>
            <button className="form-btn" type="submit">
              Submit
            </button>
            <button className="form-btn1" type="submit">
              Forgot your password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;