import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const MyNavbar = () => {
  const [activeLinkColor, setActiveLinkColor] = useState("#8be9fd"); // default to cyan

  const handleSetActive = (to) => {
    const colors = {
      home: "#8be9fd", // cyan
      projects: "#50fa7b", // green
      testimonials: "#ffb86c", // orange
      employment: "#ff79c6", // pink
      education: "#bd93f9", // purple
      certificates: "#ff5555", // red
      contact: "#f1fa8c", // yellow
    };

    setActiveLinkColor(colors[to]);
  };

  return (
    <Navbar bg="dark" variant="dark" fixed="top" className="my-navbar">
      <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
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
          style={activeLinkColor === "#8be9fd" ? { color: "#8be9fd" } : {}}
        >
          Home
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
          style={activeLinkColor === "#50fa7b" ? { color: "#50fa7b" } : {}}
        >
          Projects
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
          style={activeLinkColor === "#ffb86c" ? { color: "#ffb86c" } : {}}
        >
          Testimonials
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
          style={activeLinkColor === "#ff79c6" ? { color: "#ff79c6" } : {}}
        >
          Employment
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
          style={activeLinkColor === "#bd93f9" ? { color: "#bd93f9" } : {}}
        >
          Education
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
          style={activeLinkColor === "#ff5555" ? { color: "#ff5555" } : {}}
        >
          Certificates
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
          style={activeLinkColor === "#f1fa8c" ? { color: "#f1fa8c" } : {}}
        >
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
