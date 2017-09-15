import React from 'react';
import { Triangle } from '../components/Triangle';

const Scalene = ({ onLeft, onRight }) => (
  <article className="flex-l justify-center items-start w-100">
    <div className="flex-auto">
      <Triangle className="mw6 mr6-l" coords={[[5, 5], [20, 50], [55, 50]]} />
    </div>
    <div className="measure">
      <h2 className="mt0">Scalene Triangle</h2>
      <p className="lh-copy">
        A scalene triangle has all its sides of different lengths. Equivalently,
        it has all angles of different measure.
      </p>
    </div>
  </article>
);

export default Scalene;
