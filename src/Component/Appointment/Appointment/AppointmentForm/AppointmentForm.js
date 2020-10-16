import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')

const AppointmentForm = ({modalIsOpen, closeModal,appointmentOn,date}) => {
  const { register, handleSubmit,  errors } = useForm();
  const onSubmit = data => {
    data.service = appointmentOn;
    data.date= date;
    data.created = new Date();

    fetch('http://localhost:5000/addAppointment',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(success=>{
      if(success){
        closeModal();
        alert('appointment successfull')
      }

    })
    
  };
    return (
        <div>
         
        <Modal
          isOpen={modalIsOpen}
          
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 className="text-brand">{appointmentOn} </h2>
          <small> on{date.toDateString()} </small>
          <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <input name="name" defaultValue="test" ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input name="email" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
        </Modal>   
        </div>
    );
};

export default AppointmentForm;