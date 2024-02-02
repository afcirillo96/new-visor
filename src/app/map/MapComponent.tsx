'use client'
import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css'; // Asegúrate de importar los estilos CSS

const MapComponent = () => {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: 'map',
      style: '/style.json',
      center: [-64.9395,-40.5736],
      zoom: 3.7,
      bearing: 0,
      pitch: 0,
    });
    
    // Agregar controles
    map.addControl(new maplibregl.NavigationControl(), 'top-right');
    
    return () => map.remove();
  }, []);
  
  return (
    <div id="map" style={{
      width: '100%',
      height: '100vh'
    }} />
    );
  };
  
  export default MapComponent;
