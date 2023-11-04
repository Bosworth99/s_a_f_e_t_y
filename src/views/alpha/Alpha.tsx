import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';

// import { Sphere } from '../../components/sphere/Sphere';
import { Alpha as StyledAlpha } from './Alpha.styled';

export const Alpha: React.FC = () => {
  let ctx;
  const el = document.getElementById('ctx');

  useEffect(() => {
    if (el) {
      ctx = createRoot(el);
      ctx.render(
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas>,
      );
    }
  }, [el]);

  return <StyledAlpha>ALPHA</StyledAlpha>;
};
