// Importing firebase app, navbar, and react components
import React, { useCallback, useState } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import WelcomeNavbar from '../WelcomeNavbar';
import app, { db } from '../utils/fireApp';
import "./Page.css";

// Function to complete signup activity
const Signup = ({ history }) => {
    
    // Check if the user is already logged in
    if (app.auth().currentUser && app.auth().currentUser.emailVerified) {
        // Redirecting the user already logged in
        history.push("/feed");
    };
    
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        history.push("/login");
    };
    
    // On click of submit buttom, the callback function if used to validate the input and signup
    const onSubmitHandler = useCallback(
        async event => {
            event.preventDefault();
            // form data sheme
            const {
                fName,
                mName,
                lName,
                city,
                stateName,
                email,
                password,
                re_password,
                zipcode
            } = event.target.elements;
            
            let errors = '';
            // regular expression for emails
            const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            // Validating all the use inputs and storeing respective error

            if (fName.value.trim() === '') {
                errors = 'First Name cannot be blank';
            }

            else if (lName.value.trim() === '') {
                errors = 'Last Name cannot be blank';
            }

            else if (email.value.trim() === '') {
                errors = 'Email cannot be blank';
            }

            else if (!(email.value.match(emailRegEx))) {
                    errors = 'Invalid email';
            }

            else if (password.value.trim() === '') {
                errors = 'Password cannot be blank';
            }

            else if (password.value !== re_password.value) {
                errors = 'Passwords must match';
            }

            else if (stateName.value.trim() === '') {
                errors = 'State cannot be blank';
            }

            else if (zipcode.value.trim() === '') {
                errors = 'Zipcode cannot be blank';
            }

            if (errors !== '') {
                alert(errors);
            }
            else {
                try {
                    let newUserID;
                    // Creating user using firebase auth() method with email and password
                    await app
                        .auth()
                        .createUserWithEmailAndPassword(email.value, password.value)
                        .then((data) => {
                            newUserID = data.user.uid;
                            app.auth().currentUser.sendEmailVerification()
                            .then(() => {
                                setOpen(true);
                            })
                        });
                    const newUser = {
                        fName: fName.value,
                        mName: mName.value,
                        lName: lName.value,
                        city: city.value,
                        stateName: stateName.value,
                        email: email.value,
                        zipcode: zipcode.value,
                        userID: newUserID,
                        registeredAt: new Date().toISOString(),
                    };
                    // Pushing the user information once user is signed up successfully to database
                    db.doc(`/users/${newUser.userID}`).set(newUser);
                } catch (err) {
                    alert (err);
                }
            }
        }
    );

    return (
    <><WelcomeNavbar />
    <div className="contact-card">
      <div className="content-box">
          <h1> Please Sign Up </h1>
          <div className="content-mild">
            <form className=" form-cardbox" onSubmit={onSubmitHandler}>
              <div className="form-fill1">
                  <input
                    id="fName"
                    type="text"
                    name="fName"
                    className="form-fill"
                    placeholder="First Name*"
                  />
                  <input
                    id="MName"
                    type="text"
                    name="mName"
                    className="form-fill"
                    placeholder="Middle Name"
                  />
                  <input
                    id="lName"
                    type="text"
                    name="lName"
                    className="form-fill"
                    placeholder="Last Name*"
                  />
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="form-fill"
                    placeholder="Email*"
                  />
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-fill"
                    placeholder="Password*"
                  />
                  <input
                    id="re_password"
                    type="password"
                    name="re_password"
                    className="form-fill"
                    placeholder="Confirm Password*"
                  />
                  <input
                    id="city"
                    type="text"
                    name="city"
                    className="form-fill"
                    placeholder="City"
                  />
                  <input
                    id="stateName"
                    type="text"
                    name="stateName"
                    className="form-fill"
                    placeholder="State*"
                  />
                  <input
                    id="zipcode"
                    type="number"
                    name="zipcode"
                    className="form-fill"
                    placeholder="Zipcode*"
                  />

              <button className="form-btn" type="submit">
                Sign Up
              </button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Thank you for signing up. Email-verification link has been sent to your email. Please check your email and verify it before signing in.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Ok
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
            </form>
        </div>
      </div>
    </div></>
  );
}

export default Signup;
