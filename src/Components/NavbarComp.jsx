import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import pokeball from "../assets/masterball.png";
import logo from "../assets/logo.png";

function NavbarComp() {
  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Nav.Link>
              <Link to="/">
                <img
                  alt="masterball png"
                  src={pokeball}
                  width={25}
                  height={25}
                  className="mx-2"
                />
                <img alt="poke blog" src={logo} width={100} height={35} />
              </Link>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to="/" className="text-decoration-none text-black">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/featured"
                  className="text-decoration-none text-black"
                >
                  Featured
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/latest" className="text-decoration-none text-black">
                  Latest
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact" className="text-decoration-none text-black">
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link>
                <i className="bi bi-moon-stars"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
