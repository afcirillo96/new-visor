'use client'

import { motion } from 'framer-motion';
import styles from '@/app/components/Sidebar.module.css';

export default function Layout() {
    return (
      <div>
        <motion.div className={`${styles.subMenu} ${styles.subMenuStandard}`}>
            <div className='grow'>
                <p>Capas</p>
            </div>
        </motion.div>
    </div>
    );
}