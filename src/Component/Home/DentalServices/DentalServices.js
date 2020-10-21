import React from 'react';
import baby from '../../../images/baby.png';

const DentalServices = () => {
    return (
        <div   style={{marginTop:"100px"}} className="container d-flex justify-content-center">
        <div style={{margin:"5px"}} className="row">
            <div  className="col-md-4">
             <img style={{width:"350px",height:"400px"}} src={baby} alt=""/>
            </div>
            <div style={{marginTop:"50px"}} className="col-md-6">
               <h3> EXCEPTIONAL  DENTAL <br/> CARE, ON YOUR TERMS </h3>
              <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad quisquam, corporis velit assumenda iste quia vero id perferendis doloribus sed accusantium labore recusandae voluptatibus totam voluptas exercitationem itaque. Sit.</p>
               <button style={{backgroundColor:"#52DDD3", color:"white", borderRadius:"5px"}}> Learn more </button>
            </div>
            
        </div>
        </div>
    );
};

export default DentalServices;