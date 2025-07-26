// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "11:00 AM - 5:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "11:00 AM - 5:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "11:00 AM - 5:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 7,
      day: "Sunday",
      time: "Closed",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/appointment">Appointment</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href={import.meta.env.VITE_DASHBOARD_LINK} target="_blank" rel="noopener noreferrer" style={{
                     background: 'linear-gradient(135deg, rgb(138, 19, 19), rgb(49, 49, 49))',
                     color: 'white',
                     padding: '10px 20px',
                     borderRadius: '10px',
                     fontWeight: 'bold',
                     textDecoration: 'none',
                     display: 'inline-block',
                     textAlign: 'center'}}>Admin Portal</a></li>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>999-999-9999</span>
            </div>
            <div>
              <MdEmail />
              <span>MediConnect@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Delhi, India</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
