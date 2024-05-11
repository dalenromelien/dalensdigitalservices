import React from "react";
import { Container } from "react-bootstrap";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center title-container">
        <h1 className="landing-title">Your Friendly Neighborhood Tech Guy</h1>
        <h3 className="sub-title">services coming soon</h3>
      </Container>
    </>
  );
};

export default Landing;
