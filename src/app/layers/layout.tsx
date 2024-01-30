'use client'

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '../components/Sidebar.module.css'; // Importar estilos como módulo CSS

export default function Layout() {
    return (
      <div>
        <motion.div className={styles.sidebarSubmenu}>
            <div className='grow'>
                <p>Capas</p>
            </div>
        </motion.div>
    </div>
    );
}