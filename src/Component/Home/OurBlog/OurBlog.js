import React from 'react';
import OurBlogDetails from './OurBlogDetails';
import first from '../../../images/client1.png';
import second from '../../../images/client2.png';


const blog=[
    {
        name:"Rased kabir",
        description:"check at least a doctor in a year",
        background:"primary"
    },
    {
        img:first,
        name:"DR claudi",
        date:"23 april 2020",
        description:"2 times brush in a day keep your teeth healthy",
       details:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus consequuntur sunt laborum quod blanditiis. "
    },
    {
        img:second,
        name:"DR jhon",
        date:"23 april 2020",
        description:"The tooth cancer is taking a challenge",
       details:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus consequuntur sunt laborum quod blanditiis. "
    }
]
const OurBlog = () => {
    return (
        <section>
        <div className="mt-5">
               <p  className="d-flex justify-content-center"><strong style={{color:"#1CC7C1"}}> OUR BLOG</strong> </p>
               <h3  className="d-flex justify-content-center"> FROM OUR BLOG NEWS</h3>
            </div>
        <div style={{marginTop:"100px"}} className="row d-flex justify-content-center">
           {
               blog.map(x=> <OurBlogDetails item={x}></OurBlogDetails>)
           } 
        </div>
        </section>
    );
};

export default OurBlog;