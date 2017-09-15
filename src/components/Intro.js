import React from 'react';

export const Intro = () => (
  <div className="flex-auto pv6 flex flex-column">
    <div className="measure">
      <h1 className="f2 ttu tracked-mega mv0">triangles</h1>
      <p className="mt3 mb4 f5 lh-copy">
        A catalogue of some famous triangles. All text from{' '}
        <a
          className="link bittersweet dim"
          href="https://en.wikipedia.org/wiki/Triangle"
        >
          wikipedia.org/Triangle
        </a>.
      </p>
    </div>
    <div className="h5 hero flex-auto" />
  </div>
);
