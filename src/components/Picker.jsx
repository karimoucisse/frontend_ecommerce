import React, { useState } from 'react';
import Calendar from 'react-calendar';
import  'react-calendar/dist/Calendar.css' ;
import moment from 'moment';
function Picker() {
  const [value, setValue] = useState(new Date());
  const [selectedDay , setSelectedDay] = useState ("")
  console.log("Date que je vais stocker dans la base de donné" ,selectedDay);
  console.log("la date formaré que je souhate afficher au utilisateurs ", moment(selectedDay).format('L'));

  return (
    <div style ={{justifyContent:"center",display:"flex", margin:"10px 0px 10px 10px", }}>
      <Calendar
        onChange={setValue}
        value={value}
        onClickDay= {(value, event) => setSelectedDay(value)}
      />
    </div>
  );
}
export default Picker ;
                                                                     