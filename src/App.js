import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Testimonials from "./views/Testimonials";
import Contact from "./views/Contact";
import AboutMe from "./views/AboutMe";
import TestimonialVerification from "./views/TestimonialVerification";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts.css";
import "font-awesome/css/font-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/testimonial/verify/:token"
            element={
              <>
                <Home />
                <TestimonialVerification />
              </>
            }
          />
          <Route
            path="/*"
            element={
              <>
                <Home />
                <AboutMe />
                <Projects />
                <Testimonials />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
