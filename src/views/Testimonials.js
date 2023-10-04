import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Container, Form, Spinner } from "react-bootstrap";
import Slider from "react-slick";
import Swal from "sweetalert2";
import "./Testimonials.css";

const Testimonials = () => {
  // State variable for storing testimonial data
  const [testimonials, setTestimonials] = useState([]);

  // State variable for storing form input data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    link: "",
    testimonial: "",
  });

  // Slider settings configuration
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // State variable to control loading state
  const [isLoading, setIsLoading] = useState(false);

  // Fetch testimonials on component mount
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://minh-personal-website-backend-3e5c1e321cd8.herokuapp.com/testimonial"
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    try {
      await axios.post(
        "https://minh-personal-website-backend-3e5c1e321cd8.herokuapp.com/testimonial/submit",
        formData
      );

      // Show success alert
      Swal.fire({
        title: "Success!",
        text: "Testimonial submitted! Please check your email for verification.",
        icon: "success",
        background: "#333",
        customClass: {
          title: "text-light",
        },
        showConfirmButton: false,
        timer: 3000,
      });

      // Reset form data
      setFormData({
        name: "",
        email: "",
        company: "",
        position: "",
        link: "",
        testimonial: "",
      });
    } catch (error) {
      // Handle submission error
      console.error("Error submitting testimonial", error);
      // Show failure alert
      Swal.fire({
        title: "Failed!",
        text: `${error.response.data}`,
        icon: "error",
        background: "#333",
        customClass: {
          title: "text-light",
        },
      });
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="testimonials" className="testimonials">
      <Container fluid>
        <h1>Testimonials</h1>
        <Row className="align-items-center">
          <Col lg={8}>
            {/* Testimonial Slider */}
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                // Individual Testimonial Card
                <Col key={testimonial._id} className="mb-4">
                  <Card className="testimonial-card">
                    <Card.Body>
                      <Card.Text>"{testimonial.content}"</Card.Text>
                      {/* Conditional Rendering of Testimonial Link */}
                      {testimonial.link ? (
                        <a
                          href={testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", color: "#fad027" }}
                        >
                          <Card.Title>
                            {testimonial.name}{" "}
                            <i
                              className="fa  fa-user-circle-o"
                              aria-hidden="true"
                            ></i>
                          </Card.Title>
                        </a>
                      ) : (
                        <Card.Title>{testimonial.name}</Card.Title>
                      )}
                      <Card.Subtitle className="mb-2">
                        {testimonial.position} at {testimonial.company}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Slider>
          </Col>
          <Col lg={4}>
            {/* Testimonial Submission Form */}
            <h5>Would you like to give a testimonial to support me?</h5>
            <Form onSubmit={handleSubmit} className="testimonial-form">
              {/* Form fields */}
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
                name="testimonial"
                value={formData.testimonial}
                onChange={handleChange}
                placeholder="Your testimonial"
                required
              ></textarea>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                required
              />
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Position"
                required
              />
              <input
                type="text"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="LinkedIn/social media link (optional)"
              />
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={isLoading ? "btn btn-secondary" : "btn btn-primary"}
              >
                {/* Loading Spinner */}
                {isLoading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                  </>
                ) : null}
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
