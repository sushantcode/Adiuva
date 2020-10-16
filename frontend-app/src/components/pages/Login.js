import React, { Component } from "react";
import "./Page.css";
import $ from "jquery";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loading: false,
            err: {}
        };
        
    };

    submitHandler = (event) => {
        $.post('/signin', {email: this.state.username, password: this.state.password})
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err.response.data);
            })
    }

    render() {
        return (
            <div className="contact-card">
            <div className="content-box">
                <div className="content">
                <h1> Please Log In </h1>
                <div className="content-mild">
                    <form noValidate onSubmit={this.submitHandler} className=" form-cardbox">
                    <div className="form-input">
                        <label htmlFor="username" className="form-label">
                        <input
                            id="username"
                            type="text"
                            name="username"
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
                            name="email"
                            className="form-inp"
                            placeholder="Password"
                        />
                        </label>
                    </div>

                    <div className=" forgot-link">
                        <h4>
                        <u>Forgot your password</u>
                        </h4>
                        <br></br>
                        <h3> Create a new account</h3>
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
    }
}

export default Login;
