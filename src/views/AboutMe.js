import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import "./AboutMe.css";
import Employment from "./About Me Tabs/Employment";
import Education from "./About Me Tabs/Education";
import Certification from "./About Me Tabs/Certificates";

const AboutMe = () => {
  return (
    <section id="aboutme" className="aboutme">
      <h1>About Me</h1>

      <p>
        I'm a recent graduate aspiring to thrive in software development. My
        passion is to collaborate with dynamic teams, learn, grow, and
        contribute to impactful software solutions.
      </p>
      {/* Create a tab container with the default active tab set to "employment" */}
      <Tab.Container defaultActiveKey="employment">
        <Row>
          {/* Create a column for the tab navigation */}
          <Col sm={3}>
            {/* Define a vertical tab navigation with pills style */}
            <Nav variant="pills" className="flex-column">
              {/* Create tabs for "Employment," "Education," and "Certificates" */}
              <Nav.Item>
                {/* Set the event key for the "Employment" tab */}
                <Nav.Link eventKey="employment">Employment</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                {/* Set the event key for the "Education" tab */}
                <Nav.Link eventKey="education">Education</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                {/* Set the event key for the "Certificates" tab */}
                <Nav.Link eventKey="certificates">Certificates</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          {/* Create a column to display tab content */}
          <Col sm={9}>
            <Tab.Content>
              {/* Define the content for the "Employment" tab */}
              <Tab.Pane eventKey="employment">
                {/* Render the "Employment" component */}
                <Employment />
              </Tab.Pane>
              {/* Define the content for the "Education" tab */}
              <Tab.Pane eventKey="education">
                {/* Render the "Education" component */}
                <Education />
              </Tab.Pane>
              {/* Define the content for the "Certificates" tab */}
              <Tab.Pane eventKey="certificates">
                {/* Render the "Certificates" component */}
                <Certification />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
};

export default AboutMe;
