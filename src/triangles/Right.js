import React from 'react';
import { Text } from 'designSystem';
import { Triangle, Slide } from 'components';

export const Right = props => (
  <Slide title="Right Triangle" {...props}>
    {{
      media: <Triangle coords={[[5, 5], [5, 40], [55, 40]]} />,
      body: (
        <Text>
          A right triangle has one of its interior angles measuring{' '}
          <code>90°</code> (a right angle). The side opposite to the right angle
          is the hypotenuse, the longest side of the triangle. Right triangles
          obey the Pythagorean theorem:{' '}
          <code>
            a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
          </code>, where <code>a</code> and <code>b</code> are the lengths of
          the legs and <code>c</code> is the length of the hypotenuse.
        </Text>
      ),
    }}
  </Slide>
);
