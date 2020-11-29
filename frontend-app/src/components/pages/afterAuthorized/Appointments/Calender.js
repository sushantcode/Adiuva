import React, { useState } from "react";
import { render } from 'react-dom';
import Calendar from 'react-calender';

const ReactCalender = () => {
    const [date, setDate] = useState(new Date());
    const onChange = () => {
        setDate(date);
    }
    return (
        <div>
            < Calendar onChange = {onChange}  value ={ date}/>
            
        </div>
    )
}