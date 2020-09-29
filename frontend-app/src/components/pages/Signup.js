import React from "react";
import "./Page.css";

function Signup() {
  return (
    <div className="contact-card">
      <div className="content-box">
        <div className="content">
          <h1> Please Sign Up </h1>
          <div className="content-mild">
            <form className=" form-cardbox">
              <div className="form-fill1">
                <label htmlFor="username" className="form-label">
                  <input
                    id="username"
                    type="text"
                    name="username"
                    className="form-fill"
                    placeholder="Username*"
                  />
                </label>
              </div>
              <div className="form-fill">
                <label htmlFor="fullname" className="form-label">
                  <input
                    id="fullname"
                    type="text"
                    name="fullname"
                    className="form-fill"
                    placeholder="Full name*"
                  />
                </label>
              </div>
              <div className="form-fill">
                <label htmlFor="email" className="form-label">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="form-fill"
                    placeholder="Email*"
                  />
                </label>
              </div>
              <div className="form-fill">
                <label htmlFor="city" className="form-label">
                  <input
                    id="city"
                    type="text"
                    name="city"
                    className="form-fill"
                    placeholder="City"
                  />
                </label>
              </div>

              <div className="form-fill">
                <label htmlFor="state" className="form-label">
                  <input
                    id="state"
                    type="text"
                    name="state"
                    className="form-fill"
                    placeholder="State*"
                  />
                </label>
              </div>

              <div className="form-fill">
                <label htmlFor="zipcode" className="form-label">
                  <input
                    id="zipcode"
                    type="text"
                    name="zipcode"
                    className="form-fill"
                    placeholder="Zipcode*"
                  />
                </label>
              </div>

              <div className="form-fill">
                <label htmlFor="country" className="form-label">
                  <input
                    id="country"
                    type="text"
                    name="country"
                    className="form-fill"
                    placeholder="Country*"
                  />
                </label>
              </div>

              <div className="form-fill">
                <label htmlFor="password" className="form-label">
                  <input
                    id="password"
                    type="text"
                    name="password"
                    className="form-fill"
                    placeholder="Password*"
                  />
                </label>
              </div>
              <div className="form-fill">
                <label htmlFor="password2" className="form-label">
                  <input
                    id="password2"
                    type="text"
                    name="password2"
                    className="form-fill"
                    placeholder="Confirm Password*"
                  />
                </label>
              </div>

              <button className="form-btnn" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
