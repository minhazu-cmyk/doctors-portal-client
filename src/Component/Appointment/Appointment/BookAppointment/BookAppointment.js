import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import './BookAppointment.css';

   const bookingDate=[
{
   id: 1,
   subject:"Teeth orthodontics",
   visitingHour:"8am - 9am",
   totalSpace: "10 seats available"
},
{
    id: 2,
    subject:"cosmetic dentistry",
    visitingHour:"10am - 11am",
    totalSpace: "10 seats available"
 },{
    id:3 ,
    subject:"Teeth cleaning",
    visitingHour:"11am - 12pm",
    totalSpace: "10 seats available"
 },{
    id:4 ,
    subject:"cavity protection",
    visitingHour:"7am - 8am",
    totalSpace: "10 seats available"
 },{
    id:5 ,
    subject:"Teeth orthodontics",
    visitingHour:"3pm - 4pm",
    totalSpace: "10 seats available"
 },{
    id:6 ,
    subject:"Teeth orthodontics",
    visitingHour:"4pm - 5pm",
    totalSpace: "10 seats available"
 }
   ] 
   const BookAppointment = ({date}) => {
    return (
       <section>
           <h2 className="text-center text-color mb-5">Available appointment on{date.toDateString()} </h2>
           <div className="row">
               {
                   bookingDate.map(x=> <BookingCard item={x} key={x.id} date={date}></BookingCard>  )
               }
           </div>
       </section>
    );
};

export default BookAppointment;