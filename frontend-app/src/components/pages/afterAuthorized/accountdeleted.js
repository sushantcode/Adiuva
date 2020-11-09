import WelcomeNavbar from '../../WelcomeNavbar';
import "../Page.css";
import React, { useCallback } from "react";

const DeletedPage= ({ history }) => {

    const onSubmitHandler = useCallback(
        async event => {
            event.preventDefault();
            history.push("/signup");
        },
    );

    return (
        <><WelcomeNavbar />
        <div className="contact-card">
            <div className="content-box">
                <div className="content">
                <h1>Your Account has been Successfully deleted.</h1>
                <div className="content-mild">
                    <form onSubmit={onSubmitHandler} className=" form-cardbox">
                    <button className="form-btn" type="submit">
                        SignUp
                    </button>
                    </form>
                </div>
                </div>
            </div>
            </div>
            </>
      );

    
}

export default DeletedPage;