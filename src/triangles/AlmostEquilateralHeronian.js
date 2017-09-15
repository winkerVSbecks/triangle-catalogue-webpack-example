import React from 'react';
import { Triangle } from '../components/Triangle';

const AlmostEquilateralHeronian = ({ onLeft, onRight }) => (
  <article className="flex-l justify-center items-start w-100">
    <div className="flex-auto">
      <Triangle className="mw6 mr6-l" coords={[[45, 5], [15, 45], [45, 45]]} />
    </div>
    <div className="measure">
      <h2 className="mt0">Almost-equilateral Heronian Triangle</h2>
      <p className="lh-copy">
        There is a unique sequence of Heronian triangles that are{' '}
        <i>almost equilateral</i> because the three sides are of the form{' '}
        <code>n − 1, n, n + 1</code>. One of the two most famous is the{' '}
        <code>3–4–5</code> right triangle, where {' '}
        <code>
          3<sup>2</sup> + 4<sup>2</sup> = 5<sup>2</sup>
        </code>.
      </p>
    </div>
  </article>
);

export default AlmostEquilateralHeronian;
