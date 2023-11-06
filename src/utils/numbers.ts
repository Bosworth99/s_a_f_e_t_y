// Function to convert an angle from degrees to radians
export const angleToRadians = (angleInDeg: number) =>
  (Math.PI / 180) * angleInDeg;

/**
 * get random float between min and max
 * @param min - number
 * @param max - number
 * @returns random float between min/max
 */
export const randomize = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
