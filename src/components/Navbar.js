import React from "react";
import "./.css files/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Testimonials</li>
        <li>Employment History</li>
        <li>Education</li>
        <li>Certificates</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
