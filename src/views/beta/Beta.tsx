import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import React from 'react';
import * as THREE from 'three';
import { Player } from '../../components/player/Player';
import { SphereRigid } from '../../components/sphere/SphereRigid';
import { Walls } from '../../components/walls/Walls';
import { useMouseCapture } from '../../hooks';
import { useKeyboard } from '../../hooks/useKeyboard';
import { getInput } from '../../utils';

export const Beta: React.FC = () => {
  console.log('Beta View');

  // CAMERA
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    500,
  );
  camera.position.set(0, 10, 10);
  camera.lookAt(0, 0, 0);

  const keyboard = useKeyboard();
  const mouse = useMouseCapture();

  return (
    <Canvas shadows={true} camera={camera}>
      <Physics debug>
        <group>
          <ambientLight intensity={0.1} color={'#ffffff'} />
          <pointLight position={[2, 0, 2]} color={'red'} />
          <pointLight position={[-2, 0, 2]} color={'red'} />
          <SphereRigid position={[1, 4, 0]} />
          <SphereRigid position={[-1, 2, 0]} />
          <Player
            position={[0, 0, 0]}
            walk={3}
            jump={2}
            input={() => getInput(keyboard, mouse)}
          />
          <Walls />
        </group>
      </Physics>
      <Environment preset={'warehouse'} background />
    </Canvas>
  );
};
