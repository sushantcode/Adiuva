import React from "react";
import Sidebar from "./Sidebar";
import ChatPage from "./ChatPage";
import ChatP from "./ChatP";
import MainNavbar from "../../../MainNavbar";
import "./Chat.css";
import app from "../../../utils/fireApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import app, {db} from '../../../utils/fireApp';

const Chat = ({ history }) => {
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
                <ChatPage />
        </div>
      </div>
    </div>
  );
};

export default Chat;
