import React from 'react';
import './OurBlogDetails.css';

const OurBlogDetails = (props) => {
  const{name,date,description,details,background,img} = props.item;
  return (
    <div class="card col-md-3 main">
  <div class={`card-body info-${background}`}>
    <img style={{width:"50px",display:"inline"}} src={img} alt=""/>
    <h6 style={{display:"inline"}} >{name} </h6>
    <p ><small>{date} </small> </p>
     <h6>{description} </h6> 
    
    <p class="card-text">{details} </p>
    
  </div>
</div>
  );
};

export default OurBlogDetails;