import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import React from 'react';
import * as THREE from 'three';
import { PlayerFPSControls } from '../../components/player/PlayerFPSControls';
import { SphereRigid } from '../../components/sphere/SphereRigid';
import { Walls } from '../../components/walls/Walls';
import { randomize } from '../../utils';

export const Gamma: React.FC = () => {
  console.log('Gamma View');

  // CAMERA
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    500,
  );
  camera.position.set(0, 10, 20);
  // camera.lookAt(0, 0, 0);

  const num = 25;
  const spheres = (count: number = 5) => {
    return [...Array(count)].map((i, v) => {
      const x = randomize(-num, num);
      const y = randomize(0, num);
      const z = randomize(-num, num);
      return <SphereRigid position={[x, y, z]} key={`sphere_${v}`} />;
    });
  };

  const lights = (count: number = 5) => {
    return [...Array(count)].map((i, v) => {
      const x = randomize(-num, num);
      const y = randomize(0, 1);
      const z = randomize(-num, num);
      return (
        <pointLight
          position={[x, y, z]}
          key={`light_${v}`}
          intensity={20}
          scale={50}
        />
      );
    });
  };

  return (
    <Canvas shadows={true} camera={camera}>
      <Physics debug>
        <PlayerFPSControls camera={camera} />
        <group>
          <ambientLight intensity={0.2} color={'#ffffff'} />
          {lights(25)}
          {spheres(50)}
          <Walls />
        </group>
      </Physics>
      <Environment preset={'forest'} background />
    </Canvas>
  );
};
