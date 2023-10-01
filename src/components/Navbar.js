// Import necessary packages and components
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const MyNavbar = () => {
  // State to handle the color of the active link
  const [activeLinkColor, setActiveLinkColor] = useState("#fad027"); // Default color set to cyan

  // Function to set the active link's color based on the section
  const handleSetActive = (to) => {
    // Map of sections to their associated colors
    const colors = {
      home: "#fad027",
      projects: "#febc35",
      testimonials: "#ffa041",
      employment: "#ff9246",
      education: "#ff7c4a",
      certificates: "#ff654d",
      contact: "#ff544f",
    };

    // Update the active link color based on the section
    setActiveLinkColor(colors[to]);
  };

  return (
    // Define the Navbar
    <Navbar
      bg="dark"
      variant="dark"
      fixed="top"
      expand="lg"
      className="my-navbar"
    >
      <Navbar.Brand href="#home">
        <img
          src="/logo_full.png"
          alt="Logo"
          height="20"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {/* Define links for home, including smooth scrolling and active color change */}
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
          {/* Define links for projects, including smooth scrolling and active color change */}
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
          {/* Define links for testimonials, including smooth scrolling and active color change */}
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
          {/* Define links for employment, including smooth scrolling and active color change */}

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
          {/* Define links for education, including smooth scrolling and active color change */}
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
          {/* Define links for certificates, including smooth scrolling and active color change */}
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
          {/* Define links for contact, including smooth scrolling and active color change */}
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
        {/* Social media icons with links */}
        <div className="social-icons">
          {/* LinkedIn Icon with link */}
          <a
            href="https://www.linkedin.com/in/binh-minh-nguyen1998/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          {/* GitHub Icon with link */}
          <a
            href="https://github.com/MinhMaxx"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          {/* Instagram Icon with link */}
          <a
            href="https://www.instagram.com/minh.nguyen__"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
