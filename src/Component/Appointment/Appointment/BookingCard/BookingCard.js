import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css';
const BookingCard = (props) => {
    const {subject,visitingHour,totalSpace}= props.item;
  const {date} = props;
 
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
  
    return (
        <div className="col-md-4 mb-5">
           <div class="card p-3" >
  
  <div class="card-body text-center">
    <h5 class="card-title text-color">{subject} </h5>
    <p class="card-text">{visitingHour} </p>
    <small> {totalSpace} </small> <br/>
    <button onClick={openModal} className=" btn-brand text-uppercase"> Book appointment </button>
    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={subject} date={date}  ></AppointmentForm>
  </div>
</div> 
        </div>
    );







};

export default BookingCard;