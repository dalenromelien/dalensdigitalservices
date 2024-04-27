import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
          <div>
            <LinkContainer to="/">
              <Navbar.Brand>
                {/* <img
                  src={insertLogo}
                  className=" w-[11rem]  object-cover"
                  alt="Dalen's Digital Services"
                /> */}
              </Navbar.Brand>
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
