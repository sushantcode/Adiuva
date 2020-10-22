import React from 'react'
import Sidebar from './Sidebar';
import ChatPage from './ChatPage';
import MainNavbar from '../../../MainNavbar';
import "./Chat.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import app, {db} from '../../../utils/fireApp';


function Chat() {
  return (

    <div>
    <MainNavbar/>
    <div className= "app">
    <div className ="app_body">
    
    <Sidebar/>
    <ChatPage/>
    </div>
    
    </div> 
    </div>
    
  )
}

export default Chat;