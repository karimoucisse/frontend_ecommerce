import React, { useState } from 'react';
import Calendar from 'react-calendar';
import  'react-calendar/dist/Calendar.css' ;

function Picker() {
  const [value, onChange] = useState(new Date());

  return (
    <div style ={{justifyContent:"center",display:"flex", margin:"10px 0px 10px 10px", }}>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
export default Picker ;