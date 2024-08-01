// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to MediConnect Medical Institute"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} className="biography-image"/>
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
