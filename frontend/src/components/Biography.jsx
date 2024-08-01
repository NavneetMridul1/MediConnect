// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">

        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>

        <div className="banner">
          <p className="Biography">Biography</p>
          <h3>Who We Are</h3>
          <p>
            At MediConnect Medical Institute, we are a premier healthcare 
            provider dedicated to offering exceptional medical services 
            with a focus on personalized patient care. Our team consists 
            of highly skilled and experienced professionals who are committed 
            to maintaining the highest standards of medical excellence.
          </p>
          <p>Since our inception, MediConnect Medical Institute has been a 
            beacon of hope and healing for countless patients. Our reputation 
            is built on a legacy of compassionate care, clinical excellence, 
            and a relentless pursuit of better health outcomes. We are proud of 
            the trust our patients place in us and are committed to continuing to
            earn that trust every day.</p>
          <p>Know more in About Us section</p>

        </div>
        
      </div>
    </>
  );
};

export default Biography;
