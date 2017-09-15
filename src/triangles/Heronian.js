import React from 'react';
import { Triangle } from '../components/Triangle';

const Heronian = ({ onLeft, onRight }) => (
  <article className="flex-l justify-center items-start w-100">
    <div className="flex-auto">
      <Triangle
        className="mw6 mr6-l"
        coords={[[5 + 33, 58 - 56], [5, 58], [5 + 33, 58]]}
      />
    </div>
    <div className="measure">
      <h2 className="mt0">Heronian Triangle</h2>
      <p className="lh-copy">
        A right-angled triangle whose sidelengths are a{' '}
        <a
          className="link clear-blue dim"
          href="https://en.wikipedia.org/wiki/Pythagorean_triple"
        >
          Pythagorean triple
        </a>. The side lengths of such a triangle are integers, and its area is
        also an integer, being half of the product of the two shorter sides of
        the triangle, at least one of which must be even.
      </p>
    </div>
  </article>
);

export default Heronian;
