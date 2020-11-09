import React, { useCallback } from "react";
import WelcomeNavbar from '../WelcomeNavbar';
import "./Page.css";
import app from '../utils/fireApp';

 
const ForgotPass = ({ history }) => {
  
    const onSubmitHandler = useCallback(
        async event => {
            event.preventDefault();
            const {email} = event.target.elements;
            // Using firebase auth to login and catching error at same time 
            try {
                await app
                .auth()
                .sendPasswordResetEmail(email.value)
                history.push("/emailsent");
            } catch (err) {
                alert(err);
            }

            
        },
    );

  

  return (
    <><WelcomeNavbar />
    <div className="contact-card">
        <div className="content-box">
            <div className="content">
            <h1> Forgot Password</h1>
            <div className="content-mild">
                <form onSubmit={onSubmitHandler} className=" form-cardbox">
                <div className="form-input">
                    <label htmlFor="username" className="form-label">
                    <input
                        id="email"
                        type="text"
                        name="email"
                        className="form-input"
                        placeholder="Email"
                    />
                    </label>
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

export default ForgotPass;