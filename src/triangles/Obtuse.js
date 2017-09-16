import React from 'react';
import { Text } from 'designSystem';
import { Triangle, Slide } from 'components';

export const Obtuse = props => (
  <Slide title="Obtuse Triangle" {...props}>
    {{
      media: <Triangle coords={[[5, 5], [20, 40], [55, 40]]} />,
      body: (
        <Text>
          A triangle with one interior angle measuring more than{' '}
          <code>90°</code>. If <code>c</code> is the length of the longest side,
          then{' '}
          <code>
            a<sup>2</sup> + b<sup>2</sup> &lt; c<sup>2</sup>
          </code>, where <code>a</code> and <code>b</code> are the lengths of
          the other sides.
        </Text>
      ),
    }}
  </Slide>
);
