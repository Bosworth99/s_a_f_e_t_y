import React from 'react';
import { Canvas, createRoot, events, extend } from '@react-three/fiber';
import { Sphere } from '../../components/sphere/Sphere';
import { Alpha as StyledAlpha } from './Alpha.styled';

export const Alpha: React.FC = () => {
  console.log('Alpha');
  return (
    <StyledAlpha>
      <Canvas>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, -10, -10]} angle={0.15} penumbra={1} />
        <pointLight position={[10, 12, 10]} />
        <Sphere position={[0, 0, 0]} />
      </Canvas>
    </StyledAlpha>
  );
};
