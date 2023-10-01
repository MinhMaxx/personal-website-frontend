// Importing necessary libraries, styles and image assets
import React, { useState, useEffect } from "react";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import image1 from "../assets/images/home_image_1.jpg";
import image2 from "../assets/images/home_image_2.JPG";
import image3 from "../assets/images/home_image_3.JPG";
import image4 from "../assets/images/home_image_4.JPG";
import image5 from "../assets/images/home_image_5.JPG";

// Array containing the image paths for the slideshow
const slides = [image1, image2, image3, image4, image5];

const Home = () => {
  // State to keep track of the current slide being displayed
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect hook to change slides at regular intervals
  useEffect(() => {
    // Calculating the index of the next slide to be displayed
    const nextSlide = (currentSlide + 1) % slides.length;

    // Setting a timeout to change the slide every 10 seconds
    const id = setTimeout(() => setCurrentSlide(nextSlide), 10000);

    // Cleaning up the timeout when the component is unmounted or before the next render
    return () => clearTimeout(id);
  }, [currentSlide]);

  return (
    <section id="home" className="home">
      <div className="slideshow-container">
        {/* Mapping over the slides array to create a slide for each image */}
        {slides.map((src, index) => (
          <div
            // Adding an "active" class to the current slide
            className={`mySlides ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            {/* Displaying the image */}
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="home-text">
        <h1>
          {/* Displaying a greeting and name with gradient text effect that match my logo*/}
          Xin Chào, I'm <span className="gradient-text">Minh Nguyen</span>
        </h1>
        {/* Implementing a type animation effect for different descriptions */}
        <TypeAnimation
          cursor={true} // Displaying a cursor animation
          // Defining the sequences of texts and delays for the type animation
          sequence={[
            "a passionate developer.",
            3000,
            "a creative coder.",
            3000,
            "an enthusiastic learner.",
            3000,
            "a problem solver.",
            3000,
          ]}
          wrapper="h1" // Wrapping the animated text in an h1 tag
          repeat={Infinity} // Making the animation loop infinitely
          delay={50} // Setting a delay between each character typing animation
        />
      </div>
    </section>
  );
};

export default Home;
