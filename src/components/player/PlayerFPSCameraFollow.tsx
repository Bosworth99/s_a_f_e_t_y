import React, { useEffect, useRef } from 'react';
import { FirstPersonControls } from '@react-three/drei';
import * as THREE from 'three';

interface PlayerFPSControlsProps {
  camera: THREE.PerspectiveCamera;
  player: React.FC;
}

export const PlayerFPSCameraFollow: React.FC<PlayerFPSControlsProps> = ({
  camera,
  player,
}: PlayerFPSControlsProps) => {
  const controls = useRef(null);

  useEffect(() => {
    // Initialize the FirstPersonControls
    if (controls.current) {
      // @ts-ignore
      controls.current.connect(player);
    }

    // Update the camera's position based on the player's position
    const updatePlayerPosition = () => {
      const cameraPosition = camera.position;
      // @ts-ignore
      player.position = cameraPosition;
    };

    // Update the camera's position on each frame
    const animate = () => {
      updatePlayerPosition();
      requestAnimationFrame(animate);
    };

    animate();
    return () => {};
  }, [camera, player]);

  return (
    <>
      <FirstPersonControls
        ref={controls}
        activeLook
        constrainVertical
        enabled
        heightCoef={1}
        heightMax={1}
        heightMin={0}
        lookSpeed={0.1}
        lookVertical={false}
        makeDefault
        movementSpeed={15}
        verticalMax={3.141592653589793}
        verticalMin={0}
      />
      {player}
    </>
  );
};
