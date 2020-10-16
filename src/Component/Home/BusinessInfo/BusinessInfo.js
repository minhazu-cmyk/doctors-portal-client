import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
 const infosData =[
     {
     title:"opening hours",
     description:"we are open 7 days",
     icon:faClock,
     background:"primary",
 },
 {
    title:"visit our location",
    description:"brooklyn usa ",
    icon:faMapMarker,
    background:"black",
},
{
    title:"contact us now",
    description:"46237462",
    icon:faPhone,
    background:"primary",
},
]
const BusinessInfo = () => {
    return (
       <section className="d-flex justify-content-center">
           <div className="w-75 row">
           {
               infosData.map(x=> <InfoCard item={x}></InfoCard>)
           }
           </div>
       </section>
    );
};

export default BusinessInfo;