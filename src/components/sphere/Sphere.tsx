import React, { useRef } from 'react';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { ReactThreeFiber } from '@react-three/fiber';
import * as THREE from 'three';

export const Sphere = () => {
  const sphereRef = useRef<THREE.Mesh | undefined>(undefined);

  if (sphereRef) {
    // Set up a wobble animation effect
    useFrame(() => {
      if (sphereRef.current) {
        sphereRef.current.rotation.x += 0.01;
        sphereRef.current.rotation.y += 0.01;
      }
    });

    return (
      sphereRef ?? (
        <mesh ref={sphereRef} position={[10, 10, 10]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial>
            <meshBasicMaterial color="blue" />
          </meshBasicMaterial>
        </mesh>
      )
    );
  }
};
