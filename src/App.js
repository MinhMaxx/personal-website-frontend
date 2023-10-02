import React from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Testimonials from "./views/Testimonials";
import Employment from "./views/Employment";
import Education from "./views/Education";
import Certificates from "./views/Certificates";
import Contact from "./views/Contact";
import AboutMe from "./views/AboutMe";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
