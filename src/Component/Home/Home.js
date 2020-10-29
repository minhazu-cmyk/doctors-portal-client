import React from 'react';
import AppointmentSection from './AppointmentSection/AppointmentSection';
import DentalServices from './DentalServices/DentalServices';

import Header from './Header';
import Connection from './Home/Connection/Connection';
import Footer from './Home/Footer/Footer';
import OurDoctors from './Home/OurDoctors/OurDoctors';
import OurBlog from './OurBlog/OurBlog';
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
            <OurBlog></OurBlog>
            <OurDoctors></OurDoctors>
            <Connection></Connection>
            <Footer></Footer>

        </div>
    );
};

export default Home;