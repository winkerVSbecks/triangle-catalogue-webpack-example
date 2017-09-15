import React from 'react';
import { Triangle } from '../components/Triangle';

const Acute = ({ onLeft, onRight }) => (
  <article className="flex-l justify-center items-start w-100">
    <div className="flex-auto">
      <Triangle className="mw6 mr6-l" coords={[[15, 5], [5, 40], [55, 40]]} />
    </div>
    <div className="measure">
      <h2 className="mt0">Acute Triangle</h2>
      <p className="lh-copy">
        A triangle with all interior angles measuring less than <code>90°</code>.
        If <code>c</code> is the length of the longest side, then{' '}
        <code>
          a<sup>2</sup> + b<sup>2</sup> > c<sup>2</sup>
        </code>, where <code>a</code> and <code>b</code> are the lengths of the
        other sides.
      </p>
    </div>
  </article>
);

export default Acute;
