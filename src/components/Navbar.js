import React from 'react';
import { ArrowButton } from './ArrowButton';

export const Navbar = ({ onLeft, onRight }) => (
  <nav className="flex items-center h3 bb bw1 clear-blue">
    <h1 className="f6 ttu tracked-mega black-pearl pl2">triangles</h1>
    <div className="flex-auto" />
    <ArrowButton color="black-pearl" left onClick={onLeft} />
    <ArrowButton color="black-pearl" right onClick={onRight} />
  </nav>
);
