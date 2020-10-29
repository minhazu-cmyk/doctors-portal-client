import React from 'react';

const AppointmentShortList = ({appointment}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointment.map((x, index) => 
                        
                    <tr>
                        <td>{x.name}</td>
                        <td>{x.phone}</td>
                        <td>{x.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;