import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "../assets/Healthassit-removebg-preview.png"; 
import { FaBell, FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const navItems = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/health-benefits", label: "Health Benefits" },
    { to: "/appointments", label: "Appointments" },
    { to: "/care-reminders", label: "Care Reminders" },
     { to: "/Login", label: "Logout" },
   
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logoWrap}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
        <h1 className={styles.title}>CarePlus</h1>
      </div>

      <nav className={styles.nav}>
        <ul>
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`${styles.navLink} ${
                  location.pathname === to ? styles.active : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}

          <li className={styles.iconButton}>
            <FaBell />
          </li>

          <li className={styles.iconButton} onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;