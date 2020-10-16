import React, { useState } from 'react';
import AppointmentHeader from '../../AppointmentHeader/AppointmentHeader';
import Navbar from '../../Shared/Navbar/Navbar';
import BookAppointment from './BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date =>{
        setSelectedDate(date)
       }
    return (
        <div>
          <Navbar></Navbar>
          <AppointmentHeader handleDateChange={handleDateChange} ></AppointmentHeader>
           <BookAppointment date={selectedDate} ></BookAppointment>
        </div>
    );
};

export default Appointment;