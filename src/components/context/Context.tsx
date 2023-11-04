import { Canvas, createRoot, events, extend } from '@react-three/fiber';
import React, { ReactNode, useEffect } from 'react';
import * as THREE from 'three';

extend({ THREE });

interface ContextProps {
  children?: ReactNode[];
}

export const Context: React.FC<ContextProps> = ({ children }) => {
  const el = document.getElementById('ctx') as HTMLCanvasElement;
  useEffect(() => {
    console.log('Context');
    if (el !== null) {
      const ctx = createRoot(el);
      ctx.configure({
        events,
        camera: { position: [0, 0, 50], fov: 50 },
      });

      // responsive resize
      window.addEventListener('resize', () => {
        ctx.configure({
          size: {
            width: window.innerWidth,
            height: window.innerHeight,
            top: 0,
            left: 0,
          },
        });

        ctx.render(
          <>
            <Canvas>{children}</Canvas>
          </>,
        );
      });

      //
      window.dispatchEvent(new Event('resize'));
    } else {
      console.warn('ctx element chould not be resolved');
    }
  }, [el]);

  return <></>;
};
