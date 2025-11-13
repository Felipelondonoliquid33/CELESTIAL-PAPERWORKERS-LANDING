import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Blob from './Blob';
import { Vector3 } from 'three';

// A simple component to make the camera follow the mouse pointer for a parallax effect
function NosotrosRig() {
  useFrame((state) => {
    // Gently lerp the camera position towards the mouse position
    state.camera.position.lerp(new Vector3(-state.pointer.x / 4, state.pointer.y / 4, 10), 0.05);
    // Always look at the center of the scene
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

const NosotrosScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#434F85" />
      <pointLight position={[0, -10, 5]} intensity={1} />

      <Suspense fallback={null}>
        {/* Shadow blobs */}
        <Blob color="#003366" position={[1.5, -2, -3]} scale={2.5} />
        <Blob color="#003366" position={[-2.5, 2.5, -2]} scale={3} />

        {/* Main blobs */}
        <Blob color="#4F97A3" position={[2, -1.5, -1]} scale={3.5} />
        <Blob color="#434F85" position={[-5, -4.5, 0]} scale={2.5} />
        <Blob color="#A2D5F2" position={[4.5, 1.5, 0]} scale={2.2} />
        <Blob color="#87CEBB" position={[-4, -5, -2]} scale={1.5} />
        
        {/* Add the camera rig for dynamic movement */}
        <NosotrosRig />
      </Suspense>
    </Canvas>
  );
};

export default NosotrosScene;
