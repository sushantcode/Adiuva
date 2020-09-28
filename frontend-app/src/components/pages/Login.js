import React from "react";
import "./Page.css";

function Login() {
  return (
    <div className="contact-card">
      <div className="content-box">
        <div className="content">
          <h1> Please Log In </h1>
          <div className="content-mild">
            <form className=" form-cardbox">
              <div className="form-input">
                <label htmlFor="username" className="form-label">
                  <input
                    id="username"
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="User name"
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
                    placeholder="Password"
                  />
                </label>
              </div>

              <div className=" forgot-link">
                <h4>
                  <u>Forgot your password</u>
                </h4>
                <br></br>
                <h3> Create a new account</h3>
              </div>

              <button className="form-btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
