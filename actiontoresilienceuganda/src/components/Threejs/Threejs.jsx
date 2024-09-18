import React, { useRef, useEffect } from "react";
import './Three.css';
import Globe from 'globe.gl';

const GlobeComponent = () => {
  const globeRef = useRef();
  const requestRef = useRef();

  useEffect(() => {
    let globeInstance;

    const initGlobe = () => {
      globeInstance = Globe()
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
        globeInstance(globeRef.current);
      }

      // Get the Three.js Scene
      const scene = globeInstance.scene();
      const camera = globeInstance.camera();
      const renderer = globeInstance.renderer();
      
      // Find the globe mesh in the scene
      const globeMesh = scene.children.find(obj => obj.type === 'Mesh');

      // Animation function
      const animate = () => {
        // Rotate the globe mesh continuously
        if (globeMesh) {
          globeMesh.rotation.y += 0.005; // Adjust this value to change rotation speed
        }

        renderer.render(scene, camera);
        requestRef.current = requestAnimationFrame(animate);
      };

      requestRef.current = requestAnimationFrame(animate);
    };

    initGlobe();

    return () => {
      cancelAnimationFrame(requestRef.current);
      if (globeInstance) {
        globeInstance._destructor();
      }
    };
  }, []);

  return <div ref={globeRef} className="globe-container" />;
};

const Threejs = () => {
  return (
    <div className="threejs-container">
      <GlobeComponent />
    </div>
  );
}

export default Threejs;
