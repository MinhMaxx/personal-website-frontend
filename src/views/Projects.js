import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Button } from "react-bootstrap";
import {
  FaNodeJs,
  FaDocker,
  FaDatabase,
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaAndroid,
  FaServer,
} from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/project`
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching the projects", error);
      }
    };

    fetchProjects();
  }, []);

  const getIcon = (technology) => {
    switch (technology) {
      case "Node.js":
        return <FaNodeJs style={{ color: "#8CC84B" }} />;
      case "Docker":
        return <FaDocker style={{ color: "#2496ED" }} />;
      case "MongoDB":
        return <FaDatabase style={{ color: "#4DB33D" }} />;
      case "React":
        return <FaReact style={{ color: "#61DAFB" }} />;
      case "Vue.js":
      case "Vue.js 3":
        return <FaVuejs style={{ color: "#42B883" }} />;
      case "HTML":
        return <FaHtml5 style={{ color: "#E44D26" }} />;
      case "CSS":
        return <FaCss3Alt style={{ color: "#264DE4" }} />;
      case "JavaScript":
        return <FaJsSquare style={{ color: "#F0DB4F" }} />;
      case "Express.js":
        return <FaNodeJs style={{ color: "#8CC84B" }} />;
      case "MySQL":
        return <FaDatabase style={{ color: "#00758F" }} />;
      case "Android":
        return <FaAndroid style={{ color: "#3DDC84" }} />;
      case "Java":
        return <FaJava style={{ color: "#007396" }} />;
      case "TypeScript":
        return <span style={{ color: "#007ACC" }}>TS</span>;
      case "Heroku":
        return <FaServer style={{ color: "#6567A5" }} />;
      default:
        return null;
    }
  };

  return (
    <div id="projects-container">
      <section id="projects" className="projects">
        <h1>My Projects</h1>
        <p>
          Here are some projects I've worked on. They give you a look into my
          skills and interests in software development
        </p>
        <Row>
          {projects.map((project) => (
            <Col
              sm={12}
              md={12}
              lg={6}
              xl={4}
              key={project._id}
              className="mb-4"
            >
              <Card className="project-card">
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {new Date(project.startDate).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {project.endDate
                      ? new Date(project.endDate).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })
                      : "Ongoing"}
                  </Card.Subtitle>
                  <div className="technologies">
                    {project.technologiesUsed.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {getIcon(tech)} {tech}
                      </span>
                    ))}
                  </div>
                  <Card.Text>{project.description}</Card.Text>
                  {project.link && (
                    <Button
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Projects;
