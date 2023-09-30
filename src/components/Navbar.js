import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const MyNavbar = () => {
  const [activeLinkColor, setActiveLinkColor] = useState("#fad027"); // default to cyan

  const handleSetActive = (to) => {
    const colors = {
      home: "#fad027",
      projects: "#febc35",
      testimonials: "#ffa041",
      employment: "#ff9246",
      education: "#ff7c4a",
      certificates: "#ff654d",
      contact: "#ff544f",
    };

    setActiveLinkColor(colors[to]);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="top"
      expand="lg"
      className="my-navbar"
    >
      <Navbar.Brand href="#home">
        {" "}
        <img
          src="/logo_full.png" // Replace with the actual path or URL
          alt="Logo"
          height="20"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={ScrollLink}
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            activeClass="active"
            offset={-50}
            onSetActive={() => handleSetActive("home")}
            style={activeLinkColor === "#fad027" ? { color: "#fad027" } : {}}
          >
            home
          </Nav.Link>
          <Nav.Link
            as={ScrollLink}
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            activeClass="active"
            offset={-50}
            onSetActive={() => handleSetActive("projects")}
            style={activeLinkColor === "#febc35" ? { color: "#febc35" } : {}}
          >
            projects
          </Nav.Link>
          <Nav.Link
            as={ScrollLink}
            to="testimonials"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            activeClass="active"
            offset={-50}
            onSetActive={() => handleSetActive("testimonials")}
            style={activeLinkColor === "#ffa041" ? { color: "#ffa041" } : {}}
          >
            testimonials
          </Nav.Link>
          <Nav.Link
            as={ScrollLink}
            to="employment"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            activeClass="active"
            offset={-50}
            onSetActive={() => handleSetActive("employment")}
            style={activeLinkColor === "#ff9246" ? { color: "#ff9246" } : {}}
          >
            employment
          </Nav.Link>
          <Nav.Link
            as={ScrollLink}
            to="education"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            activeClass="active"
            offset={-50}
            onSetActive={() => handleSetActive("education")}
            style={activeLinkColor === "#ff7c4a" ? { color: "#ff7c4a" } : {}}
          >
            education
          </Nav.Link>
          <Nav.Link
            as={ScrollLink}
            to="certificates"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            activeClass="active"
            offset={-50}
            onSetActive={() => handleSetActive("certificates")}
            style={activeLinkColor === "#ff654d" ? { color: "#ff654d" } : {}}
          >
            certificates
          </Nav.Link>
          <Nav.Link
            as={ScrollLink}
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            activeClass="active"
            offset={-50}
            onSetActive={() => handleSetActive("contact")}
            style={activeLinkColor === "#ff544f" ? { color: "#ff544f" } : {}}
          >
            contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
