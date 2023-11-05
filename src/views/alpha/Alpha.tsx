import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere } from '../../components/sphere/Sphere';
import { Alpha as StyledAlpha } from './Alpha.styled';
import { Cube } from '../../components/cube/Cube';
import { Plane } from '../../components/plane/Plane';
import * as THREE from 'three';

export const Alpha: React.FC = () => {
  console.log('Alpha View');

  // CAMERA
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    500,
  );
  camera.position.set(2, -10, 10);
  camera.lookAt(0, 0, 0);

  return (
    <StyledAlpha>
      <Canvas shadows={true} camera={camera}>
        <ambientLight intensity={0.2} color={'#ffffff'} />
        <spotLight position={[0, -5, 0]} angle={0.6} penumbra={1} />
        <pointLight position={[2, 0, 2]} />
        <pointLight position={[-2, 0, 2]} />
        <pointLight position={[0, 0, 2]} />
        <Sphere position={[-3, 0, 0]} />
        <Cube position={[3, 0, 0]} />
        <Plane position={[0, -50, -2]} />
      </Canvas>
    </StyledAlpha>
  );
};
