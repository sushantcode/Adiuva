import React, { useState, useEffect } from "react";
import "./ChatPage.css";
import { Avatar, IconButton, Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import AttachmentIcon from "@material-ui/icons/Attachment";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useParams } from "react-router-dom";
import ScheduleIcon from "@material-ui/icons/Schedule";
import app, { db } from "../../../utils/fireApp";
//import Popup from "./Popup";

function ChatPage() {
  // to keep track of input the user type
  const [input, setInput] = useState("");
  const { userId } = useParams();
  const [userName, setuserName] = useState("");
  const [messages, setMessages] = useState([]);
  const [messages2, setMessages2] = useState([]);
  const [userInfo, setUinfo] = useState("");
  const userID = app.auth().currentUser.uid;
  const [openPopup, setOpenPopup] = useState(false);

  console.log(userId);
  useEffect(() => {
    if (userId) {
      db.collection("users")
        .doc(userId)
        .onSnapshot((snapshot) =>
          setuserName(snapshot.data().fName + " " + snapshot.data().lName)
        );

        db.collection("users")
        .doc(userID)
        .onSnapshot((snapshot) => setUinfo(snapshot.data()));

        //fetching all the fields
        
      db.collection("chat-users")
        .doc(userId)
        .collection(userID)
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => 
          doc.data()))
        );

        db.collection("chat-users")
        .doc(userID)
        .collection(userId)
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages2(snapshot.docs.map((doc) => 
          doc.data()))
        );

            
    }
  }, [userId]);

var allMsg = messages.concat(messages2);
allMsg.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : (a.timestamp === b.timestamp) ? 0 : -1);
  console.log("you have" , messages);
 


  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed ....", input);
    setInput("");

    const messageObj = {
      message: input,
      senderId: userID,
      receiverId: userId,
      sendername: userInfo.fName + userInfo.lName ,
      receivername: userName,
      isView: true,
      timestamp: new Date(),
    };

    
    //Pushing all the fields to the database
    db.collection("chat-users").doc(userId).collection(userID).add(
      messageObj,
    );  

    
  };
  
  
  return (
    <div className="chatpage">
      <div className="page">
        <div className="chatheader">
          <Avatar />
          <div className="header_info"> {userName}</div>

          <div className="headerright">
            <IconButton>
              <AttachmentIcon />
            </IconButton>

            <IconButton>
              <PhoneIcon />
            </IconButton>

            <div className="search">


              <ScheduleIcon onClick={() => setOpenPopup(true)}> </ScheduleIcon>
            </div>
          </div>
        </div>
      </div>

      <div className="chatbody">
        {allMsg.map((message) => 
        (
          <p className={`chat_message ${message.senderId === userID && "chat_receiver"}`}>
            <span className="chatname">{message.name}</span>
            {message.message}
          </p>)          
          
        )}
      </div>

      <div className="chatfooter">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            SEND{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;
