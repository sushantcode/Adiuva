import React from "react";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";
import MainNavbar from "../../../MainNavbar";
import "./Chat.css";
import app from "../../../utils/fireApp";

const ChatP = ({ history }) => {
  // Check if the user is logged in
  if (!app.auth().currentUser) {
    // Redirecting the user to log-in if logged out
    history.push("/login");
  }

  return (
    <div className="chat">
      <MainNavbar />

      <div className="chatcard">
        <div className="chatbox">
          <Sidebar />
          <Welcome />
        </div>
      </div>
    </div>
  );
};

export default ChatP;
