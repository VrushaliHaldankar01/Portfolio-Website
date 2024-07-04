import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import './GlobeComponent.css'; // Ensure to import the CSS file

const programmingStacks = [
  { lat: 37.7749, lng: -122.4194, name: 'JavaScript' },
  { lat: 47.6062, lng: -122.3321, name: 'Python' },
  { lat: 51.5074, lng: -0.1278, name: 'Java' },
  { lat: 40.7128, lng: -74.006, name: 'C#' },
  { lat: 34.0522, lng: -118.2437, name: 'Ruby' },
  { lat: 52.52, lng: 13.405, name: 'PHP' },
  { lat: 48.8566, lng: 2.3522, name: 'C++' },
  { lat: 35.6895, lng: 139.6917, name: 'Swift' },
];

const GlobeComponent = () => {
  const globeEl = useRef();

  useEffect(() => {
    // Set globe settings in useEffect
    if (globeEl.current) {
      globeEl.current.pointOfView({ altitude: 2.5 }, 4000);
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1;
    }
  }, []);

  return (
    <div className='globe-container'>
      <div className='globe-wrapper'>
        <Globe
          ref={globeEl}
          globeImageUrl='//unpkg.com/three-globe/example/img/earth-dark.jpg'
          bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
          labelsData={programmingStacks}
          labelLat={(d) => d.lat}
          labelLng={(d) => d.lng}
          labelText={(d) => d.name}
          labelSize={1.5}
          labelDotRadius={0.4}
          labelColor={() => 'rgba(255, 165, 0, 0.75)'}
          labelResolution={2}
          width={600} // Adjust width as needed
          height={400} // Adjust height as needed
        />
      </div>
    </div>
  );
};

export default GlobeComponent;
