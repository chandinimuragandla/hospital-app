import React from 'react';
import Sidebar from '../components/Sidebar';
import styles from './MainLayout.module.css'; // You can style layout if needed

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <Sidebar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default MainLayout;