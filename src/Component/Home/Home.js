import React from 'react';
import AppointmentSection from './AppointmentSection/AppointmentSection';
import DentalServices from './DentalServices/DentalServices';

import Header from './Header';
import PatientReview from './PatientReview/PatientReview';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <DentalServices></DentalServices>
            <AppointmentSection></AppointmentSection>
            <PatientReview></PatientReview>
        </div>
    );
};

export default Home;