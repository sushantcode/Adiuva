import React, { useState, useCallback } from 'react';
import { FaStar } from "react-icons/fa";
import WelcomeNavbar from '../WelcomeNavbar';
import { db } from '../utils/fireApp';
import "./Page.css";
import app from '../utils/fireApp';

const Survey = ({ history }) => {
    
    // Check if the user is already logged in
    if (app.auth().currentUser && app.auth().currentUser.emailVerified) {
        // Redirecting the user already logged in
        history.push("/feed");
    };

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const onSubmitHandler = useCallback(
        async event => {
            event.preventDefault();
            const { starRating, message } = event.target.elements;
            if (starRating.value == "") {
                setError("Must select at least a star.");
                setSuccessMsg("");
            }
            else {
                // Using firebase auth to login and catching error at same time 
                try {
                    const newRating = {
                        Star: starRating.value,
                        Feedbacks: message.value
                    };
                    // Pushing the user information once user is signed up successfully to database
                    db.collection("survey").add(newRating);
                    setError("");
                    setSuccessMsg("Thank you for your Feedbacks!!!");
                    setRating(null);
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
            <h1> Survey</h1>
            <p>We value your feedback</p>
            <div className="content-mild"> 
                <form className=" form-cardbox" onSubmit={onSubmitHandler}>
                        <div className="form-in">
                        <div>
                            {[...Array(5)].map((star,i)=>{
                                    const ratingValue= i+1;
                                    return (
                                        <label>
                                            <input 
                                                id="starRating"
                                                type="radio" 
                                                className="rating" 
                                                value={ratingValue} 
                                                onClick={() => setRating(ratingValue)}  
                                            />
                                            <FaStar 
                                                className="star" 
                                                color={ratingValue<= (hover || rating) ? "#ffc107":"#e4e5e9"}
                                                size={40} 
                                                onMouseEnter={() => setHover(ratingValue)}
                                                onMouseLeave={() => setHover(null)}
                                            />
                                        </label>
                                    );
                                })}
                            </div>

                            <textarea
                                id="message"
                                type="paragraph"
                                name="message"
                                className="form-in"
                                placeholder="Message"
                                value={msg}
                                onChange={e => setMsg(e.target.value)}
                            />
                            <br />
                <h4 style={{color: "red"}}> {error} </h4>
                <h3 style={{color: "magenta"}}> {successMsg} </h3>
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