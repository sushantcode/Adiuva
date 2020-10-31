import React, { useState, useEffect } from "react";
import "./ChatPage.css";
import { Avatar, IconButton } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhoneIcon from "@material-ui/icons/Phone";
import AttachmentIcon from "@material-ui/icons/Attachment";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useParams } from "react-router-dom";
import app, { db } from "../../../utils/fireApp";
import firebase from "firebase";

function ChatPage() {
  //to keep track of input the user type
  const [input, setInput] = useState("");
  const { userId } = useParams();
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (userId) {
      db.collection("users")
        .doc(userId)
        .onSnapshot((snapshot) => setUserName(snapshot.data().fName));

      db.collection("users")
        .doc(userId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [userId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("users").doc(userId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="chatpage">
      <div className="chatheader">
        <Avatar />
        <div className="header_info">{userName}</div>

        <div className="headerright">
          <IconButton>
            <AttachmentIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>

          <IconButton>
            <VideocamIcon />
          </IconButton>
        </div>
      </div>

      <div className="chatbody">
        {messages.map((message) => (
          <p className={`chat_message ${true && "chat_receiver"}`}>
            <span className="chatname">{message.name}</span>
            {message.message}
            <span className="chattime">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>

      <div className="chatfooter">
        <form>
          <InsertEmoticonIcon />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            {" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;