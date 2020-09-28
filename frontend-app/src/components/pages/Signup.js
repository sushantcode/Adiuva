import React from "react";
import "./Page.css";

function Signup() {
  return (
    <div className="contact-card">
      <div className="content-box">
        <div className="content-subbox">
          <h1> Sign-up</h1>
          <p>Please enter the following information:</p>
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
              <div className="form-input">
                <label htmlFor="firstname" className="form-label">
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    className="form-input"
                    placeholder="First name"
                  />
                </label>
              </div>
              <div className="form-input">
                <label htmlFor="middlename" className="form-label">
                  <input
                    id="middlename"
                    type="text"
                    name="middlename"
                    className="form-input"
                    placeholder="Middle name"
                  />
                </label>
              </div>
              <div className="form-input">
                <label htmlFor="lastname" className="form-label">
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    className="form-input"
                    placeholder="Last name"
                  />
                </label>
              </div>
              <div className="form-input">
                <label htmlFor="city" className="form-label">
                  <input
                    id="city"
                    type="text"
                    name="city"
                    className="form-input"
                    placeholder="City"
                  />
                </label>
              </div>
              <div className="form-input">
                <label htmlFor="state" className="form-label">
                  <input
                    id="state"
                    type="text"
                    name="state"
                    className="form-input"
                    placeholder="State"
                  />
                </label>
              </div>
              <div className="form-input">
                <label htmlFor="country" className="form-label">
                  <input
                    id="country"
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Country"
                  />
                </label>
              </div>
              <div className="form-input">
                <label htmlFor="zipcode" className="form-label">
                  <input
                    id="zipcode"
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Zipcode"
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
              <div className="form-in">
                <label htmlFor="password" classNAme="form-label">
                  <input
                    id="password"
                    type="text"
                    name="message"
                    className="form-input"
                    placeholder="Password"
                  />
                </label>
              </div>
              <div className="form-in">
                <label htmlFor="repassword" classNAme="form-label">
                  <input
                    id="repassword"
                    type="text"
                    name="password"
                    className="form-input"
                    placeholder="Re-enter password"
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

export default Signup;
