import React from 'react';

const PatientReviewDetails = (props) => {
    const{description,img,name,place} = props.item;
    return (
        <div style={{margin:"5px",height:"250px",width:"200px"}} class=" card col-md-3  " >
        <p>{description} </p>
        <div style={{display:"inline"}} class="card-body  ">
        <img style={{width:"50px",display:"inline",margin:"10px"}} src={img} alt=""/>
        <p style={{display:"inline",color:"#52DDD3",margin:"10px"}}>{name} </p>
        <p>{place} </p>
        </div>
      </div>
    );
};

export default PatientReviewDetails;