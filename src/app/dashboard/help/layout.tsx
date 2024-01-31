'use client'

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '@/app/components/Sidebar.module.css';

export default function Layout() {
    return (
      <div>
        <motion.div className={styles.sidebarSubmenu}>
            <div className='grow'>
                <p>Ayuda</p>
            </div>
        </motion.div>
    </div>
    );
}