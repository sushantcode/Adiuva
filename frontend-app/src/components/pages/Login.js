import React, { useCallback, useContext } from "react";
import { Redirect } from 'react-router';
import app from '../utils/fireApp';
import { AuthContext } from '../utils/fireAuth';
import "./Page.css";
import { Link } from "react-router-dom";


const Login = ({ history }) => {
    const onSubmitHandler = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/feed");
            } catch (err) {
                alert(err);
            }
        },
        [history]
    );

    const currentUser = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/Feed"/>
    };
        return (
            <div className="contact-card">
            <div className="content-box">
                <div className="content">
                <h1> Please Log In </h1>
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
                    <div className="form-inp">
                        <label htmlFor="password" className="form-label">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="form-inp"
                            placeholder="Password"
                        />
                        </label>
                    </div>

                    <div className=" forgot-link">
                        <h4>
                        <u><Link to="/forgotpassword">Forgot your password</Link></u>
                        </h4>
                        <br></br>
                        <h3><Link to="/signup">Create a new account</Link></h3>
                    </div>

                    <button className="form-btn" type="submit">
                        Login
                    </button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        );
    };

export default Login;
