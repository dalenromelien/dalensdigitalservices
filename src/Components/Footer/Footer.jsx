import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-light py-4">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="mb-0">Your Company Name</p>
            <p className="mb-0">Address: 123 Street, City, Country</p>
            <p className="mb-0">Phone: 123-456-7890</p>
            <p className="mb-0">Email: info@example.com</p>
          </div>
          <div>
            <p className="mb-0">&copy; {currentYear} Your Company</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
