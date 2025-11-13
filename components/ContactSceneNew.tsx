import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import type { Mesh } from 'three';
import { Vector3 } from 'three';

interface ContactBlobProps {
  color: string;
  position: [number, number, number];
  scale: number;
}

const ContactBlob: React.FC<ContactBlobProps> = ({ color, ...props }) => {
  const ref = useRef<Mesh>(null!);
  
  // Different parameters for contact page blobs
  const [distortFactor] = useState(() => 0.6 + Math.random() * 0.5);
  const [speedFactor] = useState(() => 1.5 + Math.random() * 2.0);
  const [rotationSpeed] = useState(() => 0.08 + Math.random() * 0.15);

  // More energetic movement for contact page
  const [xAmp] = useState(() => 0.003 + Math.random() * 0.003);
  const [yAmp] = useState(() => 0.002 + Math.random() * 0.005);
  const [zAmp] = useState(() => 0.003 + Math.random() * 0.003);
  const [xFreq] = useState(() => 0.8 + Math.random() * 0.7);
  const [yFreq] = useState(() => 0.6 + Math.random() * 0.8);
  const [zFreq] = useState(() => 0.7 + Math.random() * 0.6);

  useFrame((state, delta) => {
    if (ref.current) {
      // Faster, more dynamic rotation
      ref.current.rotation.x += delta * rotationSpeed * 0.9;
      ref.current.rotation.y += delta * rotationSpeed * 1.2;
      ref.current.rotation.z += delta * rotationSpeed * 0.7;

      // More erratic, bouncy movement
      const t = state.clock.getElapsedTime();
      ref.current.position.x += Math.sin(t * xFreq) * xAmp;
      ref.current.position.y += Math.cos(t * yFreq) * yAmp;
      ref.current.position.z += Math.sin(t * zFreq) * zAmp;
    }
  });

  return (
    <Icosahedron args={[1, 4]} ref={ref} {...props}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distortFactor}
        speed={speedFactor}
        roughness={0.2}
        metalness={0.3}
      />
    </Icosahedron>
  );
};

// Camera rig with different behavior for contact page
function ContactRig() {
  useFrame((state) => {
    // More subtle camera movement for contact page
    state.camera.position.lerp(
      new Vector3(
        -state.pointer.x / 6, 
        state.pointer.y / 6, 
        10
      ), 
      0.03
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

const ContactScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-5, -5, -5]} intensity={0.7} color="#87CEBB" />
      <pointLight position={[0, -8, 5]} intensity={1.5} color="#4F97A3" />

      <Suspense fallback={null}>
        {/* Fewer but more dynamic blobs for contact page */}
        
        {/* Main focal blobs - bigger and more central */}
        <ContactBlob color="#4F97A3" position={[0, 0, -2]} scale={4} />
        <ContactBlob color="#87CEBB" position={[3, -2, 0]} scale={3.2} />
        
        {/* Supporting blobs - smaller, more scattered */}
        <ContactBlob color="#003366" position={[-3, 2, -3]} scale={2} />
        <ContactBlob color="#A2D5F2" position={[4, 3, -1]} scale={2.5} />
        <ContactBlob color="#434F85" position={[-4, -3, 1]} scale={1.8} />
        
        {/* Accent blobs - very small, quick movement */}
        <ContactBlob color="#87CEBB" position={[2, 4, -2]} scale={1.2} />
        <ContactBlob color="#4F97A3" position={[-2, -4, 2]} scale={1.5} />
        
        <ContactRig />
      </Suspense>
    </Canvas>
  );
};

export default ContactScene;
