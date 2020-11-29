import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import {DateRangePicker} from "react-date-range";
import "./ChatPage.css";
import { Dialog, DialogTitle, DialogContent }  from '@material-ui/core';



function Popup(props) {
  const{title, children, openPopup, setOpenPopup } = props;
  return(
    <Dialog open = {openPopup}>
      <DialogTitle>
        <div> Please select date and time </div>
      </DialogTitle>

      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  )
} 

export default Popup;

    
  
