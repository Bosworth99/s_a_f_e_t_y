import { useMemo, useEffect } from 'react';

export const useKeyboard = (): {} => {
  const keyboard: Record<string, boolean> = useMemo(() => ({}), []);

  const keydown = (e: KeyboardEvent) => {
    console.log(e.key);
    return (keyboard[e.key] = true);
  };
  const keyup = (e: KeyboardEvent) => {
    console.log(e.key);
    return (keyboard[e.key] = false);
  };
  useEffect(() => {
    // Add event listeners for keydown and keyup events
    document.addEventListener('keydown', keydown);
    document.addEventListener('keyup', keyup);

    return () => {
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('keyup', keyup);
    };
  });

  return keyboard;
};
