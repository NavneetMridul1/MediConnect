/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Hero = ({ title, imageUrl }) => {
    return (
        <>
            <div className="hero container">

                <div className="banner">
                    <div className="title">{title}</div>
                    <p>
                    At MediConnect, we combine cutting-edge technology 
                    with compassionate care to provide a comprehensive 
                    range of healthcare services. Our state-of-the-art 
                    facility is staffed by a team of skilled professionals 
                    dedicated to delivering personalized treatment plans 
                    tailored to each patient's unique needs. We prioritize 
                    your well-being and strive to ensure a seamless and 
                    supportive journey towards optimal health. Trust 
                    MediConnect Medical Institute to be with you every 
                    step of the way on your path to wellness.
                    </p>
                </div>

                <div className="banner">
                    <img src={imageUrl} alt="hero" className="animated-image" />
                    <span>
                        <img src="/Vector.png" alt="vector" />
                    </span>
                </div>
                
            </div>
        </>
    );
};

export default Hero;
