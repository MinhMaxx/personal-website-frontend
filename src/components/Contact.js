import React, { useState } from "react";
import axios from "axios";
import "./.css files/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Adjust this URL to your backend endpoint for handling contact submissions
      await axios.post(
        "https://minh-personal-website-backend-3e5c1e321cd8.herokuapp.com/contact",
        formData
      );
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message", error);
      alert("Failed to send the message.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
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
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
