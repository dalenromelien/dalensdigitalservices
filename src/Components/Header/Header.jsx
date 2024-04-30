import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark" expand="md" collapseOnSelect>
          <div>
            <LinkContainer to="/">
              <h3 className="site-title">Dalen's Digital Services</h3>
              {/* <Navbar.Brand>
                <img
                  src={insertLogo}
                  className=" w-[11rem]  object-cover"
                  alt="Dalen's Digital Services"
                />
              </Navbar.Brand> */}
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto"></Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
