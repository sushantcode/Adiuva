import WelcomeNavbar from '../WelcomeNavbar';
import "./Page.css";
import React, { useCallback } from "react";

const EmailSent= ({ history }) => {

    const onSubmitHandler = useCallback(
        async event => {
            event.preventDefault();
            history.push("/login");
        },
    );

    return (
        <><WelcomeNavbar />
        <div className="contact-card">
            <div className="content-box">
                <div className="content">
                <h2>An email with password reset link has been to the email address provided, if it exists. 
                    Please check your email and reset your password. Then, come back to login again. Thank you.</h2>
                <div className="content-mild">
                    <form onSubmit={onSubmitHandler} className=" form-cardbox">
                    <button className="form-btn" type="submit">
                        Login
                    </button>
                    </form>
                </div>
                </div>
            </div>
            </div>
            </>
      );

    
}

export default EmailSent;