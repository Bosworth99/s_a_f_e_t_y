import React, { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';
import { clamp, lerp } from 'three/src/math/MathUtils';
import { useFrame, useThree } from '@react-three/fiber';

export interface PlayerInput {
  move: THREE.Vector3;
  look: THREE.Euler;
  running: boolean;
}

interface PlayerProps extends Partial<JSX.IntrinsicElements['mesh']> {
  walk: number;
  jump: number;
  input: () => PlayerInput;
}

export const Player = (props: PlayerProps): React.JSX.Element => {
  const api = useRef(null);
  const mesh = useRef<THREE.Mesh>(null!);
  const { walk, jump, input } = props;

  const { scene, camera } = useThree(); // Get the 3D scene and camera provided by "@react-three/fiber".

  let phi = 0; // Horizontal angle of the camera's orientation.
  let theta = 0; // Vertical angle of the camera's orientation.

  // Declare reusable, non-persistent variables (avoiding recreation every frame).
  const speed = new THREE.Vector3(walk / 2, jump, walk); // Vector representing the player's movement speed.
  const offset = new THREE.Vector3(0, 0, 0); // Vector used to calculate the player's movement based on user input.
  const gaze = new THREE.Quaternion(); // Quaternion representing the direction the player character is looking at.
  const yaw = new THREE.Quaternion(); // Quaternion controlling horizontal rotations of the player's camera.
  const pitch = new THREE.Quaternion(); // Quaternion controlling vertical rotations of the player's camera.
  const cameraOffset = new THREE.Vector3(0, 3, 5); // Vector representing the offset of the camera from the player's position.
  const down = new THREE.Vector3(0, -1, 0); // Vector pointing downwards, used for raycasting to determine ground collision.
  const yAxis = new THREE.Vector3(0, 1, 0); // Vector representing the world's y-axis.
  const xAxis = new THREE.Vector3(1, 0, 0); // Vector representing the world's x-axis.
  const raycaster = new THREE.Raycaster(new THREE.Vector3(0, 0, 0), down, 0, 2); // Raycaster for ground collision detection.
  const slope = new THREE.Vector3(0, 1, 0); // Vector representing the slope of the ground surface.

  // Function to update the player's camera orientation based on user input.
  // @ts-ignore
  const updateOrientation = ([x, y]) => {
    const cameraSpeed = 3; // Speed factor for camera movement.
    const step = 0.3; // Step for smooth interpolation of camera orientation changes.
    phi = lerp(phi, -x * cameraSpeed, step); // Interpolate horizontal camera rotation.
    theta = lerp(theta, -y * cameraSpeed, step); // Interpolate vertical camera rotation.
    theta = clamp(theta, -Math.PI / 3, Math.PI / 3); // Clamp vertical rotation within limits.

    yaw.setFromAxisAngle(yAxis, phi); // Set the yaw quaternion based on horizontal rotation.
    pitch.setFromAxisAngle(xAxis, theta); // Set the pitch quaternion based on vertical rotation.
    gaze.multiplyQuaternions(yaw, pitch).normalize(); // Combine yaw and pitch to get the gaze direction.
  };

  useFrame(() => {
    if (!api.current || !mesh.current) return;

    // @ts-ignore
    const position = api.current.translation(); // Get the player's current position from the RigidBody API.
    const { move, look, running } = input(); // Get current player input, including movement and camera look direction.

    updateOrientation([look.x, look.y]); // Update the player's camera orientation based on the camera look direction.

    // Filter the scene's children to get all walkable objects (excluding the player's mesh).
    const walkable = scene.children.filter(
      (o) => o.children[0]?.uuid !== mesh?.current?.uuid,
    );

    raycaster.set(position, down);
    // Calculate the offset vector for player movement based on user input, speed, and orientation.
    offset
      .fromArray([move.x, move.y, 0])
      .normalize()
      .multiply(running ? speed.clone().multiplyScalar(2.5) : speed)
      .applyQuaternion(yaw);

    // @ts-ignore
    api.current.applyImpulse(offset, true);

    const newPosition = new THREE.Vector3(position.x, position.y, position.z);
    camera.position.lerp(
      newPosition.add(cameraOffset.clone().applyQuaternion(yaw)),
      0.25,
    );

    camera.quaternion.copy(gaze);
  });

  return (
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
  );
};
