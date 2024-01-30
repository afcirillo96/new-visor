'use client'

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import {
    BsSearch,
    BsQuestionSquareFill ,
    BsFillArrowLeftSquareFill,
    BsFillArrowRightSquareFill,
    BsLayersFill,
    BsMapFill
} from 'react-icons/bs';
import { MdSource } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaCog } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';
import { useRouter } from 'next/router';


const Sidebar = () => {
    const [active, setActive] = useState(false);
    const pathname = usePathname();
    // const router = useRouter()

    const controls = useAnimation();
    const controlText = useAnimation();
    const controlTitleText = useAnimation();
    
    const data = [
        {
            name: 'Discover',
            href: '/',
            items: [
                { title: 'Config', icon: FaCog, href: '/dashboard/customization' },
                { title: 'Fuentes', icon: MdSource, href: '/sources' },
                { title: 'Capas', icon: BsLayersFill, href: '/dashboard/layers' },
                { title: 'Ayuda', icon: BsQuestionSquareFill, href: '/help' },
                { title: 'Mapas', icon: BsMapFill, href: '/maps' },
                { title: 'Historial', icon: FaHistory, href: '/history' },
                { title: 'Buscador', icon: BsSearch, href: '/search' },
            ],
        },
    ];

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

    // const toggleBtn = () => {
    //     router.push('/sources');
    // };

    useEffect(() => {
        showMore();
    }, []);

    
    return (
        <div>
            <motion.div animate={controls} className={styles.sidebar}>
                {/* Sidebar Show/Hide Button */}
                <div onClick={toggleSidebar}>
                    {active ? (
                        <Link href={'/'}>
                            <BsFillArrowLeftSquareFill className={`${styles.sidebarButton} ${styles.sidebarButtonOpen}`} />
                        </Link>
                    ) : (
                        <BsFillArrowRightSquareFill className={`${styles.sidebarButton} ${styles.sidebarButtonClosed}`} />
                    )}
                </div>

                {/* Menu Buttons */}
                <div className='grow'>
                    {data.map((group, index) => (
                        <div key={index} className='my-2'>

                            {/* Menu Title */}
                            <motion.p animate={controlTitleText} className={styles.sidebarTitleText}>
                                {group.name}
                            </motion.p>

                            {/* Buttons */}
                            {group.items.map((item, index2) => (
                                <Link href={item.href} key={index2}>
                                    <div className={styles.menuButton}>
                                        <item.icon className={`${pathname == item.href ? styles.buttonIconActive : styles.buttonIcon}`}/>
                                        <motion.p animate={controlText} className={`${pathname == item.href ? styles.buttonTextActive : styles.buttonText}`}>
                                            {' '}
                                            {item.title}
                                        </motion.p>
                                    </div>
                                </Link>
                            ))}

                        </div>
                    ))}
                </div>

            </motion.div>
        </div>
    );
};

export default Sidebar;