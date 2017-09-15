import React from 'react';
import { Triangle } from '../components/Triangle';

const Right = ({ onLeft, onRight }) => (
  <article className="flex-l justify-center items-start w-100">
    <div className="flex-auto">
      <Triangle className="mw6 mr6-l" coords={[[5, 5], [5, 40], [55, 40]]} />
    </div>
    <div className="measure">
      <h2 className="mt0">Right Triangle</h2>
      <p className="lh-copy">
        A right triangle has one of its interior angles measuring{' '}
        <code>90°</code> (a right angle). The side opposite to the right angle
        is the hypotenuse, the longest side of the triangle. Right triangles
        obey the Pythagorean theorem:{' '}
        <code>
          a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
        </code>, where <code>a</code> and <code>b</code> are the lengths of the
        legs and <code>c</code> is the length of the hypotenuse.
      </p>
    </div>
  </article>
);

export default Right;
