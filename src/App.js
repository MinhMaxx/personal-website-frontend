import React from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Testimonials from "./views/Testimonials";
import Employment from "./views/Employment";
import Education from "./views/Education";
import Certificates from "./views/Certificates";
import Contact from "./views/Contact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Testimonials />
      <Employment />
      <Education />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
