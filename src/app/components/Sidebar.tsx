'use client'

import { useState } from 'react';
import styles from './Sidebar.module.css'; // Importar estilos como módulo CSS

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        Toggle
      </button>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
