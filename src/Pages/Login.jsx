import React, { useState, useEffect } from "react";
import "../styles/login.css";
import bgImage from "../assets/healthcare.jpeg";
import {
  FaGoogle,
  FaFacebookF,
  FaChrome,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaUserCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Anjali Sharma",
    text: "The doctors were kind and attentive throughout my recovery.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    text: "Quick response and excellent facilities. Felt safe!",
    rating: 4,
  },
  {
    name: "Priya Das",
    text: "Clean hospital, great nurses, and good food!",
    rating: 4,
  },
];

const Login = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { name, text, rating } = testimonials[currentIndex];

  return (
    <div className="login-background" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="login-container">
        {/* LEFT SIDE */}
        <div className="login-left">
          <h2>Welcome Back!</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <div className="actions">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
          </form>
          <p className="signup-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
          <div className="social-icons">
            <FaGoogle className="icon" />
            <FaFacebookF className="icon" />
            <FaChrome className="icon" />
          </div>
        </div>

        {/* RIGHT SIDE - TESTIMONIALS */}
        <div className="login-right">
          <div className="testimonial-carousel">
            <div className="arrow left" onClick={prevTestimonial}>
              <FaChevronLeft />
            </div>
            <div className="testimonial-content">
              <FaUserCircle className="avatar-icon" />
              <h4>{name}</h4>
              <p>"{text}"</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color={i < rating ? "#ffc107" : "#e4e5e9"} />
                ))}
              </div>
            </div>
            <div className="arrow right" onClick={nextTestimonial}>
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
