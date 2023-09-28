import React, { useEffect, useState } from "react";
import axios from "axios";
import "./.css files/Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    testimony: "",
  });

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://minh-personal-website-backend-3e5c1e321cd8.herokuapp.com/testimonial"
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials", error);
      }
    };

    fetchTestimonials();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://minh-personal-website-backend-3e5c1e321cd8.herokuapp.com/testimonial/submit",
        formData
      );
      alert("Testimony submitted! Please check your email for verification.");
      setFormData({
        name: "",
        email: "",
        testimony: "",
      });
    } catch (error) {
      console.error("Error submitting testimony", error);
      alert("Failed to submit the testimony.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimony-cards">
        {testimonials.map((testimony) => (
          <div key={testimony.id} className="testimony-card">
            <p>{testimony.content}</p>
            <h4>{testimony.name}</h4>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="testimony-form">
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
          name="testimony"
          value={formData.testimony}
          onChange={handleChange}
          placeholder="Your Testimony"
          required
        ></textarea>
        <button type="submit">Submit Testimony</button>
      </form>
    </section>
  );
};

export default Testimonials;
