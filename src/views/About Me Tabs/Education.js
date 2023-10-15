import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Education.css";

const Education = () => {
  const [degrees, setDegrees] = useState([]); // State to store education data

  useEffect(() => {
    // Fetch education data from an API when the component mounts
    const fetchEducation = async () => {
      try {
        // Send a GET request to the specified API endpoint
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/degree`
        );
        setDegrees(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching degrees", error);
      }
    };

    fetchEducation(); // Call the fetchEducation function
  }, []);

  return (
    <section id="education" className="education">
      <Container>
        <Row>
          {/* Map over the degrees array and create Card components for each */}
          {degrees.map((degree) => (
            <Col md={12} lg={6} xl={6} key={degree._id} className="mb-4">
              <Card className="degree-card">
                <Card.Body>
                  <Card.Title>
                    {degree.degree} at {degree.institution}
                  </Card.Title>
                  <Card.Text>
                    <small>
                      <strong>Field of Study:</strong> {degree.fieldOfStudy}
                    </small>
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">
                    {degree.endDate
                      ? new Date(degree.endDate).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })
                      : "Ongoing"}
                  </Card.Subtitle>
                  <Card.Text>{degree.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
