import React, { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

export const Wall = (
  props: JSX.IntrinsicElements['mesh'],
): React.JSX.Element => {
  const ref = useRef<THREE.Mesh>(null!);
  return (
    <RigidBody
      colliders={'trimesh'}
      position={props.position}
      friction={1}
      restitution={0.5}
      lockTranslations={true}
      lockRotations
    >
      <mesh {...props} ref={ref} scale={1}>
        <planeGeometry args={[100, 10, 10, 8]} />
        <meshNormalMaterial side={THREE.DoubleSide} />
      </mesh>
    </RigidBody>
  );
};
