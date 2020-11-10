import React, { useCallback } from "react";
import Navbar from "../../MainNavbar";
import StarR from "./StarR";
import "../Page.css";
import app from '../../utils/fireApp';

const Users = ({ history }) => {
    // Check if the user is logged in
    if (!(app.auth().currentUser)) {
        // Redirecting the user to log-in if logged out
        history.push("/login");
    };
    
    return (
    <><Navbar />
        <div className="contact-card">
      <div style={{
        display: "flex",
        justifyContent:"space-around",
        margin:"19px 0px"
      }}>

        <div>
          <img style={{width:"250px",height:"200px",borderRadius:"80px"}}
          src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
        alt="proPic"/>
        </div>
        <div className="content">
        <form className="form-cardbox">
        <div className="content">
          <label>Name:</label><h3>User's Name</h3>
          
          <label className="field">E-mail:</label><h3>username@email.com</h3>
          <label>Verification:</label><StarR />
          <label>Zipcode:</label><h3>76xxx</h3>
          </div>
        </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Users;
