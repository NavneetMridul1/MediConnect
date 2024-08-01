/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";

const AboutUs = () => {
  return (
    <>
    <div className="about-us container1">

      <div className="banner1">
        <div className="title">Learn More About Us | MediConnect Medical Institute</div>
        <p>
        Welcome to MediConnect, your premier healthcare institute dedicated to providing 
        top-notch medical services with a patient-centric approach. At MediConnect, we 
        believe in the power of connection - connecting patients with world-class healthcare 
        providers, advanced medical technologies, and a compassionate support system. 
        </p>
        <p>
        With a focus on innovation and excellence, we have integrated state-of-the-art facilities 
        and the latest medical advancements to offer a wide range of services, including preventive 
        care, diagnostics, treatment, and rehabilitation. Our holistic approach ensures that our 
        patients not only recover but thrive in their health and well-being.
        </p>
      </div>

       <div className="banner1">
        <img src="/about.png" alt="about us" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>

    </div>

    <div className="about-us container1">

       <div className="banner1">
        <img src="/whoweare.png" alt="Who we are" />
        </div>

        <div className="banner1 WhoWeAre">
          <h2 className="WhoWeAre1">Who We Are</h2>
        
        <p className="mission">Our Mission </p>
        <p>
        Our mission is to provide exceptional healthcare services that are accessible, 
        affordable, and effective. We strive to create a healing environment where 
        patients feel valued, respected, and supported throughout their healthcare journey.
        </p>
    
        <p className="mission">Our Vision</p>
        <p>
        We envision a healthier future where every individual has access to quality 
        healthcare and the resources needed to lead a fulfilling life. Through continuous 
        improvement and community engagement, we aim to set new standards in healthcare 
        delivery and patient satisfaction.
          </p>
        </div>
        
    </div>
    </>
  );
};

export default AboutUs;
