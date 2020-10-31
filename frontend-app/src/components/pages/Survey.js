import React from "react";
import StarRating from "./StarRating";
import WelcomeNavbar from '../WelcomeNavbar';
import "./Page.css";
import app from '../utils/fireApp';

const Survey = ({ history }) => {
    
    // Check if the user is already logged in
    if (app.auth().currentUser) {
        // Redirecting the user already logged in
        history.push("/feed");
    };

    return (
        <><WelcomeNavbar />
        <div className="contact-card">
        <div className="content-box">
            <div className="content">
            <h1> Survey</h1>
            <p>We value your feedback</p>
            <div className="content-mild"> 
                <form className=" form-cardbox">
                <StarRating /> 
                    <div className="message">
                        <div className="form-in">
                            <label htmlFor="message" className="form-label">
                            <input
                                id="message"
                                type="paragraph"
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
    </>
    );
  }

  export default Survey;