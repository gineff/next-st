import React from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  toggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <div className={styles.navbar}>
      <button onClick={toggleSidebar} className={styles.toggleButton}>
        ☰
      </button>
      <h1>Next.js App</h1>
    </div>
  );
};

