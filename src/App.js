import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import EmploymentHistory from "./components/EmploymentHistory";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Testimonials />
      <EmploymentHistory />
      <Education />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
