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

  const validateURL = (str) => {
    if (!str) return true; // if string is empty, return true

    const pattern =
      /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

    return !!pattern.test(str);
  };

  // Slider settings configuration
  //This infinite slide setting will appear to have a duplicate slide due to Slider will create a clone for the infinity scroll if number of current slide is less than current slidesToShow.
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
          `${process.env.REACT_APP_API_BASE_URL}/testimonial`
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

    // Check if the link is a valid URL or empty
    if (!validateURL(formData.link)) {
      Swal.fire({
        title: "Invalid URL!",
        text: "Please enter a valid URL or leave the field empty.",
        icon: "error",
        background: "#333",
        customClass: {
          title: "text-light",
        },
      });
      setIsLoading(false); // Reset loading state
    } else {
      try {
        await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/testimonial/submit`,
          formData
        );

        // Show success alert
        Swal.fire({
          title: "Testimonial submitted!",
          text: "Please check your email for verification.",
          icon: "success",
          background: "#333",
          customClass: {
            title: "text-light",
          },
          allowOutsideClick: false,
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
        // Show failure alert
        Swal.fire({
          title: "An Error Occurred!",
          text: error.response.data || "Error submitting testimonial",
          icon: "error",
          background: "#333",
          customClass: {
            title: "text-light",
          },
          showConfirmButton: false,
          timer: 4000,
        });
      } finally {
        // Reset loading state
        setIsLoading(false);
      }
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
        <p>
          These testimonials offer a glimpse into my professional conduct, skill
          set, and dedication to every project I undertake.
        </p>
        <Row className="align-items-center">
          <Col lg={9}>
            {/* Testimonial Slider */}
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                // Individual Testimonial Card
                <Col key={testimonial._id} className="mb-4">
                  <Card className="testimonial-card">
                    <Card.Body>
                      <Card.Text>
                        <i class="fa fa-quote-left" aria-hidden="true"></i>{" "}
                        {testimonial.content}{" "}
                        <i class="fa fa-quote-right" aria-hidden="true"></i>
                      </Card.Text>
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
                              className="fa fa-user-circle-o"
                              aria-hidden="true"
                            ></i>
                          </Card.Title>
                        </a>
                      ) : (
                        <a
                          href={`mailto:${testimonial.email}`}
                          style={{ textDecoration: "none", color: "#fad027" }}
                        >
                          <Card.Title>
                            {testimonial.name}{" "}
                            <i
                              className="fa  fa-envelope-o"
                              aria-hidden="true"
                            ></i>
                          </Card.Title>
                        </a>
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
          <Col lg={3}>
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
                maxLength="300"
                rows="2"
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
                placeholder="LinkedIn/Social-media URL (optional)"
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
