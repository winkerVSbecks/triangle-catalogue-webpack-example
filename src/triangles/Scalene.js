import React from 'react';
import { Triangle } from '../components/Triangle';

const Scalene = ({ onLeft, onRight }) => (
  <article className="flex-l justify-center items-start w-100">
    <div className="flex-auto">
      <Triangle
  className="mw6 mr6-l"
  coords={[[20, -120], [30, -210], [30, -330]]}
/>
    </div>
    <div className="measure">
      <h2 className="mt0">Scalene Triangle</h2>
      <p>A triangle in which all three sides are equal.</p>
    </div>
  </article>
);

export default Scalene;
