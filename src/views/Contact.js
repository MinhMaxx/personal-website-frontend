import React, { useState } from "react";
import axios from "axios";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import "./Contact.css";

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to control loading spinner
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Activate loading state

    try {
      // Sending form data to backend
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/contact/submit`,
        formData
      );

      // Display success alert
      Swal.fire({
        title: "Message Sent!",
        text: "Your message has been sent successfully.",
        icon: "success",
        background: "#333",
        customClass: {
          title: "text-light",
        },
        showConfirmButton: false,
        timer: 3000,
      });

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        title: "Failed!",
        text:
          error.response.data ||
          "An error occured when sending the contact form!",
        icon: "error",
        background: "#333",
        customClass: {
          title: "text-light",
        },
        showConfirmButton: false,
        timer: 4000,
      });
    } finally {
      setIsLoading(false); // Deactivate loading state
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact">
      <Container fluid>
        <h1>Contact Me</h1>
        <p>
          Reach out to me through the contact form, connect on social media, or
          download my resume for a comprehensive view of my expertise.
        </p>
        <Row>
          {/* Contact form */}
          <Col lg={8}>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                maxLength="600"
              ></textarea>
              <button
                type="submit"
                disabled={isLoading}
                className={isLoading ? "btn btn-secondary" : "btn btn-primary"}
              >
                {isLoading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : null}
                Send Message
              </button>
            </form>
          </Col>
          {/* Profile section */}
          <Col lg={4}>
            <div className="profile-section">
              <img
                src="https://i.imgur.com/9QLUXTEm.jpg"
                alt="Your Profile"
                className="profile-image"
              />
              {/* Social media icons */}
              <div className="social-media-icons contact-social-media-icons">
                <a
                  href="https://www.linkedin.com/in/bminhnguyen-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/MinhMaxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.instagram.com/minh.nguyen__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>{" "}
              </div>
              {/* Download Resume button */}
              <a
                href={`/assets/Binh Minh Nguyen - Software Developer (Feb 2025).pdf`}
                download
                className="btn btn-download-resume"
              >
                Download My Résumé
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
