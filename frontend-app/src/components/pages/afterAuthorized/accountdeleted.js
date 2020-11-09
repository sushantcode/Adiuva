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
                <h2>Your Account has been Successfully deleted. We are sorry to see you going. 
                    You are always welcome to signup back again if you change your mind.</h2>
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