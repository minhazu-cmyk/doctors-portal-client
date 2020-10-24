import React from 'react';
import background from '../../../../images/background.png'

const sectionStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '50vw',
    height: '70vh',
    opacity: '0.2',
    
    backgroundImage: ` url(${background})`
  };
const Connection = () => {
    return (
        <section style={{backgroundColor:"#3E4558",width:'50%',
        height:'70%',marginLeft:"280px"} }>
            <div style={sectionStyle}>
              <div>
                <p style={{color:"red"}}> CONTACT US</p>
                <h5 style={{color:"white"}}>ALWAYS CONNECT WITH US </h5>
               </div>
               <div >
                 <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-primary"> Submit </button>
                       </div>
                   </form>
                 </div>
            </div>
        </section>
    );
};

export default Connection;
