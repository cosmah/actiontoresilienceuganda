// Threejs.jsx
import React, { useRef, useEffect } from "react";
import './Three.css';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Globe from 'globe.gl';

extend({ OrbitControls });

const GlobeComponent = () => {
  const globeRef = useRef();

  useEffect(() => {
    const myGlobe = Globe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .pointsData([
        { lat: 0.3476, lng: 32.5825, size: 10, color: 'red' }, // Kampala, Uganda
        // Add more points as needed
      ])
      .pointAltitude("size")
      .pointColor("color")
      .onPointClick((point) => {
        alert(`Clicked on point: ${JSON.stringify(point)}`);
      });

    if (globeRef.current) {
      myGlobe(globeRef.current);
    }
  }, []);

  return (
    <div ref={globeRef} className="globe-container" />
  );
};

const CameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return (
    <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />
  );
};

const Threejs = () => {
  return (
    <div className="threejs-container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <CameraControls />
      </Canvas>
      <GlobeComponent />
    </div>
  );
}

export default Threejs;
