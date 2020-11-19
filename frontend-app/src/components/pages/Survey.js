import React from "react";
import StarRating from "./StarRating";
import WelcomeNavbar from '../WelcomeNavbar';
import "./Page.css";
import app from '../utils/fireApp';

const Survey = ({ history }) => {
    
    // Check if the user is already logged in
    if (app.auth().currentUser && app.auth().currentUser.emailVerified) {
        // Redirecting the user already logged in
        history.push("/feed");
    };

    return (
        <><WelcomeNavbar />
        <div className="contact-card">
        <div className="content-box">
            <h1> Survey</h1>
            <p>We value your feedback</p>
            <div className="content-mild"> 
                <form className=" form-cardbox">
                        <div className="form-in">
                        <StarRating /> 
                            <input
                                id="message"
                                type="paragraph"
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
    </div>
    </>
    );
  }

  export default Survey;