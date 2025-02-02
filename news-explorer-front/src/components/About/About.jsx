import React from "react";
import "./about.css";
import myPicture from "../../images/IMG_20211123_193252.jpg";

function About() {
  return (
    <section className="about">
      <img
        src={myPicture}
        alt="Ese mero soy yo EGEO92"
        className="about__img"
      />
      <div className="about__wraper">
        <h2 className="about__tittle">Necesito escribir</h2>
        <p className="about__text">Algo para ver</p>
      </div>
    </section>
  );
}

export default About;
