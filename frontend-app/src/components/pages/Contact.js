import React from "react";
//import "./Page.css";

function Contact() {
  return (
    <div className="contact-card">
      <div className="content-box">
        <div className="content">
          <h1> Contact</h1>
          <p>We'd ❤️ to hear from you</p>
          <div className="content-mild">
            <form className=" form-cardbox">
              <div className="form-input">
                <label htmlFor="username" className="form-label">
                  <input
                    id="username"
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Full name"
                  />
                </label>
              </div>
              <div className="form-inp">
                <label htmlFor="email" className="form-label">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="form-inp"
                    placeholder="Email"
                  />
                </label>
              </div>
              <div className="message">
                <div className="form-in">
                  <label htmlFor="message" className="form-label">
                    <input
                      id="message"
                      type="text"
                      name="message"
                      className="form-in"
                      placeholder="Message"
                    />
                  </label>
                </div>
              </div>
              <button className="form-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        </div>
        </div>
    );
}

export default Contact;
