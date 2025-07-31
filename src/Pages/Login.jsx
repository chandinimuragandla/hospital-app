
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../assets/healthcare.jpeg';
import styles from '../styles/Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.imageWrapper}>
        <img src={loginImage} alt="Login Visual" className={styles.backgroundImage} />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.loginBox}>
        <h2 className={styles.loginTitle}>Login</h2>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required className={styles.loginInput} />
          <input type="password" placeholder="Password" required className={styles.loginInput} />
          <button type="submit" className={styles.loginButton}>Login</button>
          <p className={styles.signupText}>
            Don’t have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;