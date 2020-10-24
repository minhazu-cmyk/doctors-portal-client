import React from 'react';
import doctor from '../../../../images/doctor.png'

const OurDoctors = () => {
    return (
        <section>
         <div className="container">
        <div  className="row">
            <div  className="col-md-4">
            <img style={{width:"200px",height:"200px"}}   src={doctor} alt=""/>
            <p style={{marginLeft:"60px"}}> <strong> DR.CAUDI</strong> </p>
            <p style={{marginLeft:"60px"}} ><small>013974384</small>   </p>
            </div>
            <div className="col-md-4">
             <img  style={{width:"200px",height:"200px"}}  src={doctor} alt=""/>
             <p style={{marginLeft:"60px"}}> <strong> DR.CAUDI</strong> </p>
             <p style={{marginLeft:"60px"}}><small>013974384</small>   </p>
            </div>
            <div className="col-md-4">
                <img style={{width:"200px",height:"200px"}}  src={doctor} alt=""/>
                <p style={{marginLeft:"60px"}}><strong> DR.CAUDI</strong> </p>
                <p style={{marginLeft:"60px"}}><small>013974384</small>   </p>
            </div>
        </div>
        </div>
        </section>
    );
};

export default OurDoctors;