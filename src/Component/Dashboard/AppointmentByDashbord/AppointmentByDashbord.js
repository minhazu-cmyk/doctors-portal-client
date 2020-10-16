import React from 'react';

const AppointmentByDashbord = ({appointment}) => {
    return (
        <div>
            <h1> dashbord :{appointment.length} </h1>
            {
                appointment.map(x=> <li> {x.example} </li>)
            }
        </div>
    );
};

export default AppointmentByDashbord;