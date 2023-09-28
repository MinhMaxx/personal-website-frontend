import React, { useEffect, useState } from "react";
import axios from "axios";
import "./.css files/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://minh-personal-website-backend-3e5c1e321cd8.herokuapp.com/project"
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching the projects", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
