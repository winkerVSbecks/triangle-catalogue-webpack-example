import React from 'react';
import { Triangle } from '../components/Triangle';

const AlmostEquilateralHeronian = ({ onLeft, onRight }) => (
  <article className="flex-l justify-center items-start w-100">
    <div className="flex-auto">
      <Triangle className="flex-auto mw6 mr4-l mb4 mb0-l" />
    </div>
    <div className="measure">
      <h2 className="mt0">Almost-equilateral Heronian Triangle</h2>
      <p>A triangle in which all three sides are equal.</p>
    </div>
  </article>
);

export default AlmostEquilateralHeronian;
