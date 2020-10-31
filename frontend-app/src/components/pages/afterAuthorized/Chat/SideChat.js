import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./SidebarChat.css";
import { Link } from "react-router-dom";


function SidebarChat({ id, fName, lName }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000));
  }, []);

  return (
    <Link to = {`/users/${id}`}>
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
}

export default SidebarChat;