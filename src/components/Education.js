import React, { useEffect, useState } from "react";
import axios from "axios";
import "./.css files/Education.css";

const Education = () => {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get(
          "https://minh-personal-website-backend-3e5c1e321cd8.herokuapp.com/degree"
        );
        setDegrees(response.data);
      } catch (error) {
        console.error("Error fetching degrees", error);
      }
    };

    fetchEducation();
  }, []);

  return (
    <section id="education" className="education">
      <h2>Education</h2>
      {degrees.map((degree) => (
        <div key={degree.id} className="degree-card">
          <h3>
            {degree.title} - {degree.institution}
          </h3>
          <p>{degree.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
