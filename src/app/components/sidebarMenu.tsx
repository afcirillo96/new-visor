'use client'

import React, { useState } from 'react';
import styles from "./sidebarMenu.module.css"

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? `${styles.sidebar} ${styles.open}` : styles.sidebar}>
      <button className={styles.toggleButton} onClick={toggleMenu}>
        Toggle Menu
      </button>
      <ul className={styles.menuItems}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        {/* Agrega más elementos según sea necesario */}
      </ul>
    </div>
  );
};

export default SidebarMenu;
