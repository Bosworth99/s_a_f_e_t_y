import React, { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

export const Player: React.FC = (
  props: Partial<JSX.IntrinsicElements['mesh']>,
): React.JSX.Element => {
  const api = useRef(null);
  const mesh = useRef<THREE.Mesh>(null!);

  return (
    <>
      <RigidBody
        ref={api}
        lockRotations
        colliders={'ball'}
        position={props.position}
        friction={0.5}
        restitution={0.5}
      >
        <mesh {...props} ref={mesh} userData={{ tag: 'player' }} castShadow>
          <meshPhysicalMaterial metalness={0.5} roughness={0} />
          <sphereGeometry args={[1, 16, 16]} />
        </mesh>
      </RigidBody>
    </>
  );
};
