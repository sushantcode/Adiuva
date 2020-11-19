// Import all the required packages
import React, { useCallback, useState } from "react";
import WelcomeNavbar from '../WelcomeNavbar';
import app from '../utils/fireApp';
import "./Page.css";
import { Link } from "react-router-dom";

// Function to process login backend and frontend
const Login = ({ history }) => {
    // Check if the user is already logged in
    if (app.auth().currentUser && app.auth().currentUser.emailVerified) {
        // Redirecting the user already logged in
        history.push("/feed");
    };
    
    const [error, setError] = useState("");

    // Callback function to log in the user using email and password provided
    const onSubmitHandler = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            if (email.value == "") {
                setError("Email cannot be empty.");
            }
            else if (password.value == "") {
                setError("Password cannot be blank.");
            }
            else {
                // Using firebase auth to login and catching error at same time 
                try {
                    await app
                        .auth()
                        .signInWithEmailAndPassword(email.value, password.value)
                        .then((data) => {
                            if (app.auth().currentUser.emailVerified){
                                history.push("/feed");
                            }
                            else {
                                setError("Your email is not verified. Please verify your email first.");
                            }
                        });
                } catch (err) {
                    setError(err.message);
                }
            }
        },
        [history]
    );

        return (
            <><WelcomeNavbar />
            <div className="contact-card">
            <div className="content-box">
                <h1> Please Log-In </h1>
                <div className="content-mild">
                    <form onSubmit={onSubmitHandler} className=" form-cardbox">
                    <div className="form-input">
                        <input
                            id="email"
                            type="text"
                            name="email"
                            className="form-input"
                            placeholder="Email"
                        />
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="Password"
                        />
                    </div>

                    <div className="thirdlinks-login">
                        <br />
                        <h3>
                            <Link to="/forgotpassword" className="thirdlinks-login"><b>Forgot your password?</b></Link>
                        </h3>
                        <br />
                        <h3>
                            <Link to="/signup" className="thirdlinks-login"><b>Create a new account</b></Link>
                        </h3> 
                    </div>
                    <br />
                    <h4 style={{color: "red"}}> {error} </h4>
                    <button className="form-btn" type="submit">
                        Login
                    </button>
                    </form>
                </div>
                </div>
            </div>
            </>
        );
    };

export default Login;
