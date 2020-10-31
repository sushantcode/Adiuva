import React, {useState, useEffect} from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import "./Sidebar.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SidebarChat from "./SideChat";
import app, {db} from '../../../utils/fireApp';

function Sidebar() {

  const [users, setUsers] =useState([]);

  useEffect( () => {
    db.collection('users').onSnapshot((snapshot) =>
        setUsers(
          snapshot.docs.map((doc) => ({
           id: doc.id,
           
         data: doc.data(),
       }) )))

  }, []);


  return (
    <div className="sidebar">
      <div className="header">
        <Avatar />
        <div className="headerRight">


          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="search">
        <div className="search-box">
          <SearchOutlined />
          <input placeholder="Search Contact" type="text" />
        </div>
      </div>

      <div className="sidecontact">
        
        {users.map ((user) => (
          <SidebarChat 
          id= {user.id}
          fName= {user.data.fName}
          lName= {user.data.lName}
          
          />

        )
        )}
        
      </div>
    </div>
  );
}

export default Sidebar;