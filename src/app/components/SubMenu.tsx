'use client'

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import {
    BsSearch,
    BsQuestionSquareFill ,
    BsBookmarkFill,
    BsFillArrowLeftSquareFill,
    BsPeopleFill,
    BsTerminalFill,
    BsFillArrowRightSquareFill,
    BsLayersFill,
    BsMapFill
} from 'react-icons/bs';
import { MdSource } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdFeedback } from 'react-icons/md';
import { FaCog } from 'react-icons/fa';

import styles from './Sidebar.module.css'; // Importar estilos como módulo CSS



const SubMenu = () => {
    const [active, setActive] = useState(false);
    const controls = useAnimation();
    const controlText = useAnimation();
    const controlTitleText = useAnimation();

    const showMore = () => {
        controls.start({
            width: '168px',
            transition: { duration: 0.101 },
        });
        controlText.start({
            opacity: 1,
            display: 'block',
            transition: { delay: 0.3 },
        });
        controlTitleText.start({
            opacity: 1,
            transition: { delay: 0.3 },
        });
        setActive(true);
    };

    const showLess = () => {
        controls.start({
            width: '55px',
            transition: { duration: 0.101 },
        });

        controlText.start({
            opacity: 0,
            display: 'none',

        });

        controlTitleText.start({
            opacity: 0,
        });
        setActive(false);
    };

    const toggleSidebar = () => {
        setActive(!active);
        if (!active) {
            showMore();
        } else {
            showLess();
        }
    };

    useEffect(() => {
        showMore();
    }, []);

    
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