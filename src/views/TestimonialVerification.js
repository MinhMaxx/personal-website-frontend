import React, { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const TestimonialVerification = () => {
  const { token } = useParams();

  useEffect(() => {
    const verifyTestimonial = () => {
      // Show loading spinner with dark theme
      Swal.fire({
        title: "Verifying your testimonial...",
        background: "#333",
        customClass: {
          title: "text-light",
        },
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
      });

      try {
        axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/testimonial/verify/${token}`
        );

        // Show success alert with dark theme
        Swal.fire({
          title: "Success!",
          text: "Testimonial successfully verified.",
          icon: "success",
          background: "#333",
          customClass: {
            title: "text-light",
          },
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/#home";
          }
        });
      } catch (error) {
        // Show error alert with dark theme
        Swal.fire({
          title: "Error!",
          text: error.response.data || "An error occurred",
          icon: "error",
          background: "#333",
          customClass: {
            title: "text-light",
          },
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/#home";
          }
        });
      }
    };

    verifyTestimonial();
  }, [token]);

  return <div></div>;
};

export default TestimonialVerification;
