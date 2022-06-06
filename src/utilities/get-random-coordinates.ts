export const getRandomCoordinates = () => {
  const min = 2;
  const max = 98;
  const x = Math.floor((Math.random() * (max - min + 1) + min) / 4) * 4;
  const y = Math.floor((Math.random() * (max - min + 1) + min) / 4) * 4;
  return [x, y];
};
