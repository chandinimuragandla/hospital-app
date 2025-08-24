import React, { useState } from "react";
import "../styles/login.css";
import doctorImage from "../assets/doctor 3d.avif";
import medecineImage from "../assets/medecine.png";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";  

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    navigate("/dashboard");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <Header showAuthButtons={false} /> 
      
      <div className="login-main-wrapper">
        
        <div className="login-left">
          <div className="logo-heading">
            <i className="fas fa-heartbeat animated-icon"></i>
            <h1>Hospital Assist</h1>
          </div>
          <h2 className="welcome-text">
            <span className="highlight">Welcome</span>, please enter your details.
          </h2>
          <img src={medecineImage} alt="Medicine" className="login-left-img" />
        </div>

       
        <div className="login-right-content">
          <img src={doctorImage} alt="Doctor 3D" className="doctor-img" />
          <div className="login-form-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className={error ? "shake" : ""}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
              {error && (
                <p className="error-message">😢 Please fill in all required fields</p>
              )}
            </form>

            <div className="social-login">
              <p>Or login with</p>
              <div className="icons">
                <i className="fab fa-google"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>

            <p className="signup-link">
              Don’t have an account? <span onClick={handleSignup}>Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
