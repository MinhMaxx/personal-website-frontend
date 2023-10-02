import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Certificates.css";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await axios.get(
          "https://minh-personal-website-backend-3e5c1e321cd8.herokuapp.com/certificate"
        );
        setCertificates(response.data);
      } catch (error) {
        console.error("Error fetching certificates", error);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <section id="certificates" className="certificates">
      <Container>
        <Row>
          {certificates.map((certificate) => (
            <Col md={4} key={certificate._id} className="mb-4">
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                <Card className="certificate-card">
                  <Card.Body>
                    <Card.Title>
                      {certificate.certificateName} - {certificate.organization}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Issued {new Date(certificate.dateReceived).getFullYear()}
                    </Card.Subtitle>
                    <Card.Text>{certificate.description}</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
