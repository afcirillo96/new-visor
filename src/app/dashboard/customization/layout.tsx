'use client'

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '@/app/components/Sidebar.module.css';
// import styles2 from ''; // Importa los estilos globales



export default function Layout() {
    const [colorFondo, setColorFondo] = useState('#ffffff'); // Estado para el color de fondo

    useEffect(() => {
      // Al cargar la página, obtener el color de fondo inicial desde el localStorage
      const colorFondoGuardado = localStorage.getItem('colorFondoGlobal');
      if (colorFondoGuardado) {
        setColorFondo(colorFondoGuardado);
        // Aplicar el color de fondo guardado a toda la aplicación
        document.documentElement.style.setProperty('--background--color', colorFondoGuardado);
      }
    }, []);
  
    // Función para manejar el cambio en el color de fondo
    const handleChangeColorFondo = (e: { target: { value: any; }; }) => {
      const nuevoColorFondo = e.target.value;
      setColorFondo(nuevoColorFondo);
      // Guardar en el localStorage
      localStorage.setItem('colorFondoGlobal', nuevoColorFondo);
      // Aplicar el nuevo color de fondo a toda la aplicación
      document.documentElement.style.setProperty('--background--color', nuevoColorFondo);
    };
  

    // Estilo para el fondo de la página
    const estiloPagina = {
        backgroundColor: colorFondo,
        minHeight: '100vh', // Ajusta la altura mínima de la página según tus necesidades
    };

    return (
        <div>
            <motion.div className={`${styles.subMenu} ${styles.subMenuConfig}`}>
                <div className='grow'>
                    <div style={estiloPagina}>
                        <h1>Configuración de Estilos</h1>
                        <label htmlFor="colorFondo">Color de Fondo:</label>
                        <input
                            type="color"
                            id="colorFondo"
                            value={colorFondo}
                            onChange={handleChangeColorFondo}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}