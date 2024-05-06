import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-light footer">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="mb-0">
              &copy; {currentYear} Dalen's Digital Services LLC
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
