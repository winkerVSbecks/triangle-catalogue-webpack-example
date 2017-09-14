import React from 'react';

const arrows = {
  left: (
    <g>
      <path d="M1.5 8 L16 8" />
      <path d="M8.439339828220179 1.0606601717798212 L1.5 8 L8.439339828220179 14.939339828220179" />
    </g>
  ),
  right: (
    <g>
      <path d="M0 8 L14.5 8" />
      <path d="M7.560660171779821 1.0606601717798212 L14.5 8 L7.560660171779821 14.939339828220179" />
    </g>
  ),
};

export const ArrowButton = ({
  right = false,
  left = false,
  color = 'inherit',
  ...props
}) => (
  <button
    className="di justify-center ma0 pa3 bg-transparent bn pointer"
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentcolor"
      strokeWidth="3"
      className={`did v-mid overflow-visible ${color}`}
    >
      {right ? arrows.right : arrows.left}
    </svg>
  </button>
);
