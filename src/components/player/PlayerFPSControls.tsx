import React from 'react';
import { FirstPersonControls } from '@react-three/drei';
import * as THREE from 'three';

interface PlayerFPSControlsProps
  extends Partial<JSX.IntrinsicElements['mesh']> {
  camera: THREE.PerspectiveCamera;
}

export const PlayerFPSControls = (
  props: PlayerFPSControlsProps,
): React.JSX.Element => {
  return (
    <>
      <FirstPersonControls
        activeLook
        constrainVertical
        enabled
        heightCoef={1}
        heightMax={1}
        heightMin={0}
        lookSpeed={0.1}
        lookVertical
        movementSpeed={15}
        verticalMax={3.141592653589793}
        verticalMin={0}
      />
    </>
  );
};
