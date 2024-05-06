import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header-container">
        <Navbar expand="md" collapseOnSelect>
          <div>
            <LinkContainer to="/">
              <Nav.Link>
                <h3 className="site-title">Dalen's Digital Services</h3>
              </Nav.Link>
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
              <Nav className="ms-auto">
                <LinkContainer to="/About">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
