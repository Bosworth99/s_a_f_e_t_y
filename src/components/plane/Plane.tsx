import React, { useRef } from 'react';
import * as THREE from 'three';

export const Plane = (
  props: JSX.IntrinsicElements['mesh'],
): React.JSX.Element => {
  const ref = useRef<THREE.Mesh>(null!);
  return (
    <mesh {...props} ref={ref} scale={1} rotation={[-44, 0, 0]}>
      <planeGeometry args={[100, 100, 20, 20]} />
      <meshLambertMaterial color={'darkgrey'} reflectivity={0.7} />
    </mesh>
  );
};
