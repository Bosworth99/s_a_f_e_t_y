import { useMemo, useEffect } from 'react';
import { Euler, Vector2 } from 'three';

// Custom hook for capturing mouse input
export const useMouseCapture = () => {
  // Create a memoized object to store mouse coordinates
  const mouse = useMemo(() => ({ x: 0, y: 0 }), []);

  // Event handler for mouse movement
  const mouseMove = (e: MouseEvent) => {
    // Check if the pointer is locked to the body (mouse captured)
    if (document.pointerLockElement === document.body) {
      // Update the mouse coordinates with the movement values
      mouse.x += e.movementX;
      mouse.y += e.movementY;
    }
  };

  // Function to request pointer lock (capture mouse)
  const capture = () => {
    document.body.requestPointerLock = document.body.requestPointerLock;
    document.body.requestPointerLock();
  };

  useEffect(() => {
    // Add event listeners for mouse movement and click
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('click', capture);

    // Clean up the event listeners when the component unmounts
    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('click', capture);
    };
  });

  return mouse; // Return the mouse object with the current mouse coordinates
};
