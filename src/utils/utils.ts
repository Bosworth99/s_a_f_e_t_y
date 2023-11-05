import * as THREE from 'three';
import { PlayerInput } from 'components/player/Player';

// Function to convert an angle from degrees to radians
export const angleToRadians = (angleInDeg: number) =>
  (Math.PI / 180) * angleInDeg;

export const getInput = (
  keyboard: Record<string, boolean>,
  mouse: { x: number; y: number },
): PlayerInput => {
  let [x, y, z] = [0, 0, 0];

  if (keyboard['s']) z += 1.0; // Move backward
  if (keyboard['w']) z -= 1.0; // Move forward
  if (keyboard['d']) x += 1.0; // Move right
  if (keyboard['a']) x -= 1.0; // Move left
  if (keyboard[' ']) y += 1.0; // Jump

  // Returning an object with the movement and look direction
  return {
    move: new THREE.Vector3(x, y, z),
    look: new THREE.Euler(
      mouse.x / window.innerWidth,
      mouse.y / window.innerHeight,
    ),
    running: keyboard['Shift'], // Boolean to determine if the player is running (Shift key pressed)
  };
};
