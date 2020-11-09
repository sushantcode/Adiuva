import React, { useCallback } from "react";
import Navbar from "../../MainNavbar";
import "../Page.css";
import firebase from 'firebase';



const DeleteUser = ({ history }) => {
  
    const onSubmitHandler = useCallback(
        async event => {
            event.preventDefault();
            const {
                email,
                password,
            } = event.target.elements;

            var user = firebase.auth().currentUser;
            var credential =firebase.auth.EmailAuthProvider.credential(
                email.value, 
                password.value
            );
            try {
                user.reauthenticateWithCredential(credential).then(function() {
                    user.delete().then(function() {
                        history.push("/pagedeleted");
                    }).catch(function(error) {
                        alert(error);
                    });
                }).catch(function(error) {
                    alert(error);
                  });

            } 
            catch (err) {
                alert(err);
            }

            
        }
    );


  return (
    <><Navbar />
    <div className="contact-card">
        <div className="content-box">
            <div className="content">
            <h1>Enter your Email and Password to DELETE your Account</h1>
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

                <button className="form-btnDA" type="submit">
                    DELETE ACCOUNT
                </button>
                </form>
            </div>
            </div>
        </div>
        </div>
        </>
  );
}

export default DeleteUser;