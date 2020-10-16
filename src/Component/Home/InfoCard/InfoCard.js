import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Info.css';

const InfoCard = (props) => {
    const {title,description,icon, background} = props.item
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex justify-content-center info-container info-${background}`}>
            <div className="mr-3">
                <FontAwesomeIcon className="font-icon" icon={icon}></FontAwesomeIcon>
            </div>
            <div>
            <h6> {title} </h6>
            <small>{description} </small>
            </div>
        </div>
            </div>
           
    );
};

export default InfoCard;