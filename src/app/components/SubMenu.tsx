'use client'

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './Sidebar.module.css'; // Importar estilos como módulo CSS


const SubMenu = () => {
   
    return (
        <div>
            <motion.div className={styles.sidebarSubmenu}>
                <div className='grow'>
                    <p>Contenido del segundo sidebar</p>
                </div>
            </motion.div>
            
        </div>
    );
};

export default SubMenu;