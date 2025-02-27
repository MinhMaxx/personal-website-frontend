// Import necessary packages and components
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const MyNavbar = () => {
  const location = useLocation(); // Get the current location
  const is404 = location.pathname === "/404"; // Check if the current path is /404

  // State to handle the color of the active link
  const [activeLinkColor, setActiveLinkColor] = useState("#fad027");

  // Function to set the active link's color based on the section
  const handleSetActive = (to) => {
    // Map of sections to their associated colors
    const colors = {
      home: "#fad027",
      aboutme: "#febc35",
      projects: "#ffa041",
      testimonials: "#ff9246",
      contact: "#ff7c4a",
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
      <Navbar.Brand
        href="/"
        onClick={(e) => {
          if (window.location.pathname === "/") {
            e.preventDefault();
            window.scrollTo(0, 0);
          }
        }}
      >
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
          {/* Check if it's the 404 page, if so, render a Link, otherwise render a ScrollLink */}
          {is404 ? (
            <Nav.Link as={Link} to="/">
              home
            </Nav.Link>
          ) : (
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
          )}

          {/* Do the same for the other nav links */}
          {is404 ? (
            <Nav.Link as={Link} to="/">
              about me
            </Nav.Link>
          ) : (
            <Nav.Link
              as={ScrollLink}
              to="aboutme"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClass="active"
              offset={-50}
              onSetActive={() => handleSetActive("aboutme")}
              style={activeLinkColor === "#febc35" ? { color: "#febc35" } : {}}
            >
              about me
            </Nav.Link>
          )}
          {is404 ? (
            <Nav.Link as={Link} to="/">
              projects
            </Nav.Link>
          ) : (
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
              style={activeLinkColor === "#ffa041" ? { color: "#ffa041" } : {}}
            >
              projects
            </Nav.Link>
          )}

          {is404 ? (
            <Nav.Link as={Link} to="/">
              testimonials
            </Nav.Link>
          ) : (
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
              style={activeLinkColor === "#ff9246" ? { color: "#ff9246" } : {}}
            >
              testimonials
            </Nav.Link>
          )}

          {is404 ? (
            <Nav.Link as={Link} to="/">
              contact
            </Nav.Link>
          ) : (
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
              style={activeLinkColor === "#ff7c4a" ? { color: "#ff7c4a" } : {}}
            >
              contact
            </Nav.Link>
          )}
        </Nav>
        {/* Social media icons with links */}
        <div className="social-icons">
          {/* LinkedIn Icon with link */}
          <a
            href="https://www.linkedin.com/in/bminhnguyen-dev/"
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
