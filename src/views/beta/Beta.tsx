import { Canvas } from '@react-three/fiber';
import { Sphere } from '../../components/sphere/Sphere';
import React, { useEffect, useRef } from 'react';
import { Beta as StyledBeta } from './Beta.styled';

export const Beta: React.FC = () => {
  return (
    <StyledBeta>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <Sphere position={[10, 10, 10]} />
      </Canvas>
    </StyledBeta>
  );
};
