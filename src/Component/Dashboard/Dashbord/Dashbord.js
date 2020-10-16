import React, { useEffect, useState} from 'react';
import AppointmentByDashbord from '../AppointmentByDashbord/AppointmentByDashbord';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const containerStyle={
    backgroundColor:"#F4FDFB",
    height:"100%"
}

const Dashbord = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointment, setAppointment] = useState([]);
    const handleDateChange = date =>{
        setSelectedDate(date)
    }
     useEffect(()=>{
        fetch('http://localhost:5000/addAppointmentByDate',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify({date:selectedDate})
        })
        .then(res=>res.json())
        .then(data=>setAppointment(data))
     },[selectedDate])

       
    return (
        <section>
       <div style={containerStyle} className="cusontainer-fluid row">
          <div className="col-md-2">
          <Sidebar></Sidebar>
          </div>
          <div className="col-md-5">
          <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
          </div>
          <div className="col-md-5">
         <AppointmentByDashbord appointment={appointment}></AppointmentByDashbord>
          </div>
       </div>
        </section>
    );
};

export default Dashbord;