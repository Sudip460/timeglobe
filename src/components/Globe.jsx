import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = ({ personalities, countries, onSelectPersonality }) => {
  const globeRef = useRef(null);

  useEffect(() => {
    if (globeRef.current) {
      // Set initial camera position
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  // Prepare data for react-globe.gl
  const pointsData = [];
  countries.forEach(country => {
    const countryPersonalities = personalities.filter(p => country.personalities.includes(p.id));
    countryPersonalities.forEach((personality, index) => {
      const offset = (index - (countryPersonalities.length - 1) / 2) * 0.5;
      pointsData.push({
        lat: country.lat + offset,
        lng: country.lng + offset,
        size: 0.5,
        color: 'red',
        personality: personality
      });
    });
  });

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        pointsData={pointsData}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={0.01}
        pointRadius="size"
        onPointClick={(point) => onSelectPersonality(point.personality)}
        backgroundColor="rgba(0,0,0,0)"
      />
    </div>
  );
};

export default GlobeComponent;
