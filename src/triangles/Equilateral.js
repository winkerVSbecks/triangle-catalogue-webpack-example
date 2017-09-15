import React from 'react';
import { Triangle } from '../components/Triangle';

const Equilateral = ({ onLeft, onRight }) => (
  <article className="flex-l justify-center items-start w-100">
    <div className="flex-auto">
      <Triangle
        className="mw6 mr6-l"
        polarCoords={[[30, -120], [30, -210], [30, -330]]}
      />
    </div>
    <div className="measure">
      <h2 className="mt0">Equilateral Triangle</h2>
      <p className="lh-copy">
        A triangle that has all sides of the same length. It is also a regular
        polygon with all angles measuring <code>60°</code>. Equilateral
        triangles is also equiangular; that is, all three internal angles are
        also congruent to each other and are each <code>60°</code>.
      </p>
    </div>
  </article>
);

export default Equilateral;
