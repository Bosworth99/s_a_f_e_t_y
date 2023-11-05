import { RigidBody } from '@react-three/rapier';
import React, { useRef } from 'react';
import * as THREE from 'three';
import { angleToRadians } from '../../utils';
import { Wall } from './Wall';

// Array of data defining the positions and rotations of walls
interface WallNode {
  position: THREE.Vector3;
  rotation: THREE.Euler;
}

const nodes: WallNode[] = [
  {
    position: new THREE.Vector3(0, 0, -20),
    rotation: new THREE.Euler(0, 0, 0),
  },
  {
    position: new THREE.Vector3(0, 0, 20),
    rotation: new THREE.Euler(0, 0, 0),
  },
  {
    position: new THREE.Vector3(25, 0, 0),
    rotation: new THREE.Euler(0, angleToRadians(90), 0),
  },
  {
    position: new THREE.Vector3(-25, 0, 0),
    rotation: new THREE.Euler(0, angleToRadians(-90), 0),
  },
];

export const Walls = (
  props: JSX.IntrinsicElements['mesh'],
): React.JSX.Element => {
  const ref = useRef<THREE.Mesh>(null!);

  const walls = nodes.map((item: WallNode, index): React.JSX.Element => {
    return (
      <Wall
        position={item.position}
        rotation={item.rotation}
        key={`wall_${index}`}
      />
    );
  });

  return (
    <>
      <group>
        {walls}
        {/* ground */}
        <RigidBody
          colliders="cuboid"
          lockTranslations={true}
          lockRotations
          position={[0, -2, 0]}
          rotation={[angleToRadians(-90), 0, 0]}
        >
          <mesh receiveShadow>
            <planeGeometry args={[100, 100, 10, 10]} />
            <meshPhongMaterial color={'red'} reflectivity={0.5} />
          </mesh>
        </RigidBody>
      </group>
    </>
  );
};
