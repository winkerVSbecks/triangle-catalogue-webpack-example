import React from 'react';
import { Triangle } from '../components/Triangle';

const Obtuse = ({ onLeft, onRight }) => (
  <article className="flex-l justify-center items-start w-100">
    <div className="flex-auto">
      <Triangle
        className="mw6 mw7-l mr6-l"
        coords={[[5, 5], [20, 40], [55, 40]]}
      />
    </div>
    <div className="measure">
      <h2 className="mt0">Obtuse Triangle</h2>
      <p className="lh-copy">
        A triangle with one interior angle measuring more than <code>90°</code>.
        If <code>c</code> is the length of the longest side, then{' '}
        <code>
          a<sup>2</sup> + b<sup>2</sup> &lt; c<sup>2</sup>
        </code>, where <code>a</code> and <code>b</code> are the lengths of the
        other sides.
      </p>
    </div>
  </article>
);

export default Obtuse;
