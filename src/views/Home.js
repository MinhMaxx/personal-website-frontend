// Importing necessary libraries, styles and image assets
import React, { useState, useEffect } from "react";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import image1 from "../assets/images/home_image_1.jpg";
import image2 from "../assets/images/home_image_2.jpeg";
import image3 from "../assets/images/home_image_3.jpeg";
import image4 from "../assets/images/home_image_4.jpeg";
import image5 from "../assets/images/home_image_5.jpeg";
import image6 from "../assets/images/home_image_6.jpg";

// Array containing the image paths for the slideshow
const slides = [image1, image2, image3, image4, image5, image6];

const Home = () => {
  // State to keep track of the current slide being displayed
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect hook to change slides at regular intervals
  useEffect(() => {
    // Calculating the index of the next slide to be displayed
    const nextSlide = (currentSlide + 1) % slides.length;

    // Setting a timeout to change the slide every 10 seconds
    const id = setTimeout(() => setCurrentSlide(nextSlide), 7000);

    // Cleaning up the timeout when the component is unmounted or before the next render
    return () => clearTimeout(id);
  }, [currentSlide]);

  return (
    <section id="home" className="home jumbotron jumbotron-fluid">
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
      <div className="home-text container">
        <div className="wellcome-text">
          <h2>Welcome to my digital space</h2>
        </div>
        <h1 class="display-4">
          {/* Displaying a greeting and name with gradient text effect that match my logo*/}
          Xin Chào, I'm <span className="gradient-text">Minh Nguyen</span>
        </h1>

        {/* Implementing a type animation effect for different descriptions */}
        <TypeAnimation
          cursor={true} // Displaying a cursor animation
          // Defining the sequences of texts and delays for the type animation
          sequence={[
            ">",
            2000,
            ">a_passionate_developer",
            2000,
            ">",
            500,
            ">an_enthusiastic_learner",
            2000,
            ">",
            500,
            ">a_creative_coder",
            2000,
            ">",
            500,
            ">a_problem_solver",
            2000,
            ">",
            500,
            ">an_amateur_photographer",
            2000,
            ">",
            500,
            ">a_casual_gamer",
            2000,
            ">",
            500,
            ">a_food_enjoyer",
            2000,
            ">",
            500,
            ">an_average_sudoku_solver",
            2000,
          ]}
          wrapper="h2" // Wrapping the animated text in an h1 tag
          repeat={Infinity} // Making the animation loop infinitely
          delay={50} // Setting a delay between each character typing animation
        />
      </div>
    </section>
  );
};

export default Home;
