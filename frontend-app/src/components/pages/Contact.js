import React from "react";
//import "./Page.css";

function Contact() {
    return (
        <div className="contact-card">
            <div className="content-box">
                <div className="content-subbox">
                    <h1> Contact</h1>
                    <p>We'd ❤️ to hear from you</p>
                    <form className=" form-cardbox">
                        <div className="form-input">
                            <label htmlFor="username" classNAme="form-label">
                                <input
                                    id="username"
                                    type="text"
                                    name="username"
                                    className="form-input"
                                    placeholder="Full name"
                                />
                            </label>
                        </div>
                        <div className="form-input">
                            <label htmlFor="email" classNAme="form-label">
                                <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="form-input"
                                    placeholder="Email"
                                />
                            </label>
                        </div>
                        <div className="form-in">
                            <label htmlFor="message" classNAme="form-label">
                                <input
                                    id="message"
                                    type="text"
                                    name="message"
                                    className="form-input"
                                    placeholder="Message"
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
    );
}

export default Contact;
