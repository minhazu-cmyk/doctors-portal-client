import React from 'react';
import PatientReviewDetails from './PatientReviewDetails';
import first from '../../../images/client1.png';
import second from '../../../images/client2.png';
import third from '../../../images/client3.png';
const PatientReview = () => {

    const review = [
        {
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestiae odit molestias praesentium, cumque autem. ",
            name:"David",
            place:"washington",
            img:first
        },
        {
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestiae odit molestias praesentium, cumque autem. ",
            name:"rose",
            place:"washington",
            img:second
        }, 
         {
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestiae odit molestias praesentium, cumque autem. ",
            name:"joana",
            place:"washington",
            img:third
        },
    ]
    return (
        <section>
            <div style={{margin:"0px",marginLeft:"80px",marginTop:"80px"}}  className="row " >
              <div className="col-md-6">
                <p style={{color:"#52DDD3"}}>TESTIMONIAL</p>
            <h3> whats our patient <br/> says</h3>
            </div>
            <div className="col-md-6">
                <img src="" alt=""/>
            </div>
            </div>
        <div style={{marginTop:"50px"}} class='row d-flex justify-content-center '>
            {
            review.map(x=> <PatientReviewDetails item={x} ></PatientReviewDetails>)
            }
        </div>
        </section>
    );
};

export default PatientReview;