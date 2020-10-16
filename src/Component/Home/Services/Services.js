import React from 'react';
import flouride from '../../../images/fluride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';




const serviceData= [
    {
  name:"Flouride treatement",
  img:flouride,

},
  {
  name:"cavity filing",
  img:cavity,
  
},
  {
  name:"Teeth whitening",
  img:whitening,
  
}
]
const Services = () => {
    return (
        <section>
         <div className="text-center mt-5">
             <h5 style={{color:'#1CC7C1'}}>our services</h5>
             <h2 style={{color:'#3A4256'}}>services we provide</h2>
         </div> 
         <div className="d-flex justify-content-center">
           <div className="w-75 row mt-5 pt-5">
          {
              serviceData.map(x=><ServiceDetails item={x} ></ServiceDetails> )
          }
           </div>
       </div>

        </section>
    );
};

export default Services;