import React from 'react';
import { Text } from 'designSystem';
import { Triangle, Slide } from 'components';

export const AlmostEquilateralHeronian = props => (
  <Slide title="Almost-equilateral Heronian Triangle" {...props}>
    {{
      media: <Triangle coords={[[45, 5], [15, 45], [45, 45]]} />,
      body: (
        <Text>
          There is a unique sequence of Heronian triangles that are{' '}
          <i>almost equilateral</i> because the three sides are of the form{' '}
          <code>n − 1, n, n + 1</code>. One of the two most famous is the{' '}
          <code>3–4–5</code> right triangle, where {' '}
          <code>
            3<sup>2</sup> + 4<sup>2</sup> = 5<sup>2</sup>
          </code>.
        </Text>
      ),
    }}
  </Slide>
);
