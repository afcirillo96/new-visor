'use client'
import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';

const MapComponent = () => {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: 'map',
      style: '/style.json',
      center: [ -59,-40],
      zoom: 4,
      bearing: 0,
      pitch: 0,
    });

    return () => map.remove();
  }, []);

  return (
    <div id="map" style={{
       width: '100%',
       height: '600px'
    }} />
  );
};

export default MapComponent;