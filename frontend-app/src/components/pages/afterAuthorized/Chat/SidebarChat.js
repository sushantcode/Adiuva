import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./SidebarChat.css";
import { Link } from "react-router-dom";
import app, { db } from "../../../utils/fireApp";

function SidebarChat({ id, fName, lName }) {
  const userID = app.auth().currentUser.uid;
  const [seed, setSeed] = useState("");
  

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000));
  }, []);


  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000));
  }, []);

  if (id != userID) {
    return (
      <Link to={`/chat/${id}`}>
        <div className="sidebarchat">
          <Avatar src={`https://avatars.dicebear.com/api/${seed}.svg`} />

          <div className="chatinfo">
            <h2>
              {fName} {lName}
            </h2>
          </div>
        </div>
      </Link>
    );
  } else {
    return <div></div>;
  }
}

export default SidebarChat;
