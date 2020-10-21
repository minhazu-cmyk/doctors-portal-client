import React from 'react';
import doctor from '../../../images/doctor.png'

const AppointmentSection = () => {
    return (
        <div style={{backgroundColor:"#41485C",height:"350px",marginTop:"100px"}} className="container d-flex justify-content-center ">
            <div style={{margin:"5px"}} className="row">
         <div  className="col-md-4">
            <img style={{width:"300px",height:"300px"}}  src={doctor} alt=""/>
          </div>
          <div  style={{marginTop:"50px"}} className="col-md-6">
            <p style={{color:"#52DDD3"}}> appointment</p>
            <h3 style={{color:"white"}}> Make an appointment tody</h3>
            <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, possimus! </p>
            <button style={{backgroundColor:"#52DDD3",color:"white"}}>Learn more </button>
          </div>
          </div>
        </div>
    );
};

export default AppointmentSection;