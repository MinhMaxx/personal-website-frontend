import React, { useEffect, useState } from "react";
import axios from "axios";
import "./.css files/Certificates.css";

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
      <h2>Certificates</h2>
      {certificates.map((certificate) => (
        <div key={certificate.id} className="certificate-card">
          <h3>{certificate.title}</h3>
          <p>{certificate.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Certificates;
