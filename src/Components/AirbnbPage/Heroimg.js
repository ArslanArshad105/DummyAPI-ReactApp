import React from "react";
import Heroimage from "../../assests/Media/Heroimage.png";
import { Container } from "react-bootstrap";
const Heroimg = () => {
  return (
    <Container className="hero--container">
      <img src={Heroimage} alt="HeroImage" className="hero-photo" />
      <h1 className="hero--heading">Online Experience</h1>
      <p className="hero-heading">
        Join unique interactive led by one-of-a-kind hosts-all without leaving
        home.
      </p>
    </Container>
  );
};

export default Heroimg;
