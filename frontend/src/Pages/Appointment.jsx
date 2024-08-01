/* eslint-disable no-unused-vars */
import React from "react";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <div className="about-us container1">
        
        <div className="banner1">
          <div className="title">
            Schedule Your Appointment | MediConnect Medical Institute
          </div>
          <p>
            Our user-friendly online appointment system allows you to select 
            your preferred date and time, ensuring minimal wait times and 
            maximum convenience.
          </p>
          <p>
            At MediConnect, your health and well-being are our top priorities. 
            Our dedicated team of healthcare professionals is committed to 
            providing personalized care tailored to your unique needs. Book 
            your appointment today and experience the MediConnect difference.
          </p>
          </div>
        
        <div className="banner1">
        <img src="/signin.png" alt="Schedule Appointment" className="animated-image" />
        </div>

      </div>

      <div className="appointment-form">
        <AppointmentForm />
      </div>

    </>
  );
};

export default Appointment;
