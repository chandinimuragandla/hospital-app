// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { to: '/dashboard', label: 'Dashboard', icon: '🏠' },
    { to: '/health-benefits', label: 'Health Benefits', icon: '💊' },
    { to: '/appointments', label: 'Appointments', icon: '📅' },
    { to: '/providers', label: 'Providers', icon: '🏥' },
    { to: '/care-reminders', label: 'Care Reminders', icon: '⏰' },
    { to: '/notifications', label: 'Notifications', icon: '🔔' },
    { to: '/', label: 'Logout', icon: '🚪' }
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>OnePath</div>
      <nav>
        <ul className={styles.navList}>
          {navItems.map(({ to, label, icon }) => (
            <li key={to}>
              <Link
                to={to}
                className={`${styles.navLink} ${
                  location.pathname === to ? styles.active : ''
                }`}
              >
                <span className={styles.icon}>{icon}</span>
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;