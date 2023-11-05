import React, { useRef, useState } from 'react';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

export const SphereRigid = (
  props: JSX.IntrinsicElements['mesh'],
): React.JSX.Element => {
  const ref = useRef<THREE.Mesh>(null!);
  return (
    <RigidBody
      colliders={'ball'}
      position={props.position}
      friction={1}
      restitution={0.8}
    >
      <mesh {...props} ref={ref} scale={1}>
        <sphereGeometry args={[1, 18, 18, 8]} />
        <meshLambertMaterial reflectivity={0.2} />
      </mesh>
    </RigidBody>
  );
};
