import React from 'react';

export const Intro = () => (
  <div className="flex-auto pv6 flex flex-column">
    <div className="measure">
      <p className="mt3 mb4 pl2 f5 lh-copy">
        A catalogue of triangles. All text from{' '}
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
