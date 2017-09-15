import React from 'react';
import { Triangle } from '../components/Triangle';

const Oblique = ({ onLeft, onRight }) => (
  <article className="flex-l justify-center items-start w-100">
    <div className="flex-auto flex flex-wrap">
      <Triangle
        className="w-100 mw6 mw8-l"
        coords={[[15, 5], [5, 40], [55, 40]]}
      />
      <Triangle
        className="w-100 mw6 mw8-l"
        coords={[[5, 5], [20, 40], [55, 40]]}
      />
    </div>
    <div className="measure">
      <h2 className="mt0">Oblique Triangle</h2>
      <p className="lh-copy">
        A triangle that does not have an angle measuring <code>90°</code>. Acute
        and obtuse triangles are the two different types of oblique triangles
      </p>
    </div>
  </article>
);

export default Oblique;
