import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges, Text3D, Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current) return;
    
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef} scale={2}>
          <boxGeometry />
          <meshPhongMaterial
            color="#0066cc"
            opacity={0.5}
            transparent
            side={THREE.DoubleSide}
          />
          <Edges color="#00ffff" scale={1.1} threshold={15} />
        </mesh>
      </Float>

      {/* Orbiting Spheres */}
      {[0, 1, 2, 3].map((index) => (
        <mesh
          key={index}
          position={[
            Math.cos((index * Math.PI) / 2) * 3,
            0,
            Math.sin((index * Math.PI) / 2) * 3,
          ]}
        >
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshPhongMaterial color="#00ffff" />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingCube;