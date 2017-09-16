import React from 'react';
import { Text } from 'designSystem';
import { Triangle, Slide } from 'components';

export const Acute = props => (
  <Slide title="Acute Triangle" {...props}>
    {{
      media: <Triangle coords={[[15, 5], [5, 40], [55, 40]]} />,
      body: (
        <Text>
          A triangle with all interior angles measuring less than{' '}
          <code>90°</code>. If <code>c</code> is the length of the longest side,
          then{' '}
          <code>
            a<sup>2</sup> + b<sup>2</sup> > c<sup>2</sup>
          </code>, where <code>a</code> and <code>b</code> are the lengths of
          the other sides.
        </Text>
      ),
    }}
  </Slide>
);
