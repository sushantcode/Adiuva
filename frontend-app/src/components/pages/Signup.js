import React, { useCallback } from "react";
import WelcomeNavbar from '../WelcomeNavbar';
import app, { db } from '../utils/fireApp';
import "./Page.css";


const Signup = ({ history }) => {
    const onSubmitHandler = useCallback(
        async event => {
            event.preventDefault();
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

            const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
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
                    await app
                        .auth()
                        .createUserWithEmailAndPassword(email.value, password.value)
                        .then((data) => {
                            newUserID = data.user.uid;
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
                    db.doc(`/users/${newUser.userID}`).set(newUser);
                    history.push("/feed");
                } catch (err) {
                    alert (err);
                }
            }
        }, [history]
    );

    return (
    <><WelcomeNavbar />
    <div className="contact-card">
      <div className="content-box">
        <div className="content">
          <h1> Please Sign Up </h1>
          <div className="content-mild">
            <form className=" form-cardbox" onSubmit={onSubmitHandler}>
              <div className="form-fill1">
                <label htmlFor="fNmae" className="form-label">
                  <input
                    id="fName"
                    type="text"
                    name="fName"
                    className="form-fill"
                    placeholder="First Name*"
                  />
                </label>
              </div>

              <div className="form-fill">
                <label htmlFor="mName" className="form-label">
                  <input
                    id="MName"
                    type="text"
                    name="mName"
                    className="form-fill"
                    placeholder="Middle Name"
                  />
                </label>
              </div>

              <div className="form-fill">
                <label htmlFor="lName" className="form-label">
                  <input
                    id="lName"
                    type="text"
                    name="lName"
                    className="form-fill"
                    placeholder="Last Name*"
                  />
                </label>
              </div>

              <div className="form-fill">
                <label htmlFor="email" className="form-label">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="form-fill"
                    placeholder="Email*"
                  />
                </label>
              </div>

              <div className="form-fill">
                <label htmlFor="password" className="form-label">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-fill"
                    placeholder="Password*"
                  />
                </label>
              </div>

              <div className="form-fill">
                <label htmlFor="password2" className="form-label">
                  <input
                    id="re_password"
                    type="password"
                    name="re_password"
                    className="form-fill"
                    placeholder="Confirm Password*"
                  />
                </label>
              </div>

              <div className="form-fill">
                <label htmlFor="city" className="form-label">
                  <input
                    id="city"
                    type="text"
                    name="city"
                    className="form-fill"
                    placeholder="City"
                  />
                </label>
              </div>

              <div className="form-fill">
                <label htmlFor="state" className="form-label">
                  <input
                    id="stateName"
                    type="text"
                    name="stateName"
                    className="form-fill"
                    placeholder="State*"
                  />
                </label>
              </div>

              <div className="form-fill">
                <label htmlFor="zipcode" className="form-label">
                  <input
                    id="zipcode"
                    type="text"
                    name="zipcode"
                    className="form-fill"
                    placeholder="Zipcode*"
                  />
                </label>
              </div>

              <button className="form-btnn" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default Signup;
