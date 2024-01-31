'use client'

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '@/app/components/Sidebar.module.css';

export default function Layout() {
    return (
      <div>
        <motion.div className={`${styles.subMenu} ${styles.subMenuConfig}`}>
            <div className='grow'>
                <p>Configuracion</p>
            </div>
        </motion.div>
    </div>
    );
}