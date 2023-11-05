import React, { useRef, useState } from 'react';
import { useFrame, extend, ThreeElements, NodeProps } from '@react-three/fiber';
import * as THREE from 'three';

export const Sphere = (
  props: JSX.IntrinsicElements['mesh'],
): React.JSX.Element => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2.5 : 2}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[1, 30, 30]} />
      <meshPhongMaterial color={hovered ? 'red' : 'blue'} reflectivity={0.99} />
    </mesh>
  );
};
