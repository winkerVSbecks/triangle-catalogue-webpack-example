import React from 'react';

export const Triangle = ({
  w,
  h,
  coords = [[20, -90], [20, -210], [20, -330]],
  polarCoords,
  ...props
}) => (
  <svg
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {polarCoords ? (
      coordsToPath(polarToCartesian([30, 30], polarCoords))
    ) : (
      coordsToPath(coords)
    )}
  </svg>
);

const degToRadian = angle => angle * Math.PI / 180;

function randomColors() {
  let colors = ['#fe565d', '#ffd23f' /*'#FFB238 fff157'*/, '#1b67ff'];

  let currentIndex = colors.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = colors[currentIndex];
    colors[currentIndex] = colors[randomIndex];
    colors[randomIndex] = temporaryValue;
  }

  return colors;
}

function polarToCartesian([x, y], coords) {
  return coords
    .map(([r, t]) => [r, degToRadian(t)])
    .map(([r, t]) => [x + r * Math.cos(t), y + r * Math.sin(t)]);
}

function coordsToPath(coords) {
  const clrs = randomColors();
  return [
    <path key="0" stroke={clrs[0]} d={`M${coords[0]} L ${coords[1]}`} />,
    <path key="1" stroke={clrs[1]} d={`M${coords[1]} L ${coords[2]}`} />,
    <path key="2" stroke={clrs[2]} d={`M${coords[2]} L ${coords[0]}`} />,
  ];
}
