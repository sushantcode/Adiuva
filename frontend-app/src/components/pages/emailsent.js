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
                <h1>If an account is found, an email will be sent to the email address provided, please wait a few minutes, Thank you.</h1>
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