import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Employment.css";

const Employment = () => {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    const fetchEmployment = async () => {
      try {
        const response = await axios.get(
          "https://minh-personal-website-backend-3e5c1e321cd8.herokuapp.com/employment"
        );
        setHistories(response.data);
      } catch (error) {
        console.error("Error fetching employment histories", error);
      }
    };

    fetchEmployment();
  }, []);

  return (
    <section id="employment" className="employment">
      <h2>Employment History</h2>
      {histories.map((history) => (
        <div key={history.id} className="history-card">
          <h3>
            {history.jobTitle} at {history.company}
          </h3>
          <p>{history.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Employment;
