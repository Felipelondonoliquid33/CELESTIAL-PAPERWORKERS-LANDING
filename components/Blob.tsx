
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import type { Mesh } from 'three';


interface BlobProps {
  color: string;
  position: [number, number, number];
  scale: number;
}

const Blob: React.FC<BlobProps> = ({ color, ...props }) => {
  const ref = useRef<Mesh>(null!);
  
  // Randomized physics parameters for each blob instance
  const [distortFactor] = useState(() => 0.4 + Math.random() * 0.4);
  const [speedFactor] = useState(() => 0.5 + Math.random() * 1.0);
  const [rotationSpeed] = useState(() => 0.05 + Math.random() * 0.1);

  // Randomized movement parameters for a more organic feel
  const [xAmp] = useState(() => Math.random() * 0.002);
  const [yAmp] = useState(() => 0.001 + Math.random() * 0.004);
  const [zAmp] = useState(() => Math.random() * 0.002);
  const [xFreq] = useState(() => 0.5 + Math.random() * 0.5);
  const [yFreq] = useState(() => 0.5 + Math.random() * 0.5);
  const [zFreq] = useState(() => 0.5 + Math.random() * 0.5);

  useFrame((state, delta) => {
    if (ref.current) {
      // Slower, more deliberate, multi-axis rotation
      ref.current.rotation.x += delta * rotationSpeed * 0.6;
      ref.current.rotation.y += delta * rotationSpeed * 0.8;
      ref.current.rotation.z += delta * rotationSpeed * 0.4;

      // More dynamic, multi-directional bobbing and drifting
      const t = state.clock.getElapsedTime();
      ref.current.position.x += Math.sin(t * xFreq) * xAmp;
      ref.current.position.y += Math.sin(t * yFreq) * yAmp;
      ref.current.position.z += Math.cos(t * zFreq) * zAmp;
    }
  });

  return (
    <Icosahedron args={[1, 4]} ref={ref} {...props}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distortFactor}
        speed={speedFactor}
        roughness={0.1}
        metalness={0.1}
      />
    </Icosahedron>
  );
};

export default Blob;
