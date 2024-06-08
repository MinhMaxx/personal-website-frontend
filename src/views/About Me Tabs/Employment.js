import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Employment.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Employment = () => {
  // State to hold employment history data
  const [histories, setHistories] = useState([]);

  // Fetch employment history data from an API
  useEffect(() => {
    const fetchEmployment = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/employment`
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
      <VerticalTimeline>
        {/* Map and render each employment history as a timeline element */}
        {histories.map((history) => (
          <VerticalTimelineElement
            key={history._id}
            iconStyle={{
              background: "linear-gradient(90deg, #ff544f, #fad027)",
            }}
            date={`${new Date(history.startDate).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })} -  
                  ${
                    history.endDate
                      ? new Date(history.endDate).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })
                      : "Present"
                  }`}
          >
            {/* Display position and company */}
            <h3 className="vertical-timeline-element-title">
              {history.position} at {history.company}
            </h3>
            {/* Display employment description */}
            <p className="vertical-timeline-element-subtitle">
              {history.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Employment;
