import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}}  className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
               <h1> your new smile <br/> start here </h1>
               <p style={{color:'#3A4256'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, maiores. Suscipit debitis nulla voluptatem architecto. </p>
               <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;