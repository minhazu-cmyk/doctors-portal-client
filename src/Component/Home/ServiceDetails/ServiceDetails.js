import React from 'react';

const ServiceDetails = (props) => {
    console.log(props.item)
    const {name,description,img}= props.item
    return (
        
        <div className="col-md-4" text-center>
            
          <img style={{height:"50px"}} src={img} alt=""/> 
          <h5 className="mt-3 mb-3">{name} </h5> 
          <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, illo? </p>
        </div>
    );
};

export default ServiceDetails;