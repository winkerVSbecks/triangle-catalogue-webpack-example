import React from 'react';
import { Triangle } from '../components/Triangle';

const Isosceles = ({ onLeft, onRight }) => (
  <article className="flex-l justify-center items-start w-100">
    <div className="flex-auto">
      <Triangle className="mw6 mr6-l" coords={[[30, 5], [10, 55], [50, 55]]} />
    </div>
    <div className="measure">
      <h2 className="mt0">Isosceles Triangle</h2>
      <p className="lh-copy">
        A triangle that has two sides of equal length. It also has two angles of
        the same measure, namely the angles opposite to the two sides of the
        same length; this fact is the content of the isosceles triangle theorem.
      </p>
    </div>
  </article>
);

export default Isosceles;
