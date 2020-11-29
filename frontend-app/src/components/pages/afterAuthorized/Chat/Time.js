import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { Avatar, IconButton, Button } from "@material-ui/core";
import "./Choose.css";

function Time() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="choose">
      <DateTimePicker onChange={onChange} value={value} />
      <br></br>
      <button className="button_cl"> Submit </button>
    </div>
  );
}

export default Time;
