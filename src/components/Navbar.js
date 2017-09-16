import React from 'react';
import { Toolbar, H1, Spacer } from 'designSystem';
import { ArrowButton } from './ArrowButton';

const Logo = H1.extend`
  text-transform: uppercase;
  letter-spacing: 0.25em;
`;

export const Navbar = ({ onLeft, onRight, ...props }) => (
  <Toolbar {...props}>
    <Logo color="beige" fontSize={1}>
      triangles
    </Logo>
    <Spacer />
    <ArrowButton left onClick={onLeft} />
    <ArrowButton right onClick={onRight} />
  </Toolbar>
);
